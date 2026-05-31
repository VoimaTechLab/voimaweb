import { testimonials } from "@/publicSite/data/journeyData";

export default function Testimonials() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">

        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BC1D26]/60">
            Community Voices
          </p>

          <h2 className="mt-6 text-5xl font-bold text-[#BC1D26]">
            Impact beyond the numbers.
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <article
              key={index}
              className="
                rounded-[36px]
                border border-black/5
                bg-white
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              <p className="text-lg leading-9 text-black/70">
                "{item.quote}"
              </p>

              <div className="mt-10">
                <h3 className="font-bold text-[#BC1D26]">
                  {item.name}
                </h3>

                <p className="text-sm text-black/50">
                  {item.role}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}