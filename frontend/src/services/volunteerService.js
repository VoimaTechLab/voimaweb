import axios from "axios";

const API =
  import.meta.env.VITE_API_BASE ||
  "http://localhost:5000/api/v1";

const client = axios.create({
  baseURL: API,
});

export const volunteerService = {
  apply: async (payload) => {
    const res = await client.post(
      "/volunteers",
      payload
    );
    return res.data;
  },

  getCount: async () => {
    try {
      const res = await client.get(
        "/volunteers/count"
      );

      return res.data?.data?.total ?? 0;
    } catch {
      return 0;
    }
  },
};