// src/components/sections/home/StorySection.jsx

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Story from "../../../assets/ourStory.jpg";

export default function StorySection() {
  return (
    <section className="bg-white px-6 py-28">
      <div
        className="
          mx-auto grid
          max-w-7xl
          items-center gap-16
          lg:grid-cols-2
        "
      >

        {/* Left Image */}
        <div className="relative">

          {/* Glow 
          <div
            className="
              absolute -left-10 -top-10
              h-40 w-40
              rounded-full
              bg-[#F47B3A]/10
              blur-3xl
            "
          />*/}

          <div
            className="
              relative overflow-hidden
              rounded-[36px]
              border border-black/5
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            "
          >
            <img
              src={Story}
              alt="Voima Initiative community story"
              className="
                h-[520px] w-full
                object-cover
              "
            />
          </div>

          {/* Floating Card */}
          <div
            className="
              absolute bottom-6 left-6
              max-w-xs
              rounded-[24px]
              border border-white/10
              bg-white/90
              p-5
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
              can transform how people experience care.”
            </p>
          </div>

        </div>

        {/* Right Content */}
        <div>

          <span
            className="
              text-sm font-semibold uppercase
              tracking-[0.2em]
              text-[#BC1D26]/70
            "
          >
            Our Story
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
            Building hope through
            collaboration, empathy,
            and innovation.
          </h2>

          <div
            className="
              mt-8
              text-lg leading-9
              text-black/70
            "
          >
            <p>
              Born from loss and fueled by purpose,
              Voima was founded in 2023 by Emmanuel
              and young leaders to build AI-powered
              healthcare solutions that help people
              anticipate crises, understand their
              health, and reclaim their lives —
              because no one should face chronic
              illness alone.
            </p>
          </div>

          {/* CTA Button */}
          <Link
            to="/journey"
            className="
              mt-10 inline-flex
              items-center gap-2
              rounded-full
              bg-[#BC1D26]
              px-7 py-4
              text-sm font-semibold
              text-white
              shadow-lg shadow-[#BC1D26]/20
              transition-all duration-300
              hover:scale-[1.03]
              hover:bg-[#A11922]
            "
          >
            Read Our Journey
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>
    </section>
  );
}