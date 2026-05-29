// src/pages/Home.jsx

import AppShowcaseSection from '@/publicSite/sections/home/AppShowcaseSection';
import CTASection from '@/publicSite/sections/home/CTASection';
import Hero from '@/publicSite/sections/home/Hero';
import ImpactStats from '@/publicSite/sections/home/ImpactStats';
import MissionSection from '@/publicSite/sections/home/MissionSection';
import SDGSection from '@/publicSite/sections/home/SDGSection';
import StorySection from '@/publicSite/sections/home/StorySection';
import SEOHead from '@/seo/SEOHead';
import { motion } from 'framer-motion';
import { pageTransition } from '../motion/variants';

export default function Home() {
  return (
    <motion.main {...pageTransition}>
      <SEOHead />
      <Hero />
      <ImpactStats />
      <MissionSection />
      <StorySection />
      <AppShowcaseSection />
      {/*<ProgramsPreview />*/}
      <SDGSection />
      {/*<EventsPreview />*/}
      {/*<NewsPreview />*/}
      <CTASection />
    </motion.main>
  );
}