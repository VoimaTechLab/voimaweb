import { USE_MOCK } from "../config";
import { mockMessages } from "../data/mock"; // existing mock file
import { api } from "./apiClient";

export async function getMessages(params = {}) {
  if (USE_MOCK) return Promise.resolve(mockMessages);
  const { data } = await api.get("/contact", { params });
  return data.data; // array, matches mockMessages shape
}

export async function updateMessageStatus(id, status) {
  if (USE_MOCK) return Promise.resolve({ id, status });
  const { data } = await api.patch(`/contact/${id}`, { status });
  return data.data;
}

export async function deleteMessage(id) {
  if (USE_MOCK) return Promise.resolve({ id });
  const { data } = await api.delete(`/contact/${id}`);
  return data.data;
}