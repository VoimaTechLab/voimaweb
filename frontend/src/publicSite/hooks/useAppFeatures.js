import { features as fbFeatures } from "@/publicSite/data/voimaAppData";
import { getAppFeature, getAppFeatures } from "@/sanity/sanityService";
import { Activity, Bell, Bot, Brain, HeartPulse, Shield, Users } from "lucide-react";
import { useEffect, useState } from "react";

const ICONS = { Bell, HeartPulse, Users, Activity, Bot, Brain, Shield };

const staticFeaturesMap = fbFeatures.reduce((acc, f) => {
  acc[f.slug] = f;
  return acc;
}, {});

const mergeWithStatic = (f, idx) => {
  const fb = staticFeaturesMap[f.slug] || fbFeatures[idx % fbFeatures.length] || fbFeatures[0];
  const isGeneric = !f.heroImage || String(f.heroImage).includes("PC_White") || String(f.heroImage).includes("brand-logo") || String(f.heroImage).includes("PC_Red");
  return {
    ...fb,
    ...f,
    icon: ICONS[f.iconName] || fb.icon || Bell,
    heroImage: isGeneric ? fb.heroImage : (f.heroImage || fb.heroImage),
  };
};

export function useAppFeatures() {
  const [list, setList] = useState(fbFeatures);
  useEffect(() => {
    getAppFeatures().then((d) => {
      if (d && d.length) {
        setList(d.map(mergeWithStatic));
      }
    });
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
      setFeature(f ? mergeWithStatic(f, 0) : staticFind(slug));
      setLoading(false);
    });
    return () => { m = false; };
  }, [slug]);
  return { feature, loading };
}