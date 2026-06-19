import { USE_MOCK } from "../config";
import { mockBlogPosts } from "../data/mockData";
import { api } from "./apiClient";
// READS can use your existing Sanity client directly:
import { sanity } from "@/sanity/client";

export async function getBlogPosts() {
  if (USE_MOCK) return mockBlogPosts;
  // Fast CDN read for the list
  return sanity.fetch(`*[_type == "post"] | order(_createdAt desc){
    "id": _id, title, "slug": slug.current, excerpt,
    "author": author->name,
    "status": select(defined(publishedAt) && publishedAt <= now() => "published", "draft"),
    "coverImage": coverImage.asset->url, publishedAt, "createdAt": _createdAt
  }`);
}

export async function getAuthors() {
  if (USE_MOCK) return [{ id: "a1", name: "Amina Yusuf" }];
  const { data } = await api.get("/blog/authors");
  return data.data;
}

// WRITES go through the backend proxy (token stays server-side)
export async function createPost(payload, coverFile) {
  if (USE_MOCK) return { id: `b_${Date.now()}` };
  const fd = buildPostForm(payload, coverFile);
  const { data } = await api.post("/blog", fd);
  return data.data;
}

export async function updatePost(id, payload, coverFile) {
  if (USE_MOCK) return { id };
  const fd = buildPostForm(payload, coverFile);
  const { data } = await api.put(`/blog/${id}`, fd);
  return data.data;
}

export async function publishPost(id, publish) {
  if (USE_MOCK) return { id, published: publish };
  const { data } = await api.patch(`/blog/${id}/publish`, { publish });
  return data.data;
}

export async function deletePost(id) {
  if (USE_MOCK) return { id };
  const { data } = await api.delete(`/blog/${id}`);
  return data.data;
}

function buildPostForm(payload, coverFile) {
  const fd = new FormData();
  Object.entries(payload).forEach(([k, v]) => {
    if (v == null) return;
    fd.append(k, typeof v === "object" ? JSON.stringify(v) : v);
  });
  if (coverFile) fd.append("coverImage", coverFile);
  return fd;
}