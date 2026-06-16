import {
    appScreens, benefits,
    downloadCTA,
    faqs,
    heroData,
} from "@/publicSite/data/voimaAppData";
import { getVoimaAppData } from "@/sanity/sanityService";
import { useEffect, useState } from "react";

const FALLBACK = { heroData, appScreens, benefits, faqs, downloadCTA };

let cache = null;
let inflight = null;

export function useVoimaApp() {
  const [data, setData] = useState(cache || FALLBACK);

  useEffect(() => {
    if (cache) return;
    if (!inflight) inflight = getVoimaAppData();
    inflight.then((d) => {
      if (!d) return;
      cache = {
        heroData: d.heroData || FALLBACK.heroData,
        appScreens: d.appScreens?.length ? d.appScreens : FALLBACK.appScreens,
        benefits: d.benefits?.length ? d.benefits : FALLBACK.benefits,
        faqs: d.faqs?.length ? d.faqs : FALLBACK.faqs,
        downloadCTA: d.downloadCTA || FALLBACK.downloadCTA,
      };
      setData(cache);
    });
  }, []);

  return data;
}