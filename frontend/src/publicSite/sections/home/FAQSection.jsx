import Hero33 from "@/assets/Hero/Hero33.webp";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useHome } from "@/publicSite/hooks/useHome";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
  const { faqSection } = useHome();

  const {
    eyebrow = "FREQUENTLY ASKED QUESTIONS",
    title = "Got Questions? We Have",
    highlightedTitle = "Answers",
    backgroundImage,
    faqs = [],
  } = faqSection || {};

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-visible bg-[#fafafa] px-6 py-28">
      {/* Harmonic Multi-Peak Crest Divider */}
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
            points="0,15 200,70 450,10 750,75 1000,20 1200,65 1200,100 0,100"
            fill="#fafafa"
          />

          <polyline
            points="0,15 200,70 450,10 750,75 1000,20 1200,65"
            fill="none"
            stroke="black"
            strokeWidth="4"
            vectorEffect="non-scaling-stroke"
            strokeLinejoin="miter"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl relative">

        {/* Top Centered Badge */}
        <div className="text-center mb-10">
          <ScrollReveal variant="fade-down">
            <div className="inline-block bg-[#BC1D26] border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white">
                {eyebrow}
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* 2 Column Content */}
        <div className="grid gap-12 lg:grid-cols-12 items-end">

          {/* LEFT */}
          <div className="lg:col-span-7 space-y-6">

            {/* Header */}
            <div className="text-left mb-6">
              <ScrollReveal variant="fade-up" delay={0.15}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-tight text-black font-heading tracking-tight">
                  {title}{" "}

                  {highlightedTitle && (
                    <span className="inline-block -rotate-1 bg-[#BC1D26] text-white px-4 py-1.5 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] mt-2">
                      {highlightedTitle}
                    </span>
                  )}
                </h2>
              </ScrollReveal>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">

              {faqs.length === 0 ? (
                <ScrollReveal variant="fade-up">
                  <div className="bg-white border-2 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] p-8">
                    <p className="font-semibold text-black/60">
                      Frequently asked questions will appear here.
                    </p>
                  </div>
                </ScrollReveal>
              ) : (
                faqs.map((faq, idx) => {
                  const isOpen = openIndex === idx;

                  return (
                    <ScrollReveal
                      key={faq._key || faq._id || idx}
                      variant="fade-up"
                      delay={0.08 * idx}
                    >
                      <div className="group bg-white border-2 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_rgba(188,29,38,1)]">

                        <button
                          onClick={() => toggleFAQ(idx)}
                          className="w-full flex items-center justify-between p-6 sm:p-7 text-left font-black text-base sm:text-lg text-black hover:text-[#BC1D26] transition-colors"
                        >
                          <span className="flex items-center gap-3 pr-4">
                            <HelpCircle
                              size={20}
                              className="text-[#BC1D26] shrink-0"
                            />

                            {faq.question}
                          </span>

                          <motion.div
                            animate={{
                              rotate: isOpen ? 180 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="shrink-0"
                          >
                            <ChevronDown
                              size={20}
                              className="text-black/50"
                            />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              transition={{
                                duration: 0.3,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-7 pt-1 text-sm sm:text-base leading-8 text-black/75 font-semibold border-t-2 border-black bg-[#fafafa]">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                      </div>
                    </ScrollReveal>
                  );
                })
              )}

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-5 flex flex-col justify-end items-center h-full">
            <ScrollReveal
              variant="fade-left"
              className="w-full flex items-end justify-center"
            >
              <img
                src={backgroundImage || Hero33}
                alt={eyebrow}
                className="w-full max-w-[380px] lg:max-w-full h-auto max-h-[580px] object-contain object-bottom block align-bottom drop-shadow-2xl"
               loading="lazy" decoding="async"/>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}