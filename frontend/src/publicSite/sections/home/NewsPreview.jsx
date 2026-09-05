import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import MobileMarquee from "@/components/animations/MobileMarquee";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useHome } from "@/publicSite/hooks/useHome";

export default function BlogPreview() {
  const { newsPreviewSection } = useHome();

  const eyebrow = newsPreviewSection?.eyebrow || "NEWS / STORIES";
  const title = newsPreviewSection?.title || "Latest From Voima.";
  const description =
    newsPreviewSection?.description ||
    "Explore the latest news, stories and updates from Voima.";

  const homepageArticles = newsPreviewSection?.articles || [];
  const total = homepageArticles.length;

  const [active, setActive] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const timerRef = useRef(null);
  const manualTimeoutRef = useRef(null);

  const resetTimer = useCallback(() => {
    if (total === 0) return;
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 5000);
  }, [total]);

  useEffect(() => {
    if (hoveredIdx !== null) {
      clearInterval(timerRef.current);
    } else {
      resetTimer();
    }

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

  if (total === 0) return null;

  return (
    <section className="relative overflow-visible bg-white px-6 py-32">
      {/* Slanted Asymmetric Offset Ridge Divider */}
      <div
        className="absolute top-0 left-0 z-20 w-full overflow-hidden pointer-events-none leading-none"
        style={{ transform: "translateY(-99%)" }}
      >
        <svg
          viewBox="0 -4 1200 84"
          preserveAspectRatio="none"
          className="block w-full h-10 overflow-visible sm:h-16"
        >
          <polygon
            points="0,60 480,10 920,80 1200,30 1200,100 0,100"
            fill="#ffffff"
          />
          <polyline
            points="0,60 480,10 920,80 1200,30"
            fill="none"
            stroke="black"
            strokeWidth="4"
            vectorEffect="non-scaling-stroke"
            strokeLinejoin="miter"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <ScrollReveal variant="fade-down">
              <div className="inline-block bg-[#BC1D26] border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6">
                <span className="text-xs font-black uppercase tracking-[0.22em] text-white sm:text-sm">
                  {eyebrow}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.15}>
              <h2 className="text-4xl font-black uppercase leading-none text-black font-heading tracking-tight md:text-5xl lg:text-6xl">
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

        {/* Horizontal Flex Accordion */}
        <ScrollReveal variant="fade-up" delay={0.25}>
          <MobileMarquee
            items={homepageArticles}
            cardWidth={300}
            gap={16}
            speed={45}
            renderCard={(article) => (
              <div className="relative overflow-hidden rounded-2xl border-2 border-black bg-black shadow-[6px_6px_0px_rgba(0,0,0,1)] h-[380px]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="absolute inset-0 object-cover w-full h-full scale-105 brightness-100"
                 loading="lazy" decoding="async"/>
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 bg-gradient-to-t from-black/70 via-black/25 to-transparent">
                  <div className="inline-flex items-center gap-1.5 bg-white text-[#BC1D26] border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-tight shadow-[2px_2px_0px_rgba(0,0,0,1)] mb-3 self-start">
                    <CalendarDays size={12} />
                    {article.date}
                  </div>
                  <h3 className="text-xl font-black uppercase leading-tight text-white font-heading line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-xs font-semibold leading-relaxed text-white/85 sm:text-sm line-clamp-2">
                    {article.description}
                  </p>
                  <Link
                    to={`/blog/${article.slug || ""}`}
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
                  {homepageArticles.map((article, index) => {
                    const isExpanded = currentActive === index;

                    return (
                      <motion.div
                        key={article.id || index}
                        onMouseEnter={() => setHoveredIdx(index)}
                        onClick={() => goTo(index)}
                        layout
                        transition={{
                          layout: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
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
                        {/* Full-Height Background Image */}
                        <img
                          src={article.image}
                          alt={article.title}
                          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
                            isExpanded
                              ? "scale-105 brightness-100"
                              : "scale-100 brightness-75 hover:brightness-90"
                          }`}
                         loading="lazy" decoding="async"/>

                        {/* Collapsed State Badge */}
                        <div
                          className={`absolute top-4 left-4 z-20 transition-opacity duration-300 ${
                            isExpanded
                              ? "opacity-0 pointer-events-none"
                              : "opacity-100"
                          }`}
                        >
                          <span className="inline-flex items-center gap-1.5 bg-white text-[#BC1D26] border-2 border-black px-3 py-1.5 text-xs font-black uppercase tracking-tight shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                            <CalendarDays size={12} />
                            {article.date}
                          </span>
                        </div>

                        {/* Expanded Dark Gradient Content Overlay */}
                        <div
                          className={`absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/25 to-transparent p-6 sm:p-8 flex flex-col justify-end transition-opacity duration-500 ${
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
                                {/* Date Badge */}
                                <div className="inline-flex items-center gap-1.5 bg-[#BC1D26] text-white border-2 border-black px-3.5 py-2 text-xs font-black uppercase tracking-wider shadow-[3px_3px_0px_rgba(0,0,0,1)] mb-4">
                                  <CalendarDays size={14} /> {article.date}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-black uppercase leading-tight text-white font-heading sm:text-3xl">
                                  {article.title}
                                </h3>

                                {/* Description */}
                                <p className="max-w-xl mt-3 text-sm font-semibold leading-relaxed text-white/85 sm:text-base">
                                  {article.description}
                                </p>

                                {/* CTA Button */}
                                <Link
                                  to={`/blog/${article.slug || ""}`}
                                  className="mt-5 group/btn inline-flex items-center gap-2 bg-[#BC1D26] px-5 py-3 text-sm font-black uppercase tracking-wider text-white border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-[6px_6px_0px_rgba(0,0,0,1)]"
                                >
                                  Read More
                                  <ArrowRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                                  />
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
                  {homepageArticles.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goTo(idx)}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      aria-label={`View article ${idx + 1}`}
                      className={`transition-all duration-300 rounded-full border-2 border-black ${
                        currentActive === idx
                          ? "w-10 h-3 bg-[#BC1D26] shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                          : "w-3 h-3 bg-white hover:bg-[#BC1D26]/40"
                      }`}
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