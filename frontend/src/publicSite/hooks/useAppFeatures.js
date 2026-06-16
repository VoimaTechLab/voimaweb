import { features as fbFeatures } from "@/publicSite/data/voimaAppData";
import { getAppFeature, getAppFeatures } from "@/sanity/sanityService";
import { Activity, Bell, Bot, Brain, HeartPulse, Shield, Users } from "lucide-react";
import { useEffect, useState } from "react";

const ICONS = { Bell, HeartPulse, Users, Activity, Bot, Brain, Shield };
const withIcon = (f) => ({ ...f, icon: ICONS[f.iconName] || Bell });

export function useAppFeatures() {
  const [list, setList] = useState(fbFeatures); // static already has .icon components
  useEffect(() => {
    getAppFeatures().then((d) => { if (d) setList(d.map(withIcon)); });
  }, []);
  return list;
}

const staticFind = (slug) => fbFeatures.find((f) => f.slug === slug) || null;

export function useAppFeature(slug) {
  const [feature, setFeature] = useState(() => staticFind(slug));
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let m = true;
    getAppFeature(slug).then((f) => {
      if (!m) return;
      setFeature(f ? withIcon(f) : staticFind(slug));
      setLoading(false);
    });
    return () => { m = false; };
  }, [slug]);
  return { feature, loading };
}