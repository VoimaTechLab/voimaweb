import { milestones as fbMilestones, testimonials as fbTestimonials } from "@/publicSite/data/journeyData";
import { getMilestone, getMilestones, getTestimonials } from "@/sanity/sanityService";
import { useEffect, useState } from "react";

export function useMilestones() {
  const [list, setList] = useState(fbMilestones);

  useEffect(() => {
    getMilestones().then((m) => { if (m) setList(m); });
  }, []);

  return list;
}

const staticFind = (slug) => fbMilestones.find((m) => m.slug === slug) || null;

export function useMilestone(slug) {
  const [milestone, setMilestone] = useState(() => staticFind(slug));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    getMilestone(slug).then((m) => {
      if (!mounted) return;
      setMilestone(m || staticFind(slug));
      setLoading(false);
    });
    return () => { mounted = false; };
  }, [slug]);

  return { milestone, loading };
}

export function useTestimonials() {
  const [list, setList] = useState(fbTestimonials);

  useEffect(() => {
    getTestimonials().then((t) => { if (t) setList(t); });
  }, []);

  return list;
}