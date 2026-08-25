// src/pages/SCDResources.jsx
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function SCDResources() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <ScrollReveal variant="fade-up">
        <h1 className="text-4xl font-black uppercase tracking-tight mb-8">SCD Resources</h1>
        <p className="text-lg leading-8 text-black/75">
          Explore our collection of resources, educational materials, and support links for Sickle Cell Disease (SCD).
        </p>
      </ScrollReveal>
    </div>
  );
}
