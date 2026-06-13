import axios from "axios";
import { ACCESS_TOKEN_KEY, API_BASE } from "../config";

export const api = axios.create({
  baseURL: API_BASE,
  withCredentials: true, // send/receive the httpOnly refresh cookie
});

// --- token helpers ---
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);
export const setAccessToken = (t) =>
  t ? localStorage.setItem(ACCESS_TOKEN_KEY, t) : localStorage.removeItem(ACCESS_TOKEN_KEY);

// --- request: attach bearer ---
api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// --- response: handle 401 with single-flight refresh ---
let isRefreshing = false;
let queue = [];

const resolveQueue = (token) => {
  queue.forEach((cb) => cb(token));
  queue = [];
};

// Optional: allow AuthContext to react to a hard logout
let onAuthFailure = () => {};
export const setAuthFailureHandler = (fn) => { onAuthFailure = fn; };

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const { config, response } = error;
    const original = config;

    // Don't try to refresh the refresh/login endpoints themselves
    const isAuthRoute =
      original?.url?.includes("/auth/refresh") ||
      original?.url?.includes("/auth/login");

    if (response?.status === 401 && !original._retry && !isAuthRoute) {
      original._retry = true;

      if (isRefreshing) {
        // wait for the in-flight refresh, then retry
        return new Promise((resolve, reject) => {
          queue.push((token) => {
            if (!token) return reject(error);
            original.headers.Authorization = `Bearer ${token}`;
            resolve(api(original));
          });
        });
      }

      isRefreshing = true;
      try {
        const { data } = await axios.post(
          `${API_BASE}/auth/refresh`,
          {},
          { withCredentials: true }
        );
        const newToken = data.data.accessToken;
        setAccessToken(newToken);
        resolveQueue(newToken);
        original.headers.Authorization = `Bearer ${newToken}`;
        return api(original);
      } catch (e) {
        resolveQueue(null);
        setAccessToken(null);
        onAuthFailure(); // tell AuthContext to clear user + redirect
        return Promise.reject(e);
      } finally {
        isRefreshing = false;
      }
    }

    // Normalize error message for the UI
    const message =
      response?.data?.message || error.message || "Something went wrong";
    return Promise.reject({ ...error, message });
  }
);