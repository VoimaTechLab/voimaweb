import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { useCallback, useRef } from "react";

import { testimonials } from "@/publicSite/data/journeyData";

export default function Testimonials() {
  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
    },
    [autoplay.current]
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="px-6 py-32 bg-[#fafafa]">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#BC1D26]/60
            "
          >
            Community Voices
          </p>

          <h2 className="mt-6 text-5xl font-bold text-[#BC1D26]">
            Impact beyond the numbers.
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative mt-20">

          <div
            ref={emblaRef}
            className="overflow-hidden"
          >
            <div className="flex">

              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="
                    min-w-0
                    flex-[0_0_100%]
                    px-4
                  "
                >
                  <article
                    className="
                      relative
                      mx-auto
                      max-w-4xl
                      overflow-hidden
                      rounded-[40px]
                      border
                      border-black/5
                      bg-white
                      px-10
                      py-14
                      text-center
                      shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                    "
                  >
                    {/* Quote */}
                    <Quote
                      size={120}
                      className="
                        absolute
                        right-8
                        top-8
                        text-[#BC1D26]/10
                      "
                    />

                    <p
                      className="
                        relative
                        z-10
                        mx-auto
                        max-w-3xl
                        text-2xl
                        leading-relaxed
                        text-black/75
                      "
                    >
                      "{item.quote}"
                    </p>

                    {/* Profile */}
                    <div className="mt-12 flex flex-col items-center">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="
                          h-24
                          w-24
                          rounded-full
                          border-4
                          border-white
                          object-cover
                          shadow-xl
                        "
                      />

                      <h3 className="mt-5 text-2xl font-bold text-[#BC1D26]">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-black/60">
                        {item.role}
                      </p>

                      <p
                        className="
                          mt-1
                          text-xs
                          uppercase
                          tracking-[0.15em]
                          text-black/40
                        "
                      >
                        {item.location}
                      </p>
                    </div>
                  </article>
                </div>
              ))}

            </div>
          </div>

          {/* Controls */}
          <div className="mt-12 flex items-center justify-center gap-4">

            <button
              onClick={scrollPrev}
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-black/10
                transition-all
                hover:border-[#BC1D26]
                hover:text-[#BC1D26]
              "
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={scrollNext}
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-black/10
                transition-all
                hover:border-[#BC1D26]
                hover:text-[#BC1D26]
              "
            >
              <ChevronRight size={20} />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}