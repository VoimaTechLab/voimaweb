import SDGCard from "@/components/ui/SDGCard/SDGCard";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import { useHome } from "@/publicSite/hooks/useHome";

export default function SDGSection() {
  
const { sdgSection } = useHome();
  const { eyebrow, title, goals } = sdgSection;

  return (
    <section className="relative overflow-hidden bg-[#ffffff] px-6 py-32 text-white">
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          align="center"
          maxWidth="max-w-4xl mx-auto"
        />

        <div
          className="
            mt-20
            grid gap-8
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {goals.map((goal) => (
            <SDGCard key={goal.number} {...goal} />
          ))}
        </div>
      </div>
    </section>
  );
}
