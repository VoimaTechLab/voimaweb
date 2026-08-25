import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAppFeatures } from "../../hooks/useAppFeatures";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2,
  Activity
} from "lucide-react";

// Real, authentic photography images used across the Home cards
import TechImg from "@/assets/programs/trace_tech.jpg";
import ScreeningImg from "@/assets/tools/tool_screening.jpg";
import ResearchImg from "@/assets/programs/trace_research.jpg";
import ToolAppImg from "@/assets/tools/tool_app.jpg";
import CaregiverImg from "@/assets/impact/story_amina.jpg";
import CommunityImg from "@/assets/news/news_community.png";

const FEATURE_BACKGROUNDS = [
  TechImg,        // Feature 01: Crisis Risk Alerts (Tech & Data Monitoring)
  ScreeningImg,   // Feature 02: Pain & Trigger Tracking (Clinical Health Screening)
  ResearchImg,    // Feature 03: Personalized Health Insights (Clinical Research & Insights)
  ToolAppImg,     // Feature 04: Medication Reminders (Mobile Tracking & Reminders)
  CaregiverImg,   // Feature 05: Caregiver Support (Family & Caregiver Support - Amina Story)
  CommunityImg,   // Feature 06: Community Support (Community Gathering & Support Group)
];

const FEATURE_ACCENTS = [
  { accent: "#EF4444", border: "#BC1D26", text: "#FFFFFF", name: "Crisis Risk Alerts" },
  { accent: "#38BDF8", border: "#0284C7", text: "#FFFFFF", name: "Pain & Trigger Tracking" },
  { accent: "#C084FC", border: "#7E22CE", text: "#FFFFFF", name: "Personalized Health Insights" },
  { accent: "#34D399", border: "#059669", text: "#FFFFFF", name: "Medication Reminders" },
  { accent: "#FB923C", border: "#C2410C", text: "#FFFFFF", name: "Caregiver Support" },
  { accent: "#818CF8", border: "#4338CA", text: "#FFFFFF", name: "Community Support" },
];

const AUTO_INTERVAL = 6000; // 6 seconds rotation

export default function AppFeatures() {
  const features = useAppFeatures();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  const timerRef = useRef(null);
  const total = features ? features.length : 0;

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    if (total <= 1) return;
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % total);
    }, AUTO_INTERVAL);
  }, [total]);

  useEffect(() => {
    if (total <= 1) return;
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [total, resetTimer]);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + total) % total);
    resetTimer();
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % total);
    resetTimer();
  };

  const goTo = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
    resetTimer();
  };

  if (!features || features.length === 0) return null;

  const currentFeature = features[current] || features[0];
  const currentBg = FEATURE_BACKGROUNDS[current % FEATURE_BACKGROUNDS.length];
  const CurrentIcon = currentFeature.icon || Activity;
  const theme = FEATURE_ACCENTS[current % FEATURE_ACCENTS.length];

  const variants = {
    enter: (d) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section 
      className="bg-white px-6 py-24 sm:py-32 border-b-4 border-black overflow-hidden relative"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <ScrollReveal variant="fade-down">
            <div className="inline-block bg-[#BC1D26] border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6">
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white">
                Core Features
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.15}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-none text-black font-heading tracking-tight">
              Everything you need in one place.
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.25}>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-9 text-black/75 font-semibold">
              Designed to support healthier habits, informed decisions, and stronger
              communities through one seamless platform.
            </p>
          </ScrollReveal>
        </div>

        {/* ── ROTATING FEATURE CARD (VIBRANT REAL PHOTOGRAPHY BACKGROUND) ── */}
        <ScrollReveal variant="fade-up" delay={0.3}>
          <div
            className="
              relative w-full overflow-hidden rounded-3xl border-4 border-black
              shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_rgba(0,0,0,1)]
              min-h-[500px] sm:min-h-[560px] bg-neutral-900
            "
          >
            {/* Real Photographic Background Image */}
            <img
              src={currentBg}
              alt={currentFeature.title}
              className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 scale-100"
            />

            {/* High-Contrast Directional Overlay — keeps photographic background clearly visible */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 flex flex-col justify-between p-8 sm:p-12 lg:p-16 min-h-[500px] sm:min-h-[560px] max-w-2xl"
              >
                <div>
                  {/* Badges Row */}
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span
                      className="
                        inline-flex self-start rounded-full
                        px-5 py-2 text-[11px] sm:text-xs
                        font-black uppercase tracking-[0.2em]
                        border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)]
                        transition-all duration-500
                      "
                      style={{
                        backgroundColor: theme.accent,
                        color: "#000000",
                      }}
                    >
                      Feature 0{current + 1}
                    </span>

                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/40 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider">
                      <CurrentIcon size={14} />
                      Voima Module
                    </span>
                  </div>

                  {/* Feature Title */}
                  <h3
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.08] font-heading tracking-tight text-white drop-shadow-md"
                  >
                    {currentFeature.title}
                  </h3>

                  {/* Feature Description */}
                  <p
                    className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl font-medium text-white/95 drop-shadow-sm"
                  >
                    {currentFeature.description}
                  </p>

                  {/* Highlights Pills */}
                  {currentFeature.highlights && currentFeature.highlights.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2 sm:gap-2.5">
                      {currentFeature.highlights.map((highlight, hIdx) => (
                        <span
                          key={hIdx}
                          className="
                            inline-flex items-center gap-1.5
                            bg-black/45 backdrop-blur-md border border-white/30
                            text-white font-semibold text-xs sm:text-sm
                            px-3.5 py-1.5 rounded-xl shadow-sm
                          "
                        >
                          <CheckCircle2 size={14} style={{ color: theme.accent }} />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Explore Feature Button */}
                <div className="mt-8 pt-4">
                  <Link
                    to={`/voima-app/${currentFeature.slug}`}
                    className="
                      inline-flex items-center gap-2.5 self-start
                      rounded-full border-2 border-black
                      px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider
                      shadow-[4px_4px_0px_rgba(0,0,0,1)]
                      transition-all duration-300 hover:scale-105 active:translate-y-0.5
                    "
                    style={{
                      backgroundColor: theme.accent,
                      color: "#000000",
                    }}
                  >
                    Explore Feature
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* ── Navigation Arrows ── */}
            <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-20 flex items-center gap-3">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous feature"
                className="
                  flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center
                  rounded-xl border-2 border-black
                  shadow-[3px_3px_0px_rgba(0,0,0,1)]
                  transition-all duration-300
                  hover:scale-105 active:translate-y-0.5
                "
                style={{
                  backgroundColor: theme.accent,
                  color: "#000000",
                }}
              >
                <ChevronLeft size={22} className="stroke-[2.5]" />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next feature"
                className="
                  flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center
                  rounded-xl border-2 border-black
                  shadow-[3px_3px_0px_rgba(0,0,0,1)]
                  transition-all duration-300
                  hover:scale-105 active:translate-y-0.5
                "
                style={{
                  backgroundColor: theme.accent,
                  color: "#000000",
                }}
              >
                <ChevronRight size={22} className="stroke-[2.5]" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Dots / Feature Indicators ── */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {features.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goTo(idx)}
              aria-label={`Go to feature ${idx + 1}`}
              className={`
                h-3.5 transition-all duration-300 rounded-full border-2 border-black
                ${current === idx ? "w-10 bg-[#BC1D26] shadow-[2px_2px_0px_rgba(0,0,0,1)]" : "w-3.5 bg-black/20 hover:bg-black/40"}
              `}
            />
          ))}
        </div>

      </div>
    </section>
  );
}