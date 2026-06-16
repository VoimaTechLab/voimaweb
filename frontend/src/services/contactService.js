import axios from "axios";

const API = import.meta.env.VITE_API_BASE || "http://localhost:5000/api/v1";
const client = axios.create({ baseURL: API });

export const contactService = {
  // data = { name, email, subject, message }  (matches your contactSchema)
  sendMessage: async (data) => {
    const res = await client.post("/contact", data);
    return res.data;
  },
};