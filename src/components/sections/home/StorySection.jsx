// src/components/sections/home/StorySection.jsx

import Story from "../../../assets/ourStory.jpg"

export default function StorySection() {
  return (
    <section className="bg-white px-6 py-28">
      <div
        className="
          mx-auto grid
          max-w-7xl
          items-center gap-20
          lg:grid-cols-2
        "
      >

        {/* Left Image */}
        <div className="relative">

          {/* Glow */}
          <div
            className="
              absolute -left-10 -top-10
              h-40 w-40
              rounded-full
              bg-[#F47B3A]/10
              blur-3xl
            "
          />

          <div
            className="
              relative overflow-hidden
              rounded-[40px]
              border border-black/5
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            "
          >
            <img
              src= { Story }
              alt="Voima Initiative community story"
              className="
                h-[650px] w-full
                object-cover
              "
            />
          </div>

          {/* Floating Card */}
          <div
            className="
              absolute bottom-8 left-8
              max-w-xs
              rounded-[28px]
              border border-white/10
              bg-white/90
              p-6
              backdrop-blur-xl
              shadow-xl
            "
          >
            <p
              className="
                text-sm leading-7
                text-black/70
              "
            >
              “Technology alone cannot solve healthcare
              inequality, but human-centered innovation
              can change how people experience care.”
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div>

          <span
            className="
              text-sm font-semibold uppercase
              tracking-[0.2em]
              text-[#F47B3A]
            "
          >
            Our Story
          </span>

          <h2
            className="
              mt-6
              text-4xl font-bold
              leading-tight
              text-[#800000]
              md:text-5xl
            "
          >
            Building hope through
            collaboration, empathy,
            and innovation.
          </h2>

          <div
            className="
              mt-10 space-y-7
              text-lg leading-9
              text-black/70
            "
          >

            <p>
              Voima was founded in 2023 by Emmanuel
              and a group of young leaders who had
              personally witnessed the devastating
              impact of sickle cell disease on their
              families, friends, and communities.
            </p>

            <p>
              For Emmanuel, the mission was deeply
              personal. His best friend, Elijah,
              lived with sickle cell disease and
              spent more time in hospitals than in
              classrooms. Elijah passed away before
              their final Junior High examinations,
              leaving behind a painful reminder of
              how overwhelming chronic illness can
              become without proper support systems.
            </p>

            <p>
              Those experiences exposed a larger
              problem: many people living with
              chronic conditions are forced to
              navigate complex healthcare challenges
              alone, without proactive, personalized,
              or accessible support.
            </p>

            <p>
              In Ghana, the team saw how shortages
              in blood supply, limited crisis
              prevention tools, gaps in awareness,
              and stigma continued to worsen outcomes
              for patients and families.
            </p>

            <p>
              From these experiences, Voima was born
              at the intersection of technology,
              advocacy, and human-centered care.
              Today, the organization is building
              AI-powered tools and support systems
              designed to help individuals better
              understand their health, anticipate
              crises earlier, and live healthier,
              fuller lives.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}