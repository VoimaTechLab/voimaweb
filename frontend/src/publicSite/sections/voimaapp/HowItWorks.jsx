import { steps } from "@/publicSite/data/voimaAppData";

export default function HowItWorks() {
  return (
    <section className="px-6 py-32 bg-[#fafafa]">
      <div className="mx-auto max-w-7xl">

        <h2 className="text-center text-5xl font-bold text-[#BC1D26]">
          How it works
        </h2>

        <div className="mt-20 grid gap-10 lg:grid-cols-3">

          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-[36px] bg-white p-10"
            >
              <span className="text-7xl font-black text-[#BC1D26]/10">
                {step.number}
              </span>

              <h3 className="mt-4 text-3xl font-bold text-[#BC1D26]">
                {step.title}
              </h3>

              <p className="mt-4 text-black/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}