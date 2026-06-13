import { USE_MOCK } from "../config";
import * as mock from "../data/mockData";

const delay = (ms) => new Promise((r) => setTimeout(r, ms));
const clone = (x) => JSON.parse(JSON.stringify(x));

// Simple in-memory CRUD over mock arrays (resets on refresh — fine for now)
function makeService(seed) {
  let store = clone(seed);
  return {
    async list() {
      if (USE_MOCK) { await delay(250); return clone(store); }
    },
    async create(item) {
      if (USE_MOCK) {
        await delay(200);
        const created = { id: `id_${Date.now()}`, createdAt: new Date().toISOString(), ...item };
        store = [created, ...store];
        return created;
      }
    },
    async update(id, patch) {
      if (USE_MOCK) {
        await delay(200);
        store = store.map((x) => (x.id === id ? { ...x, ...patch } : x));
        return store.find((x) => x.id === id);
      }
    },
    async remove(id) {
      if (USE_MOCK) { await delay(200); store = store.filter((x) => x.id !== id); return true; }
    },
  };
}

export const messagesService = makeService(mock.mockMessages);
export const subscribersService = makeService(mock.mockSubscribers);
export const waitlistService = makeService(mock.mockWaitlist);
export const blogService = makeService(mock.mockBlogPosts);
export const eventsService = makeService(mock.mockEvents);
export const storiesService = makeService(mock.mockStories); 