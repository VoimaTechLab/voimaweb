import { faqs } from "@/publicSite/data/voimaAppData";

export default function FAQSection() {
  return (
    <section className="px-6 py-32 bg-[#fafafa]">
      <div className="mx-auto max-w-4xl">

        <h2 className="text-center text-5xl font-bold text-[#BC1D26]">
          Frequently Asked Questions
        </h2>

        <div className="mt-16 space-y-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-[28px] bg-white p-8"
            >
              <h3 className="font-bold text-[#BC1D26]">
                {faq.question}
              </h3>

              <p className="mt-4 leading-8 text-black/65">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}