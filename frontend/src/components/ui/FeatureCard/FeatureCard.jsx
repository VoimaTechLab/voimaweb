import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { BookOpenCheck, Lightbulb, CheckCircle2, ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import CountUp from "@/components/animations/CountUp";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  image,
  backTitle,
  backStory,
  actionPoints = [],
  ctaLink = "/get-involved",
  iconBgClassName,
  iconColorClassName,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const cardRef = useRef(null);

  // Scroll-driven Parallax Motion for Card Image
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-12, 12]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08]);

  // Helper to extract numeric value vs suffix for CountUp
  const rawStr = String(title || "");
  const numMatch = rawStr.match(/[\d,.]+/);
  const numericVal = numMatch ? parseFloat(numMatch[0].replace(/,/g, '')) : 0;
  const suffixMatch = rawStr.match(/^[^\d]*[\d,.]+(.*)$/);
  const statSuffix = suffixMatch ? suffixMatch[1] : '';

  return (
    <>
      {/* ─── STATIONARY GRID CARD WITH SCROLL MOTION ────────── */}
      <motion.div
        ref={cardRef}
        className="
          group relative overflow-hidden
          border-2 border-black
          bg-white
          shadow-[6px_6px_0px_rgba(0,0,0,1)]
          transition-all duration-500
          hover:shadow-[9px_9px_0px_rgba(0,0,0,1)]
          flex flex-col
          h-full
        "
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
      >
        {/* High-Res Photography Header with Scroll Parallax */}
        {image && (
          <div className="relative h-56 w-full overflow-hidden bg-black border-b-2 border-black">
            <motion.img
              src={image}
              alt={title}
              style={{ y: imageY, scale: imageScale }}
              className="h-[115%] w-full object-cover -top-[7.5%] relative transition-transform duration-700 group-hover:scale-110 brightness-[1.36] contrast-[1.06] saturate-[1.28]"
            />
            <div className="absolute inset-0 bg-white/10 mix-blend-screen pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/10 pointer-events-none" />

            {/* Icon Badge Overlay */}
            {Icon && (
              <div
                className={`
                  absolute bottom-4 left-4
                  flex h-11 w-11
                  items-center justify-center
                  bg-white
                  border-2 border-black
                  shadow-[3px_3px_0px_rgba(0,0,0,1)]
                  ${iconColorClassName || 'text-[#BC1D26]'}
                `}
              >
                <Icon size={20} strokeWidth={2.2} />
              </div>
            )}
          </div>
        )}

        {/* Card Content Body */}
        <div className="p-7 flex-1 flex flex-col justify-between">
          {!image && Icon && (
            <div
              className={`
                mb-5 flex h-14 w-14
                items-center justify-center
                border-2 border-black
                shadow-[3px_3px_0px_rgba(0,0,0,1)]
                ${iconBgClassName} ${iconColorClassName}
              `}
            >
              <Icon size={24} strokeWidth={2.2} />
            </div>
          )}

          <div>
            {/* Animated Stat Number */}
            <div className="text-4xl sm:text-5xl font-black uppercase leading-none text-[#BC1D26] tracking-tight font-heading">
              {numericVal > 0 ? (
                <CountUp
                  from={0}
                  to={numericVal}
                  suffix={statSuffix}
                  duration={2.2}
                />
              ) : (
                title
              )}
            </div>

            <p className="mt-4 text-sm sm:text-base leading-7 text-black/80 font-semibold">
              {description}
            </p>
          </div>

          {/* Trigger Pop-up Modal Button */}
          <div className="mt-6 pt-5 border-t-2 border-black">
            <button
              onClick={() => setModalOpen(true)}
              className="
                group/btn w-full flex items-center justify-between
                bg-white hover:bg-[#BC1D26] hover:text-white
                border-2 border-black
                px-4 py-3 text-xs font-black uppercase tracking-wider text-[#BC1D26]
                transition-all duration-200
                shadow-[3px_3px_0px_rgba(0,0,0,1)]
                hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_rgba(0,0,0,1)]
              "
            >
              <span className="flex items-center gap-2">
                <BookOpenCheck size={16} className="transition-transform duration-300 group-hover/btn:scale-110" />
                Read Key Insights
              </span>
              <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* ─── POP-UP LIGHTBOX MODAL ─────────────────────────────── */}
      <AnimatePresence>
        {modalOpen && (
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setModalOpen(false)}
          >
            {/* Dark Translucent Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative w-full max-w-xl overflow-hidden
                rounded-[36px] bg-white shadow-2xl z-10
                border border-black/5 my-auto
              "
            >
              {/* Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                className="
                  absolute top-5 right-5 z-20
                  flex h-10 w-10 items-center justify-center
                  rounded-full bg-black/60 text-white backdrop-blur-md
                  transition-all duration-300 hover:bg-[#BC1D26] hover:scale-110
                  shadow-lg
                "
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Modal Hero Image */}
              {image && (
                <div className="relative h-64 w-full overflow-hidden bg-black/10">
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Overlaid Badge */}
                  <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
                    <span className="text-4xl font-black text-white tracking-tight font-heading drop-shadow-md">
                      {title}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-white border border-white/20 shadow-md">
                      <Lightbulb size={15} className="text-[#F47B3A]" /> Key Insight
                    </span>
                  </div>
                </div>
              )}

              {/* Modal Body */}
              <div className="p-8 sm:p-10 space-y-6">
                {!image && (
                  <h3 className="text-4xl font-black text-[#BC1D26] tracking-tight font-heading">
                    {title}
                  </h3>
                )}

                {backTitle && (
                  <h4 className="text-2xl font-bold text-[#BC1D26] leading-tight flex items-center gap-2">
                    <Lightbulb size={22} className="text-[#BC1D26] shrink-0" />
                    {backTitle}
                  </h4>
                )}

                {backStory && (
                  <p className="text-base leading-7 text-black/75 bg-[#fafafa] p-5 rounded-2xl border border-black/5">
                    {backStory}
                  </p>
                )}

                {actionPoints.length > 0 && (
                  <div className="space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-black/40">
                      Voima Initiative Action Plan:
                    </p>
                    <div className="grid gap-2.5">
                      {actionPoints.map((point, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 text-sm font-medium text-black/85 bg-white p-3 rounded-xl border border-black/5 shadow-2xs"
                        >
                          <CheckCircle2 size={18} className="text-[#BC1D26] shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Modal Action CTA Button */}
                <div className="pt-4 border-t border-black/5 flex gap-4">
                  <Link
                    to={ctaLink}
                    onClick={() => setModalOpen(false)}
                    className="
                      group/btn inline-flex flex-1 items-center justify-center gap-2
                      rounded-full bg-[#BC1D26] px-6 py-4
                      text-sm font-bold text-white
                      shadow-lg shadow-[#BC1D26]/20 transition-all duration-300
                      hover:bg-[#A11922] hover:scale-[1.02]
                    "
                  >
                    Explore Initiative
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>

                  <button
                    onClick={() => setModalOpen(false)}
                    className="
                      inline-flex items-center justify-center
                      rounded-full border border-black/10 bg-black/5
                      px-6 py-4 text-sm font-bold text-black/70
                      transition-all duration-300 hover:bg-black/10
                    "
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
