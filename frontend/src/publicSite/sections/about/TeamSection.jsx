import { useAbout } from "@/publicSite/hooks/useAbout";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import emmanuelImg from "@/assets/Leaders/Emmanuel.png";
import cherrynImg from "@/assets/Leaders/Cherryn.png";
import spendiloveImg from "@/assets/Leaders/Spendilove.png";
import mildredImg from "@/assets/Leaders/Mildred.png";

/* ── exact border/outline colors extracted from leader images ── */
const MEMBER_THEMES = {
  emmanuel: {
    bg: "#FAF6EE",      // White and Cream
    accent: "#1DC8A2",  // Mint green outline
    textColor: "#000000",
    isLight: true,
  },
  cherrlyn: {
    bg: "#0E7490",      // Deep Teal / Cyan
    accent: "#AD74FB",  // Lavender violet outline
    textColor: "#000000",
    isLight: false,
  },
  spendilove: {
    bg: "#00875A",      // Green (#00875A)
    accent: "#FF8A65",  // Coral (#FF8A65)
    textColor: "#000000",
    isLight: false,
  },
  mildred: {
    bg: "#9F1239",      // Deep Rose / Crimson
    accent: "#FCAD0C",  // Warm Golden Yellow outline
    textColor: "#000000",
    isLight: false,
  },
};

const getMemberTheme = (member, index) => {
  const name = member?.name?.toLowerCase().trim() || "";
  if (name.includes("emmanuel")) return MEMBER_THEMES.emmanuel;
  if (name.includes("cherrlyn") || name.includes("cherryn")) return MEMBER_THEMES.cherrlyn;
  if (name.includes("spendilove")) return MEMBER_THEMES.spendilove;
  if (name.includes("mildred")) return MEMBER_THEMES.mildred;

  const list = [
    MEMBER_THEMES.emmanuel,
    MEMBER_THEMES.cherrlyn,
    MEMBER_THEMES.spendilove,
    MEMBER_THEMES.mildred,
  ];
  return list[index % list.length];
};

const getMemberImage = (member) => {
  const name = member?.name?.toLowerCase().trim() || "";
  if (name.includes("emmanuel dey")) return emmanuelImg;
  if (name.includes("cherrlyn") || name.includes("cherryn")) return cherrynImg;
  if (name.includes("spendilove")) return spendiloveImg;
  if (name.includes("mildred")) return mildredImg;
  return member.image;
};

const AUTO_INTERVAL = 6000; // 6 s default rotation

export default function TeamSection() {
  const { teamData } = useAbout();
  const members = teamData.members || [];
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  /* ── auto-rotate ── */
  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % members.length);
    }, AUTO_INTERVAL);
  }, [members.length]);

  useEffect(() => {
    if (members.length <= 1) return;
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [members.length, resetTimer]);

  const goTo = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
    resetTimer();
  };
  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + members.length) % members.length);
    resetTimer();
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % members.length);
    resetTimer();
  };

  if (!members.length) return null;

  const member = members[current];
  const theme = getMemberTheme(member, current);

  /* framer-motion slide variants */
  const variants = {
    enter: (d) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section className="px-6 py-20 sm:py-32 bg-white border-b-4 border-black overflow-hidden">
      <div className="mx-auto max-w-7xl">

        {/* ── Header ── */}
        <div className="max-w-3xl mb-16">
          <ScrollReveal variant="fade-down">
            <div className="inline-block bg-[#BC1D26] border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6">
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white">
                {teamData.eyebrow}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.15}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-none text-black font-heading tracking-tight">
              {teamData.title}
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.25}>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-9 text-black/75 font-semibold">
              {teamData.description}
            </p>
          </ScrollReveal>
        </div>

        {/* ── Carousel Card ── */}
        <ScrollReveal variant="fade-up" delay={0.3}>
          <div
            className="relative w-full overflow-hidden rounded-3xl border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_rgba(0,0,0,1)] transition-colors duration-500"
            style={{ background: theme.bg }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px] sm:min-h-[480px]"
              >
                {/* ── Left: Text Content ── */}
                <div className="relative z-10 flex flex-col justify-center p-8 sm:p-10 lg:p-14 order-2 lg:order-1">
                  {/* Role badge with matching image outline color */}
                  <span
                    className="
                      inline-flex self-start
                      rounded-full
                      px-5 py-2
                      text-[11px] sm:text-xs
                      font-black uppercase tracking-[0.2em]
                      border-2 border-black
                      shadow-[3px_3px_0px_rgba(0,0,0,1)]
                      mb-6 sm:mb-8
                      transition-all duration-500
                    "
                    style={{
                      backgroundColor: theme.accent,
                      color: theme.textColor,
                    }}
                  >
                    {member.role}
                  </span>

                  {/* Name as headline */}
                  <h3
                    className={`text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[1.1] font-heading tracking-tight transition-colors duration-500 ${theme.isLight ? "text-black" : "text-white"
                      }`}
                  >
                    {member.name}
                  </h3>

                  {/* Bio */}
                  {member.bio && (
                    <p
                      className={`mt-5 sm:mt-7 text-sm sm:text-base leading-7 sm:leading-8 max-w-lg font-medium transition-colors duration-500 ${theme.isLight ? "text-black/75" : "text-white/85"
                        }`}
                    >
                      {member.bio}
                    </p>
                  )}

                  {/* LinkedIn */}
                  {member.linkedin && member.linkedin !== "#" && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className={`
                        mt-6 sm:mt-8
                        inline-flex items-center gap-2 self-start
                        rounded-full
                        border-2
                        px-6 py-2.5
                        text-xs sm:text-sm font-bold uppercase tracking-wider
                        backdrop-blur-sm
                        transition-all duration-300
                        ${theme.isLight
                          ? "border-black/20 bg-black/5 text-black hover:bg-black hover:text-white hover:border-black"
                          : "border-white/30 bg-white/10 text-white hover:bg-white hover:text-black hover:border-white"
                        }
                      `}
                    >
                      LinkedIn
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>

                {/* ── Right: Photo ── */}
                <div className="relative flex items-end justify-center overflow-hidden order-1 lg:order-2 pt-8 lg:pt-0">
                  {/* Person image */}
                  <img
                    src={getMemberImage(member)}
                    alt={member.name}
                    className="
                      relative z-10
                      h-[300px] sm:h-[380px] md:h-[440px] lg:h-[480px]
                      w-auto max-w-full
                      object-contain object-bottom
                      drop-shadow-2xl
                    "
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* ── Navigation Arrows ── */}
            {members.length > 1 && (
              <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-20 flex gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous leader"
                  className="
                    flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center
                    rounded-xl
                    border-2 border-black
                    shadow-[3px_3px_0px_rgba(0,0,0,1)]
                    transition-all duration-300
                    hover:scale-105 active:translate-y-0.5
                  "
                  style={{
                    backgroundColor: theme.accent,
                    color: theme.textColor,
                  }}
                >
                  <ChevronLeft size={22} className="stroke-[2.5]" />
                </button>

                <button
                  onClick={next}
                  aria-label="Next leader"
                  className="
                    flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center
                    rounded-xl
                    border-2 border-black
                    shadow-[3px_3px_0px_rgba(0,0,0,1)]
                    transition-all duration-300
                    hover:scale-105 active:translate-y-0.5
                  "
                  style={{
                    backgroundColor: theme.accent,
                    color: theme.textColor,
                  }}
                >
                  <ChevronRight size={22} className="stroke-[2.5]" />
                </button>
              </div>
            )}

            {/* ── Dots ── */}
            {members.length > 1 && (
              <div className="absolute bottom-6 left-8 sm:bottom-8 sm:left-14 z-20 flex gap-2">
                {members.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goTo(idx)}
                    aria-label={`Go to leader ${idx + 1}`}
                    className={`
                      h-2.5 rounded-full transition-all duration-300
                      ${current === idx
                        ? "w-8"
                        : theme.isLight
                          ? "w-2.5 bg-black/20 hover:bg-black/40"
                          : "w-2.5 bg-white/40 hover:bg-white/70"
                      }
                    `}
                    style={
                      current === idx
                        ? { backgroundColor: theme.accent }
                        : {}
                    }
                  />
                ))}
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}