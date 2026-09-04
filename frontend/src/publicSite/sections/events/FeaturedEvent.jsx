import { featuredEvent as fallback } from "@/publicSite/data/eventsData";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function FeaturedEvent({ event = fallback }) {
  const videoRef = useRef(null);

  return (
    <section className="px-6 py-20 bg-[#fafafa]">
      <ScrollReveal variant="scale-in">
        <Link
          to={`/events/${event.slug}`}
          className="group mx-auto block max-w-7xl overflow-hidden border-4 border-black bg-white shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[12px_12px_0px_rgba(188,29,38,1)]"
        >
          <div className="grid lg:grid-cols-2">
            <div className="overflow-hidden bg-black">
              {event.coverMedia?.type === "video" ? (
                <video
                  ref={videoRef}
                  muted
                  loop
                  playsInline
                  onMouseEnter={() => videoRef.current?.play()}
                  onMouseLeave={() => {
                    videoRef.current?.pause();
                    if (videoRef.current) videoRef.current.currentTime = 0;
                  }}
                  className="h-full w-full object-cover min-h-[240px] sm:min-h-[350px]"
                >
                  <source src={event.coverMedia?.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={event.coverMedia?.src}
                  alt={event.title}
                  className="h-full w-full object-cover min-h-[240px] sm:min-h-[350px] transition-transform duration-700 group-hover:scale-105"
                 loading="lazy" decoding="async"/>
              )}
            </div>

            <div className="p-6 sm:p-10 lg:p-14 flex flex-col justify-center">
              <div className="inline-block bg-[#BC1D26] border-2 border-black px-4 py-1.5 shadow-[3px_3px_0px_rgba(0,0,0,1)] mb-4 w-fit">
                <span className="text-xs font-black uppercase tracking-[0.22em] text-white">
                  Featured Event
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-tight text-black font-heading tracking-tight">
                {event.title}
              </h2>

              <p className="mt-4 text-black/75 font-bold">{event.date}</p>

              <p className="mt-6 text-base sm:text-lg leading-8 text-black/75 font-semibold">
                {event.description}
              </p>

              <span className="mt-8 inline-flex items-center gap-2 font-black uppercase tracking-widest text-sm text-[#BC1D26] group-hover:translate-x-2 transition-transform duration-300">
                View Event →
              </span>
            </div>
          </div>
        </Link>
      </ScrollReveal>
    </section>
  );
}