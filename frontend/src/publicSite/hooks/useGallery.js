import { getGalleryData } from "@/sanity/sanityService";
import { useEffect, useState } from "react";

export function useGallery() {
  const [gallery, setGallery] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    let mounted = true;

    getGalleryData().then((data) => {
      if (!mounted) return;

      setGallery(data || []);
      setLoading(false);
    });

    return () => {
      mounted = false;
    };
  }, []);

  return {
    gallery,
    loading,
  };
}