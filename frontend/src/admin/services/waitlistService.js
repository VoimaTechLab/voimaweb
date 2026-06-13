import { USE_MOCK } from "../config";
import { mockWaitlist } from "../data/mock";
import { api } from "./apiClient";

export async function getWaitlist(params = {}) {
  if (USE_MOCK) return Promise.resolve(mockWaitlist);
  const { data } = await api.get("/waitlist", { params });
  return data.data;
}
export async function deleteWaitlistUser(id) {
  if (USE_MOCK) return Promise.resolve({ id });
  const { data } = await api.delete(`/waitlist/${id}`);
  return data.data;
}
export async function exportWaitlist() {
  if (USE_MOCK) return;
  const res = await api.get("/waitlist/export", { responseType: "blob" });
  const url = URL.createObjectURL(res.data);
  const a = document.createElement("a");
  a.href = url; a.download = "waitlist.csv"; a.click();
  URL.revokeObjectURL(url);
}