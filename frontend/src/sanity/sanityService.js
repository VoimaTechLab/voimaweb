import { sanity } from "./client";
import { ABOUT_QUERY, APP_FEATURES_QUERY, APP_FEATURE_BY_SLUG_QUERY, BLOG_QUERY, CONTACT_QUERY, EVENTS_QUERY, EVENT_BY_SLUG_QUERY, GET_INVOLVED_QUERY, HOME_QUERY, MILESTONES_QUERY, MILESTONE_BY_SLUG_QUERY, POST_BY_SLUG_QUERY, TESTIMONIALS_QUERY, VOIMA_APP_QUERY, WAITLIST_QUERY } from "./queries";

const initials = (name = "") =>
  name.split(" ").filter(Boolean).map((w) => w[0]).slice(0, 2).join("").toUpperCase();

const mapPost = (p) => ({
  ...p,
  publishedAt: p.publishedAt ? p.publishedAt.slice(0, 10) : p.publishedAt || "",
  author: { ...(p.author || {}), initials: initials(p.author?.name) },
  media: { type: p.media?.type || "image", src: p.media?.src || p.image || null },
});

export async function getBlogData() {
  try {
    const items = await sanity.fetch(BLOG_QUERY);
    if (!items?.length) return null;
    const mapped = items.map(mapPost);
    return {
      featuredPost: mapped.find((p) => p.featured) || mapped[0] || null,
      posts: mapped.filter((p) => p.kind !== "community" && !p.featured),
      communityStories: mapped.filter((p) => p.kind === "community"),
    };
  } catch (e) {
    console.warn("[sanity] blog list failed → static fallback:", e.message);
    return null;
  }
}

export async function getBlogPost(slug) {
  try {
    console.log("[sanity] fetching post slug:", slug); // debug
    const p = await sanity.fetch(POST_BY_SLUG_QUERY, { slug });
    console.log("[sanity] result:", p); // debug
    return p ? mapPost(p) : null;
  } catch (e) {
    console.warn("[sanity] post fetch failed → static fallback:", e.message);
    return null;
  }
}


export async function getEventsData() {
  try {
    const items = await sanity.fetch(EVENTS_QUERY);
    if (!items?.length) return null;
    return {
      featuredEvent: items.find((e) => e.featured) || items[0] || null,
      events: items,
    };
  } catch (e) {
    console.warn("[sanity] events list failed → static fallback:", e.message);
    return null;
  }
}

export async function getEvent(slug) {
  try {
    const e = await sanity.fetch(EVENT_BY_SLUG_QUERY, { slug });
    return e || null;
  } catch (err) {
    console.warn("[sanity] event fetch failed → static fallback:", err.message);
    return null;
  }
}

export async function getMilestones() {
  try {
    const items = await sanity.fetch(MILESTONES_QUERY);
    return items?.length ? items : null;
  } catch (e) {
    console.warn("[sanity] milestones failed → static fallback:", e.message);
    return null;
  }
}

export async function getMilestone(slug) {
  try {
    const m = await sanity.fetch(MILESTONE_BY_SLUG_QUERY, { slug });
    return m || null;
  } catch (e) {
    console.warn("[sanity] milestone failed → static fallback:", e.message);
    return null;
  }
}


export async function getTestimonials() {
  try {
    const items = await sanity.fetch(TESTIMONIALS_QUERY);
    return items?.length ? items : null;
  } catch (e) {
    console.warn("[sanity] testimonials failed → static fallback:", e.message);
    return null;
  }
}

export async function getAboutData() {
  try {
    const data = await sanity.fetch(ABOUT_QUERY);
    return data || null;
  } catch (e) {
    console.warn("[sanity] about failed → static fallback:", e.message);
    return null;
  }
}


export async function getVoimaAppData() {
  try {
    const data = await sanity.fetch(VOIMA_APP_QUERY);
    return data || null;
  } catch (e) {
    console.warn("[sanity] voima app failed → static fallback:", e.message);
    return null;
  }
}

export async function getAppFeatures() {
  try { const i = await sanity.fetch(APP_FEATURES_QUERY); return i?.length ? i : null; }
  catch (e) { console.warn("[sanity] app features fallback:", e.message); return null; }
}
export async function getAppFeature(slug) {
  try { return (await sanity.fetch(APP_FEATURE_BY_SLUG_QUERY, { slug })) || null; }
  catch (e) { console.warn("[sanity] app feature fallback:", e.message); return null; }
}

export async function getContactData() {
  try {
    const data = await sanity.fetch(CONTACT_QUERY);
    return data || null;
  } catch (e) {
    console.warn("[sanity] contact failed → static fallback:", e.message);
    return null;
  }
}

export async function getWaitlistData() {
  try {
    const data = await sanity.fetch(WAITLIST_QUERY);
    return data || null;
  } catch (e) {
    console.warn("[sanity] waitlist failed → static fallback:", e.message);
    return null;
  }
}

export async function getGetInvolvedData() {
  try { return (await sanity.fetch(GET_INVOLVED_QUERY)) || null; }
  catch (e) { console.warn("[sanity] get-involved fallback:", e.message); return null; }
}

export async function getHomeData() {
  try { return (await sanity.fetch(HOME_QUERY)) || null; }
  catch (e) { console.warn("[sanity] home fallback:", e.message); return null; }
}