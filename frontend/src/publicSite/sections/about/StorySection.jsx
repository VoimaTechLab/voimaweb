import { storyData } from "@/publicSite/data/aboutData";

export default function StorySection() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <img
            src={storyData.image}
            alt="Our Story"
            className="h-[560px] w-full object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BC1D26]/70">
            {storyData.eyebrow}
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-[#BC1D26]">
            {storyData.title}
          </h2>

          <p className="mt-8 text-lg leading-9 text-black/65">
            {storyData.descriptionOne}
          </p>

          <p className="mt-6 text-lg leading-9 text-black/65">
            {storyData.descriptionTwo}
          </p>
        </div>
      </div>
    </section>
  );
}