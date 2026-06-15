import { USE_MOCK } from "../config";
import { mockEvents } from "../data/mockData";
import { api } from "./apiClient";
import { safeGet, safeMutate } from "./http";

export const getEvents = (params) =>
  USE_MOCK ? Promise.resolve(mockEvents) : safeGet("/events", mockEvents, params);

export const deleteEvent = (id) =>
  USE_MOCK ? Promise.resolve({ id }) : safeMutate(api.delete(`/events/${id}`), { id });

export async function createEvent(payload, imageFile) {
  if (USE_MOCK) return { id: `e_${Date.now()}`, ...payload };
  const fd = toForm(payload, imageFile);
  return safeMutate(api.post("/events", fd), { id: `tmp_${Date.now()}`, ...payload });
}
export async function updateEvent(id, payload, imageFile) {
  if (USE_MOCK) return { id, ...payload };
  const fd = toForm(payload, imageFile);
  return safeMutate(api.put(`/events/${id}`, fd), { id, ...payload });
}
function toForm(payload, file) {
  const fd = new FormData();
  Object.entries(payload).forEach(([k, v]) => v != null && fd.append(k, v));
  if (file) fd.append("image", file);
  return fd;
}