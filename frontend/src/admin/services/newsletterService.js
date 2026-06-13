import { USE_MOCK } from "../config";
import { mockSubscribers } from "../data/mock";
import { api } from "./apiClient";

export async function getSubscribers(params = {}) {
  if (USE_MOCK) return Promise.resolve(mockSubscribers);
  const { data } = await api.get("/newsletter", { params });
  return data.data;
}
export async function deleteSubscriber(id) {
  if (USE_MOCK) return Promise.resolve({ id });
  const { data } = await api.delete(`/newsletter/${id}`);
  return data.data;
}
export async function exportSubscribers() {
  if (USE_MOCK) return;
  const res = await api.get("/newsletter/export", { responseType: "blob" });
  downloadBlob(res.data, "subscribers.csv");
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}