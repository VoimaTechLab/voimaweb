import { USE_MOCK } from "../config";
import { mockWaitlist } from "../data/mockData";
import { api } from "./apiClient";
import { safeGet, safeMutate } from "./http";

export const getWaitlist = (params) =>
  USE_MOCK ? Promise.resolve(mockWaitlist) : safeGet("/waitlist", mockWaitlist, params);

export const deleteWaitlistUser = (id) =>
  USE_MOCK ? Promise.resolve({ id }) : safeMutate(api.delete(`/waitlist/${id}`), { id });

export async function exportWaitlist() {
  if (USE_MOCK) return;
  try {
    const res = await api.get("/waitlist/export", { responseType: "blob" });
    const url = URL.createObjectURL(res.data);
    const a = document.createElement("a"); a.href = url; a.download = "waitlist.csv"; a.click();
    URL.revokeObjectURL(url);
  } catch (e) { console.warn("export failed:", e.message); }
}