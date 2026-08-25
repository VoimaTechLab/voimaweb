// src/publicSite/pages/About.jsx

import AboutHero from "@/publicSite/sections/about/AboutHero"
import GalleryCTA from "@/publicSite/sections/about/GalleryCTA"
import MissionVision from "@/publicSite/sections/about/MissionVision"
import StorySection from "@/publicSite/sections/about/StorySection"
import TeamSection from "@/publicSite/sections/about/TeamSection"
import SDGSection from "../sections/home/SDGSection"

export default function About() {
  return (
    <main className="overflow-hidden bg-white pt-[76px]">
      <AboutHero />

      <StorySection />

      <MissionVision />

      <SDGSection />

      <TeamSection />

      <GalleryCTA />
    </main>
  )
}