import {
    events as fbEvents,
    featuredEvent as fbFeatured,
    eventsHero as fbHero,
} from "@/publicSite/data/eventsData";
import { getEvent, getEventsData } from "@/sanity/sanityService";
import { useEffect, useState } from "react";

/* Events list */
export function useEvents() {
  const [data, setData] = useState({ featuredEvent: fbFeatured, events: fbEvents, hero: fbHero });

  useEffect(() => {
    getEventsData().then((d) => {
      if (!d) return;
      setData({
        hero: d.page || fbHero,
        featuredEvent: d.featuredEvent || fbFeatured,
        events: d.events.length ? d.events : fbEvents,
      });
    });
  }, []);

  return data;
}

/* Single event */
const staticFindEvent = (slug) => [fbFeatured, ...fbEvents].find((e) => e.slug === slug) || null;

export function useEvent(slug, initialEvent) {
  const [event, setEvent] = useState(() => initialEvent || staticFindEvent(slug));
  const [loading, setLoading] = useState(() => !initialEvent && !staticFindEvent(slug));

  useEffect(() => {
    let mounted = true;
    getEvent(slug).then((e) => {
      if (!mounted) return;
      if (e) {
        setEvent(e);
      } else if (!initialEvent) {
        setEvent(staticFindEvent(slug));
      }
      setLoading(false);
    });
    return () => { mounted = false; };
  }, [slug, initialEvent]);

  return { event, loading };
}