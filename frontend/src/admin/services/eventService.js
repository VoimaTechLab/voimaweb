import { USE_MOCK } from "../config";
import { mockEvents } from "../data/mock";
import { api } from "./apiClient";

export async function getEvents(params = {}) {
  if (USE_MOCK) return Promise.resolve(mockEvents);
  const { data } = await api.get("/events", { params });
  return data.data;
}
export async function createEvent(payload, imageFile) {
  if (USE_MOCK) return Promise.resolve({ id: `e_${Date.now()}`, ...payload });
  const fd = buildEventForm(payload, imageFile);
  const { data } = await api.post("/events", fd);
  return data.data;
}
export async function updateEvent(id, payload, imageFile) {
  if (USE_MOCK) return Promise.resolve({ id, ...payload });
  const fd = buildEventForm(payload, imageFile);
  const { data } = await api.put(`/events/${id}`, fd);
  return data.data;
}
export async function deleteEvent(id) {
  if (USE_MOCK) return Promise.resolve({ id });
  const { data } = await api.delete(`/events/${id}`);
  return data.data;
}

function buildEventForm(payload, imageFile) {
  const fd = new FormData();
  Object.entries(payload).forEach(([k, v]) => v != null && fd.append(k, v));
  if (imageFile) fd.append("image", imageFile);
  return fd;
}