import { USE_MOCK } from "../config";
import {
  mockActivity,
  mockEvents,
  mockGrowthSeries,
  mockMessages,
  mockStories,
  mockSubscribers, mockWaitlist,
  mockWaitlistByRole,
} from "../data/mock";
import { api } from "./apiClient";

export async function getDashboardStats() {
  if (USE_MOCK) {
    return {
      cards: {
        totalMessages: mockMessages.length,
        unreadMessages: mockMessages.filter((m) => m.status === "unread").length,
        totalSubscribers: mockSubscribers.length,
        totalWaitlist: mockWaitlist.length,
        totalStories: mockStories.length,
        pendingStories: mockStories.filter((s) => s.status === "pending").length,
        totalEvents: mockEvents.length,
        totalBlogPosts: 3,        // from Sanity in real mode
        totalGalleryImages: 24,   // from Sanity in real mode
      },
      growthSeries: mockGrowthSeries,
      waitlistByRole: mockWaitlistByRole,
      activity: mockActivity,
    };
  }
  const { data } = await api.get("/dashboard/stats");
  return data.data;
}