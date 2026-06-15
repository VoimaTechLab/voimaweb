import { api } from "./apiClient";

// GET that NEVER throws: returns backend data, or the fallback on any error.
export async function safeGet(url, fallback, params) {
  try {
    const { data } = await api.get(url, { params });
    return data?.data ?? fallback;
  } catch (e) {
    console.warn(`[fallback] GET ${url} → mock (${e.message})`);
    return fallback;
  }
}

// Mutations: try backend, fall back to optimistic value
export async function safeMutate(promise, fallback) {
  try {
    const { data } = await promise;
    return data?.data ?? fallback;
  } catch (e) {
    console.warn(`[fallback] mutation → optimistic (${e.message})`);
    return fallback;
  }
}