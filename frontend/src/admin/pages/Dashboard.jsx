import { Calendar, FileText, ListChecks, Mail, MessageSquare, Send } from "lucide-react";
import { useEffect, useState } from "react";
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis, YAxis,
} from "recharts";

import Card from "../components/ui/Card";
import PageHeader from "../components/ui/PageHeader";
import StatCard from "../components/ui/StatCard";
import { dashboardService } from "../services/dashboardService";
import { fmtRelative } from "../utils/format";

const PIE_COLORS = ["#0f172a", "#475569", "#94a3b8", "#cbd5e1"];

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    dashboardService.getStats().then(setStats);
  }, []);

  if (!stats) return <div className="text-slate-400">Loading analytics…</div>;

  const cards = [
    { label: "Messages", value: stats.messages, icon: Mail, trend: 12 },
    { label: "Subscribers", value: stats.subscribers, icon: Send, trend: 8 },
    { label: "Waitlist", value: stats.waitlist, icon: ListChecks, trend: 23 },
    { label: "Blog Posts", value: stats.blogPosts, icon: FileText, trend: 4 },
    { label: "Events", value: stats.events, icon: Calendar, trend: -2 },
    { label: "Pending Stories", value: stats.pendingStories, icon: MessageSquare, trend: 15 },
  ];

  return (
    <div>
      <PageHeader title="Dashboard" subtitle="Overview of your platform activity" />

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {cards.map((c, i) => (
          <StatCard key={c.label} {...c} index={i} />
        ))}
      </div>

      {/* Charts row */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Growth area chart */}
        <Card className="p-5 lg:col-span-2">
          <h3 className="mb-4 font-medium text-slate-900">Growth (last 30 days)</h3>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={stats.growthSeries}>
              <defs>
                <linearGradient id="subs" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0f172a" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#0f172a" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="wait" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#94a3b8" }} interval={4} />
              <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} />
              <Tooltip />
              <Area type="monotone" dataKey="subscribers" stroke="#0f172a" fill="url(#subs)" strokeWidth={2} />
              <Area type="monotone" dataKey="waitlist" stroke="#3b82f6" fill="url(#wait)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Waitlist by role pie */}
        <Card className="p-5">
          <h3 className="mb-4 font-medium text-slate-900">Waitlist by Role</h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie data={stats.waitlistByRole} dataKey="value" nameKey="name" innerRadius={55} outerRadius={85} paddingAngle={3}>
                {stats.waitlistByRole.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-2 space-y-1.5">
            {stats.waitlistByRole.map((r, i) => (
              <div key={r.name} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-slate-600">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: PIE_COLORS[i] }} />
                  {r.name}
                </span>
                <span className="font-medium text-slate-900">{r.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Bar + Activity */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="p-5 lg:col-span-2">
          <h3 className="mb-4 font-medium text-slate-900">Weekly Signups</h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={stats.growthSeries.slice(-7)}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#94a3b8" }} />
              <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} />
              <Tooltip />
              <Bar dataKey="subscribers" fill="#0f172a" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-5">
          <h3 className="mb-4 font-medium text-slate-900">Recent Activity</h3>
          <ul className="space-y-4">
            {stats.activity.map((a) => (
              <li key={a.id} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-slate-300" />
                <div>
                  <p className="text-sm text-slate-700">{a.text}</p>
                  <p className="text-xs text-slate-400">{fmtRelative(a.time)}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}