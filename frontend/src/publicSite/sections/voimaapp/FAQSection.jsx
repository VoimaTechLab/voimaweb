import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useVoimaApp } from "../../hooks/useVoimaApp";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import FadeStagger from "@/components/animations/FadeStagger";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { faqs } = useVoimaApp();
  return (
    <section className="bg-[#fff] px-6 py-28 border-b-4 border-black overflow-hidden">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center">
          <ScrollReveal variant="fade-down">
            <div className="inline-block bg-[#BC1D26] border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6">
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white">
                Support Center
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.15}>
            <h2 className="text-4xl sm:text-5xl font-black uppercase text-black font-heading tracking-tight">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.25}>
            <p className="mt-6 text-lg leading-8 text-black/75 font-semibold max-w-2xl mx-auto">
              Everything you need to know about the Voima App,
              features, privacy, and getting started.
            </p>
          </ScrollReveal>
        </div>

        {/* FAQ List */}
        <FadeStagger className="mt-16 space-y-5" staggerSpeed="normal">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="
                  overflow-hidden
                  border-4 border-black
                  bg-white
                  shadow-[8px_8px_0px_rgba(0,0,0,1)]
                  mb-6 rounded-2xl
                  transition-all
                  duration-300
                "
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    p-6 sm:p-8
                    text-left
                  "
                >
                  <h3 className="pr-6 text-lg sm:text-xl font-black uppercase text-black font-heading text-left leading-tight">
                    {faq.question}
                  </h3>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      border-2 border-black
                      shadow-[2px_2px_0px_rgba(0,0,0,1)]
                      bg-white
                      text-black
                      shrink-0 rounded-lg
                    "
                  >
                    {isOpen ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </div>
                </button>

                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                    <p className="leading-8 text-black/75 font-semibold text-base sm:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </FadeStagger>
      </div>
    </section>
  );
}