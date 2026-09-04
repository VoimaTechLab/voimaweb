import { lazy, Suspense } from "react";
import Hero from "@/publicSite/sections/home/Hero";
import WhoIsVoima from "@/publicSite/sections/home/WhoIsVoima";
import SEOHead from "@/seo/SEOHead";

// Lazy-loaded below-the-fold sections
const OurStoryHome = lazy(() => import("@/publicSite/sections/home/OurStoryHome"));
const ImpactStats = lazy(() => import("@/publicSite/sections/home/ImpactStats"));
const StorySection = lazy(() => import("@/publicSite/sections/home/StorySection"));
const TraceFrameworkSection = lazy(() => import("@/publicSite/sections/home/TraceFrameworkSection"));
const AppShowcaseSection = lazy(() => import("@/publicSite/sections/home/AppShowcaseSection"));
const GlobalReachSection = lazy(() => import("@/publicSite/sections/home/GlobalReachSection"));
const ProgramsPreview = lazy(() => import("@/publicSite/sections/home/ProgramsPreview"));
const NewsPreview = lazy(() => import("@/publicSite/sections/home/NewsPreview"));
const FAQSection = lazy(() => import("@/publicSite/sections/home/FAQSection"));
const PartnersSection = lazy(() => import("@/publicSite/sections/home/PartnersSection"));
const CTASection = lazy(() => import("@/publicSite/sections/home/CTASection"));

// Lightweight placeholder while section chunks load
const SectionPlaceholder = () => <div className="min-h-[240px] w-full" aria-hidden="true" />;

export default function Home() {
  return (
    <main>
      <SEOHead />
      {/* Above-the-fold (eager) */}
      <Hero />
      <WhoIsVoima />

      {/* Below-the-fold (lazy-loaded chunks) */}
      <Suspense fallback={<SectionPlaceholder />}>
        <OurStoryHome />
      </Suspense>

      <Suspense fallback={<SectionPlaceholder />}>
        <ImpactStats />
      </Suspense>

      <Suspense fallback={<SectionPlaceholder />}>
        <StorySection />
      </Suspense>

      <Suspense fallback={<SectionPlaceholder />}>
        <TraceFrameworkSection />
      </Suspense>

      <Suspense fallback={<SectionPlaceholder />}>
        <AppShowcaseSection />
      </Suspense>

      <Suspense fallback={<SectionPlaceholder />}>
        <GlobalReachSection />
      </Suspense>

      <Suspense fallback={<SectionPlaceholder />}>
        <ProgramsPreview />
      </Suspense>

      <Suspense fallback={<SectionPlaceholder />}>
        <NewsPreview />
      </Suspense>

      <Suspense fallback={<SectionPlaceholder />}>
        <FAQSection />
      </Suspense>

      <Suspense fallback={<SectionPlaceholder />}>
        <PartnersSection />
      </Suspense>

      <Suspense fallback={<SectionPlaceholder />}>
        <CTASection />
      </Suspense>
    </main>
  );
}
