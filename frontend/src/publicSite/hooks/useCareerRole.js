import { getCareerRole } from "@/sanity/sanityService";
import { useEffect, useState } from "react";
export function useCareerRole(slug) {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    getCareerRole(slug)
      .then(setJob)
      .finally(() => setLoading(false));
  }, [slug]);

  return {
    job,
    loading,
  };
}