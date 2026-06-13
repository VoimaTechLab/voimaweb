import axios from "axios";

const API = import.meta.env.VITE_API_BASE || "http://localhost:5000/api/v1";
const client = axios.create({ baseURL: API });

export async function submitContact(payload) {
  const { data } = await client.post("/contact", payload);
  return data;
}

export async function subscribeNewsletter(email, source = "website") {
  const { data } = await client.post("/newsletter", { email, source });
  return data;
}

export async function joinWaitlist(payload) {
  const { data } = await client.post("/waitlist", payload);
  return data;
}

export async function submitStory(payload, imageFile) {
  const fd = new FormData();
  Object.entries(payload).forEach(([k, v]) => v != null && fd.append(k, v));
  if (imageFile) fd.append("image", imageFile);
  const { data } = await client.post("/stories", fd);
  return data;
}