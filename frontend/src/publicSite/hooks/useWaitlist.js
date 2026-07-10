import AppImage from "@/assets/app/How_it_works.png";
import {
  waitlistAvatars as fbAvatars,
  waitlistData as fbData,
  features as fbFeatures,
} from "@/publicSite/data/waitlistData";
import { getWaitlistData } from "@/sanity/sanityService";
import { waitlistService } from "@/services/waitlistService";
import { useEffect, useState } from "react";

const FALLBACK = {
  waitlistData: fbData,
  features: fbFeatures,
  waitlistAvatars: fbAvatars,
  appMockups: [],
    appMockup: {
    eyebrow: "The Experience",
    title: "Healthcare support built around real life.",
    description:
      "Track wellness, receive reminders, access support, connect with community and stay informed.",
    image: AppImage,
  },

};

let cache = null;
let inflight = null;

export function useWaitlist() {
  const [data, setData] = useState(cache || FALLBACK);

  useEffect(() => {
    if (cache) return;
    if (!inflight)
      inflight = Promise.all([getWaitlistData(), waitlistService.getCount()]);

    inflight.then(([d, count]) => {
      const base = d || {};
      cache = {
        waitlistData: {
          launchDate: base.launchDate || FALLBACK.waitlistData.launchDate,
          eyebrow: base.eyebrow || FALLBACK.waitlistData.eyebrow,
          title: base.title || FALLBACK.waitlistData.title,
          description: base.description || FALLBACK.waitlistData.description,
          stats: {
            registered: count ?? FALLBACK.waitlistData.stats.registered,
            label: base.stats?.label || FALLBACK.waitlistData.stats.label,
          },
          form: base.form || FALLBACK.waitlistData.form,
          launchMessage: base.launchMessage || FALLBACK.waitlistData.launchMessage,
        },
        features: base.features?.length ? base.features : FALLBACK.features,
        waitlistAvatars: base.avatars?.length ? base.avatars : FALLBACK.waitlistAvatars,
        appMockups: base.appMockups?.length ? base.appMockups : FALLBACK.appMockups,
         appMockup: d.appMockup || FALLBACK.appMockup,
      };
      setData(cache);
    });
  }, []);

  return data;
}