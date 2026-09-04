import SDGCard from "@/components/ui/SDGCard/SDGCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import FadeStagger from "@/components/animations/FadeStagger";
import { useHome } from "@/publicSite/hooks/useHome";

export default function SDGSection() {
  const { sdgSection } = useHome();
  const { eyebrow, title, goals } = sdgSection;

  // Sort goals from smallest to largest SDG number (3 -> 4 -> 9 -> 10)
  const sortedGoals = [...(goals || [])].sort((a, b) => {
    const numA = parseInt(a.number, 10);
    const numB = parseInt(b.number, 10);
    return numA - numB;
  });

  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-6 py-28 border-b-4 border-black">
      <div className="relative mx-auto max-w-7xl">
        {/* Neo-brutalist section header */}
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal variant="fade-down">
            <div className="inline-block bg-[#BC1D26] border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6">
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white">
                {eyebrow}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.15}>
            <h2 className="text-4xl font-black uppercase leading-none text-black md:text-5xl lg:text-6xl font-heading tracking-tight">
              {title}
            </h2>
          </ScrollReveal>
        </div>

        <FadeStagger
          className="
            mt-20
            grid gap-8
            md:grid-cols-2
            lg:grid-cols-4
          "
          staggerSpeed="normal"
        >
          {sortedGoals.map((goal) => (
            <SDGCard key={goal.number} {...goal} />
          ))}
        </FadeStagger>
      </div>
    </section>
  );
}
