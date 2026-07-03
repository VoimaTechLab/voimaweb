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
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <h1 className="text-5xl font-black">
            Gallery
          </h1>

          <p className="mt-4 text-black/60">
            Explore moments from our
            outreach programs, events,
            and community initiatives.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setActiveCategory(cat)
              }
              className={`
                rounded-full px-5 py-2 text-sm font-medium transition
                ${
                  activeCategory === cat
                    ? "bg-[#BC1D26] text-white"
                    : "bg-black/5 text-black hover:bg-black/10"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {filtered.flatMap((item) =>
            item.images?.map(
              (image, index) => (
                <div
                  key={`${item._id}-${index}`}
                  className="
                    overflow-hidden
                    rounded-3xl
                    bg-gray-100
                  "
                >
                  <img
                    src={image}
                    alt={item.title}
                    className="
                      h-80
                      w-full
                      object-cover
                      transition
                      duration-500
                      hover:scale-105
                    "
                  />
                </div>
              )
            )
          )}
        </div>

      </div>
    </section>
  );
}