import { Link, useParams } from "react-router-dom";

import { useAppFeature } from "@/publicSite/hooks/useAppFeatures";

export default function VoimaAppFeature() {
  const { slug } = useParams();
  const { feature, loading } = useAppFeature(slug);

  if (loading && !feature)
    return <div className="py-40 text-center text-black/50">Loading…</div>;

  if (!feature)
    return <div className="py-40 text-center">Feature not found.</div>;

  return (
    <main className="pt-[90px]">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          {/* Back Button */}
          <Link
            to="/voima-app"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black transition hover:border-[#BC1D26] hover:text-[#BC1D26]"
          >
            ← Back to Voima App
          </Link>

          <h1 className="text-6xl font-bold text-[#BC1D26]">
            {feature.title}
          </h1>

          <p className="mt-8 text-xl text-black/65">
            {feature.description}
          </p>

          {feature.heroImage && (
            <img
              src={feature.heroImage}
              alt={feature.title}
              className="mt-12 h-[500px] w-full rounded-[40px] object-cover"
            />
          )}

          <div className="mt-16 space-y-8">
            {feature.content?.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg leading-9 text-black/70"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-16 rounded-[32px] bg-[#fafafa] p-10">
            <h2 className="text-2xl font-bold text-[#BC1D26]">
              Key Benefits
            </h2>

            <ul className="mt-8 space-y-4">
              {feature.highlights?.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}