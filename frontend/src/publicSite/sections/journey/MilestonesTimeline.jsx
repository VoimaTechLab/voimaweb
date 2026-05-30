import { milestones } from "@/publicSite/data/journeyData";

export default function MilestonesTimeline() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl space-y-32">

        {milestones.map((item, index) => (
          <div
            key={index}
            className={`
              grid items-center gap-16
              lg:grid-cols-2
              ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}
            `}
          >
            <div className="relative">
              <span
                className="
                absolute
                -top-16
                left-0
                text-[180px]
                font-black
                text-black/[0.04]
                "
              >
                {item.year}
              </span>

              <img
                src={item.image}
                alt={item.title}
                className="
                  h-[500px]
                  w-full
                  rounded-[40px]
                  object-cover
                  shadow-lg
                "
              />
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#BC1D26]/60">
                {item.year}
              </p>

              <h2 className="mt-4 text-5xl font-bold text-[#BC1D26]">
                {item.title}
              </h2>

              <p className="mt-8 text-lg leading-9 text-black/65">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}