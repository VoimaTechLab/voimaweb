import { events } from "@/publicSite/data/eventsData";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function EventsGrid() {
  return (
    <section className="px-6 pb-32">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {events.map((event) => (
            <EventCard
              key={event.slug}
              event={event}
            />
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
        rounded-[36px]
        border
        border-black/5
        bg-white
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
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
          />
        ) : (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            onMouseEnter={(e) => videoRef.current?.play()}
            onMouseLeave={(e) => {
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

        <span className="text-sm text-[#BC1D26]/60">
          {event.category}
        </span>

        <h3 className="mt-3 text-2xl font-bold text-[#BC1D26]">
          {event.title}
        </h3>

        <p className="mt-4 leading-8 text-black/65">
          {event.excerpt}
        </p>

        <div
          className="
            mt-6
            font-semibold
            text-[#BC1D26]
          "
        >
          Read More →
        </div>

      </div>
    </Link>
  );
}