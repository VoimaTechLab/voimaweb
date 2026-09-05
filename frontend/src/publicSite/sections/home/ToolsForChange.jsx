import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Activity, GraduationCap, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import MobileMarquee from "@/components/animations/MobileMarquee";

import ToolAppImg from "@/assets/tools/tool_app.webp";
import ToolScreeningImg from "@/assets/tools/tool_screening.webp";
import ToolTrainingImg from "@/assets/tools/tool_training.webp";

const TOOLS_DATA = [
  {
    icon: Smartphone,
    title: "Voima Mobile App & Crisis Tracker",
    description:
      "Intelligent symptom logging, hydration tracking, and instant crisis alerts empowering patients and caregivers to anticipate pain before emergencies.",
    link: "/voima-app",
    btnText: "Explore App",
    badge: "Digital Health",
    image: ToolAppImg,
  },
  {
    icon: Activity,
    title: "Newborn Screening & Diagnostic Kit",
    description:
      "Rapid point-of-care screening protocols and diagnostic tools designed for rural health clinics and early infant detection programs.",
    link: "/about",
    btnText: "Learn More",
    badge: "Clinical Diagnostic",
    image: ToolScreeningImg,
  },
  {
    icon: GraduationCap,
    title: "Community Training & Caregiver Workshops",
    description:
      "Free downloadable health guides, medical workshop modules, and community health worker training programs across sub-Saharan Africa.",
    link: "/get-involved",
    btnText: "Access Training",
    badge: "Education & Care",
    image: ToolTrainingImg,
  },
];

export default function ToolsForChange() {
  const [active, setActive] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const timerRef = useRef(null);
  const manualTimeoutRef = useRef(null);
  const total = TOOLS_DATA.length;

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
      {/* Wave Trough Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none" style={{ transform: "translateY(-99%)" }}>
        <svg viewBox="0 -4 1200 84" preserveAspectRatio="none" className="w-full h-10 sm:h-16 block overflow-visible">
          <polygon points="0,40 400,0 800,80 1200,20 1200,100 0,100" fill="#fafafa" />
          <polyline points="0,40 400,0 800,80 1200,20" fill="none" stroke="black" strokeWidth="4" vectorEffect="non-scaling-stroke" strokeLinejoin="miter" />
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
                TOOLS FOR CHANGE
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.15}>
            <h2 className="text-4xl font-black uppercase leading-none text-black md:text-5xl lg:text-6xl font-heading tracking-tight">
              We've got the tools for{" "}
              <span className="inline-block -rotate-1 bg-[#BC1D26] text-white px-4 py-2 border-2 border-black shadow-[5px_5px_0px_rgba(0,0,0,1)] mt-2">
                Sickle Cell Care!
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.25}>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/75 font-semibold">
              Explore our mobile tracking app, rapid newborn screening tools, and community health training modules empowering patients, families, and medical teams across Africa.
            </p>
          </ScrollReveal>
        </div>

        {/* Horizontal Flex Accordion */}
        <div className="mt-20">
          <MobileMarquee
            items={TOOLS_DATA}
            cardWidth={300}
            gap={16}
            speed={45}
            renderCard={(tool) => {
              return (
                <div className="relative overflow-hidden rounded-2xl border-2 border-black bg-black shadow-[6px_6px_0px_rgba(0,0,0,1)] h-[380px]">
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className="absolute inset-0 w-full h-full object-cover scale-105 brightness-100"
                   loading="lazy" decoding="async"/>
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/25 to-transparent p-5 flex flex-col justify-end">
                    <div className="inline-flex items-center gap-1.5 bg-[#BC1D26] px-3 py-1 text-xs font-black uppercase tracking-wider text-white border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] mb-3 self-start">
                      <Sparkles size={12} /> {tool.badge}
                    </div>
                    <h3 className="text-2xl font-black uppercase leading-tight text-white font-heading">
                      {tool.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/90 font-semibold leading-relaxed">
                      {tool.description}
                    </p>
                    <Link
                      to={tool.link}
                      className="mt-4 inline-flex items-center gap-2 bg-white px-4 py-2 text-xs font-black uppercase tracking-wider text-[#BC1D26] border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] self-start hover:shadow-[5px_5px_0px_rgba(0,0,0,1)]"
                    >
                      {tool.btnText}
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            }}
            desktopRender={
              <>
                <div
                  className="flex flex-col md:flex-row gap-4 sm:gap-5 w-full h-[550px] md:h-[460px] lg:h-[500px] items-stretch"
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {TOOLS_DATA.map((tool, index) => {
                    const Icon = tool.icon;
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
                          src={tool.image}
                          alt={tool.title}
                          className={`
                            absolute inset-0 w-full h-full object-cover
                            transition-transform duration-700
                            ${isExpanded ? "scale-105 brightness-100" : "scale-100 brightness-60 hover:brightness-75"}
                          `}
                         loading="lazy" decoding="async"/>

                        {/* Collapsed State — Icon + Badge */}
                        <div
                          className={`
                            absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-black/40
                            transition-opacity duration-300
                            ${isExpanded ? "opacity-0 pointer-events-none" : "opacity-100"}
                          `}
                        >
                          <div className="flex h-16 w-16 items-center justify-center bg-white text-[#BC1D26] border-2 border-black shadow-[3px_3px_0px_rgba(188,29,38,1)]">
                            <Icon size={28} strokeWidth={2.2} />
                          </div>
                          <span className="inline-block bg-[#BC1D26] text-white border-2 border-black px-3 py-1.5 text-xs font-black uppercase tracking-wider shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                            {tool.badge}
                          </span>
                        </div>

                        {/* Expanded Content Overlay */}
                        <div
                          className={`
                            absolute inset-0 z-10
                            bg-gradient-to-t from-black/70 via-black/25 to-transparent
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
                                {/* Badge */}
                                <div className="inline-flex items-center gap-1.5 bg-[#BC1D26] px-3.5 py-2 text-xs font-black uppercase tracking-wider text-white border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] mb-4">
                                  <Sparkles size={13} /> {tool.badge}
                                </div>

                                {/* Icon */}
                                <div className="flex h-14 w-14 items-center justify-center bg-white text-[#BC1D26] border-2 border-black shadow-[3px_3px_0px_rgba(188,29,38,1)] mb-4">
                                  <Icon size={26} strokeWidth={2} />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl sm:text-3xl font-black uppercase leading-tight text-white font-heading">
                                  {tool.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-3 text-sm sm:text-base text-white/90 font-semibold leading-relaxed max-w-xl">
                                  {tool.description}
                                </p>

                                {/* CTA Button */}
                                <Link
                                  to={tool.link}
                                  className="
                                    mt-5 group/btn inline-flex items-center gap-2.5
                                    bg-white px-5 py-3
                                    text-sm font-black uppercase tracking-wider text-[#BC1D26]
                                    border-2 border-black
                                    shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all duration-200
                                    hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)]
                                  "
                                >
                                  {tool.btnText}
                                  <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
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
                  {TOOLS_DATA.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goTo(idx)}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      aria-label={`View tool ${idx + 1}`}
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
        </div>
      </div>
    </section>
  );
}
