import { prisma } from "../database/prisma.js";

const dayKey = (d) => d.toISOString().slice(5, 10); // MM-DD

const buildSeries = (records, field) => {
  const map = {};
  records.forEach((r) => {
    const k = dayKey(r[field]);
    map[k] = (map[k] || 0) + 1;
  });
  // last 30 days cumulative-ish series matching mock shape { date, subscribers, waitlist }
  const out = [];
  for (let i = 29; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400000);
    out.push({ date: dayKey(d), key: d });
  }
  return { out, map };
};

export const getDashboardStats = async () => {
  const since = new Date(Date.now() - 30 * 86400000);

  const [
    totalMessages, unreadMessages,
    totalSubscribers, totalWaitlist,
    totalStories, pendingStories,
    totalEvents,
    subs30, wait30,
    waitlistByRoleRaw,
    activityRaw,
  ] = await Promise.all([
    prisma.message.count(),
    prisma.message.count({ where: { status: "unread" } }),
    prisma.newsletterSubscriber.count({ where: { status: "active" } }),
    prisma.waitlistUser.count(),
    prisma.story.count(),
    prisma.story.count({ where: { status: "pending" } }),
    prisma.event.count(),
    prisma.newsletterSubscriber.findMany({
      where: { subscribedAt: { gte: since } },
      select: { subscribedAt: true },
    }),
    prisma.waitlistUser.findMany({
      where: { createdAt: { gte: since } },
      select: { createdAt: true },
    }),
    prisma.waitlistUser.groupBy({ by: ["role"], _count: { role: true } }),
    prisma.activityLog.findMany({ orderBy: { createdAt: "desc" }, take: 8 }),
  ]);

  // growth series matching mockGrowthSeries shape
  const subSeries = buildSeries(subs30, "subscribedAt");
  const waitSeries = buildSeries(wait30, "createdAt");
  const growthSeries = subSeries.out.map((p) => ({
    date: p.date,
    subscribers: subSeries.map[p.date] || 0,
    waitlist: waitSeries.map[p.date] || 0,
  }));

  const waitlistByRole = waitlistByRoleRaw.map((r) => ({
    name: r.role || "Unspecified",
    value: r._count.role,
  }));

  const activity = activityRaw.map((a) => ({
    id: a.id,
    type: a.type,
    text: a.text,
    time: a.createdAt,
  }));

  return {
    cards: {
      totalMessages,
      unreadMessages,
      totalSubscribers,
      totalWaitlist,
      totalStories,
      pendingStories,
      totalEvents,
    },
    growthSeries,
    waitlistByRole,
    activity,
  };
};