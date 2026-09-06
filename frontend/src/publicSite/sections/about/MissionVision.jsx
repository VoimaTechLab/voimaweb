import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useAbout } from "@/publicSite/hooks/useAbout";

export default function MissionVision() {
  const { missionVisionData } = useAbout();
  return (
    <section className="px-6 py-32 bg-[#fafafa] border-b-4 border-black">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <ScrollReveal variant="fade-down">
            <div className="inline-block bg-[#BC1D26] border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6">
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white">
                {missionVisionData.eyebrow}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.15}>
            <h2 className="text-4xl font-black uppercase leading-none text-black md:text-5xl lg:text-6xl font-heading tracking-tight">
              {missionVisionData.title}
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.25}>
            <p className="mt-8 text-lg leading-9 text-black/75 font-semibold">
              {missionVisionData.description}
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <ScrollReveal variant="fade-right" delay={0.2}>
            <div className="bg-[#BC1D26] p-10 sm:p-12 text-white border-4 border-black shadow-[12px_12px_0px_rgba(0,0,0,1)]">
              <h3 className="text-3xl sm:text-4xl font-black uppercase leading-tight text-white font-heading">
                {missionVisionData.mission.title}
              </h3>

              <p className="mt-6 sm:mt-8 leading-8 sm:leading-9 text-white/90 font-semibold">
                {missionVisionData.mission.content}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-left" delay={0.3}>
            <div className="bg-white p-10 sm:p-12 text-black border-4 border-black shadow-[12px_12px_0px_rgba(0,0,0,1)]">
              <h3 className="text-3xl sm:text-4xl font-black uppercase leading-tight text-black font-heading">
                {missionVisionData.vision.title}
              </h3>

              <p className="mt-6 sm:mt-8 leading-8 sm:leading-9 text-black/75 font-semibold">
                {missionVisionData.vision.content}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}