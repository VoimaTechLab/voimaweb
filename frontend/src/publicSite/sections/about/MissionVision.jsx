import { useAbout } from "@/publicSite/hooks/useAbout";
export default function StorySection() {
  const { missionVisionData } = useAbout();
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BC1D26]/70">
            {missionVisionData.eyebrow}
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-[#BC1D26]">
            {missionVisionData.title}
          </h2>

          <p className="mt-8 text-lg leading-9 text-black/65">
            {missionVisionData.description}
          </p>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          <div className="rounded-[40px] bg-[#BC1D26] p-12 text-white">
            <h3 className="text-4xl font-bold leading-tight text-white">
              {missionVisionData.mission.title}
            </h3>

            <p className="mt-8 leading-9 text-white/80">
              {missionVisionData.mission.content}
            </p>
          </div>

          <div className="rounded-[40px] bg-[#fff] p-12 text-[#BC1D26] border-2 border-[#BC1D26]/30">
            <h3 className="text-4xl font-bold leading-tight text-[#BC1D26]">
              {missionVisionData.vision.title}
            </h3>

            <p className="mt-8 leading-9 text-[#BC1D26]/80">
              {missionVisionData.vision.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}