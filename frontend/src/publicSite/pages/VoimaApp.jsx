import { pageTransition } from "@/publicSite/motion/variants";
import { motion } from "framer-motion";

import AppBenefits from "@/publicSite/sections/voimaapp/AppBenefits";
import AppFeatures from "@/publicSite/sections/voimaapp/AppFeatures";
import AppScreens from "@/publicSite/sections/voimaapp/AppScreens";
import DownloadCTA from "@/publicSite/sections/voimaapp/DownloadCTA";
import FAQSection from "@/publicSite/sections/voimaapp/FAQSection";
import HowItWorks from "@/publicSite/sections/voimaapp/HowItWorks";
import VoimaHero from "@/publicSite/sections/voimaapp/VoimaHero";

export default function VoimaApp() {
  return (
    <motion.main
      {...pageTransition}
      className="overflow-hidden pt-[90px]"
    >
      <VoimaHero />
      <AppFeatures />
      <HowItWorks />
      <AppScreens />
      <AppBenefits />
      <FAQSection />
      <DownloadCTA />
    </motion.main>
  );
}