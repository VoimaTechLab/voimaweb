import { useVoimaApp } from "../../hooks/useVoimaApp";

export default function AppBenefits() {
  const { benefits } = useVoimaApp();
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">

        <h2 className="text-5xl font-bold text-[#BC1D26]">
          Built for everyone.
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {benefits.map((item, index) => (
            <div
              key={index}
              className="
                rounded-[36px]
                border
                border-black/5
                p-10
              "
            >
              <h3 className="text-3xl font-bold text-[#BC1D26]">
                {item.title}
              </h3>

              <p className="mt-5 leading-9 text-black/65">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}