import { useMemo, useState } from "react";

import { useGallery } from "@/publicSite/hooks/useGallery";

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
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          Loading gallery...
        </div>
      </section>
    );
  }

    return (
    <section className="bg-[#FAFAFA] px-6 py-24">
        <div className="mx-auto max-w-7xl">

        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
            <span
            className="
                inline-flex rounded-full
                bg-[#BC1D26]/10 px-4 py-2
                text-sm font-semibold text-[#BC1D26]
            "
            >
            Our Gallery
            </span>

            <h1
            className="
                mt-6 text-5xl
                font-bold tracking-tight
                text-[#BC1D26]
                md:text-6xl
            "
            >
            Moments That
            <span className="text-[#BC1D26]">
                {" "}Matter
            </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-black/60">
            Explore our outreach programs,
            community engagements, events,
            and the people who inspire our
            mission every day.
            </p>
        </div>

        {/* Categories */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
            <button
                key={cat}
                onClick={() =>
                setActiveCategory(cat)
                }
                className={`
                rounded-full
                px-5 py-3
                text-sm font-semibold
                capitalize
                transition-all duration-300
                ${
                    activeCategory === cat
                    ? "bg-[#BC1D26] text-white shadow-lg"
                    : "border border-black/10 bg-white text-black/70 hover:border-[#BC1D26]/30 hover:text-[#BC1D26]"
                }
                `}
            >
                {cat}
            </button>
            ))}
        </div>

        {/* Empty State */}
        {!filtered.length && (
            <div className="mt-24 text-center">
            <h3 className="text-2xl font-bold">
                No images available.
            </h3>

            <p className="mt-3 text-black/60">
                Images for this category will
                appear here once added.
            </p>
            </div>
        )}

        {/* Masonry Gallery */}
        <div
            className="
            mt-20
            columns-1
            gap-6
            md:columns-2
            lg:columns-3
            "
        >
            {filtered.flatMap((item) =>
            item.images?.map(
                (image, index) => (
                <div
                    key={`${item._id}-${index}`}
                    className="
                    group
                    relative
                    mb-6
                    overflow-hidden
                    rounded-[32px]
                    bg-white
                    shadow-sm
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
                        group-hover:scale-110
                    "
                    />

                    <div
                    className="
                        absolute inset-0
                        bg-gradient-to-t
                        from-black/80
                        via-black/20
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
                        translate-y-8
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
                        font-semibold
                        uppercase
                        tracking-widest
                        text-white/70
                        "
                    >
                        {item.category}
                    </p>

                    <h3
                        className="
                        mt-2
                        text-xl
                        font-bold
                        text-white
                        "
                    >
                        {item.title}
                    </h3>
                    </div>
                </div>
                )
            )
            )}
        </div>
        </div>
    </section>
    );
}