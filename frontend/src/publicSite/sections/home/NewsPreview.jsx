import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import MobileMarquee from "@/components/animations/MobileMarquee";

import { newsPreviewSection } from "@/data/homeData";

export default function BlogPreview() {
  const { eyebrow, title, description, articles, banner } = newsPreviewSection;

  const [active, setActive] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const timerRef = useRef(null);
  const manualTimeoutRef = useRef(null);
  const total = articles.length;

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
    <section
      className="
        relative overflow-visible
        bg-white
        px-6 py-32
      "
    >
      {/* Slanted Asymmetric Offset Ridge Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none" style={{ transform: "translateY(-99%)" }}>
        <svg viewBox="0 -4 1200 84" preserveAspectRatio="none" className="w-full h-10 sm:h-16 block overflow-visible">
          <polygon points="0,60 480,10 920,80 1200,30 1200,100 0,100" fill="#ffffff" />
          <polyline points="0,60 480,10 920,80 1200,30" fill="none" stroke="black" strokeWidth="4" vectorEffect="non-scaling-stroke" strokeLinejoin="miter" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div
          className="
            flex flex-col gap-10
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div className="max-w-3xl">
            <ScrollReveal variant="fade-down">
              <div className="inline-block bg-[#BC1D26] border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6">
                <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white">
                  {eyebrow}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.15}>
              <h2
                className="
                  text-4xl font-black uppercase
                  leading-none
                  text-black
                  md:text-5xl lg:text-6xl font-heading tracking-tight
                "
              >
                {title}
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal variant="fade-left" delay={0.2}>
            <p
              className="
                max-w-xl
                text-lg leading-8
                text-black/65
              "
            >
              {description}
            </p>
          </ScrollReveal>
        </div>

        {/* Horizontal Flex Accordion */}
        <ScrollReveal variant="fade-up" delay={0.25}>
          <MobileMarquee
            items={articles}
            cardWidth={300}
            gap={16}
            speed={45}
            renderCard={(article) => (
              <div className="relative overflow-hidden rounded-2xl border-2 border-black bg-black shadow-[6px_6px_0px_rgba(0,0,0,1)] h-[380px]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="absolute inset-0 w-full h-full object-cover scale-105 brightness-100"
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/25 to-transparent p-5 flex flex-col justify-end">
                  <div className="inline-flex items-center gap-1.5 bg-white text-[#BC1D26] border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-tight shadow-[2px_2px_0px_rgba(0,0,0,1)] mb-3 self-start">
                    <CalendarDays size={12} />
                    {article.date}
                  </div>
                  <h3 className="text-xl font-black uppercase leading-tight text-white font-heading line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/85 font-semibold leading-relaxed line-clamp-2">
                    {article.description}
                  </p>
                  <Link
                    to="/blog"
                    className="mt-4 inline-flex items-center gap-2 bg-[#BC1D26] px-4 py-2 text-xs font-black uppercase tracking-wider text-white border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] self-start hover:bg-white hover:text-black"
                  >
                    Read More
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            )}
            desktopRender={
              <>
                <div
                  className="mt-20 flex flex-col md:flex-row gap-4 sm:gap-5 w-full h-[550px] md:h-[460px] lg:h-[500px] items-stretch"
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {articles.map((article, index) => {
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
                          border-2 border-black
                          bg-black transition-all duration-500 ease-in-out
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
                          src={article.image}
                          alt={article.title}
                          className={`
                            absolute inset-0 w-full h-full object-cover
                            transition-transform duration-700
                            ${isExpanded ? "scale-105 brightness-100" : "scale-100 brightness-75 hover:brightness-90"}
                          `}
                        />

                        {/* Collapsed State Badge */}
                        <div
                          className={`
                            absolute top-4 left-4 z-20 transition-opacity duration-300
                            ${isExpanded ? "opacity-0 pointer-events-none" : "opacity-100"}
                          `}
                        >
                          <span
                            className="
                              inline-flex items-center gap-1.5
                              bg-white text-[#BC1D26]
                              border-2 border-black px-3 py-1.5
                              text-xs font-black uppercase tracking-tight
                              shadow-[3px_3px_0px_rgba(0,0,0,1)]
                            "
                          >
                            <CalendarDays size={12} />
                            {article.date}
                          </span>
                        </div>

                        {/* Expanded Dark Gradient Content Overlay */}
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
                                {/* Date Badge */}
                                <div className="inline-flex items-center gap-1.5 bg-[#BC1D26] text-white border-2 border-black px-3.5 py-2 text-xs font-black uppercase tracking-wider shadow-[3px_3px_0px_rgba(0,0,0,1)] mb-4">
                                  <CalendarDays size={14} /> {article.date}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl sm:text-3xl font-black uppercase leading-tight text-white font-heading">
                                  {article.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-3 text-sm sm:text-base text-white/85 font-semibold leading-relaxed max-w-xl">
                                  {article.description}
                                </p>

                                {/* CTA Button */}
                                <Link
                                  to="/blog"
                                  className="
                                    mt-5 group/btn inline-flex items-center gap-2
                                    bg-[#BC1D26] px-5 py-3
                                    text-sm font-black uppercase tracking-wider text-white
                                    border-2 border-black
                                    shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all duration-200
                                    hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-[6px_6px_0px_rgba(0,0,0,1)]
                                  "
                                >
                                  Read More
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
                  {articles.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goTo(idx)}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      aria-label={`View article ${idx + 1}`}
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

        {/* Bottom Banner */}
        <ScrollReveal variant="scale-in" delay={0.2} className="mt-20">
          <div
            className="
              relative overflow-hidden
              bg-[#BC1D26]
              border-2 border-black
              shadow-[10px_10px_0px_rgba(0,0,0,1)]
              p-10 md:p-16
              text-center
            "
          >
            <div
              className="
                absolute right-[-10%] top-[-20%]
                h-[260px] w-[260px]
                rounded-full
                bg-[#fff]/10
                blur-3xl
              "
            />

            <div className="relative">
              <h3
                className="
                  text-3xl font-black uppercase
                  leading-tight
                  text-white
                  md:text-5xl font-heading
                "
              >
                {banner.title}
              </h3>

              <p
                className="
                  mx-auto mt-8
                  max-w-3xl
                  text-lg leading-9
                  text-white/90 font-semibold
                "
              >
                {banner.description}
              </p>

              <Link
                to={banner.cta.link}
                className="
                  mt-10 inline-flex
                  items-center justify-center gap-2
                  bg-white
                  border-2 border-black
                  shadow-[5px_5px_0px_rgba(0,0,0,1)]
                  px-8 py-4
                  text-sm font-black uppercase tracking-wider text-[#BC1D26]
                  transition-all duration-300
                  hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_rgba(0,0,0,1)]
                "
              >
                {banner.cta.text}
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}