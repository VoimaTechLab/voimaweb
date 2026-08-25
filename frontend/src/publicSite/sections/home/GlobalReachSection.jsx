import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";
import MobileMarquee from "@/components/animations/MobileMarquee";

import Reach15kImg from "@/assets/reach/reach_15k.jpg";
import Reach80Img from "@/assets/reach/reach_80.jpg";
import Reach350Img from "@/assets/tools/tool_screening.jpg";
import Reach500Img from "@/assets/tools/tool_app.jpg";

const IMPACT_STATS = [
  {
    value: "15K+",
    number: 15,
    suffix: "K+",
    label: "Reached",
    description: "Through awareness campaigns, outreach programs, and education.",
    detail: "Direct patient outreach, community health workshops, and educational screenings spanning multiple regional clusters.",
    badge: "Public Outreach",
    image: Reach15kImg,
  },
  {
    value: "80+",
    number: 80,
    suffix: "+",
    label: "Interviews",
    description: "Deep conversations with patients and caregivers shaping our product.",
    detail: "Qualitative research gathering real-world clinical stories and daily SCD pain tracking challenges.",
    badge: "Patient Insights",
    image: Reach80Img,
  },
  {
    value: "350+",
    number: 350,
    suffix: "+",
    label: "Community Members",
    description: "Growing community supporting better sickle cell care.",
    detail: "Active network of patients, advocates, family caregivers, and grassroots healthcare volunteers.",
    badge: "Advocacy Network",
    image: Reach350Img,
  },
  {
    value: "500+",
    number: 500,
    suffix: "+",
    label: "Waitlist Signups",
    description: "Strong demand for proactive sickle cell support.",
    detail: "Early adoption pipeline from individuals seeking smart digital crisis tracking tools and care alerts.",
    badge: "Early Access",
    image: Reach500Img,
  },
];

export default function GlobalReachSection() {
  const [active, setActive] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const timerRef = useRef(null);
  const manualTimeoutRef = useRef(null);
  const total = IMPACT_STATS.length;

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

  return (
    <section className="relative overflow-visible bg-[#fafafa] px-6 py-28">
      {/* Curved Double S-Wave Undulation Divider */}
      <div
        className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none"
        style={{ transform: "translateY(-99%)" }}
      >
        <svg viewBox="0 -4 1200 84" preserveAspectRatio="none" className="w-full h-10 sm:h-16 block overflow-visible">
          <path d="M0,50 Q300,0 600,55 T1200,20 L1200,100 L0,100 Z" fill="#fafafa" />
          <path
            d="M0,50 Q300,0 600,55 T1200,20"
            fill="none"
            stroke="black"
            strokeWidth="4"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal variant="fade-down">
            <div className="inline-block bg-[#BC1D26] border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6">
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white">
                REGIONAL REACH & IMPACT
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.15}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-none text-black font-heading tracking-tight mt-6">
              Mobilizing Care Across{" "}
              <span className="inline-block -rotate-2 bg-[#BC1D26] text-white px-4 py-2 border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] mt-2">
                Sub-Saharan Africa
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.25}>
            <p className="mt-8 text-lg font-semibold leading-8 text-black/75">
              Voima Initiative works on the ground with regional healthcare networks, rural clinic outreach teams, and community advocates.
            </p>
          </ScrollReveal>
        </div>

        {/* Horizontal Flex Accordion Cards */}
        <ScrollReveal variant="fade-up" delay={0.2}>
          <MobileMarquee
            items={IMPACT_STATS}
            cardWidth={300}
            gap={16}
            speed={45}
            renderCard={(stat, index) => (
              <div className="relative overflow-hidden rounded-2xl border-2 border-black bg-black shadow-[6px_6px_0px_rgba(0,0,0,1)] h-[380px]">
                <img
                  src={stat.image}
                  alt={stat.label}
                  className="absolute inset-0 w-full h-full object-cover scale-105 brightness-100"
                />
                <div className="absolute inset-0 z-10 p-5 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/25 to-transparent">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-[#BC1D26] text-white border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                      {stat.badge}
                    </span>
                    <span className="text-[11px] font-black uppercase tracking-widest text-white/70">
                      METRIC 0{index + 1}
                    </span>
                  </div>
                  <div className="text-4xl font-black text-white font-heading leading-none tracking-tight">
                    <CountUp from={0} to={stat.number} suffix={stat.suffix} duration={2.0} />
                  </div>
                  <h3 className="text-xl font-black text-[#F47B3A] font-heading leading-tight mt-1">
                    {stat.label}
                  </h3>
                  <div className="w-full h-[1px] bg-white/20 my-2.5" />
                  <p className="text-sm font-bold text-white/95 leading-snug">
                    {stat.description}
                  </p>
                  <p className="mt-1 text-xs text-white/70 font-semibold leading-relaxed border-t border-white/10 pt-1.5 line-clamp-2">
                    {stat.detail}
                  </p>
                </div>
              </div>
            )}
            desktopRender={
              <>
                <div
                  className="mt-20 flex flex-col md:flex-row gap-4 sm:gap-5 w-full h-[600px] md:h-[460px] lg:h-[480px] items-stretch"
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {IMPACT_STATS.map((stat, index) => {
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
                          flex: isExpanded ? 3.5 : 1,
                        }}
                        className={`
                          relative overflow-hidden rounded-2xl cursor-pointer select-none
                          border-2 sm:border-3 border-black
                          bg-black transition-all duration-500 ease-in-out
                          shadow-[6px_6px_0px_rgba(0,0,0,1)]
                          ${
                            isExpanded
                              ? "shadow-[10px_10px_0px_rgba(188,29,38,1)] border-[#BC1D26]"
                              : "hover:border-[#BC1D26]/70"
                          }
                        `}
                      >
                        {/* Background Image */}
                        <img
                          src={stat.image}
                          alt={stat.label}
                          className={`
                            absolute inset-0 w-full h-full object-cover
                            transition-transform duration-700
                            ${isExpanded ? "scale-105 brightness-100" : "scale-100 brightness-50 hover:brightness-70"}
                          `}
                        />

                        {/* Collapsed State View */}
                        <div
                          className={`
                            absolute inset-0 z-20 flex flex-col items-center justify-between p-6 bg-black/40
                            transition-opacity duration-300
                            ${isExpanded ? "opacity-0 pointer-events-none" : "opacity-100"}
                          `}
                        >
                          <span className="inline-block bg-[#BC1D26] text-white border border-black px-2 py-1 text-[10px] font-black uppercase tracking-wider shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                            0{index + 1}
                          </span>

                          <div className="text-center my-auto">
                            <div className="text-3xl lg:text-4xl font-black text-white font-heading leading-tight drop-shadow-md">
                              {stat.value}
                            </div>
                            <div className="mt-2 text-xs font-black uppercase tracking-wider text-white/90 line-clamp-2 drop-shadow">
                              {stat.label}
                            </div>
                          </div>

                          <div className="w-8 h-1 bg-white/40 rounded-full" />
                        </div>

                        {/* Expanded State View */}
                        <div
                          className={`
                            absolute inset-0 z-10 p-7 sm:p-9 flex flex-col justify-end
                            transition-opacity duration-500 bg-gradient-to-t from-black/70 via-black/25 to-transparent
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
                                className="flex flex-col justify-end"
                              >
                                {/* Top Tag & Number */}
                                <div className="flex items-center justify-between mb-4">
                                  <span className="inline-block bg-[#BC1D26] text-white border-2 border-black px-3.5 py-1.5 text-xs font-black uppercase tracking-wider shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                                    {stat.badge}
                                  </span>
                                  <span className="text-xs font-black uppercase tracking-widest text-white/60">
                                    METRIC 0{index + 1} / 0{total}
                                  </span>
                                </div>

                                {/* Large Stat Title (White) */}
                                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-heading leading-none tracking-tight">
                                  <CountUp
                                    from={0}
                                    to={stat.number}
                                    suffix={stat.suffix}
                                    duration={2.0}
                                  />
                                </div>

                                <h3 className="text-2xl sm:text-3xl font-black text-[#F47B3A] font-heading leading-tight mt-1">
                                  {stat.label}
                                </h3>

                                {/* Divider */}
                                <div className="w-full h-[2px] bg-white/30 my-4" />

                                {/* Main Description */}
                                <p className="text-base sm:text-lg font-bold text-white/95 leading-relaxed max-w-xl">
                                  {stat.description}
                                </p>

                                {/* Detailed Narrative */}
                                <p className="mt-2 text-xs sm:text-sm text-white/70 font-semibold leading-relaxed border-t border-white/10 pt-2 max-w-xl">
                                  {stat.detail}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Progress Indicators / Jump buttons */}
                <div className="flex items-center justify-center gap-3 mt-8">
                  {IMPACT_STATS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goTo(idx)}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      aria-label={`View impact stat ${idx + 1}`}
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
