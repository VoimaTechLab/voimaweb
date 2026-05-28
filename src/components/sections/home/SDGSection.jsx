// src/components/sections/home/SDGSection.jsx
import { Link } from "react-router-dom"
import SDG1 from "../../../assets/ourImpact.png"
import SDG2 from "../../../assets/ourImpact.png"
import SDG3 from "../../../assets/ourImpact.png"
import SDG4 from "../../../assets/ourImpact.png"


const goals = [
  {
    number: "03",
    image: SDG1,
    color: "#4C9F38",
    title: "Good Health & Well-Being",
    description:
      "Improving awareness, early intervention, and healthcare access for individuals living with sickle cell disease.",
  },

  {
    number: "04",
    image: SDG2,
    color: "#C5192D",
    title: "Quality Education",
    description:
      "Providing accessible education, awareness campaigns, and health literacy programs within communities.",
  },

  {
    number: "09",
    image: SDG3,
    color: "#FD6925",
    title: "Industry & Innovation",
    description:
      "Leveraging AI-powered healthcare tools and digital innovation to improve patient support systems.",
  },

  {
    number: "10",
    image: SDG4,
    color: "#DD1367",
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
          bg-[#BC1D26]/10
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
              text-[#BC1D26]/70
            "
          >
            Sustainable Development Goals
          </span>

          <h2
            className="
              mt-6
              text-4xl font-bold
              leading-tight
              text-[#BC1D26]
              md:text-5xl
            "
          >
            Supporting the United Nations
            Sustainable Development Goals
          </h2>

          {/*<p
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
          </p>*/}

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
            p-8
            text-white
            min-h-[420px]
            flex flex-col justify-end
            transition-all duration-500
            hover:-translate-y-2
            hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)]
          "
          style={{
            backgroundColor: goal.color,
          }}
        >

          {/* Background Image */}
          <img
            src={goal.image}
            alt={goal.title}
            className="
              absolute inset-0
              h-full w-full
              object-cover
              opacity-25
              transition-all duration-500
              group-hover:scale-110
              group-hover:opacity-30
            "
          />

          {/* Dark Overlay */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-black/70
              via-black/30
              to-black/10
            "
          />

          {/* Content */}
          <div className="relative z-10">

            {/* Number */}
            <div
              className="
                text-6xl font-black
                text-white/20
              "
            >
              {goal.number}
            </div>

            {/* Title */}
            <h3
              className="
                mt-4
                text-2xl font-bold text-white
                leading-snug
              "
            >
              {goal.title}
            </h3>

            {/* Description */}
            <p
              className="
                mt-5
                leading-8
                text-white/85
              "
            >
              {goal.description}
            </p>

          </div>

        </div>
      ))}
        </div>

      </div>
    </section>
  );
}