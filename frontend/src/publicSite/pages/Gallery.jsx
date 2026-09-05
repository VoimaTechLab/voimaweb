import { useMemo, useState } from "react";
import { useGallery } from "@/publicSite/hooks/useGallery";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function Gallery() {
  const {
    gallery,
    loading,
  } = useGallery();

  const [activeCategory, setActiveCategory] =
    useState("all");

  const categories = useMemo(() => {
    const cats = gallery.map(
      (item) => item.category
    );

    return [
      "all",
      ...new Set(cats),
    ];
  }, [gallery]);

  const filtered = useMemo(() => {
    if (activeCategory === "all") {
      return gallery;
    }

    return gallery.filter(
      (item) =>
        item.category === activeCategory
    );
  }, [gallery, activeCategory]);

  if (loading) {
    return (
      <section className="px-6 py-32 pt-40 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl text-center font-black uppercase text-xl">
          Loading gallery...
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#fafafa] px-6 pt-36 pb-28 border-b-4 border-black">
      <div className="mx-auto max-w-7xl">

        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal variant="fade-down">
            <div className="inline-block bg-[#BC1D26] border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6">
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white">
                Our Gallery
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.15}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-black font-heading tracking-tight">
              Moments That Matter
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.25}>
            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-8 sm:leading-9 text-black/75 font-semibold">
              Explore our outreach programs, community engagements, events,
              and the people who inspire our mission every day.
            </p>
          </ScrollReveal>
        </div>

        {/* Categories */}
        <ScrollReveal variant="fade-up" delay={0.35}>
          <div className="mt-16 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  border-2 border-black
                  px-6 py-3
                  text-xs font-black uppercase tracking-wider
                  transition-all duration-200
                  ${
                    activeCategory === cat
                      ? "bg-[#BC1D26] text-white shadow-[4px_4px_0px_rgba(0,0,0,1)] -translate-y-0.5"
                      : "bg-white text-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-[#BC1D26] hover:text-white"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Empty State */}
        {!filtered.length && (
          <div className="mt-24 text-center">
            <h3 className="text-2xl font-black uppercase text-black font-heading">
              No images available.
            </h3>

            <p className="mt-3 text-black/75 font-semibold">
              Images for this category will appear here once added.
            </p>
          </div>
        )}

        {/* Masonry Gallery */}
        <div
          className="
            mt-20
            columns-1
            gap-8
            md:columns-2
            lg:columns-3
          "
        >
          {filtered.flatMap((item) =>
            item.images?.map(
              (image, index) => (
                <ScrollReveal key={`${item._id}-${index}`} variant="fade-up" delay={0.1 * (index % 3)}>
                  <div
                    className="
                      group
                      relative
                      mb-8
                      overflow-hidden
                      border-4 border-black
                      bg-white
                      shadow-[10px_10px_0px_rgba(0,0,0,1)]
                      transition-all duration-300
                      hover:-translate-y-1 hover:shadow-[14px_14px_0px_rgba(188,29,38,1)]
                    "
                  >
                    <img
                      src={image}
                      alt={item.title}
                      className="
                        w-full
                        object-cover
                        transition
                        duration-700
                        group-hover:scale-105
                      "
                     loading="lazy" decoding="async"/>

                    <div
                      className="
                        absolute inset-0
                        bg-gradient-to-t
                        from-black/85
                        via-black/30
                        to-transparent
                        opacity-0
                        transition
                        duration-300
                        group-hover:opacity-100
                      "
                    />

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        translate-y-4
                        p-6
                        opacity-0
                        transition
                        duration-300
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >
                      <p
                        className="
                          text-xs
                          font-black
                          uppercase
                          tracking-widest
                          text-white/80
                        "
                      >
                        {item.category}
                      </p>

                      <h3
                        className="
                          mt-2
                          text-xl
                          font-black
                          uppercase
                          text-white
                          font-heading
                        "
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </ScrollReveal>
              )
            )
          )}
        </div>
      </div>
    </section>
  );
}