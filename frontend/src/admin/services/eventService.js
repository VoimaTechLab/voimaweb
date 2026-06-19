import { sanity } from "@/sanity/client";
import { USE_MOCK } from "../config";
import { mockEvents } from "../data/mockData";
import { api } from "./apiClient";
import { safeMutate } from "./http";

const EVENTS_GROQ = `*[_type=="event"] | order(_createdAt desc){
  "id": _id, title, "slug": slug.current, category, date, location, featured,
  "image": coverImage.asset->url, "createdAt": _createdAt,
  "status": "published"
}`;

export async function getEvents() {
  if (USE_MOCK) return mockEvents;
  try { return await sanity.fetch(EVENTS_GROQ); }
  catch { return mockEvents; }
}

export const deleteEvent = (id) =>
  USE_MOCK ? Promise.resolve({ id }) : safeMutate(api.delete(`/cms/events/${id}`), { id });

// create/update now happen in Sanity Studio (deep-link) — no API needed