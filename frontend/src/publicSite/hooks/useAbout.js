import {
    galleryData,
    heroData,
    missionVisionData,
    storyData,
    teamData,
    traceFramework,
} from "@/publicSite/data/aboutData";
import { getAboutData } from "@/sanity/sanityService";
import { useEffect, useState } from "react";

const FALLBACK = { heroData, storyData, missionVisionData, traceFramework, teamData, galleryData };

let cache = null;     // shared across sections
let inflight = null;

export function useAbout() {
  const [data, setData] = useState(cache || FALLBACK);

  useEffect(() => {
    if (cache) return;
    if (!inflight) inflight = getAboutData();
    inflight.then((d) => {
      if (!d) return; // keep full static fallback
      cache = {
        heroData: d.heroData || FALLBACK.heroData,
        storyData: d.storyData || FALLBACK.storyData,
        missionVisionData: d.missionVisionData || FALLBACK.missionVisionData,
        traceFramework: d.traceFramework?.length ? d.traceFramework : FALLBACK.traceFramework,
        teamData: d.teamData?.members?.length ? d.teamData : FALLBACK.teamData,
        galleryData: d.galleryData || FALLBACK.galleryData,
      };
      setData(cache);
    });
  }, []);

  return data;
}