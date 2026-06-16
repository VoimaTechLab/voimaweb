import axios from "axios";

const API = import.meta.env.VITE_API_BASE || "http://localhost:5000/api/v1";
const client = axios.create({ baseURL: API });

export const newsletterService = {
  subscribe: async (email) => {
    const res = await client.post("/newsletter", { email, source: "website" });
    return res.data;
  },
};