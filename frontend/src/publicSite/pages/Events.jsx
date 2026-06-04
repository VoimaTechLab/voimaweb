import { pageTransition } from "@/publicSite/motion/variants";
import { motion } from "framer-motion";

import EventsGrid from "@/publicSite/sections/events/EventsGrid";
import EventsHero from "@/publicSite/sections/events/EventsHero";
import FeaturedEvent from "@/publicSite/sections/events/FeaturedEvent";

export default function Events() {
  return (
    <motion.main
      {...pageTransition}
      className="overflow-hidden pt-[90px]"
    >
      <EventsHero />
      <FeaturedEvent />
      <EventsGrid />
    </motion.main>
  );
}