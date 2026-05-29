import { gallery } from "@/publicSite/data/journeyData";

export default function JourneyGallery() {
  return (
    <section
      id="gallery"
      className="px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">

        <h2 className="text-5xl font-bold text-[#BC1D26]">
          Community Gallery
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {gallery.map((image, index) => (
            <div
              key={index}
              className="
                group
                overflow-hidden
                rounded-[30px]
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