import { getCareerRole } from "@/sanity/sanityService";
import { useEffect, useState } from "react";
export function useCareerRole(slug, initialJob) {
  const [job, setJob] = useState(() => initialJob || null);
  const [loading, setLoading] = useState(() => !initialJob);

  useEffect(() => {
    if (!slug) return;
    let mounted = true;

    getCareerRole(slug)
      .then((data) => {
        if (mounted && data) setJob(data);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [slug]);

  return {
    job,
    loading,
  };
}