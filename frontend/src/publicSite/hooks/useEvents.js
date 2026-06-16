import {
    events as fbEvents,
    featuredEvent as fbFeatured,
} from "@/publicSite/data/eventsData";
import { getEvent, getEventsData } from "@/sanity/sanityService";
import { useEffect, useState } from "react";

/* Events list */
export function useEvents() {
  const [data, setData] = useState({ featuredEvent: fbFeatured, events: fbEvents });

  useEffect(() => {
    getEventsData().then((d) => {
      if (!d) return;
      setData({
        featuredEvent: d.featuredEvent || fbFeatured,
        events: d.events.length ? d.events : fbEvents,
      });
    });
  }, []);

  return data;
}

/* Single event */
const staticFindEvent = (slug) => fbEvents.find((e) => e.slug === slug) || null;

export function useEvent(slug) {
  const [event, setEvent] = useState(() => staticFindEvent(slug));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    getEvent(slug).then((e) => {
      if (!mounted) return;
      setEvent(e || staticFindEvent(slug));
      setLoading(false);
    });
    return () => { mounted = false; };
  }, [slug]);

  return { event, loading };
}