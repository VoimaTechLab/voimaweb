import axios from "axios";

const API = import.meta.env.VITE_API_BASE || "http://localhost:5000/api/v1";
const client = axios.create({ baseURL: API });

export const waitlistService = {
  // payload = { email, phone, location, role }
  join: async (payload) => {
    const res = await client.post("/waitlist", payload);
    return res.data;
  },
  getCount: async () => {
  try {
    const res = await client.get("/waitlist/count");
    return res.data?.data?.total ?? 0;
  } catch {
    return 0;
  }
},
};

