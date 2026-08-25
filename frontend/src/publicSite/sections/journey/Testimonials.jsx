import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { useCallback, useRef } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useTestimonials } from "../../hooks/useJourney";

export default function Testimonials() {
  const testimonials = useTestimonials();
  const autoplay = useRef(
    Autoplay({
      delay: 4000,
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
    <section className="px-6 py-32 bg-[#fafafa] border-b-4 border-black">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-block bg-[#BC1D26] border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6">
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white">
                Community Voices
              </span>
            </div>

            <h2 className="text-5xl font-black uppercase text-black md:text-6xl font-heading tracking-tight">
              Impact beyond the numbers.
            </h2>
          </div>
        </ScrollReveal>

        {/* Carousel */}
        <ScrollReveal variant="scale-in" delay={0.2}>
          <div className="relative mt-20">
            <div
              ref={emblaRef}
              className="overflow-hidden py-4"
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
                        border-4 border-black
                        bg-white
                        px-10
                        py-14
                        text-center
                        shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_rgba(0,0,0,1)]
                        transition-all duration-300
                        hover:shadow-[20px_20px_0px_rgba(188,29,38,1)]
                        hover:-translate-y-2
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
                            border-4
                            border-black
                            object-cover
                            shadow-[6px_6px_0px_rgba(0,0,0,1)]
                          "
                        />

                        <h3 className="mt-5 text-2xl font-black uppercase text-[#BC1D26] font-heading">
                          {item.name}
                        </h3>

                        <p className="mt-1 text-black font-semibold">
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
                  h-14
                  w-14
                  items-center
                  justify-center
                  border-4
                  border-black
                  bg-white
                  text-black
                  shadow-[6px_6px_0px_rgba(0,0,0,1)]
                  transition-all
                  hover:-translate-y-1
                  hover:bg-[#BC1D26]
                  hover:text-white
                "
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={scrollNext}
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  border-4
                  border-black
                  bg-white
                  text-black
                  shadow-[6px_6px_0px_rgba(0,0,0,1)]
                  transition-all
                  hover:-translate-y-1
                  hover:bg-[#BC1D26]
                  hover:text-white
                "
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}