import {
    contactHero, officeInfo, socialLinks,
} from "@/publicSite/data/contactData";
import { getContactData } from "@/sanity/sanityService";
import { useEffect, useState } from "react";

const FALLBACK = { contactHero, officeInfo, socialLinks };

export function useContact() {
  const [data, setData] = useState(FALLBACK);

  useEffect(() => {
    getContactData().then((d) => {
      if (!d) return;
      setData({
        contactHero: d.contactHero || FALLBACK.contactHero,
        officeInfo: d.officeInfo || FALLBACK.officeInfo,
        socialLinks: d.socialLinks?.length ? d.socialLinks : FALLBACK.socialLinks,
      });
    });
  }, []);

  return data;
}