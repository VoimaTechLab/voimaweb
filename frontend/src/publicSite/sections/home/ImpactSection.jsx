import { useHome } from "@/publicSite/hooks/useHome";

export default function ImpactSection() {
  const { impactStatsSection } = useHome();

  const {
    eyebrow,
    title,
    description,
    stats,
  } = impactStatsSection;

  return (
    <section className="bg-[#ffff] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#BC1D26]
            "
          >
            {eyebrow}
          </p>

          <h2
            className="
              mt-4
              text-4xl
              font-bold
              leading-tight
              text-[#BC1D26]
              md:text-5xl
            "
          >
            {title}
          </h2>

          {description && (
            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-lg
                text-black/60
              "
            >
              {description}
            </p>
          )}
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="
                rounded-[2rem]
                border
                border-black/5
                bg-white
                p-10
                shadow-sm
                transition
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              <h3
                className="
                  text-4xl
                  font-semibold
                  text-[#BC1D26]
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-5
                  text-base
                  leading-7
                  text-black/60
                "
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}