import { getDashboardStats } from "../services/dashboardService.js";
import { getSanityCounts } from "../services/sanityService.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ok } from "../utils/response.js";

export const dashboardStats = asyncHandler(async (_req, res) => {
  const [backend, sanity] = await Promise.all([
    getDashboardStats(),
    getSanityCounts(), // { totalBlogPosts, totalGalleryImages } — graceful 0s if unset
  ]);

  ok(res, {
    cards: { ...backend.cards, ...sanity },
    growthSeries: backend.growthSeries,
    waitlistByRole: backend.waitlistByRole,
    activity: backend.activity,
  });
});