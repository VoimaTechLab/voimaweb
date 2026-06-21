// false = use backend (with automatic mock fallback on failure)
export const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true";

export const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api/v1";
export const ACCESS_TOKEN_KEY = "voima_access_token";
export const MOCK_ADMIN_KEY = "voima_mock_admin";
export const MOCK_CREDENTIALS = { email: "voimagh@gmail.com", password: "voimaIsAdminat26" };