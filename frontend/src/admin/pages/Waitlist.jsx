import { Download, ListChecks } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import PageHeader from "../components/ui/PageHeader";
import SearchInput from "../components/ui/SearchInput";
import StatCard from "../components/ui/StatCard";
import { useDebounce } from "../hooks/useDebounce";
import { waitlistService } from "../services/dataService";
import { exportToCsv } from "../utils/exportCsv";
import { fmtDate } from "../utils/format";

import { roleColor } from "../utils/roleColors";


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
            <StatCard key={r} label={r} value={rows.filter((x) => x.role === r).length}
              icon={() => <span className="h-3 w-3 rounded-full" style={{ background: roleColor(r) }} />} />
          ))}
      </div>

      <Card>
        <div className="flex flex-wrap items-center gap-3 border-b border-neutral-200 p-3">
          <SearchInput value={query} onChange={setQuery} placeholder="Search name, email…" />
          <div className="flex gap-1">
            {roles.map((r) => (
              <button key={r} onClick={() => setRole(r)}
                style={role === r && r !== "all" ? { backgroundColor: roleColor(r), color: "#fff" } : undefined}
                className={`rounded-md px-2.5 py-1 text-xs font-medium ${
                  role === r ? (r === "all" ? "bg-primary-500 text-white" : "") : "text-neutral-500 hover:bg-neutral-100"
                }`}>
                {r}
              </button>
            ))}
          </div>
        </div>
        

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-xs uppercase text-neutral-400">
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
                <tr key={r.id} className="border-t border-neutral-100 hover:bg-neutral-50">
                  <td className="px-5 py-3 font-medium text-neutral-800">{r.fullName}</td>
                  <td className="px-5 py-3 text-neutral-600">{r.email}</td>
                  <td className="px-5 py-3 text-neutral-500">{r.phone}</td>
                  <td className="px-5 py-3 text-neutral-600">{r.location}</td>
                    <td className="px-5 py-3">
                      <span className="rounded-full px-3 py-1 text-xs font-medium"
                        style={{ backgroundColor: `${roleColor(r.role)}1a`, color: roleColor(r.role) }}>
                        {r.role}
                      </span>
                    </td>                  
                  <td className="px-5 py-3 text-neutral-500">{fmtDate(r.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

