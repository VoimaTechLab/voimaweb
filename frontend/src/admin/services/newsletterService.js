import { USE_MOCK } from "../config";
import { mockSubscribers } from "../data/mockData";
import { api } from "./apiClient";
import { safeGet, safeMutate } from "./http";

export const getSubscribers = (params) =>
  USE_MOCK ? Promise.resolve(mockSubscribers) : safeGet("/newsletter", mockSubscribers, params);

export const deleteSubscriber = (id) =>
  USE_MOCK ? Promise.resolve({ id }) : safeMutate(api.delete(`/newsletter/${id}`), { id });

export async function exportSubscribers() {
  if (USE_MOCK) return;
  try {
    const res = await api.get("/newsletter/export", { responseType: "blob" });
    triggerDownload(res.data, "subscribers.csv");
  } catch (e) { console.warn("export failed:", e.message); }
}
function triggerDownload(blob, name) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a"); a.href = url; a.download = name; a.click();
  URL.revokeObjectURL(url);
}