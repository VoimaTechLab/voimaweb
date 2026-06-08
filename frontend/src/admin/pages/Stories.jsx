import { Check, MessageSquare, X } from "lucide-react";
import { useEffect, useState } from "react";

import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import EmptyState from "../components/ui/EmptyState";
import PageHeader from "../components/ui/PageHeader";
import { storiesService } from "../services/dataService";
import { fmtDate } from "../utils/format";

const FILTERS = ["all", "pending", "approved", "rejected"];

export default function Stories() {
  const [stories, setStories] = useState([]);
  const [filter, setFilter] = useState("pending");

  useEffect(() => { storiesService.list().then(setStories); }, []);

  const setStatus = async (id, status) => {
    const updated = await storiesService.update(id, { status });
    setStories((prev) => prev.map((s) => (s.id === id ? updated : s)));
  };

  const filtered = stories.filter((s) => filter === "all" || s.status === filter);

  return (
    <div>
      <PageHeader title="Community Stories" subtitle="Review and moderate submissions" />

      <div className="mb-4 flex gap-1">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-md px-3 py-1.5 text-sm font-medium capitalize ${
              filter === f ? "bg-slate-900 text-white" : "text-slate-500 hover:bg-slate-100"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <Card><EmptyState icon={MessageSquare} title="No stories here" /></Card>
      ) : (
        <div className="grid gap-3">
          {filtered.map((s) => (
            <Card key={s.id} className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-slate-900">{s.contributorName}</h3>
                  <p className="text-xs text-slate-400">{s.location} · {fmtDate(s.createdAt)}</p>
                </div>
                <Badge status={s.status} />
              </div>
              <p className="mt-3 leading-relaxed text-slate-700">{s.story}</p>

              {s.status === "pending" && (
                <div className="mt-4 flex gap-2 border-t border-slate-100 pt-4">
                  <Button onClick={() => setStatus(s.id, "approved")}>
                    <Check className="h-4 w-4" /> Approve
                  </Button>
                  <Button variant="danger" onClick={() => setStatus(s.id, "rejected")}>
                    <X className="h-4 w-4" /> Reject
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}