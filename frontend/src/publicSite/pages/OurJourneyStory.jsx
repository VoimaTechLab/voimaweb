import { milestones } from "@/publicSite/data/journeyData";
import { useParams } from "react-router-dom";

export default function OurJourneyStory() {
  const { slug } = useParams();

  const story = milestones.find(
    item => item.slug === slug
  );

  if (!story) {
    return (
      <div className="py-40 text-center">
        Story not found.
      </div>
    );
  }

  return (
    <main className="pt-[90px]">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">

          <p className="uppercase tracking-[0.2em] text-[#BC1D26]/60">
            {story.year}
          </p>

          <h1 className="mt-4 text-6xl font-bold text-[#BC1D26]">
            {story.title}
          </h1>

        {story.media.type === "image" ? (
        <img
            src={story.media.src}
            alt={story.title}
            className="
            mt-12
            h-[500px]
            w-full
            rounded-[40px]
            object-cover
            "
        />
        ) : (
        <video
            controls
            className="
            mt-12
            h-[500px]
            w-full
            rounded-[40px]
            object-cover
            "
        >
            <source
            src={story.media.src}
            type="video/mp4"
            />
        </video>
        )}

          <div className="mt-16 space-y-8">
            {story.story.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg leading-9 text-black/70"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-16 rounded-[32px] bg-[#fafafa] p-10">
            <h3 className="text-2xl font-bold text-[#BC1D26]">
              Key Highlights
            </h3>

            <ul className="mt-8 space-y-4">
              {story.story.highlights.map((item, index) => (
                <li key={index}>
                  • {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </main>
  );
}