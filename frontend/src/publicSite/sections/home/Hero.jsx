import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import HeroVid from "@/assets/Hero/herovid.mov";
import { heroSlides } from "@/data/homeData";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[current];

  return (
    <section className="relative w-full h-screen min-h-[650px] overflow-hidden flex flex-col justify-between bg-black text-white">
      {/* ── Background Video ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-fill md:object-cover md:object-center z-0"
      >
        <source src={HeroVid} type="video/mp4" />
        <source src={HeroVid} type="video/quicktime" />
      </video>

      {/* ── Dark Overlay for Contrast ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/35 z-10" />

      {/* ── Main Content Area ── */}
      <div className="relative z-20 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 sm:px-10 pt-24 pb-12 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl space-y-6 sm:space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border-2 border-black px-4 py-2 text-[#BC1D26] font-black text-xs sm:text-sm uppercase tracking-[0.2em] shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              <span className="h-2.5 w-2.5 bg-[#BC1D26] border border-black animate-pulse" />
              <span>{slide.eyebrow}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.1] font-heading">
              {slide.titleLines.map((line, lineIdx) => (
                <span key={lineIdx} className="block">
                  {line.map((part, partIdx) => (
                    <span
                      key={partIdx}
                      className={part.highlight ? "text-[#E55B60]" : "text-white"}
                    >
                      {part.text}
                    </span>
                  ))}
                </span>
              ))}
            </h1>

            {/* Subtitle / Description */}
            <p className="text-sm sm:text-base md:text-lg text-white/90 font-semibold leading-relaxed max-w-xl">
              {slide.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to={slide.primaryLink}
                className="
                  group inline-flex items-center gap-2
                  bg-[#BC1D26] text-white
                  border-2 border-black
                  text-xs sm:text-sm font-black uppercase tracking-wider
                  px-8 py-4
                  shadow-[5px_5px_0px_rgba(0,0,0,1)]
                  transition-all duration-200
                  hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_rgba(0,0,0,1)]
                "
              >
                <span>{slide.primaryBtn}</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to={slide.secondaryLink}
                className="
                  inline-flex items-center gap-2
                  bg-white text-[#BC1D26]
                  border-2 border-black
                  text-xs sm:text-sm font-black uppercase tracking-wider
                  px-8 py-4
                  shadow-[5px_5px_0px_rgba(0,0,0,1)]
                  transition-all duration-200
                  hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_rgba(0,0,0,1)]
                "
              >
                <span>{slide.secondaryBtn}</span>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Carousel Indicator ── */}
      <div className="relative z-20 w-full py-6 px-6 flex justify-center items-center">
        <div className="flex items-center gap-3">
          {heroSlides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`
                transition-all duration-300 border-2 border-black
                ${
                  current === idx
                    ? "w-10 h-3 bg-[#BC1D26] shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                    : "w-3 h-3 bg-white/40 hover:bg-white/70"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
