import { milestones } from "@/publicSite/data/journeyData";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function MilestonesTimeline() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl space-y-32">

        {milestones.map((item, index) => (
          <MilestoneCard
            key={item.slug}
            item={item}
            reverse={index % 2 !== 0}
          />
        ))}

      </div>
    </section>
  );
}

function MilestoneCard({ item, reverse }) {
  const videoRef = useRef(null);

  const handleEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className={`
        grid items-center gap-16 lg:grid-cols-2
        ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
      `}
    >
      {/* MEDIA */}
      <div className="relative">

        <span
          className="
            absolute
            -top-16
            left-0
            text-[180px]
            font-black
            text-black/[0.04]
          "
        >
          {item.year}
        </span>

        <div
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          className="
            overflow-hidden
            rounded-[40px]
            border border-black/5
            shadow-lg
          "
        >
          {item.media.type === "image" ? (
            <img
              src={item.media.src}
              alt={item.title}
              className="
                h-[500px]
                w-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />
          ) : (
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              poster={item.media.poster}
              className="
                h-[500px]
                w-full
                object-cover
              "
            >
              <source
                src={item.media.src}
                type="video/mp4"
              />
            </video>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-[#BC1D26]/60">
          {item.year}
        </p>

        <h2 className="mt-4 text-5xl font-bold text-[#BC1D26]">
          {item.title}
        </h2>

        <p className="mt-8 text-lg leading-9 text-black/65">
          {item.description}
        </p>

        <Link
          to={`/our-journey/${item.slug}`}
          className="
            mt-10 inline-flex items-center gap-3
            rounded-full
            border border-[#BC1D26]/15
            bg-white
            px-6 py-3
            font-semibold
            text-[#BC1D26]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[#BC1D26]
            hover:shadow-lg
          "
        >
          Read Full Story →
        </Link>
      </div>
    </div>
  );
}