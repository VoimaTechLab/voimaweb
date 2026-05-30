import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import { storySection } from "@/data/homeData";

export default function StorySection() {
  const { eyebrow, title, description, quote, image, imageAlt, cta } =
    storySection;

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
        <div className="relative">
          <div
            className="
              relative overflow-hidden
              rounded-[36px]
              border border-black/5
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            "
          >
            <img
              src={image}
              alt={imageAlt}
              className="h-[520px] w-full object-cover"
            />
          </div>

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
            <p className="text-sm leading-7 text-black/70">&ldquo;{quote}&rdquo;</p>
          </div>
        </div>

        <div>
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            align="left"
            maxWidth=""
            titleClassName="mt-6 text-4xl font-bold leading-tight text-[#BC1D26] md:text-5xl"
          />

          <div className="mt-8 text-lg leading-9 text-black/70">
            <p>{description}</p>
          </div>

          <Link
            to={cta.link}
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
            {cta.text}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
