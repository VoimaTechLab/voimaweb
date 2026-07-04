import { getHomeData } from "@/sanity/sanityService";
import { BookOpenText, Brain, Globe, HeartPulse } from "lucide-react";
import { useEffect, useState } from "react";
import {
  appShowcaseSection,
  ctaSection,
  heroSlides, impactSection,
  impactStatsSection,
  missionSection,
  sdgSection,
  storySection
} from "../../data/homeData";

const FALLBACK = {
  heroSlides, impactSection, missionSection, storySection,
  appShowcaseSection, sdgSection, ctaSection, impactStatsSection
};

const ICONS = { HeartPulse, Brain, Globe, BookOpenText };
const THEME = {
  primary: { iconBgClassName: "bg-[#BC1D26]/10", iconColorClassName: "text-[#BC1D26]" },
  orange:  { iconBgClassName: "bg-[#F47B3A]/10", iconColorClassName: "text-[#F47B3A]" },
  green:   { iconBgClassName: "bg-[#1D9E75]/10", iconColorClassName: "text-[#1D9E75]" },
  black:   { iconBgClassName: "bg-black/5",      iconColorClassName: "text-black" },
};

const mapImpact = (impact) => ({
  ...impact,
  areas: (impact.areas || []).map((a) => ({
    ...a,
    icon: ICONS[a.iconName] || HeartPulse,
    ...(THEME[a.colorTheme] || THEME.primary),
  })),
});

let cache = null, inflight = null;

export function useHome() {
  const [data, setData] = useState(cache || FALLBACK);

  useEffect(() => {
    if (cache) return;
    if (!inflight) inflight = getHomeData();
    inflight.then((d) => {
      if (!d) return;
      cache = {
        heroSlides: d.heroSlides?.length ? d.heroSlides : FALLBACK.heroSlides,
        impactSection: d.impactSection?.areas?.length ? mapImpact(d.impactSection) : FALLBACK.impactSection,
        missionSection: d.missionSection?.steps?.length ? d.missionSection : FALLBACK.missionSection,
        storySection: d.storySection || FALLBACK.storySection,
        appShowcaseSection: d.appShowcaseSection || FALLBACK.appShowcaseSection,
        impactStatsSection:
          d.impactStatsSection?.stats?.length
            ? d.impactStatsSection
            : FALLBACK.impactStatsSection,
        sdgSection: d.sdgSection?.goals?.length ? d.sdgSection : FALLBACK.sdgSection,
        ctaSection: d.ctaSection || FALLBACK.ctaSection,
      };
      setData(cache);
    });
  }, []);

  return data;
}