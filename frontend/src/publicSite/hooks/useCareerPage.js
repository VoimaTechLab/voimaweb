import { getCareerPage } from "@/sanity/sanityService";
import { useEffect, useState } from "react";

export function useCareerPage() {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    getCareerPage().then((data) => {
      if (mounted) {
        setPage(data);
        setLoading(false);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  return {
    page,
    loading,
  };
}