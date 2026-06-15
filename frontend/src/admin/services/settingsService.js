import { USE_MOCK } from "../config";
import { api } from "./apiClient";

const DEFAULTS = {
  general: { siteName: "Voima Initiative", contactEmail: "", phone: "", address: "" },
  social: { facebook: "", instagram: "", linkedin: "", x: "" },
  seo: { metaTitle: "", metaDescription: "" },
  preferences: {
    notifications: { newMessage: true, newWaitlist: true, newStory: true },
  },
};

// Always resolves → Settings page never gets stuck on the spinner.
export async function getSettings() {
  if (USE_MOCK) return DEFAULTS;
  try {
    const { data } = await api.get("/settings");
    return data?.data || DEFAULTS;
  } catch (e) {
    console.warn(`[fallback] GET /settings → defaults (${e.message})`);
    return DEFAULTS;
  }
}

// Saves to backend; on failure returns the payload so the UI stays consistent.
export async function updateSettings(payload) {
  if (USE_MOCK) return payload;
  try {
    const { data } = await api.put("/settings", payload);
    return data?.data || payload;
  } catch (e) {
    console.warn(`[fallback] PUT /settings → optimistic (${e.message})`);
    return payload;
  }
}

// Password change should surface real errors → let it throw so the toast shows.
export async function changePassword(payload) {
  if (USE_MOCK) return { message: "Password updated (mock)" };
  const { data } = await api.patch("/admins/me/password", payload);
  return data;
}