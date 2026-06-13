import { USE_MOCK } from "../config";
//import { api } from "./apiClient"; // your axios instance with interceptors

const MOCK_SETTINGS = {
  general: { siteName: "Voima Initiative", contactEmail: "hello@voima.org", phone: "", address: "" },
  social: { facebook: "", instagram: "", linkedin: "", x: "" },
  seo: { metaTitle: "Voima Initiative", metaDescription: "" },
  preferences: { notifications: { newMessage: true, newWaitlist: true, newStory: true } },
};

export async function getSettings() {
  if (USE_MOCK) return new Promise((r) => setTimeout(() => r(MOCK_SETTINGS), 300));
  const { data } = await api.get("/settings");
  return data.data;
}

export async function updateSettings(payload) {
  if (USE_MOCK) return new Promise((r) => setTimeout(() => r(payload), 300));
  const { data } = await api.put("/settings", payload);
  return data.data;
}

export async function changePassword(payload) {
  if (USE_MOCK) return new Promise((r) => setTimeout(r, 300));
  const { data } = await api.patch("/admins/me/password", payload);
  return data;
}