// Flip this single flag to switch the entire dashboard to the live backend.
export const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true";

export const API_BASE =
  import.meta.env.VITE_API_BASE || "http://localhost:5000/api/v1";

// localStorage keys — MUST match what your app already uses
export const ACCESS_TOKEN_KEY = "voima_access_token";
export const MOCK_ADMIN_KEY = "voima_mock_admin";

// Kept for mock mode
export const MOCK_CREDENTIALS = {
  email: "admin@voima.org",
  password: "voima123",
};