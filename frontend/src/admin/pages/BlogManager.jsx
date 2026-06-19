import { FileText, Pencil, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import EmptyState from "../components/ui/EmptyState";
import PageHeader from "../components/ui/PageHeader";
import { blogService } from "../services/dataService";
import { fmtDate } from "../utils/format";
import { studioCreate, studioEdit } from "../utils/studio";

export default function BlogManager() {
  const [posts, setPosts] = useState([]);

  useEffect(() => { blogService.list().then(setPosts); }, []);

  const remove = async (id) => {
    if (!confirm("Delete this post?")) return;
    await blogService.remove(id);
    setPosts((p) => p.filter((x) => x.id !== id));
  };

  const togglePublish = async (p) => {
    const publish = p.status !== "published";
    await blogService.publish(p.id, publish);
    setPosts((prev) =>
      prev.map((x) => (x.id === p.id ? { ...x, status: publish ? "published" : "draft" } : x))
    );
  };

  return (
    <div>
      <PageHeader
        title="Blog"
        subtitle="Posts are edited in Sanity Studio"
        action={
          <a href={studioCreate("post")} target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-4 py-2 text-sm font-semibold text-white">
            <Plus className="h-4 w-4" /> New Post
          </a>
        }
      />

      {posts.length === 0 ? (
        <Card><EmptyState icon={FileText} title="No posts yet" subtitle="Create your first post in Studio" /></Card>
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
              <div className="flex items-center gap-1">
                <Button variant="ghost" onClick={() => togglePublish(p)}>
                  {p.status === "published" ? "Unpublish" : "Publish"}
                </Button>
                <a href={studioEdit("post", p.id)} target="_blank" rel="noreferrer"
                   className="rounded-lg p-2 text-slate-600 hover:bg-slate-100">
                  <Pencil className="h-4 w-4" />
                </a>
                <Button variant="ghost" onClick={() => remove(p.id)}>
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}