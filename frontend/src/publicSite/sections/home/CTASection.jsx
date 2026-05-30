import { ArrowRight, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

import { ctaSection } from "@/data/homeData";

export default function CTASection() {
  const { title, description, primaryCta, secondaryCta } = ctaSection;

  return (
    <section className="relative overflow-hidden bg-[#ffffff] px-6 py-32 text-white">
      <div className="relative mx-auto mt-1 max-w-6xl">
        <div
          className="
            relative overflow-hidden
            rounded-[48px]
            border border-primary-800/10
            bg-[#BC1D26]
            px-8 py-14
            text-center
            backdrop-blur-xl
            md:px-16 md:py-20
          "
        >
          <div
            className="
              absolute right-[-10%] top-[-20%]
              h-[260px] w-[260px]
              rounded-full
              bg-[#800000]/10
              blur-3xl
            "
          />

          <div
            className="
              mx-auto flex h-20 w-20
              items-center justify-center
              rounded-3xl
              bg-[#fff]/10
              text-[#fff]
            "
          >
            <HeartHandshake size={38} />
          </div>

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
            {title}
          </h2>

          <p
            className="
              mx-auto mt-8
              max-w-3xl
              text-lg leading-9
              text-white/70
            "
          >
            {description}
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              to={primaryCta.link}
              className="
                inline-flex items-center gap-3
                rounded-full
                bg-[#fff]
                px-8 py-4
                font-medium
                text-[#BC1D26]
                transition-all duration-300
                hover:scale-[1.03]
              "
            >
              {primaryCta.text}
              <ArrowRight size={18} />
            </Link>

            <Link
              to={secondaryCta.link}
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
              {secondaryCta.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
