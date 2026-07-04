import {
  appScreens, benefits,
  downloadCTA,
  faqs,
  heroData, howItWorks
} from "@/publicSite/data/voimaAppData";
import { getVoimaAppData } from "@/sanity/sanityService";
import {
  Activity,
  Bell,
  Bot,
  Download,
  Heart,
  Shield,
  UserPlus,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

const ICONS = {
  Download,
  UserPlus,
  Activity,
  Bell,
  Heart,
  Shield,
  Bot,
  Users
};
const FALLBACK = { heroData, howItWorks, appScreens, benefits, faqs, downloadCTA };

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
        howItWorks: {
          ...FALLBACK.howItWorks,
          ...d.howItWorks,
          steps: (d.howItWorks?.steps || FALLBACK.howItWorks.steps).map(
            (step) => ({
              ...step,
              icon:
                ICONS[step.iconName] ||
                Activity,
            })
          ),
        },
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