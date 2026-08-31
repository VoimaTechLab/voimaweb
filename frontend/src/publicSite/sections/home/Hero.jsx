import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import HeroVid from "@/assets/Hero/herovid.mov";
import { useHome } from "@/publicSite/hooks/useHome";

export default function Hero() {
  const {
    heroSlides = [],
    backgroundVideo,
  } = useHome();

  const [current, setCurrent] = useState(0);

  // ── Set video source ──
  const videoSrc = backgroundVideo || HeroVid;

  // ── Hero slide rotation ──
  useEffect(() => {
    if (!heroSlides.length) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6500);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  if (!heroSlides.length) return null;

  const slide = heroSlides[current];

  return (
    <section className="relative flex h-screen min-h-[650px] w-full flex-col justify-between overflow-hidden bg-black text-white">

      {/* ── Background Video ── */}
      {videoSrc && (
        <video
          key={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onError={() => {
            if (videoSrc !== HeroVid) {
              setVideoSrc(HeroVid);
            }
          }}
          className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        >
          <source src={videoSrc} />
        </video>
      )}

      {/* ── Dark Overlay ── */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/65 to-black/35" />

      {/* ── Main Content ── */}
      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-12 pt-24 sm:px-10">

        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-4xl space-y-6 sm:space-y-8"
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-2 border-2 border-black bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#BC1D26] shadow-[4px_4px_0px_rgba(0,0,0,1)] sm:text-sm">
              <span className="h-2.5 w-2.5 animate-pulse border border-black bg-[#BC1D26]" />
              <span>{slide.eyebrow}</span>
            </div>

            {/* Headline */}
            <h1 className="max-w-4xl font-heading text-2xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl">
              <span className="block text-white">
                {slide.titleBefore}
              </span>

              <span className="mt-2 block text-[#E55B60]">
                {slide.titleAfter}
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-xl text-sm font-semibold leading-relaxed text-white/90 sm:text-base md:text-lg">
              {slide.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">

              <Link
                to={slide.primaryLink}
                className="group inline-flex items-center gap-2 border-2 border-black bg-[#BC1D26] px-8 py-4 text-xs font-black uppercase tracking-wider text-white shadow-[5px_5px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_rgba(0,0,0,1)] sm:text-sm"
              >
                <span>{slide.primaryBtn}</span>

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to={slide.secondaryLink}
                className="inline-flex items-center gap-2 border-2 border-black bg-white px-8 py-4 text-xs font-black uppercase tracking-wider text-[#BC1D26] shadow-[5px_5px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_rgba(0,0,0,1)] sm:text-sm"
              >
                <span>{slide.secondaryBtn}</span>
              </Link>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Carousel Indicator ── */}
      <div className="relative z-20 flex w-full items-center justify-center px-6 py-6">
        <div className="flex items-center gap-3">
          {heroSlides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`border-2 border-black transition-all duration-300 ${
                current === idx
                  ? "h-3 w-10 bg-[#BC1D26] shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                  : "h-3 w-3 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}