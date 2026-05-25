// src/components/sections/home/SDGSection.jsx
import { Link } from "react-router-dom"


const goals = [
  {
    number: "03",
    image: "/images/sdg/sdg-03.png",
    title: "Good Health & Well-Being",
    description:
      "Improving awareness, early intervention, and healthcare access for individuals living with sickle cell disease.",
  },

  {
    number: "04",
    image: "/images/sdg/sdg-04.png",
    title: "Quality Education",
    description:
      "Providing accessible education, awareness campaigns, and health literacy programs within communities.",
  },

  {
    number: "09",
    image: "/images/sdg/sdg-09.png",
    title: "Industry & Innovation",
    description:
      "Leveraging AI-powered healthcare tools and digital innovation to improve patient support systems.",
  },

  {
    number: "10",
    image: "/images/sdg/sdg-10.png",
    title: "Reduced Inequalities",
    description:
      "Addressing healthcare disparities affecting underserved communities across Africa and beyond.",
  },
];

export default function SDGSection() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-[#ffffff]
        px-6 py-32
        text-white
      "
    >
      {/* Background Glow 
      <div
        className="
          absolute left-[-10%] top-0
          h-[400px] w-[400px]
          rounded-full
          bg-[#F47B3A]/10
          blur-3xl
        "
      />*/}

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">

          <span
            className="
              text-sm font-semibold uppercase
              tracking-[0.2em]
              text-[#F47B3A]
            "
          >
            Sustainable Development Goals
          </span>

          <h2
            className="
              mt-6
              text-4xl font-bold
              leading-tight
              text-primary-800
              md:text-5xl
            "
          >
            Supporting the United Nations
            Sustainable Development Goals
          </h2>

          <p
            className="
              mx-auto mt-8
              max-w-3xl
              text-lg leading-9
              text-black/70
            "
          >
            Voima Initiative aligns its work
            with global sustainability goals
            focused on healthcare access,
            innovation, education, and reducing
            inequalities in underserved communities.
          </p>

        </div>

        {/* Goals Grid */}
        <div
          className="
            mt-20
            grid gap-8
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {goals.map((goal) => (
            <div
              key={goal.number}
              className="
                group relative overflow-hidden
                rounded-[32px]
                border border-primary-800/10
                bg-white/[0.04]
                p-8
                transition-all duration-500
                hover:-translate-y-2
                hover:bg-white/[0.07]
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]
              "
            >

              {/* Glow */}
              <div
                className="
                  absolute right-[-30px] top-[-30px]
                  h-[100px] w-[100px]
                  rounded-full
                  bg-[#F47B3A]/10
                  blur-3xl
                  transition-all duration-500
                  group-hover:bg-[#F47B3A]/20
                "
              />

              {/* Number */}
              <div
                className="
                  flex h-16 w-16
                  items-center justify-center
                  rounded-2xl
                  bg-[#F47B3A]/10
                  text-2xl font-bold
                  text-[#F47B3A]
                "
              >
                {goal.number}
              </div>

              {/* Content */}
              <h3
                className="
                  mt-8
                  text-2xl font-semibold
                  leading-snug
                  text-primary-800
                "
              >
                {goal.title}
              </h3>

              <p
                className="
                  mt-5
                  leading-8
                  text-primary-800/70
                "
              >
                {goal.description}
              </p>

            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div
          className="
            relative overflow-hidden
            mt-20
            rounded-[48px]
            border border-primary-800/10
            bg-[#800000]
            p-10 md:p-14
            text-center
          "
        >

          {/* Inner Glow */}
          <div
            className="
              absolute right-[-10%] top-[-20%]
              h-[250px] w-[250px]
              rounded-full
              bg-[#F47B3A]/10
              blur-3xl
            "
          />

          <div className="relative">

            <h3
              className="
                text-3xl font-bold
                leading-tight
                text-white/90
                md:text-4xl
              "
            >
              Building a healthier and more
              equitable future through
              technology and community action.
            </h3>

            <p
              className="
                mx-auto mt-6
                max-w-3xl
                text-lg leading-9
                text-white/70
              "
            >
              By combining healthcare advocacy,
              AI innovation, and grassroots
              partnerships, Voima Initiative
              contributes toward sustainable,
              inclusive, and people-centered
              healthcare solutions.
            </p>

            {/* CTA Links */}
            <div
              className="
                mt-10
                flex flex-wrap
                justify-center gap-5
              "
            >

              <Link
               to="/"
                className="
                  rounded-full
                  bg-[#F47B3A]
                  px-8 py-4
                  font-medium
                  text-white
                  transition-all duration-300
                  hover:scale-[1.02]
                "
              >
                Learn More
              </Link>

              <Link
               to="/"
                className="
                  rounded-full
                  border border-white/15
                  bg-white/5
                  px-8 py-4
                  font-medium
                  text-white
                  transition-all duration-300
                  hover:bg-white/10
                "
              >
                Support Our Mission
              </Link>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}