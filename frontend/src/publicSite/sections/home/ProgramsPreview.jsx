import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import MobileMarquee from "@/components/animations/MobileMarquee";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useHome } from "@/publicSite/hooks/useHome";

export default function ProgramsPreview() {
  const { programsPreviewSection } = useHome();

  const eyebrow =
    programsPreviewSection?.eyebrow || "EVENTS / PROGRAMS";

  const title =
    programsPreviewSection?.title || "Events Making an Impact.";

  const description =
    programsPreviewSection?.description ||
    "Explore the events and initiatives driving better sickle cell care.";

  const homepagePrograms =
    programsPreviewSection?.programs || [];

  const total = homepagePrograms.length;
  const hasPrograms = total > 0;

  const [active, setActive] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const timerRef = useRef(null);
  const manualTimeoutRef = useRef(null);

  const clearAllTimers = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current);
  }, []);

  const resetTimer = useCallback(() => {
    if (total <= 1) return;
    clearAllTimers();

    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 5000);
  }, [total, clearAllTimers]);

  useEffect(() => {
    if (!hasPrograms) return;

    if (hoveredIdx !== null) {
      clearAllTimers();
      return;
    }

    resetTimer();

    return () => {
      clearAllTimers();
    };
  }, [hoveredIdx, resetTimer, hasPrograms, clearAllTimers]);

  const goTo = (idx) => {
    setActive(idx);
    clearAllTimers();

    manualTimeoutRef.current = setTimeout(() => {
      resetTimer();
    }, 20000);
  };

  const safeActive = total > 0 ? Math.min(active, total - 1) : 0;
  const currentActive = hoveredIdx !== null ? hoveredIdx : safeActive;

  return (
    <section className="relative overflow-visible bg-[#fafafa] px-6 py-28">
      {/* Triple Asymmetric Chevron Valley Divider */}
      <div
        className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none"
        style={{ transform: "translateY(-99%)" }}
      >
        <svg
          viewBox="0 -4 1200 84"
          preserveAspectRatio="none"
          className="w-full h-10 sm:h-16 block overflow-visible"
        >
          <polygon
            points="0,20 350,75 700,15 1050,65 1200,10 1200,100 0,100"
            fill="#fafafa"
          />
          <polyline
            points="0,20 350,75 700,15 1050,65 1200,10"
            fill="none"
            stroke="black"
            strokeWidth="4"
            vectorEffect="non-scaling-stroke"
            strokeLinejoin="miter"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <ScrollReveal variant="fade-down">
              <div className="inline-block bg-[#BC1D26] border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6">
                <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white">
                  {eyebrow}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.15}>
              <h2 className="text-4xl font-black uppercase leading-none text-black md:text-5xl lg:text-6xl font-heading tracking-tight">
                {title}
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal variant="fade-left" delay={0.2}>
            <p className="max-w-xl text-lg leading-8 text-black/65">
              {description}
            </p>
          </ScrollReveal>
        </div>

        {/* PROGRAM CARDS */}
        {!hasPrograms ? (
          <ScrollReveal variant="fade-up" delay={0.25}>
            <div className="mt-20 border-2 border-black bg-white p-10 text-center shadow-[6px_6px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-black uppercase font-heading">
                Events Coming Soon
              </h3>
              <p className="mt-3 text-black/60">
                Our latest events and initiatives will appear here.
              </p>
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal variant="fade-up" delay={0.25}>
            <MobileMarquee
              items={homepagePrograms}
              cardWidth={300}
              gap={16}
              speed={45}
              renderCard={(program, index) => (
                <div className="relative overflow-hidden rounded-2xl border-2 border-black bg-black shadow-[6px_6px_0px_rgba(0,0,0,1)] h-[380px]">
                  {program.image ? (
                    <img
                      src={program.image}
                      alt={program.title}
                      className="absolute inset-0 w-full h-full object-cover scale-105"
                     loading="lazy" decoding="async"/>
                  ) : (
                    <div className="absolute inset-0 bg-[#1a1a1a]" />
                  )}

                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 flex flex-col justify-end">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-block bg-[#BC1D26] text-white border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                        {program.featured
                          ? "Featured"
                          : `Program 0${index + 1}`}
                      </span>

                      {program.category && (
                        <span className="bg-white text-black border-2 border-black px-2 py-1 text-[10px] font-black uppercase tracking-wider">
                          {program.category}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-black uppercase leading-tight text-white font-heading">
                      {program.title}
                    </h3>

                    <p className="mt-2 text-sm text-white/90 font-semibold leading-relaxed line-clamp-3">
                      {program.description}
                    </p>

                    <Link
                      to={program.link || "/programs"}
                      className="mt-4 inline-flex items-center gap-2 bg-[#BC1D26] px-4 py-2 text-xs font-black uppercase tracking-wider text-white border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] self-start hover:bg-[#A11922]"
                    >
                      Learn More
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              )}
              desktopRender={
                <div
                  className="mt-20 flex flex-col md:flex-row gap-4 sm:gap-5 w-full h-[550px] md:h-[460px] lg:h-[500px] items-stretch"
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {homepagePrograms.map((program, index) => {
                    const isExpanded = currentActive === index;

                    return (
                      <motion.div
                        key={
                          program._id ||
                          program.id ||
                          program.slug?.current ||
                          index
                        }
                        onMouseEnter={() => setHoveredIdx(index)}
                        onClick={() => goTo(index)}
                        layout
                        transition={{
                          layout: {
                            duration: 0.5,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        }}
                        style={{
                          flex: isExpanded ? 3.8 : 1,
                        }}
                        className={`relative overflow-hidden rounded-2xl cursor-pointer select-none border-2 border-black bg-black transition-all duration-500 ease-in-out shadow-[6px_6px_0px_rgba(0,0,0,1)] ${
                          isExpanded
                            ? "shadow-[10px_10px_0px_rgba(188,29,38,1)] border-[#BC1D26]"
                            : "hover:border-[#BC1D26]/70"
                        }`}
                      >
                        {/* IMAGE */}
                        {program.image ? (
                          <img
                            src={program.image}
                            alt={program.title}
                            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
                              isExpanded
                                ? "scale-105 brightness-100"
                                : "scale-100 brightness-50 hover:brightness-70"
                            }`}
                           loading="lazy" decoding="async"/>
                        ) : (
                          <div className="absolute inset-0 bg-[#1a1a1a]" />
                        )}

                        {/* COLLAPSED STATE */}
                        <div
                          className={`absolute inset-0 z-20 flex flex-col items-center justify-between p-6 bg-black/40 transition-opacity duration-300 ${
                            isExpanded
                              ? "opacity-0 pointer-events-none"
                              : "opacity-100"
                          }`}
                        >
                          <span className="inline-block bg-[#BC1D26] text-white border-2 border-black px-3 py-1.5 text-xs font-black uppercase tracking-wider shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                            {program.featured
                              ? "Featured"
                              : `0${index + 1}`}
                          </span>

                          <div className="text-center my-auto">
                            <h3 className="text-lg font-black uppercase text-white font-heading tracking-wider drop-shadow-md">
                              {program.title}
                            </h3>
                          </div>

                          <div className="w-8 h-1 bg-white/40 rounded-full" />
                        </div>

                        {/* EXPANDED CONTENT */}
                        <div
                          className={`absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-black/25 to-transparent p-6 sm:p-8 flex flex-col justify-end transition-opacity duration-500 ${
                            isExpanded
                              ? "opacity-100"
                              : "opacity-0 pointer-events-none"
                          }`}
                        >
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{
                                  duration: 0.35,
                                  ease: "easeOut",
                                }}
                              >
                                <div className="flex items-center gap-2 mb-4">
                                  <div className="inline-block bg-[#BC1D26] text-white border-2 border-black px-3.5 py-1.5 text-xs font-black uppercase tracking-wider shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                                    {program.featured
                                      ? "Featured Program"
                                      : `Program 0${index + 1}`}
                                  </div>

                                  {program.category && (
                                    <span className="bg-white text-black border-2 border-black px-2.5 py-1 text-xs font-black uppercase tracking-wider">
                                      {program.category}
                                    </span>
                                  )}
                                </div>

                                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-heading leading-tight mb-2">
                                  {program.title}
                                </h3>

                                <p className="text-sm sm:text-base text-white/90 font-medium leading-relaxed line-clamp-3 mb-6 max-w-xl">
                                  {program.description}
                                </p>

                                <Link
                                  to={program.link || "/programs"}
                                  className="inline-flex items-center gap-2 bg-[#BC1D26] px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-[#A11922] transition-colors"
                                >
                                  Explore Program
                                  <ArrowRight size={16} />
                                </Link>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              }
            />
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}