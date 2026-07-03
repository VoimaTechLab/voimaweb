import { useJourneyStats } from "../../hooks/useJourney";
export default function GrowthStats() {
  const stats = useJourneyStats();

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-4">
          {stats.map((item, index) => (
            <div key={index}>
              <h3 className="text-6xl font-black text-[#BC1D26]">
                {item.value}
              </h3>

              <p className="mt-3 text-black/60">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}