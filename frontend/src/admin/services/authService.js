import { MOCK_ADMIN_KEY, MOCK_CREDENTIALS, USE_MOCK } from "../config";
import { api, setAccessToken } from "./apiClient";

// ----- MOCK (your existing behavior) -----
const delay = (ms) => new Promise((r) => setTimeout(r, ms));
const MOCK_ADMIN = {
  id: "admin_1",
  name: "Emmanuel Dey",
  email: MOCK_CREDENTIALS.email,
  role: "SUPER_ADMIN",
};

async function mockLogin(email, password) {
  await delay(500);
  if (email === MOCK_CREDENTIALS.email && password === MOCK_CREDENTIALS.password) {
    localStorage.setItem(MOCK_ADMIN_KEY, JSON.stringify(MOCK_ADMIN));
    setAccessToken("mock-token");
    return MOCK_ADMIN;
  }
  throw { message: "Invalid email or password" };
}
async function mockMe() {
  const raw = localStorage.getItem(MOCK_ADMIN_KEY);
  if (!raw) throw { message: "No session" };
  return JSON.parse(raw);
}
async function mockLogout() {
  localStorage.removeItem(MOCK_ADMIN_KEY);
  setAccessToken(null);
}

// ----- REAL -----
export async function login(email, password) {
  if (USE_MOCK) return mockLogin(email, password);
  const { data } = await api.post("/auth/login", { email, password });
  setAccessToken(data.data.accessToken);
  return data.data.admin; // { id, name, email, role }
}

export async function fetchMe() {
  if (USE_MOCK) return mockMe();
  const { data } = await api.get("/auth/me");
  return data.data.admin;
}

export async function logout() {
  if (USE_MOCK) return mockLogout();
  try { await api.post("/auth/logout"); } catch {}
  setAccessToken(null);
}

// Used on app boot to restore a session via the refresh cookie
export async function bootstrapSession() {
  if (USE_MOCK) {
    try { return await mockMe(); } catch { return null; }
  }
  try {
    const { data } = await api.post("/auth/refresh");
    setAccessToken(data.data.accessToken);
    return data.data.admin;
  } catch {
    return null;
  }
}