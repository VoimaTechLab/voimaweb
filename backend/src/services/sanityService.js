import { createClient } from "@sanity/client";

const projectId = process.env.SANITY_PROJECT_ID;
const client = projectId && createClient({
  projectId, dataset: process.env.SANITY_DATASET || "production",
  apiVersion: "2024-01-01", useCdn: true, token: process.env.SANITY_READ_TOKEN,
});

export const getSanityCounts = async () => {
  if (!client) return { totalBlogPosts: 0, totalGalleryImages: 0 };
  try {
    const [totalBlogPosts, totalGalleryImages] = await Promise.all([
      client.fetch(`count(*[_type == "post"])`),
      client.fetch(`count(*[_type == "gallery"])`),
    ]);
    return { totalBlogPosts: totalBlogPosts || 0, totalGalleryImages: totalGalleryImages || 0 };
  } catch (e) { console.error("sanity counts:", e.message); return { totalBlogPosts: 0, totalGalleryImages: 0 }; }
};