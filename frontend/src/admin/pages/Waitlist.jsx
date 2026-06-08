import { Download, ListChecks } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import PageHeader from "../components/ui/PageHeader";
import SearchInput from "../components/ui/SearchInput";
import StatCard from "../components/ui/StatCard";
import { useDebounce } from "../hooks/useDebounce";
import { waitlistService } from "../services/dataService";
import { exportToCsv } from "../utils/exportCsv";
import { fmtDate } from "../utils/format";

export default function Waitlist() {
  const [rows, setRows] = useState([]);
  const [role, setRole] = useState("all");
  const [query, setQuery] = useState("");
  const search = useDebounce(query);

  useEffect(() => { waitlistService.list().then(setRows); }, []);

  const roles = useMemo(() => ["all", ...new Set(rows.map((r) => r.role))], [rows]);

  const filtered = useMemo(() => {
    return rows
      .filter((r) => role === "all" || r.role === role)
      .filter((r) =>
        [r.fullName, r.email, r.location].join(" ").toLowerCase().includes(search.toLowerCase())
      );
  }, [rows, role, search]);

  return (
    <div>
      <PageHeader
        title="Waitlist"
        subtitle="Voima app early-access registrations"
        action={
          <Button variant="secondary" onClick={() => exportToCsv("waitlist.csv", rows)}>
            <Download className="h-4 w-4" /> Export CSV
          </Button>
        }
      />

      <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard label="Total" value={rows.length} icon={ListChecks} />
        {roles.filter((r) => r !== "all").slice(0, 3).map((r) => (
          <StatCard key={r} label={r} value={rows.filter((x) => x.role === r).length} />
        ))}
      </div>

      <Card>
        <div className="flex flex-wrap items-center gap-3 border-b border-slate-100 p-3">
          <SearchInput value={query} onChange={setQuery} placeholder="Search name, email…" />
          <div className="flex gap-1">
            {roles.map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`rounded-md px-2.5 py-1 text-xs font-medium ${
                  role === r ? "bg-slate-900 text-white" : "text-slate-500 hover:bg-slate-100"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-xs uppercase text-slate-400">
              <tr>
                <th className="px-5 py-3 font-medium">Name</th>
                <th className="px-5 py-3 font-medium">Email</th>
                <th className="px-5 py-3 font-medium">Phone</th>
                <th className="px-5 py-3 font-medium">Location</th>
                <th className="px-5 py-3 font-medium">Role</th>
                <th className="px-5 py-3 font-medium">Joined</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr key={r.id} className="border-t border-slate-50 hover:bg-slate-50">
                  <td className="px-5 py-3 font-medium text-slate-800">{r.fullName}</td>
                  <td className="px-5 py-3 text-slate-600">{r.email}</td>
                  <td className="px-5 py-3 text-slate-500">{r.phone}</td>
                  <td className="px-5 py-3 text-slate-600">{r.location}</td>
                  <td className="px-5 py-3"><Badge status="default">{r.role}</Badge></td>
                  <td className="px-5 py-3 text-slate-500">{fmtDate(r.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}