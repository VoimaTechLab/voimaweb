import { FileText, Pencil, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import EmptyState from "../components/ui/EmptyState";
import Modal from "../components/ui/Modal";
import PageHeader from "../components/ui/PageHeader";
import { blogService } from "../services/dataService";
import { fmtDate } from "../utils/format";

const empty = { title: "", slug: "", excerpt: "", content: "", author: "", status: "draft" };

export default function BlogManager() {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(empty);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => { blogService.list().then(setPosts); }, []);

  const openCreate = () => { setForm(empty); setEditingId(null); setOpen(true); };
  const openEdit = (p) => { setForm(p); setEditingId(p.id); setOpen(true); };

  const slugify = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  const save = async (e) => {
    e.preventDefault();
    const payload = { ...form, slug: form.slug || slugify(form.title) };
    if (editingId) {
      const updated = await blogService.update(editingId, payload);
      setPosts((p) => p.map((x) => (x.id === editingId ? updated : x)));
    } else {
      const created = await blogService.create({ ...payload, publishedAt: payload.status === "published" ? new Date().toISOString() : null });
      setPosts((p) => [created, ...p]);
    }
    setOpen(false);
  };

  const remove = async (id) => {
    if (!confirm("Delete this post?")) return;
    await blogService.remove(id);
    setPosts((p) => p.filter((x) => x.id !== id));
  };

  const togglePublish = async (p) => {
    const status = p.status === "published" ? "draft" : "published";
    const updated = await blogService.update(p.id, { status, publishedAt: status === "published" ? new Date().toISOString() : null });
    setPosts((prev) => prev.map((x) => (x.id === p.id ? updated : x)));
  };

  return (
    <div>
      <PageHeader
        title="Blog"
        subtitle="Create and manage blog posts"
        action={<Button onClick={openCreate}><Plus className="h-4 w-4" /> New Post</Button>}
      />

      {posts.length === 0 ? (
        <Card><EmptyState icon={FileText} title="No posts yet" subtitle="Create your first blog post" /></Card>
      ) : (
        <div className="grid gap-3">
          {posts.map((p) => (
            <Card key={p.id} className="flex items-center justify-between p-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-slate-900">{p.title}</h3>
                  <Badge status={p.status} />
                </div>
                <p className="mt-1 text-sm text-slate-500">{p.excerpt}</p>
                <p className="mt-1 text-xs text-slate-400">By {p.author} · {fmtDate(p.publishedAt || p.createdAt)}</p>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" onClick={() => togglePublish(p)}>{p.status === "published" ? "Unpublish" : "Publish"}</Button>
                <Button variant="ghost" onClick={() => openEdit(p)}><Pencil className="h-4 w-4" /></Button>
                <Button variant="ghost" onClick={() => remove(p.id)}><Trash2 className="h-4 w-4 text-red-500" /></Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      <Modal open={open} onClose={() => setOpen(false)} title={editingId ? "Edit Post" : "New Post"} width="max-w-2xl">
        <form onSubmit={save} className="space-y-4">
          <Field label="Title">
            <input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className={input} />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Slug (auto if empty)">
              <input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className={input} />
            </Field>
            <Field label="Author">
              <input required value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} className={input} />
            </Field>
          </div>
          <Field label="Excerpt">
            <input value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} className={input} />
          </Field>
          <Field label="Content">
            <textarea rows={6} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} className={input} />
          </Field>
          <Field label="Status">
            <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className={input}>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </Field>
          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit">{editingId ? "Save changes" : "Create post"}</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

const input = "w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400";
function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-slate-600">{label}</span>
      {children}
    </label>
  );
}