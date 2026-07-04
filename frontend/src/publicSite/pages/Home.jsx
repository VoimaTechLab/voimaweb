import { motion } from "framer-motion";

import { pageTransition } from "@/publicSite/motion/variants";
import AppShowcaseSection from "@/publicSite/sections/home/AppShowcaseSection";
import CTASection from "@/publicSite/sections/home/CTASection";
import Hero from "@/publicSite/sections/home/Hero";
import ImpactSection from "@/publicSite/sections/home/ImpactSection";
import ImpactStats from "@/publicSite/sections/home/ImpactStats";
import PartnersSection from "@/publicSite/sections/home/PartnersSection";
import StorySection from "@/publicSite/sections/home/StorySection";
import SEOHead from "@/seo/SEOHead";
export default function Home() {
  return (
    <motion.main {...pageTransition}>
      <SEOHead />
      <Hero />
      <ImpactStats />   
      <StorySection />
      <AppShowcaseSection />
      <ImpactSection />
      <PartnersSection />
      <CTASection />
    </motion.main>
  );
}
