import { getPartnersData } from "@/sanity/sanityService";
import { useEffect, useState } from "react";

let cache = null;
let inflight = null;

export function usePartners() {
  const [data, setData] = useState({
    eyebrow: "",
    title: "",
    description: "",
    partners: [],
  });

  useEffect(() => {
    if (cache) {
      setData(cache);
      return;
    }

    if (!inflight) {
      inflight = getPartnersData();
    }

    inflight.then((d) => {
      if (!d) return;

      cache = d;
      setData(d);
    });
  }, []);

  return data;
}