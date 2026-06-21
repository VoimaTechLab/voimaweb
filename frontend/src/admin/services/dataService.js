import { USE_MOCK } from "../config";
import {
  mockActivity,
  mockBlogPosts,
  mockEvents,
  mockGrowthSeries,
  mockMessages,
  mockStories,
  mockSubscribers, mockWaitlist,
  mockWaitlistByRole,
} from "../data/mockData";
import { api } from "./apiClient";

import { sanity } from "@/sanity/client";

/* ----------------------------- helpers ----------------------------- */
const genId = () => Math.random().toString(36).slice(2, 10);
const now = () => new Date().toISOString();

// GET that never throws → returns backend data or fallback
async function getList(url, fallback, params) {
  if (USE_MOCK) return fallback;
  try {
    const { data } = await api.get(url, { params });
    return Array.isArray(data?.data) ? data.data : fallback;
  } catch (e) {
    console.warn(`[fallback] GET ${url} → mock (${e.message})`);
    return fallback;
  }
}

// Mutation that never throws → returns server object or optimistic merge
async function mutate(promiseFactory, optimistic) {
  if (USE_MOCK) return optimistic;
  try {
    const { data } = await promiseFactory();
    const res = data?.data ?? {};
    // merge so the UI always gets a full object to render
    return { ...optimistic, ...res };
  } catch (e) {
    console.warn(`[fallback] mutation → optimistic (${e.message})`);
    return optimistic;
  }
}

/* ----------------------------- messages ----------------------------- */
export const messagesService = {
  list: () => getList("/contact", mockMessages),
  update: (id, patch) =>
    mutate(() => api.patch(`/contact/${id}`, patch), { id, ...patch }),
  remove: (id) => mutate(() => api.delete(`/contact/${id}`), { id }),
  markRead: (id) =>
    mutate(() => api.patch(`/contact/${id}`, { status: "read" }), { id, status: "read" }),
};

/* --------------------------- subscribers ---------------------------- */
export const subscribersService = {
  list: () => getList("/newsletter", mockSubscribers),
  remove: (id) => mutate(() => api.delete(`/newsletter/${id}`), { id }),
  broadcast: (payload) =>
    USE_MOCK ? Promise.resolve({ sent: mockSubscribers.length })
             : mutate(() => api.post("/newsletter/broadcast", payload), { sent: 0 }),
};

/* --------------------------- waitlist ---------------------------- */
export const waitlistService = {
  list: () => getList("/waitlist", mockWaitlist),
  remove: (id) => mutate(() => api.delete(`/waitlist/${id}`), { id }),
  broadcast: (payload) =>
    USE_MOCK ? Promise.resolve({ sent: mockWaitlist.length })
             : mutate(() => api.post("/waitlist/broadcast", payload), { sent: 0 }),
};

/* ----------------------------- stories ------------------------------ */
export const storiesService = {
  list: () => getList("/stories", mockStories),
  // Stories.jsx calls update(id, { status })
  update: (id, patch) =>
    mutate(() => api.patch(`/stories/${id}/review`, { status: patch.status }), { id, ...patch }),
  remove: (id) => mutate(() => api.delete(`/stories/${id}`), { id }),
};

/* ----- blog (Sanity-managed via backend proxy) ----- */
const BLOG_GROQ = `*[_type=="post"] | order(_createdAt desc){
  "id": _id, title, "slug": slug.current, excerpt,
  "author": author.name,
  "status": select(defined(publishedAt) && publishedAt <= now() => "published", "draft"),
  publishedAt, "createdAt": _createdAt
}`;

export const blogService = {
  list: () =>
    USE_MOCK ? Promise.resolve(mockBlogPosts)
             : sanity.fetch(BLOG_GROQ).catch(() => mockBlogPosts),
  remove: (id) => mutate(() => api.delete(`/blog/${id}`), { id }),
  publish: (id, publish) =>
    mutate(() => api.patch(`/blog/${id}/publish`, { publish }),
      { id, status: publish ? "published" : "draft" }),
};

/* ----- events (read Sanity, delete via proxy; edit in Studio) ----- */
const EVENTS_GROQ = `*[_type=="event"] | order(_createdAt desc){
  "id": _id, title, "slug": slug.current, category, date, location, featured,
  description, "image": coverImage.asset->url, "status": "published"
}`;

export const eventsService = {
  list: () =>
    USE_MOCK ? Promise.resolve(mockEvents)
             : sanity.fetch(EVENTS_GROQ).catch(() => mockEvents),
  remove: (id) =>
    USE_MOCK ? Promise.resolve({ id })
             : mutate(() => api.delete(`/cms/events/${id}`), { id }),
};

/* ----------------------------- dashboard ---------------------------- */
const mockStats = () => ({
  cards: {
    totalMessages: mockMessages.length,
    unreadMessages: mockMessages.filter((m) => m.status === "unread").length,
    totalSubscribers: mockSubscribers.length,
    totalWaitlist: mockWaitlist.length,
    totalStories: mockStories.length,
    pendingStories: mockStories.filter((s) => s.status === "pending").length,
    totalEvents: mockEvents.length,
    totalBlogPosts: mockBlogPosts.length,
    totalGalleryImages: 24,
  },
  growthSeries: mockGrowthSeries,
  waitlistByRole: mockWaitlistByRole,
  activity: mockActivity,
});

export const dashboardService = {
  stats: async () => {
    if (USE_MOCK) return mockStats();
    try {
      const { data } = await api.get("/dashboard/stats");
      return data?.data || mockStats();
    } catch (e) {
      console.warn(`[fallback] dashboard → mock (${e.message})`);
      return mockStats();
    }
  },
};

/* ----------------------------- settings ----------------------------- */
const DEFAULT_SETTINGS = {
  general: { siteName: "Voima Initiative", contactEmail: "", phone: "", address: "" },
  social: { facebook: "", instagram: "", linkedin: "", x: "" },
  seo: { metaTitle: "", metaDescription: "" },
  preferences: { notifications: { newMessage: true, newWaitlist: true, newStory: true } },
};

export const settingsService = {
  get: async () => {
    if (USE_MOCK) return DEFAULT_SETTINGS;
    try {
      const { data } = await api.get("/settings");
      return data?.data || DEFAULT_SETTINGS;
    } catch (e) {
      console.warn(`[fallback] settings → defaults (${e.message})`);
      return DEFAULT_SETTINGS;
    }
  },
  update: (payload) =>
    mutate(() => api.put("/settings", payload), payload),
  changePassword: (payload) =>
    mutate(() => api.patch("/admins/me/password", payload), { message: "Password updated" }),
};