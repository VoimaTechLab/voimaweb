import { USE_MOCK } from "../config";
import { mockStories } from "../data/mock";
import { api } from "./apiClient";

export async function getStories(params = {}) {
  if (USE_MOCK) return Promise.resolve(mockStories);
  const { data } = await api.get("/stories", { params });
  return data.data;
}
export async function reviewStory(id, status) {
  if (USE_MOCK) return Promise.resolve({ id, status });
  const { data } = await api.patch(`/stories/${id}/review`, { status });
  return data.data;
}
export async function deleteStory(id) {
  if (USE_MOCK) return Promise.resolve({ id });
  const { data } = await api.delete(`/stories/${id}`);
  return data.data;
}