import { USE_MOCK } from "../config";
import { api } from "./apiClient";

export async function getGallery() {
  if (USE_MOCK) return [{ id: "g1", title: "Outreach", images: [] }];
  const { data } = await api.get("/gallery");
  return data.data;
}

export async function uploadImage({ galleryId, title, category }, file) {
  if (USE_MOCK) return { id: galleryId || "g_new" };
  const fd = new FormData();
  if (galleryId) fd.append("galleryId", galleryId);
  if (title) fd.append("title", title);
  if (category) fd.append("category", category);
  fd.append("image", file);
  const { data } = await api.post("/gallery", fd);
  return data.data;
}

export async function deleteImage(galleryId, key) {
  if (USE_MOCK) return { ok: true };
  const { data } = await api.delete("/gallery/image", { data: { galleryId, key } });
  return data.data;
}