// src/components/sections/home/CTASection.jsx

import { Link } from "react-router-dom";
import {
  ArrowRight,
  HeartHandshake,
} from "lucide-react";

export default function CTASection() {
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
          absolute left-[-10%] top-[-20%]
          h-[350px] w-[350px]
          rounded-full
          bg-[#F47B3A]/10
          blur-3xl
        "
      />*/}

      <div className="relative mx-auto max-w-6xl">

        <div
          className="
            relative overflow-hidden
            rounded-[48px]
            border border-primary-800/10
            bg-[#800000]
            px-8 py-14
            text-center
            backdrop-blur-xl
            md:px-16 md:py-20
          "
        >

          {/* Inner Glow */}
          <div
            className="
              absolute right-[-10%] top-[-20%]
              h-[260px] w-[260px]
              rounded-full
              bg-[#800000]/10
              blur-3xl
            "
          />

          {/* Icon */}
          <div
            className="
              mx-auto flex h-20 w-20
              items-center justify-center
              rounded-3xl
              bg-[#F47B3A]/10
              text-[#F47B3A]
            "
          >
            <HeartHandshake size={38} />
          </div>

          {/* Heading */}
          <h2
            className="
              mx-auto mt-10
              max-w-4xl
              text-4xl font-bold
              leading-tight
              text-white
              md:text-6xl
            "
          >
            Join us in building a future
            where healthcare support is
            proactive, accessible,
            and life-changing.
          </h2>

          {/* Paragraph */}
          <p
            className="
              mx-auto mt-8
              max-w-3xl
              text-lg leading-9
              text-white/70
            "
          >
            Through technology, advocacy,
            education, and community action,
            Voima Initiative is creating
            innovative healthcare solutions
            that empower individuals living
            with sickle cell disease and
            other chronic conditions.
          </p>

          {/* CTA Buttons */}
          <div
            className="
              mt-12
              flex flex-wrap
              justify-center gap-5
            "
          >

            <Link
              to="/get-involved"
              className="
                inline-flex items-center gap-3
                rounded-full
                bg-[#F47B3A]
                px-8 py-4
                font-medium
                text-white
                transition-all duration-300
                hover:scale-[1.03]
              "
            >
              Get Involved
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/donate"
              className="
                inline-flex items-center
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
    </section>
  );
}