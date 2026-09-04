import MobileMarquee from "@/components/animations/MobileMarquee";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { useHome } from "@/publicSite/hooks/useHome";

export default function TraceFrameworkSection() {
  const { traceFrameworkSection } = useHome();

  const [active, setActive] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const timerRef = useRef(null);
  const manualTimeoutRef = useRef(null);

  const pillars = traceFrameworkSection?.pillars || [];
  const total = pillars.length;


  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 5000);
  }, [total]);

  useEffect(() => {
    if (hoveredIdx !== null) {
      clearInterval(timerRef.current);
      return;
    }
    resetTimer();
    return () => {
      clearInterval(timerRef.current);
      clearTimeout(manualTimeoutRef.current);
    };
  }, [hoveredIdx, resetTimer]);

  const goTo = (idx) => {
    setActive(idx);
    clearInterval(timerRef.current);
    clearTimeout(manualTimeoutRef.current);
    manualTimeoutRef.current = setTimeout(() => {
      resetTimer();
    }, 20000);
  };

  const currentActive = hoveredIdx !== null ? hoveredIdx : active;

  if (!traceFrameworkSection || !pillars.length) return null;

  return (
    <section className="relative overflow-visible bg-[#fafafa] px-6 py-28">
      {/* Stepped Multi-Tooth Zigzag Divider */}
      <div
        className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none"
        style={{ transform: "translateY(-99%)" }}
      >
        <svg viewBox="0 -4 1200 84" preserveAspectRatio="none" className="w-full h-10 sm:h-16 block overflow-visible">
          <polygon points="0,70 240,15 500,65 760,10 1020,70 1200,25 1200,100 0,100" fill="#fafafa" />
          <polyline
            points="0,70 240,15 500,65 760,10 1020,70 1200,25"
            fill="none"
            stroke="black"
            strokeWidth="4"
            vectorEffect="non-scaling-stroke"
            strokeLinejoin="miter"
          />
        </svg>
      </div>

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal variant="fade-down">
            <div className="inline-block bg-[#BC1D26] border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6">
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white">
                 {traceFrameworkSection.eyebrow}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.15}>
            <h2 className="text-4xl font-black uppercase leading-none text-black md:text-5xl lg:text-6xl font-heading tracking-tight">
                {traceFrameworkSection.title}{" "}
              <span className="inline-block -rotate-1 bg-[#BC1D26] text-white px-4 py-2 border-2 border-black shadow-[5px_5px_0px_rgba(0,0,0,1)] mt-2">
                {traceFrameworkSection.titleAccent}
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.25}>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/75 font-semibold">
              {traceFrameworkSection.description}
            </p>
          </ScrollReveal>
        </div>

        {/* Horizontal Flex Accordion for TRACE */}
        <ScrollReveal variant="fade-up" delay={0.2}>
          <MobileMarquee
            items={pillars}
            cardWidth={300}
            gap={16}
            speed={45}
            renderCard={(pillar) => (
              <div className="relative overflow-hidden rounded-2xl border-2 border-black bg-black shadow-[6px_6px_0px_rgba(0,0,0,1)] h-[400px]">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="absolute inset-0 w-full h-full object-cover scale-105 brightness-100"
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/25 to-transparent p-5 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex h-8 w-8 items-center justify-center bg-[#BC1D26] text-white border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] font-black text-sm font-heading">
                      {pillar.letter}
                    </div>
                    <span className="inline-block bg-white text-[#BC1D26] px-2.5 py-1 text-[11px] font-black uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black uppercase leading-tight text-white font-heading">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/90 font-semibold leading-relaxed">
                    {pillar.description}
                  </p>
                  <p className="mt-2 text-xs text-white/70 font-normal leading-relaxed border-t border-white/20 pt-2 line-clamp-2">
                    {pillar.detail}
                  </p>
                  <Link
                    to={pillar.link}
                    className="mt-4 inline-flex items-center gap-2 bg-white px-4 py-2 text-xs font-black uppercase tracking-wider text-[#BC1D26] border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] self-start"
                  >
                    Explore {pillar.title}
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            )}
            desktopRender={
              <>
                <div
                  className="mt-20 flex flex-col md:flex-row gap-4 sm:gap-5 w-full h-[620px] md:h-[480px] lg:h-[520px] items-stretch"
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {pillars.map((pillar, index) => {
                    const isExpanded = currentActive === index;

                    return (
                      <motion.div
                        key={index}
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
                          border-2 border-black bg-black
                          transition-all duration-500 ease-in-out
                          shadow-[6px_6px_0px_rgba(0,0,0,1)]
                          ${
                            isExpanded
                              ? "shadow-[10px_10px_0px_rgba(188,29,38,1)] border-[#BC1D26]"
                              : "hover:border-[#BC1D26]/70"
                          }
                        `}
                      >
                        {/* Full-Height Background Image */}
                        <img
                          src={pillar.image}
                          alt={pillar.title}
                          className={`
                            absolute inset-0 w-full h-full object-cover
                            transition-transform duration-700
                            ${isExpanded ? "scale-105 brightness-100" : "scale-100 brightness-50 hover:brightness-70"}
                          `}
                        />

                        {/* Collapsed State — Letter + Pillar Name */}
                        <div
                          className={`
                            absolute inset-0 z-20 flex flex-col items-center justify-between p-6 bg-black/40
                            transition-opacity duration-300
                            ${isExpanded ? "opacity-0 pointer-events-none" : "opacity-100"}
                          `}
                        >
                          <div className="flex h-12 w-12 items-center justify-center bg-[#BC1D26] text-white border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] font-black text-xl font-heading">
                            {pillar.letter}
                          </div>

                          <div className="text-center my-auto">
                            <h3 className="text-lg font-black uppercase text-white font-heading tracking-wider drop-shadow-md">
                              {pillar.title}
                            </h3>
                          </div>

                          <div className="w-8 h-1 bg-white/40 rounded-full" />
                        </div>

                        {/* Expanded Content Overlay */}
                        <div
                          className={`
                            absolute inset-0 z-10
                            bg-gradient-to-t from-black/70 via-black/25 to-transparent
                            p-6 sm:p-9 flex flex-col justify-end
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
                                {/* Letter Tag & Badge */}
                                <div className="flex items-center gap-3 mb-4">
                                  <div className="flex h-10 w-10 items-center justify-center bg-[#BC1D26] text-white border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] font-black text-lg font-heading">
                                    {pillar.letter}
                                  </div>
                                  <span className="inline-block bg-white text-[#BC1D26] px-3.5 py-1.5 text-xs font-black uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                                    {pillar.badge}
                                  </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase leading-tight text-white font-heading">
                                  {pillar.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-3 text-sm sm:text-base text-white/90 font-semibold leading-relaxed max-w-xl">
                                  {pillar.description}
                                </p>

                                {/* Detailed Narrative */}
                                <p className="mt-3 text-xs sm:text-sm text-white/70 font-normal leading-relaxed border-t border-white/20 pt-3 max-w-xl">
                                  {pillar.detail}
                                </p>

                                {/* CTA Link */}
                                <Link
                                  to={pillar.link}
                                  className="
                                    mt-5 group/btn inline-flex items-center gap-2
                                    bg-white px-5 py-3
                                    text-xs sm:text-sm font-black uppercase tracking-wider text-[#BC1D26]
                                    border-2 border-black
                                    shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all duration-200
                                    hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)]
                                  "
                                >
                                  Explore {pillar.title}
                                  <ArrowRight size={15} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                                </Link>
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
                  {pillars.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goTo(idx)}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      aria-label={`View pillar ${idx + 1}`}
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
      </div>
    </section>
  );
}
