import { appScreens } from "@/publicSite/data/voimaAppData";

export default function AppScreens() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-[#BC1D26]">
            Explore the experience.
          </h2>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-10">

          {appScreens.map((screen, index) => (
            <div
              key={index}
              className="
                group
                w-[280px]
                transition-all
                duration-500
                hover:-translate-y-4
              "
            >
              <div
                className="
                  overflow-hidden
                  rounded-[45px]
                  border-[10px]
                  border-black
                  shadow-2xl
                "
              >
                <img
                  src={screen.image}
                  alt={screen.title}
                  className="
                    h-[560px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#BC1D26]">
                {screen.title}
              </h3>

              <p className="mt-3 text-black/60">
                {screen.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}