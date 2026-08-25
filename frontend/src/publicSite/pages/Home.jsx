import Hero from "@/publicSite/sections/home/Hero";
import WhoIsVoima from "@/publicSite/sections/home/WhoIsVoima";
import OurStoryHome from "@/publicSite/sections/home/OurStoryHome";
import ImpactStats from "@/publicSite/sections/home/ImpactStats";
import StorySection from "@/publicSite/sections/home/StorySection";
import TraceFrameworkSection from "@/publicSite/sections/home/TraceFrameworkSection";
import AppShowcaseSection from "@/publicSite/sections/home/AppShowcaseSection";
import GlobalReachSection from "@/publicSite/sections/home/GlobalReachSection";
import ProgramsPreview from "@/publicSite/sections/home/ProgramsPreview";
import NewsPreview from "@/publicSite/sections/home/NewsPreview";
import FAQSection from "@/publicSite/sections/home/FAQSection";
import PartnersSection from "@/publicSite/sections/home/PartnersSection";
import CTASection from "@/publicSite/sections/home/CTASection";
import SEOHead from "@/seo/SEOHead";

export default function Home() {
  return (
    <main>
      <SEOHead />
      <Hero />
      <WhoIsVoima />
      <OurStoryHome />
      <ImpactStats />
      <StorySection />
      <TraceFrameworkSection />
      <AppShowcaseSection />
      <GlobalReachSection />
      <ProgramsPreview />
      <NewsPreview />
      <FAQSection />
      <PartnersSection />
      <CTASection />
    </main>
  );
}
