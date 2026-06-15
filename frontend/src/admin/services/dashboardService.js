import { USE_MOCK } from "../config";
import {
  mockActivity,
  mockEvents,
  mockGrowthSeries,
  mockMessages,
  mockStories,
  mockSubscribers, mockWaitlist,
  mockWaitlistByRole,
} from "../data/mockData";
import { api } from "./apiClient";

const mockStats = () => ({
  cards: {
    totalMessages: mockMessages.length,
    unreadMessages: mockMessages.filter((m) => m.status === "unread").length,
    totalSubscribers: mockSubscribers.length,
    totalWaitlist: mockWaitlist.length,
    totalStories: mockStories.length,
    pendingStories: mockStories.filter((s) => s.status === "pending").length,
    totalEvents: mockEvents.length,
    totalBlogPosts: 3,
    totalGalleryImages: 24,
  },
  growthSeries: mockGrowthSeries,
  waitlistByRole: mockWaitlistByRole,
  activity: mockActivity,
});

export async function getDashboardStats() {
  if (USE_MOCK) return mockStats();
  try {
    const { data } = await api.get("/dashboard/stats");
    return data?.data || mockStats();
  } catch (e) {
    console.warn("[fallback] dashboard → mock", e.message);
    return mockStats();
  }
}