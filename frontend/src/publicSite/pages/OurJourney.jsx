import { pageTransition } from "@/publicSite/motion/variants";
import { motion } from "framer-motion";

import FutureVision from "@/publicSite/sections/journey/FutureVision";
import GrowthStats from "@/publicSite/sections/journey/GrowthStats";
import JourneyHero from "@/publicSite/sections/journey/JourneyHero";
import MilestonesTimeline from "@/publicSite/sections/journey/MilestonesTimeline";
import Testimonials from "@/publicSite/sections/journey/Testimonials";

export default function OurJourney() {
  return (
    <motion.main
      {...pageTransition}
      className="overflow-hidden pt-[90px]"
    >
      <JourneyHero />
      <MilestonesTimeline />
      <GrowthStats />
      <Testimonials />
      <FutureVision />
    </motion.main>
  );
}