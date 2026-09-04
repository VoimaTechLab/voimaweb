import { scdResourcesData } from "@/publicSite/data/scdResourcesData";
import { getSCDResourcesData } from "@/sanity/sanityService";
import { useEffect, useState } from "react";

let cache = null;
let inflight = null;

export function useSCDResources() {
  const [data, setData] = useState(cache || scdResourcesData);

  useEffect(() => {
    if (cache) return;

    if (!inflight) {
      inflight = getSCDResourcesData();
    }

    inflight.then((d) => {
      if (!d) return;

      cache = {
        ...scdResourcesData,
        ...d,

        categories: d.categories?.length
          ? d.categories
          : scdResourcesData.categories,
      };

      setData(cache);
    });
  }, []);

  return data;
}