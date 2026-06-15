import { Calendar, FileText, ListChecks, Mail, MessageSquare, Send } from "lucide-react";
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
  XAxis,
  YAxis,
} from "recharts";

import Card from "../components/ui/Card";
import PageHeader from "../components/ui/PageHeader";
import StatCard from "../components/ui/StatCard";


import { useResource } from "../hooks/useResource";
import { getDashboardStats } from "../services/dashboardService";
import { fmtRelative } from "../utils/format";

const PIE_COLORS = ["#BC1D26", "#0000ff", "#800080", "#ffff00"];


export default function Dashboard() {
  const {
    data: stats,
    loading,
  } = useResource(getDashboardStats, null);

  if (loading) {
    return (
      <div className="text-neutral-400">
        Loading analytics...
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="text-neutral-400">
        No analytics available.
      </div>
    );
  }

  const cards = [
    {
      label: "Messages",
      value: stats.cards.totalMessages,
      icon: Mail,
      trend: 12,
    },
    {
      label: "Subscribers",
      value: stats.cards.totalSubscribers,
      icon: Send,
      trend: 8,
    },
    {
      label: "Waitlist",
      value: stats.cards.totalWaitlist,
      icon: ListChecks,
      trend: 23,
    },
    {
      label: "Blog Posts",
      value: stats.cards.totalBlogPosts,
      icon: FileText,
      trend: 4,
    },
    {
      label: "Events",
      value: stats.cards.totalEvents,
      icon: Calendar,
      trend: -2,
    },
    {
      label: "Pending Stories",
      value: stats.cards.pendingStories,
      icon: MessageSquare,
      trend: 15,
    },
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
          <h3 className="mb-4 font-medium text-neutral-900">Growth (last 30 days)</h3>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={stats.growthSeries}>
              <defs>
                <linearGradient id="subs" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#BC1D26" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#BC1D26" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="wait" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1D9E75" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#1D9E75" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#94a3b8" }} interval={4} />
              <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} />
              <Tooltip />
              <Area type="monotone" dataKey="subscribers" stroke="#BC1D26" fill="url(#subs)" strokeWidth={2} />
              <Area type="monotone" dataKey="waitlist" stroke="#1D9E75" fill="url(#wait)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Waitlist by role pie */}
        <Card className="p-5">
          <h3 className="mb-4 font-medium text-neutral-900">Waitlist by Role</h3>
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
                <span className="flex items-center gap-2 text-neutral-600">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: PIE_COLORS[i] }} />
                  {r.name}
                </span>
                <span className="font-medium text-neutral-900">{r.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Bar + Activity */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="p-5 lg:col-span-2">
          <h3 className="mb-4 font-medium text-neutral-900">Weekly Signups</h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={stats.growthSeries.slice(-7)}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#94a3b8" }} />
              <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} />
              <Tooltip />
              <Bar dataKey="subscribers" fill="#BC1D26" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-5">
          <h3 className="mb-4 font-medium text-neutral-900">Recent Activity</h3>
          <ul className="space-y-4">
            {stats.activity.map((a) => (
              <li key={a.id} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-neutral-300" />
                <div>
                  <p className="text-sm text-neutral-700">{a.text}</p>
                  <p className="text-xs text-neutral-400">{fmtRelative(a.time)}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}