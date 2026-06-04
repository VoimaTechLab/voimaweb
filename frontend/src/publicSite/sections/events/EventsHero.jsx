import { eventsHero } from "@/publicSite/data/eventsData";

export default function EventsHero() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-5xl text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BC1D26]">
          {eventsHero.eyebrow}
        </p>

        <h1 className="mt-6 text-6xl font-bold leading-tight text-[#BC1D26]">
          {eventsHero.title}
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-black/65">
          {eventsHero.description}
        </p>

      </div>
    </section>
  );
}