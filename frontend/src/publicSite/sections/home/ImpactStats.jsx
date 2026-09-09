import CountUp from "@/components/animations/CountUp";
import MobileMarquee from "@/components/animations/MobileMarquee";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useHome } from "@/publicSite/hooks/useHome";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";


const BURDEN_TITLE =
  "The burden of sickle cell disease demands earlier intervention.";

function PosterBurdenTitle({ title }) {
  const heading = title || BURDEN_TITLE;
  const normalized = heading.trim().replace(/\.$/, "");
  const phrase = "sickle cell disease";
  const matchIndex = normalized.toLowerCase().indexOf(phrase);

  if (matchIndex === -1) {
    return (
      <h2 className="mt-5 text-4xl font-black uppercase leading-[0.95] text-[#BC1D26] sm:text-5xl lg:text-6xl font-heading tracking-tight">
        {normalized}.
      </h2>
    );
  }

  const before = normalized.slice(0, matchIndex).trim();
  const highlight = normalized.slice(matchIndex, matchIndex + phrase.length);
  const after = normalized.slice(matchIndex + phrase.length).trim();

  return (
    <h2 className="mt-5 text-4xl font-black uppercase leading-[0.95] text-black sm:text-5xl lg:text-6xl font-heading tracking-tight">
      {before && <span className="block">{before}</span>}
      <span
        className="
          my-2 inline-block
          -rotate-1 bg-[#BC1D26] text-white
          border-2 border-black
          px-4 py-2 sm:px-6 sm:py-3
          shadow-[5px_5px_0px_rgba(0,0,0,1)]
        "
      >
        {highlight}
      </span>
      {after && <span className="block text-[#BC1D26]">{after}.</span>}
    </h2>
  );
}

export default function ImpactStats() {
  const { impactSection } = useHome();

  const {
    eyebrow,
    title,
    areas = [],
    banner = {},
  } = impactSection || {};

  const [active, setActive] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const timerRef = useRef(null);

  const total = areas.length;

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 4500);
  }, [total]);

  useEffect(() => {
    if (hoveredIdx !== null) {
      clearInterval(timerRef.current);
      return;
    }
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [hoveredIdx, resetTimer]);

  const goTo = (idx) => {
    setActive(idx);
    resetTimer();
  };

  // Helper to extract numeric value vs suffix for CountUp
  const parseStat = (raw) => {
    const str = String(raw || "");
    const numMatch = str.match(/[\d,.]+/);
    const numericVal = numMatch ? parseFloat(numMatch[0].replace(/,/g, "")) : 0;
    const suffixMatch = str.match(/^[^\d]*[\d,.]+(.*)$/);
    const suffix = suffixMatch ? suffixMatch[1] : "";
    return { numericVal, suffix };
  };

  // The card currently displayed as "big / featured"
  const currentActive = hoveredIdx !== null ? hoveredIdx : active;

  return (
    <section
      className="relative overflow-hidden bg-white px-6 pt-24 pb-28"
      aria-label="Impact statistics"
    >
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-5xl text-center">
          <ScrollReveal variant="fade-down">
            <span
              className="
                inline-block
                bg-white text-[#BC1D26]
                border-2 border-black
                px-4 py-2
                text-xs sm:text-sm font-black uppercase tracking-[0.25em]
                shadow-[4px_4px_0px_rgba(0,0,0,1)]
              "
            >
              {eyebrow || "THE BURDEN"}
            </span>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.15}>
            <PosterBurdenTitle title={title} />
          </ScrollReveal>
        </div>

        {/* ── Horizontal Flex Accordion Cards (Campus Hustle Style) ── */}
        <ScrollReveal variant="fade-up" delay={0.2}>
          <MobileMarquee
            items={areas.map((area, index) => ({
              ...area,
              index,
            }))}
            cardWidth={300}
            gap={16}
            speed={45}
            renderCard={(item) => {
              const { numericVal, suffix } = parseStat(item.title);
              return (
                <div className="relative overflow-hidden rounded-2xl border-2 border-black bg-white shadow-[6px_6px_0px_rgba(0,0,0,1)] h-[380px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover scale-105 brightness-100"
                   loading="lazy" decoding="async"/>
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-white/90 to-transparent p-5 flex flex-col justify-end">
                    <div className="inline-block bg-[#BC1D26] text-white border-2 border-black px-3 py-1.5 text-xs font-black uppercase tracking-wider shadow-[3px_3px_0px_rgba(0,0,0,1)] mb-3 self-start">
                      {item.backTitle}
                    </div>
                    <div className="text-3xl font-black text-black tracking-tight font-heading leading-none">
                      {numericVal > 0 ? (
                        <CountUp from={0} to={numericVal} suffix={suffix} duration={2.2} />
                      ) : (
                        item.title
                      )}
                    </div>
                    <p className="mt-2 text-sm text-black/85 font-semibold leading-relaxed">
                      {item.description}
                    </p>
                    <p className="mt-2 text-xs text-black/60 font-normal leading-relaxed border-t border-black/10 pt-2">
                      {item.backStory}
                    </p>
                  </div>
                </div>
              );
            }}
            desktopRender={
              <>
                <div
                  className="mt-20 flex flex-col md:flex-row gap-4 sm:gap-5 w-full h-[600px] md:h-[500px] lg:h-[540px] items-stretch"
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {areas.map((area, index) => {
                    const { numericVal, suffix } = parseStat(area.title);
                    const isExpanded = currentActive === index;

                    return (
                      <motion.div
                        key={area.title || index}
                        onMouseEnter={() => setHoveredIdx(index)}
                        onClick={() => goTo(index)}
                        layout
                        transition={{
                          layout: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                        }}
                        style={{
                          flex: isExpanded ? 3.8 : 1,
                        }}
                        className={`
                          relative overflow-hidden rounded-2xl cursor-pointer select-none
                          border-2 border-black
                          bg-white transition-all duration-500 ease-in-out
                          shadow-[6px_6px_0px_rgba(0,0,0,1)]
                          ${
                            isExpanded
                              ? "shadow-[10px_10px_0px_rgba(188,29,38,1)] border-[#BC1D26]"
                              : "hover:border-[#BC1D26]/70"
                          }
                        `}
                      >
                        <img
                          src={area.image}
                          alt={area.title}
                          className={`
                            absolute inset-0 w-full h-full object-cover
                            transition-transform duration-700
                            ${isExpanded ? "scale-105 brightness-100" : "scale-100 brightness-100"}
                          `}
                         loading="lazy" decoding="async"/>
                        <div
                          className={`
                            absolute top-4 left-4 z-20 transition-opacity duration-300
                            ${isExpanded ? "opacity-0 pointer-events-none" : "opacity-100"}
                          `}
                        >
                          <span className="inline-block bg-white text-[#BC1D26] border-2 border-black px-3 py-1.5 text-xs sm:text-sm font-black uppercase tracking-tight shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                            {area.title}
                          </span>
                        </div>
                        <div
                          className={`
                            absolute inset-0 z-10
                            bg-gradient-to-t from-white via-white/90 to-transparent
                            p-6 sm:p-8 flex flex-col justify-end
                            transition-opacity duration-500
                            ${isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"}
                          `}
                        >
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                              >
                                <div className="inline-block bg-[#BC1D26] text-white border-2 border-black px-4 py-1.5 text-xs font-black uppercase tracking-wider shadow-[3px_3px_0px_rgba(0,0,0,1)] mb-3">
                                  {area.backTitle}
                                </div>
                                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight font-heading leading-none">
                                  {numericVal > 0 ? (
                                    <CountUp from={0} to={numericVal} suffix={suffix} duration={2.2} />
                                  ) : (
                                    area.title
                                  )}
                                </div>
                                <p className="mt-3 text-sm sm:text-base text-black/85 font-semibold leading-relaxed max-w-xl">
                                  {area.description}
                                </p>
                                <p className="mt-3 text-xs sm:text-sm text-black/60 font-normal leading-relaxed border-t border-black/10 pt-3 max-w-xl">
                                  {area.backStory}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
                {/* Progress Indicators */}
                <div className="flex items-center justify-center gap-3 mt-8">
                  {areas.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goTo(idx)}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      aria-label={`View card ${idx + 1}`}
                      className={`
                        transition-all duration-300 rounded-full border-2 border-black
                        ${
                          currentActive === idx
                            ? "w-10 h-3 bg-[#BC1D26] shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                            : "w-3 h-3 bg-white hover:bg-[#BC1D26]/40"
                        }
                      `}
                    />
                  ))}
                </div>
              </>
            }
          />
        </ScrollReveal>

        {/* Video Banner Section */}
        <div className="mt-24 lg:mt-32">
          {/* Top Section: Text & Hero Image (text elevated above picture level) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10 sm:mb-14 lg:mb-16">
            {/* Hero Image on the left — positioned lower than the elevated text */}
            <div className="lg:col-span-6 xl:col-span-6 order-2 lg:order-1 flex justify-center lg:justify-start pt-2 sm:pt-4 lg:pt-12 xl:pt-16">
              <ScrollReveal
                variant="fade-right"
                delay={0.15}
                className="w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px] xl:max-w-[560px]"
              >
                <img
                  src={banner.image}
                  alt={banner.title || "Why It Matters"}
                  className="w-full h-auto object-contain select-none"
                  loading="lazy"
                  decoding="async"
                />
              </ScrollReveal>
            </div>

            {/* Text Content on the right — elevated higher up */}
            <div className="lg:col-span-6 xl:col-span-6 order-1 lg:order-2 flex flex-col justify-start -mt-2 lg:-mt-6 xl:-mt-8">
              <ScrollReveal variant="fade-down">
                <span
                  className="
                    mb-4 sm:mb-6 inline-block
                    border-2 border-black
                    bg-[#BC1D26]
                    px-5 py-2
                    text-xs sm:text-sm font-black uppercase tracking-[0.22em]
                    text-white
                    shadow-[4px_4px_0px_rgba(0,0,0,1)]
                  "
                >
                  {banner.badge}
                </span>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={0.1}>
                <h3
                  className="
                    text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black uppercase
                    leading-[0.98] tracking-tight text-black
                    font-heading
                  "
                >
                  {banner.title}
                </h3>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={0.2}>
                <p
                  className="
                    mt-4 sm:mt-6 max-w-lg
                    text-base sm:text-lg font-semibold leading-relaxed sm:leading-8
                    text-black/75
                  "
                >
                  {banner.description}
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Clean Video Card Container — sits below the picture and text */}
          <ScrollReveal variant="scale-in" delay={0.25}>
            <div
              className="
                relative overflow-hidden rounded-2xl
                border-4 border-black
                shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_rgba(0,0,0,1)]
                bg-white
              "
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="
                  h-[380px] sm:h-[480px] md:h-[560px] lg:h-[640px] w-full
                  object-cover
                "
              >
                <source src={banner.videoSrc} type="video/mp4" />
              </video>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
