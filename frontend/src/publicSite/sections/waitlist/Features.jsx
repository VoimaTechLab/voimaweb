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
                border-4
                border-black
                bg-white
                p-8
                shadow-[12px_12px_0px_rgba(0,0,0,1)]
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-[10px_10px_0px_rgba(188,29,38,1)] sm:hover:shadow-[16px_16px_0px_rgba(188,29,38,1)]
              "
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  border-4 border-black
                  bg-white
                  shadow-[4px_4px_0px_rgba(0,0,0,1)]
                  text-black
                "
              >
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-black uppercase text-black font-heading">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-black/75 font-semibold">
                {item.description}
              </p>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}