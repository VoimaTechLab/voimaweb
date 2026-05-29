import { pageTransition } from "@/publicSite/motion/variants";
import { motion } from "framer-motion";

import FutureVision from "@/publicSite/sections/journey/FutureVision";
import GrowthStats from "@/publicSite/sections/journey/GrowthStats";
import JourneyGallery from "@/publicSite/sections/journey/JourneyGallery";
import JourneyHero from "@/publicSite/sections/journey/JourneyHero";
import JourneyStories from "@/publicSite/sections/journey/JourneyStories";
import MilestonesTimeline from "@/publicSite/sections/journey/MilestonesTimeline";

export default function OurJourney() {
  return (
    <motion.main
      {...pageTransition}
      className="overflow-hidden pt-[90px]"
    >
      <JourneyHero />
      <MilestonesTimeline />
      <GrowthStats />
      <JourneyGallery />
      <JourneyStories />
      <FutureVision />
    </motion.main>
  );
}