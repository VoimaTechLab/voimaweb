import { eventsHero } from "@/publicSite/data/eventsData";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function EventsHero() {
  return (
    <section className="px-6 py-28 bg-[#fafafa] border-b-4 border-black">
      <div className="mx-auto max-w-5xl text-center">

        <ScrollReveal variant="fade-down">
          <div className="inline-block bg-[#BC1D26] border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6">
            <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white">
              {eventsHero.eyebrow}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.15}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-none text-black font-heading tracking-tight">
            {eventsHero.title}
          </h1>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.25}>
          <p className="mx-auto mt-8 max-w-3xl text-base sm:text-lg leading-8 sm:leading-9 text-black/75 font-semibold">
            {eventsHero.description}
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
}