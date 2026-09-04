import { gallery } from "@/publicSite/data/journeyData";

export default function JourneyGallery() {
  return (
    <section
      id="gallery"
      className="px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-black font-heading tracking-tight">
          Community Gallery
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {gallery.map((image, index) => (
            <div
              key={index}
              className="
                group
                overflow-hidden
                border-4 border-black
                bg-white
                shadow-[8px_8px_0px_rgba(0,0,0,1)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[12px_12px_0px_rgba(188,29,38,1)]
              "
            >
              <img
                src={image}
                alt=""
                className="
                  h-[320px]
                  w-full
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}