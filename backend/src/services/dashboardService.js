import { prisma } from "../database/prisma.js";

const dayKey = (d) => d.toISOString().slice(5, 10); // MM-DD

const buildSeries = (records, field) => {
  const map = {};

  records.forEach((r) => {
    const key = dayKey(r[field]);
    map[key] = (map[key] || 0) + 1;
  });

  const out = [];
  for (let i = 29; i >= 0; i--) {
    const date = new Date(Date.now() - i * 86400000);
    out.push({ date: dayKey(date) });
  }

  return { out, map };
};

export const getDashboardStats = async () => {
  const since = new Date(Date.now() - 30 * 86400000);

  const now = new Date();
  const startThis = new Date(now.getFullYear(), now.getMonth(), 1);
  const startPrev = new Date(now.getFullYear(), now.getMonth() - 1, 1);

  const growth = (current, previous) =>
    previous === 0
      ? current > 0
        ? 100
        : 0
      : Math.round(((current - previous) / previous) * 100);

 const [
  totalMessages,
  unreadMessages,
  totalSubscribers,
  totalWaitlist,
  totalVolunteers,
  totalStories,
  pendingStories,
  totalEvents,
  subs30,
  wait30,
  volunteer30,
  waitlistByRoleRaw,
  activityRaw,
  subThis,
  subPrev,
  waitThis,
  waitPrev,
  volunteerThis,
  volunteerPrev,
] = await Promise.all([
    prisma.message.count(),
    prisma.message.count({
      where: { status: "unread" },
    }),

    prisma.newsletterSubscriber.count({
      where: { status: "active" },
    }),

    prisma.waitlistUser.count(),

    prisma.volunteerApplication.count(),

    prisma.story.count(),

    prisma.story.count({
      where: { status: "pending" },
    }),

    prisma.event.count(),

    prisma.newsletterSubscriber.findMany({
      where: {
        subscribedAt: { gte: since },
      },
      select: {
        subscribedAt: true,
      },
    }),

    prisma.waitlistUser.findMany({
      where: {
        createdAt: { gte: since },
      },
      select: {
        createdAt: true,
      },
    }),


    prisma.volunteerApplication.findMany({
    where: {
      createdAt: { gte: since },
    },
    select: {
      createdAt: true,
    },
  }),

    prisma.waitlistUser.groupBy({
      by: ["role"],
      _count: {
        role: true,
      },
    }),

    prisma.activityLog.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 8,
    }),

    prisma.newsletterSubscriber.count({
      where: {
        subscribedAt: {
          gte: startThis,
        },
      },
    }),

    prisma.newsletterSubscriber.count({
      where: {
        subscribedAt: {
          gte: startPrev,
          lt: startThis,
        },
      },
    }),

    prisma.waitlistUser.count({
      where: {
        createdAt: {
          gte: startThis,
        },
      },
    }),


    prisma.volunteerApplication.count({
  where: {
    createdAt: {
      gte: startThis,
    },
  },
}),

    prisma.waitlistUser.count({
      where: {
        createdAt: {
          gte: startPrev,
          lt: startThis,
        },
      },
    }),
  ]);

  prisma.volunteerApplication.count({
  where: {
    createdAt: {
      gte: startPrev,
      lt: startThis,
    },
  },
});

  const subSeries = buildSeries(subs30, "subscribedAt");
  const waitSeries = buildSeries(wait30, "createdAt");
  const volunteerSeries = buildSeries(
  volunteer30,
  "createdAt"
);

const growthSeries = subSeries.out.map((item) => ({
  date: item.date,
  subscribers: subSeries.map[item.date] || 0,
  waitlist: waitSeries.map[item.date] || 0,
  volunteers: volunteerSeries.map[item.date] || 0,
}));

  const waitlistByRole = waitlistByRoleRaw.map((item) => ({
    name: item.role || "Unspecified",
    value: item._count.role,
  }));

  const activity = activityRaw.map((item) => ({
    id: item.id,
    type: item.type,
    text: item.text,
    time: item.createdAt,
  }));

  return {
  cards: {
    totalMessages,
    unreadMessages,
    totalSubscribers,
    totalWaitlist,
    totalVolunteers,
    totalStories,
    pendingStories,
    totalEvents,

    subscriberGrowth: growth(subThis, subPrev),
    waitlistGrowth: growth(waitThis, waitPrev),
    volunteerGrowth: growth(
      volunteerThis,
      volunteerPrev
    ),
  },

    growthSeries,
    waitlistByRole,
    activity,
  };
};