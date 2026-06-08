import { Download, Send } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import PageHeader from "../components/ui/PageHeader";
import SearchInput from "../components/ui/SearchInput";
import StatCard from "../components/ui/StatCard";
import { useDebounce } from "../hooks/useDebounce";
import { subscribersService } from "../services/dataService";
import { exportToCsv } from "../utils/exportCsv";
import { fmtDate } from "../utils/format";

export default function Newsletter() {
  const [subs, setSubs] = useState([]);
  const [query, setQuery] = useState("");
  const search = useDebounce(query);

  useEffect(() => { subscribersService.list().then(setSubs); }, []);

  const filtered = useMemo(
    () => subs.filter((s) => s.email.toLowerCase().includes(search.toLowerCase())),
    [subs, search]
  );

  return (
    <div>
      <PageHeader
        title="Newsletter"
        subtitle="Manage your subscribers"
        action={
          <Button variant="secondary" onClick={() => exportToCsv("subscribers.csv", subs)}>
            <Download className="h-4 w-4" /> Export CSV
          </Button>
        }
      />

      <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-3">
        <StatCard label="Total Subscribers" value={subs.length} icon={Send} />
        <StatCard label="This Month" value={Math.floor(subs.length * 0.3)} trend={8} />
        <StatCard label="Growth Rate" value="8%" trend={8} />
      </div>

      <Card>
        <div className="border-b border-slate-100 p-3">
          <SearchInput value={query} onChange={setQuery} placeholder="Search by email…" />
        </div>
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase text-slate-400">
            <tr>
              <th className="px-5 py-3 font-medium">Email</th>
              <th className="px-5 py-3 font-medium">Subscribed</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => (
              <tr key={s.id} className="border-t border-slate-50 hover:bg-slate-50">
                <td className="px-5 py-3 text-slate-700">{s.email}</td>
                <td className="px-5 py-3 text-slate-500">{fmtDate(s.subscribedAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}