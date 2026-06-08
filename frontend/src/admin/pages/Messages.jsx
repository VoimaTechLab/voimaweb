import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import EmptyState from "../components/ui/EmptyState";
import PageHeader from "../components/ui/PageHeader";
import SearchInput from "../components/ui/SearchInput";
import { useDebounce } from "../hooks/useDebounce";
import { messagesService } from "../services/dataService";
import { fmtRelative } from "../utils/format";

const FILTERS = ["all", "unread", "read", "replied"];

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const search = useDebounce(query);

  useEffect(() => {
    messagesService.list().then((data) => {
      setMessages(data);
      setSelected(data[0] || null);
    });
  }, []);

  const filtered = useMemo(() => {
    return messages
      .filter((m) => filter === "all" || m.status === filter)
      .filter((m) =>
        [m.name, m.email, m.subject].join(" ").toLowerCase().includes(search.toLowerCase())
      );
  }, [messages, filter, search]);

  const updateStatus = async (id, status) => {
    const updated = await messagesService.update(id, { status });
    setMessages((prev) => prev.map((m) => (m.id === id ? updated : m)));
    setSelected((s) => (s?.id === id ? updated : s));
  };

  const openMessage = (m) => {
    setSelected(m);
    if (m.status === "unread") updateStatus(m.id, "read");
  };

  return (
    <div>
      <PageHeader title="Messages" subtitle="Contact form submissions" />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[360px_1fr]">
        {/* List */}
        <Card className="flex flex-col overflow-hidden">
          <div className="space-y-3 border-b border-slate-100 p-3">
            <SearchInput value={query} onChange={setQuery} placeholder="Search messages…" />
            <div className="flex gap-1">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-md px-2.5 py-1 text-xs font-medium capitalize ${
                    filter === f ? "bg-slate-900 text-white" : "text-slate-500 hover:bg-slate-100"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="max-h-[60vh] overflow-y-auto">
            {filtered.length === 0 ? (
              <EmptyState icon={Mail} title="No messages" />
            ) : (
              filtered.map((m) => (
                <button
                  key={m.id}
                  onClick={() => openMessage(m)}
                  className={`flex w-full flex-col gap-1 border-b border-slate-50 p-4 text-left hover:bg-slate-50 ${
                    selected?.id === m.id ? "bg-slate-50" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${m.status === "unread" ? "font-semibold text-slate-900" : "text-slate-700"}`}>
                      {m.name}
                    </span>
                    <span className="text-xs text-slate-400">{fmtRelative(m.createdAt)}</span>
                  </div>
                  <span className="truncate text-sm text-slate-500">{m.subject}</span>
                  <Badge status={m.status} />
                </button>
              ))
            )}
          </div>
        </Card>

        {/* Detail */}
        <Card className="p-6">
          {selected ? (
            <motion.div key={selected.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">{selected.subject}</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    {selected.name} · <a href={`mailto:${selected.email}`} className="text-blue-600">{selected.email}</a>
                  </p>
                </div>
                <Badge status={selected.status} />
              </div>

              <p className="mt-6 whitespace-pre-wrap leading-relaxed text-slate-700">{selected.message}</p>

              <div className="mt-8 flex gap-2 border-t border-slate-100 pt-5">
                <Button variant="secondary" onClick={() => updateStatus(selected.id, "read")}>Mark read</Button>
                <Button onClick={() => updateStatus(selected.id, "replied")}>Mark replied</Button>
                <Button variant="ghost" onClick={() => (window.location.href = `mailto:${selected.email}`)}>Reply via email</Button>
              </div>
            </motion.div>
          ) : (
            <EmptyState icon={Mail} title="Select a message" />
          )}
        </Card>
      </div>
    </div>
  );
}