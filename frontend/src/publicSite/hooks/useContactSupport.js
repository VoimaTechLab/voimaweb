import { contactSupportData } from "@/publicSite/data/supportData";
import { getContactSupportData } from "@/sanity/sanityService";
import { useEffect, useState } from "react";

let cache = null;
let inflight = null;

export function useContactSupport() {
  const [data, setData] = useState(cache || contactSupportData);

  useEffect(() => {
    if (cache) return;

    if (!inflight) {
      inflight = getContactSupportData();
    }

    inflight.then((d) => {
      if (!d) return;

      cache = {
        ...contactSupportData,
        ...d,

        sections: d.sections?.length
          ? d.sections
          : contactSupportData.sections,

        contactLinks: d.contactLinks?.length
          ? d.contactLinks
          : contactSupportData.contactLinks,
      };

      setData(cache);
    });
  }, []);

  return data;
}