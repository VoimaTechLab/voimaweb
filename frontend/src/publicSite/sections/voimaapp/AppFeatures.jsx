import { features } from "@/publicSite/data/voimaAppData";

export default function AppFeatures() {
  return (
    <section className="px-6 py-32 bg-[#fafafa]">
      <div className="mx-auto max-w-7xl">

        <div className="max-w-3xl">
          <h2 className="text-5xl font-bold text-[#BC1D26]">
            Everything you need in one place.
          </h2>

          <p className="mt-6 text-lg leading-9 text-black/65">
            Designed to support healthier habits, informed decisions,
            and stronger communities.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => (
            <div
              key={index}
              className="
                group
                rounded-[32px]
                border
                border-black/5
                bg-white
                p-8
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              <div className="h-12 w-12 rounded-2xl bg-[#BC1D26]/10" />

              <h3 className="mt-6 text-2xl font-bold text-[#BC1D26]">
                {feature.title}
              </h3>

              <p className="mt-4 leading-8 text-black/65">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}