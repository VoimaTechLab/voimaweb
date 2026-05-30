import FeatureCard from "@/components/ui/FeatureCard/FeatureCard";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import { impactSection } from "@/data/homeData";

export default function ImpactStats() {
  const { eyebrow, title, areas, banner } = impactSection;

  return (
    <section
      className="relative overflow-hidden bg-white px-6 py-28"
      aria-label="Impact statistics"
    >
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader eyebrow={eyebrow} title={title} />

        <div
          className="
            mt-20
            grid gap-6
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {areas.map((area) => (
            <FeatureCard key={area.title} {...area} />
          ))}
        </div>

        <div className="mt-32">
          <div
            className="
              relative overflow-hidden
              rounded-[48px]
              border border-black/5
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            "
          >
            <div
              className="
                absolute inset-0 z-10
                bg-gradient-to-r
                from-black/75
                via-black/40
                to-black/10
              "
            />

            <video
              autoPlay
              muted
              loop
              playsInline
              className="
                h-[500px] w-full
                object-cover
                md:h-[650px]
                lg:h-[720px]
              "
            >
              <source src={banner.videoSrc} type="video/mp4" />
            </video>

            <div
              className="
                absolute inset-0 z-20
                flex flex-col
                justify-end
                p-8 md:p-16 lg:p-20
              "
            >
              <span
                className="
                  mb-5 w-fit
                  rounded-full
                  bg-white
                  px-4 py-2
                  text-sm font-bold
                  text-[#BC1D26]
                "
              >
                {banner.badge}
              </span>

              <h3
                className="
                  max-w-3xl
                  text-3xl font-bold
                  leading-tight text-white
                  md:text-5xl
                "
              >
                {banner.title}
              </h3>

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-lg leading-8
                  text-white/80
                "
              >
                {banner.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
