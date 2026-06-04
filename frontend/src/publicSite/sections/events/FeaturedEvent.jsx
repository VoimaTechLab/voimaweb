import { featuredEvent } from "@/publicSite/data/eventsData";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function FeaturedEvent() {
  const videoRef = useRef(null);

  return (
    <section className="px-6 pb-24">
      <Link
        to={`/events/${featuredEvent.slug}`}
        className="
          group
          mx-auto
          block
          max-w-7xl
          overflow-hidden
          rounded-[40px]
          bg-[#fafafa]
          transition-all
          duration-500
          hover:-translate-y-1
          hover:shadow-2xl
        "
      >
        <div className="grid lg:grid-cols-2">

          <div className="overflow-hidden">

            {featuredEvent.coverMedia.type === "image" ? (
              <img
                src={featuredEvent.coverMedia.src}
                alt={featuredEvent.title}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />
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
                  h-full
                  w-full
                  object-cover
                "
              >
                <source
                  src={featuredEvent.coverMedia.src}
                  type="video/mp4"
                />
              </video>
            )}

          </div>

          <div className="p-12 lg:p-16">

            <span className="text-sm uppercase tracking-[0.2em] text-[#BC1D26]/60">
              Featured Event
            </span>

            <h2 className="mt-6 text-5xl font-bold text-[#BC1D26]">
              {featuredEvent.title}
            </h2>

            <p className="mt-6 text-black/60">
              {featuredEvent.date}
            </p>

            <p className="mt-8 text-lg leading-9 text-black/65">
              {featuredEvent.description}
            </p>

            <span
              className="
                mt-10
                inline-flex
                items-center
                gap-2
                font-semibold
                text-[#BC1D26]
              "
            >
              View Event →
            </span>

          </div>

        </div>
      </Link>
    </section>
  );
}