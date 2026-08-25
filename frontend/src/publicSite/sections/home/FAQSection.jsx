import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Hero33 from "@/assets/Hero/Hero33.png";

const FAQS = [
  {
    question: "What is the Voima Initiative?",
    answer:
      "Voima Initiative is a healthcare organization and digital platform dedicated to transforming sickle cell disease outcomes in Africa through early infant screening, AI crisis prediction tools, and regional clinic outreach.",
  },
  {
    question: "How does the Voima Mobile App anticipate pain crises?",
    answer:
      "The Voima app tracks daily hydration levels, weather/temperature triggers, and early symptom logs to send personalized preventive guidance and emergency alerts to caregivers before a pain crisis escalates.",
  },
  {
    question: "How can clinics and health workers partner with Voima?",
    answer:
      "Healthcare facilities can join our partner network to receive rapid newborn screening protocols, diagnostic kits, and digital patient management tools. Visit our 'Get Involved' page to sign up.",
  },
  {
    question: "Is patient data safe and private on the Voima platform?",
    answer:
      "Yes. All medical logs and patient records are encrypted end-to-end using strict HIPAA and GDPR compliant health data security standards.",
  },
  {
    question: "How can I support or donate to Voima Initiative?",
    answer:
      "You can support our mission by sponsoring newborn screening kits, funding community health worker training workshops, or partnering as an institutional donor. Contact us or visit our Get Involved page.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-visible bg-[#fafafa] px-6 py-28">
      {/* Harmonic Multi-Peak Crest Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none" style={{ transform: "translateY(-99%)" }}>
        <svg viewBox="0 -4 1200 84" preserveAspectRatio="none" className="w-full h-10 sm:h-16 block overflow-visible">
          <polygon points="0,15 200,70 450,10 750,75 1000,20 1200,65 1200,100 0,100" fill="#fafafa" />
          <polyline points="0,15 200,70 450,10 750,75 1000,20 1200,65" fill="none" stroke="black" strokeWidth="4" vectorEffect="non-scaling-stroke" strokeLinejoin="miter" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl relative">
        {/* Top Centered Badge */}
        <div className="text-center mb-10">
          <ScrollReveal variant="fade-down">
            <div className="inline-block bg-[#BC1D26] border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* 2-Column Content: Header & FAQ Accordion on Left + Image on Right sitting at the bottom */}
        <div className="grid gap-12 lg:grid-cols-12 items-end">
          {/* Left Column: Header + Accordion List */}
          <div className="lg:col-span-7 space-y-6">
            {/* Section Header Title */}
            <div className="text-left mb-6">
              <ScrollReveal variant="fade-up" delay={0.15}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-tight text-black font-heading tracking-tight">
                  Got Questions? We Have{" "}
                  <span className="inline-block -rotate-1 bg-[#BC1D26] text-white px-4 py-1.5 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] mt-2">
                    Answers
                  </span>
                </h2>
              </ScrollReveal>
            </div>

            {/* Accordion List */}
            <div className="space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <ScrollReveal key={idx} variant="fade-up" delay={0.08 * idx}>
                    <div className="group bg-white border-2 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_rgba(188,29,38,1)]">
                      <button
                        onClick={() => toggleFAQ(idx)}
                        className="w-full flex items-center justify-between p-6 sm:p-7 text-left font-black text-base sm:text-lg text-black hover:text-[#BC1D26] transition-colors"
                      >
                        <span className="flex items-center gap-3 pr-4">
                          <HelpCircle size={20} className="text-[#BC1D26] shrink-0" />
                          {faq.question}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="shrink-0"
                        >
                          <ChevronDown size={20} className="text-black/50" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
              })}
            </div>
          </div>

          {/* Right Column: Hero33 Image sitting at the bottom line */}
          <div className="lg:col-span-5 flex flex-col justify-end items-center h-full">
            <ScrollReveal variant="fade-left" className="w-full flex items-end justify-center">
              <img
                src={Hero33}
                alt="Frequently Asked Questions"
                className="w-full max-w-[380px] lg:max-w-full h-auto max-h-[580px] object-contain object-bottom block align-bottom drop-shadow-2xl"
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
