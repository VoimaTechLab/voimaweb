import { stats as fbStats } from "@/publicSite/data/journeyData";
import { getJourneyStats } from "@/sanity/sanityService";
import { useEffect, useState } from "react";

export function useJourneyStats() {
  const [stats, setStats] =
    useState(fbStats);

  useEffect(() => {
    getJourneyStats().then((s) => {
      if (s) setStats(s);
    });
  }, []);

  return stats;
}