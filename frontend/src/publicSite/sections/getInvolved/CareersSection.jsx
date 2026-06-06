import { ArrowRight, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

import { careersCTA } from "@/publicSite/data/getinvolvedData";

export default function CareersCTA() {
  return (
    <section className="px-6 py-24">
      <div
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-[48px]
          bg-[#BC1D26]
          px-10
          py-20
          text-white
          md:px-16
        "
      >
        {/* Glow */}
        <div className="absolute right-[-100px] top-[-100px] h-[280px] w-[280px] rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 max-w-4xl">

          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-white/10
              px-5
              py-3
              text-sm
              font-semibold
            "
          >
            <Briefcase size={18} />
            {careersCTA.badge}
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight text-white">
            {careersCTA.title}
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-white/75">
            {careersCTA.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to={careersCTA.primaryButton.link}
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-white
                px-8
                py-5
                font-semibold
                text-[#BC1D26]
                transition-all
                duration-300
                hover:scale-[1.03]
              "
            >
              {careersCTA.primaryButton.label}
              <ArrowRight size={18} />
            </Link>

            <Link
              to={careersCTA.secondaryButton.link}
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/20
                bg-white/10
                px-8
                py-5
                font-semibold
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-white/20
              "
            >
              {careersCTA.secondaryButton.label}
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}









