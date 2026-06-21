import axios from "axios";
import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_BASE || "http://localhost:5000/api/v1";

export function useSiteSettings() {
  const [settings, setSettings] = useState(null);
  useEffect(() => {
    axios.get(`${API}/settings/public`)
      .then((r) => setSettings(r.data.data))
      .catch(() => setSettings(null));
  }, []);
  return settings;
}