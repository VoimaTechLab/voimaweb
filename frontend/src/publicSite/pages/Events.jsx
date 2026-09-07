import { useEvents } from "@/publicSite/hooks/useEvents";

import EventsGrid from "@/publicSite/sections/events/EventsGrid";
import EventsHero from "@/publicSite/sections/events/EventsHero";
import FeaturedEvent from "@/publicSite/sections/events/FeaturedEvent";

export default function Events() {
  const { featuredEvent, events, hero } = useEvents();

  return (
    <main className="overflow-hidden pt-[90px]">
      <EventsHero hero={hero} />
      <FeaturedEvent event={featuredEvent} />
      <EventsGrid events={events} />
    </main>
  );
}