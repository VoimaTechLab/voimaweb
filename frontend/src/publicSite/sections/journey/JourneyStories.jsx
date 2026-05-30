import { stories } from "@/publicSite/data/journeyData";

export default function JourneyStories() {
  return (
    <section className="px-6 py-32 bg-[#fafafa]">
      <div className="mx-auto max-w-7xl">

        <h2 className="text-5xl font-bold text-[#BC1D26]">
          Stories From The Journey
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {stories.map((story, index) => (
            <div
              key={index}
              className="
                rounded-[32px]
                bg-white
                p-8
                shadow-sm
              "
            >
              <p className="leading-9 text-black/70">
                "{story.quote}"
              </p>

              <p className="mt-8 font-semibold text-[#BC1D26]">
                — {story.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}