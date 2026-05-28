// src/pages/Home.jsx

import { motion } from 'framer-motion';
import { pageTransition } from '@/motion/variants';
import SEOHead from '@/seo/SEOHead';
import Hero         from '@/components/sections/home/Hero';
import ImpactStats  from '@/components/sections/home/ImpactStats';
import MissionSection from '@/components/sections/home/MissionSection';
import StorySection from '@/components/sections/home/StorySection';
import ProgramsPreview from '@/components/sections/home/ProgramsPreview';
import SDGSection   from '@/components/sections/home/SDGSection';
import EventsPreview from '@/components/sections/home/EventsPreview';
import NewsPreview  from '@/components/sections/home/NewsPreview';
import CTASection   from '@/components/sections/home/CTASection';
import AppShowcaseSection from '@/components/sections/home/AppShowcaseSection';

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