import { dataPrivacyData } from "@/publicSite/data/privacyData";
import { getDataPrivacyData } from "@/sanity/sanityService";
import { useEffect, useState } from "react";

let cache = null;
let inflight = null;

export function useDataPrivacy() {
  const [data, setData] = useState(cache || dataPrivacyData);

  useEffect(() => {
    if (cache) return;

    if (!inflight) {
      inflight = getDataPrivacyData();
    }

    inflight.then((d) => {
      if (!d) return;

      cache = {
        ...dataPrivacyData,
        ...d,

        sections: d.sections?.length
          ? d.sections
          : dataPrivacyData.sections,
      };

      setData(cache);
    });
  }, []);

  return data;
}