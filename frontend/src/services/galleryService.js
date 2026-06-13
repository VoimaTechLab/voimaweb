import { sanity, urlFor } from "@/services/sanityClient";
import { USE_MOCK } from "../config";

export async function getGallery() {
  if (USE_MOCK)
    return [{ id: "g1", title: "Outreach", images: [] }];
  const query = `*[_type == "gallery"] | order(_createdAt desc){
    "id": _id, title, images
  }`;
  const data = await sanity.fetch(query);
  // resolve image URLs
  return data.map((g) => ({
    ...g,
    images: (g.images || []).map((img) => urlFor(img).width(800).url()),
  }));
}