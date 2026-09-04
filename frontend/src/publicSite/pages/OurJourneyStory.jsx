import { useMilestone } from "@/publicSite/hooks/useJourney";
import { Link, useParams } from "react-router-dom";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import DetailSkeleton from "@/components/ui/DetailSkeleton";

export default function OurJourneyStory() {
  const { slug } = useParams();
  const { milestone: story, loading } = useMilestone(slug); // keeps `story` var name

  if (loading && !story) {
    return <DetailSkeleton type="article" />;
  }

  if (!story) {
    return <div className="py-40 text-center">Story not found.</div>;
  }

  return (
    <main className="pt-[90px]">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/our-journey"
            className="
              mb-10
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-black/10
              px-5
              py-3
              transition-all
              duration-300
              hover:border-[#BC1D26]
              hover:text-[#BC1D26]
            "
          >
            ← Back to Journey
          </Link>

          <ScrollReveal variant="fade-up">
            <p className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-[#BC1D26]">
              {story.year}
            </p>

            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#BC1D26] font-heading tracking-tight">
              {story.title}
            </h1>
          </ScrollReveal>

        {story.media.type === "image" ? (
        <img
            src={story.media.src}
            alt={story.title}
            className="
            mt-8 sm:mt-12
            h-[240px] sm:h-[380px] md:h-[500px]
            w-full
            border-4 border-black
            shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_rgba(0,0,0,1)]
            object-cover
            "
         loading="lazy" decoding="async"/>
        ) : (
        <video
            controls
            autoPlay
            muted
            className="
            mt-8 sm:mt-12
            h-[240px] sm:h-[380px] md:h-[500px]
            w-full
            border-4 border-black
            shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_rgba(0,0,0,1)]
            object-cover
            "
        >
            <source
            src={story.media.src}
            type="video/mp4"
            />
        </video>
        )}

          <ScrollReveal variant="fade-up" delay={0.15}>
            <div className="mt-10 sm:mt-16 space-y-6 sm:space-y-8">
              {story.story.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg leading-7 sm:leading-9 text-black/80 font-medium"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.1}>
            <div className="mt-10 sm:mt-16 border-4 border-black bg-white shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_rgba(0,0,0,1)] p-6 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#BC1D26] font-heading tracking-tight">
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
          </ScrollReveal>

          {story.contributors?.length > 0 && (
            <section className="mt-20">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-bold text-[#BC1D26]">
                  {story.contributorsSectionTitle}
                </h2>

                <p className="mt-4 text-black/60">
                  The individuals who helped shape this milestone and
                  move the mission forward.
                </p>
              </div>

              <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {story.contributors.map((person, index) => (
                  <div
                    key={index}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[24px]
                      h-[400px]
                      transition-all
                      duration-500
                      cursor-pointer
                    "
                  >
                    <img
                      src={person.image}
                      alt={person.name}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-110
                      "
                     loading="lazy" decoding="async"/>

                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 opacity-100 transition-opacity duration-500"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold text-white">
                        {person.name}
                      </h3>

                      <p className="mt-2 text-sm font-medium uppercase tracking-[0.1em] text-white/80">
                        {person.role}
                      </p>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 bg-[#BC1D26] rounded-[24px] opacity-0 group-hover:opacity-95 transition-opacity duration-500 flex items-center justify-center p-8 h-[45%]">
                      <p className="text-center italic text-lg leading-8 text-white font-light">
                        "{person.quote}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          {story.gallery?.length > 0 && (
            <section className="mt-24">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-bold text-[#BC1D26]">
                  Moments From This Journey
                </h2>

                <p className="mt-4 text-black/60">
                  Capturing the people, programs and impact that
                  defined this milestone.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
                {story.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="
                      overflow-hidden
                      rounded-[24px]
                      aspect-square
                    "
                  >
                    <img
                      src={image}
                      alt={`${story.title} gallery ${index + 1}`}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        hover:scale-110
                      "
                     loading="lazy" decoding="async"/>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>
      </section>
    </main>
  );
}