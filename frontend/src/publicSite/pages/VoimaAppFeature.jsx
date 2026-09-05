import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useAppFeature } from "@/publicSite/hooks/useAppFeatures";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function VoimaAppFeature() {
  const { slug } = useParams();
  const { feature, loading } = useAppFeature(slug);

  if (loading && !feature)
    return <div className="py-40 text-center text-black/50">Loading…</div>;

  if (!feature)
    return (
      <div className="py-40 text-center">
        <h2 className="text-4xl font-black uppercase text-black font-heading tracking-tight">Feature Not Found</h2>
        <Link
          to="/voima-app"
          className="mt-8 inline-flex items-center gap-2 bg-[#BC1D26] border-2 border-black px-6 py-3 font-black uppercase tracking-widest text-white shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]"
        >
          <ArrowLeft size={16} />
          Back to Voima App
        </Link>
      </div>
    );

  return (
    <main className="pt-[90px]">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          {/* Back Button */}
          <Link
            to="/voima-app"
            className="mb-8 inline-flex items-center gap-2 border-2 border-black bg-white px-5 py-3 font-black uppercase tracking-widest text-xs text-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#BC1D26] hover:text-white hover:shadow-[6px_6px_0px_rgba(0,0,0,1)]"
          >
            <ArrowLeft size={16} />
            Back to Voima App
          </Link>

          <ScrollReveal variant="fade-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#BC1D26] font-heading tracking-tight">
              {feature.title}
            </h1>

            <p className="mt-6 sm:mt-8 text-base sm:text-xl text-black/75 font-semibold">
              {feature.description}
            </p>
          </ScrollReveal>

          {feature.heroImage && (
            <img
              src={feature.heroImage}
              alt={feature.title}
              className="mt-8 sm:mt-12 h-[240px] sm:h-[380px] md:h-[500px] w-full border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_rgba(0,0,0,1)] object-cover"
             loading="lazy" decoding="async"/>
          )}

          <ScrollReveal variant="fade-up" delay={0.15}>
            <div className="mt-10 sm:mt-16 space-y-6 sm:space-y-8">
              {feature.content?.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg leading-7 sm:leading-9 text-black/80 font-medium"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.1}>
            <div className="mt-10 sm:mt-16 border-4 border-black bg-white shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_rgba(0,0,0,1)] p-6 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#BC1D26] font-heading tracking-tight">
                Key Benefits
              </h2>

              <ul className="mt-6 sm:mt-8 space-y-4">
                {feature.highlights?.map((item, index) => (
                  <li key={index} className="text-base sm:text-lg font-semibold text-black/75 flex gap-3">
                    <span className="text-[#BC1D26] font-black">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}