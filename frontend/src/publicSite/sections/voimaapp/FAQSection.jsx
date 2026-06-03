import { faqs } from "@/publicSite/data/voimaAppData";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#fff] px-6 py-32">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="text-center">
          <span
            className="
              inline-flex
              px-4 py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#BC1D26]
            "
          >
            Support Center
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#BC1D26]">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg leading-9 text-black/65">
            Everything you need to know about the Voima App,
            features, privacy, and getting started.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="
                  overflow-hidden
                  rounded-[32px]
                  border border-black/5
                  bg-white
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
                    p-8
                    text-left
                  "
                >
                  <h3 className="pr-8 text-xl font-bold text-[#BC1D26]">
                    {faq.question}
                  </h3>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-[#BC1D26]/10
                      text-[#BC1D26]
                      shrink-0
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
                  <div className="px-8 pb-8">
                    <p className="leading-8 text-black/65">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}