import { pageTransition } from "@/publicSite/motion/variants";
import { motion } from "framer-motion";

import { useEvents } from "@/publicSite/hooks/useEvents";

import EventsGrid from "@/publicSite/sections/events/EventsGrid";
import EventsHero from "@/publicSite/sections/events/EventsHero";
import FeaturedEvent from "@/publicSite/sections/events/FeaturedEvent";

export default function Events() {
  const { featuredEvent, events } = useEvents(); 

  return (
    <motion.main {...pageTransition} className="overflow-hidden pt-[90px]">
      <EventsHero />
      <FeaturedEvent event={featuredEvent} />
      <EventsGrid events={events} />
    </motion.main>
  );
}