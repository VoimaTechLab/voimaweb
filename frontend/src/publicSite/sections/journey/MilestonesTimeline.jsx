import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { useMilestones } from "../../hooks/useJourney";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import FadeStagger from "@/components/animations/FadeStagger";

export default function MilestonesTimeline() {
  const milestones = useMilestones();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative px-6 py-32" ref={containerRef}>
      {/* Scroll-drawn Timeline Line (Desktop only) */}
      <div className="absolute left-1/2 top-0 hidden h-full w-[4px] -translate-x-1/2 bg-black lg:block">
        <motion.div
          className="w-full bg-[#BC1D26]"
          style={{ height: lineHeight, originY: 0 }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl space-y-32">
        {milestones.map((item, index) => (
          <MilestoneCard key={item.slug} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

function MilestoneCard({ item, index }) {
  const videoRef = useRef(null);
  const reverse = index % 2 !== 0;

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
        relative grid items-center gap-16 lg:grid-cols-2
        ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
      `}
    >
      {/* Center dot on the timeline line (Desktop only) */}
      <div className="absolute left-1/2 top-1/2 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 border-4 border-black bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] lg:block z-10" />

      {/* MEDIA */}
      <ScrollReveal variant={reverse ? "fade-left" : "fade-right"}>
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
              border-4 border-black
              bg-white
              shadow-[12px_12px_0px_rgba(0,0,0,1)]
              transition-all
              duration-500
              hover:shadow-[10px_10px_0px_rgba(188,29,38,1)] sm:hover:shadow-[16px_16px_0px_rgba(188,29,38,1)]
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
               loading="lazy" decoding="async"/>
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
      </ScrollReveal>

      {/* CONTENT */}
      <div>
        <FadeStagger staggerSpeed="fast">
          <div className="inline-block bg-[#BC1D26] border-2 border-black px-4 py-1 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-4">
            <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white">
              {item.year}
            </span>
          </div>

          <h2 className="mt-4 text-4xl font-black uppercase text-black md:text-5xl font-heading tracking-tight">
            {item.title}
          </h2>

          <p className="mt-8 text-lg leading-9 text-black/75 font-semibold">
            {item.description}
          </p>

          <Link
            to={`/our-journey/${item.slug}`}
            className="
              group mt-10 inline-flex items-center gap-3
              border-2 border-black
              bg-white
              px-8 py-4
              text-sm font-black uppercase tracking-wider
              text-black
              shadow-[6px_6px_0px_rgba(0,0,0,1)]
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-[#BC1D26]
              hover:text-white
              hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]
            "
          >
            Read Full Story
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </FadeStagger>
      </div>
    </div>
  );
}