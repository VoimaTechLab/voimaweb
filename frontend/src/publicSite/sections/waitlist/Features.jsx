import {
    features
} from "@/publicSite/data/waitlistData";

export default function Features() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item, index) => (
            <article
              key={index}
              className="
                rounded-[32px]
                border
                border-black/5
                bg-white
                p-8
              "
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#BC1D26]/10
                  text-[#BC1D26]
                "
              >
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#BC1D26]">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-black/60">
                {item.description}
              </p>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}