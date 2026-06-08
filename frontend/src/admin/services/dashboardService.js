import { USE_MOCK } from "../config";
import * as mock from "../data/mockData";

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

export const dashboardService = {
  async getStats() {
    if (USE_MOCK) {
      await delay(300);
      return {
        messages: mock.mockMessages.length,
        unreadMessages: mock.mockMessages.filter((m) => m.status === "unread").length,
        subscribers: mock.mockSubscribers.length,
        waitlist: mock.mockWaitlist.length,
        blogPosts: mock.mockBlogPosts.length,
        events: mock.mockEvents.length,
        pendingStories: mock.mockStories.filter((s) => s.status === "pending").length,
        growthSeries: mock.mockGrowthSeries,
        waitlistByRole: mock.mockWaitlistByRole,
        activity: mock.mockActivity,
      };
    }
    // const { data } = await apiClient.get("/dashboard/stats");
    // return data;
  },
};