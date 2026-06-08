import { USE_MOCK } from "../config";
import { mockLogin, mockLogout, mockMe } from "../data/mockAuth";
import apiClient, { setAccessToken } from "./apiClient";

export const authService = {
  async login(email, password) {
    if (USE_MOCK) return mockLogin(email, password);
    const { data } = await apiClient.post("/auth/login", { email, password });
    setAccessToken(data.accessToken);
    return data.admin;
  },

  async me() {
    if (USE_MOCK) return mockMe();
    const { data } = await apiClient.get("/auth/me");
    return data.admin;
  },

  async logout() {
    if (USE_MOCK) return mockLogout();
    try {
      await apiClient.post("/auth/logout");
    } finally {
      setAccessToken(null);
    }
  },
};