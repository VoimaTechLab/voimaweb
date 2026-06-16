import { careersCTA, donationData, heroData, volunteerData } from "@/publicSite/data/getInvolvedData";
import { getGetInvolvedData } from "@/sanity/sanityService";
import { useEffect, useState } from "react";

const FALLBACK = { heroData, volunteerData, donationData, careersCTA };
let cache = null, inflight = null;

export function useGetInvolved() {
  const [data, setData] = useState(cache || FALLBACK);
  useEffect(() => {
    if (cache) return;
    if (!inflight) inflight = getGetInvolvedData();
    inflight.then((d) => {
      if (!d) return;
      cache = {
        heroData: d.heroData || FALLBACK.heroData,
        volunteerData: d.volunteerData || FALLBACK.volunteerData,
        donationData: d.donationData || FALLBACK.donationData,
        careersCTA: d.careersCTA || FALLBACK.careersCTA,
      };
      setData(cache);
    });
  }, []);
  return data;
}