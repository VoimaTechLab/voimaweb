import { events as fallback } from "@/publicSite/data/eventsData";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function EventsGrid({ events = fallback}) {
  return (
    <section className="px-6 pb-32 bg-[#fafafa]">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {events.map((event, index) => (
            <ScrollReveal key={event.slug} variant="fade-up" delay={0.1 * index}>
              <EventCard
                event={event}
              />
            </ScrollReveal>
          ))}

        </div>

      </div>
    </section>
  );
}

function EventCard({ event }) {
  const videoRef = useRef(null);

  return (
    <Link
      to={`/events/${event.slug}`}
      className="
        group
        overflow-hidden
        border-4
        border-black
        bg-white
        shadow-[12px_12px_0px_rgba(0,0,0,1)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[10px_10px_0px_rgba(188,29,38,1)] sm:hover:shadow-[16px_16px_0px_rgba(188,29,38,1)]
      "
    >
      <div className="overflow-hidden">

        {event.coverMedia.type === "image" ? (
          <img
            src={event.coverMedia.src}
            alt={event.title}
            className="
              h-[260px]
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
           loading="lazy" decoding="async"/>
        ) : (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            onMouseEnter={() => videoRef.current?.play()}
            onMouseLeave={() => {
              videoRef.current?.pause();
              videoRef.current.currentTime = 0;
            }}
            className="
              h-[260px]
              w-full
              object-cover
            "
          >
            <source
              src={event.coverMedia.src}
              type="video/mp4"
            />
          </video>
        )}

      </div>

      <div className="p-8">

          <span className="inline-block bg-[#BC1D26]/10 border border-[#BC1D26] px-3 py-1 text-xs font-black uppercase tracking-wider text-[#BC1D26]">
            {event.category}
          </span>

          <h3 className="mt-4 text-2xl font-black uppercase text-black font-heading">
            {event.title}
          </h3>

          <p className="mt-4 leading-8 text-black/75 font-semibold">
            {event.excerpt}
          </p>

          <div
            className="
              mt-6
              font-black
              uppercase
              tracking-widest
              text-sm
              text-[#BC1D26]
            "
          >
            Read More →
          </div>

      </div>
    </Link>
  );
}