import { pageTransition } from "@/publicSite/motion/variants";
import { motion } from "framer-motion";

import CareersCTA from "@/publicSite/sections/getInvolved/CareersSection";
import DonationSection from "@/publicSite/sections/getInvolved/DonationSection";
import GetInvolvedHero from "@/publicSite/sections/getInvolved/GetInvolvedHero";
import PartnerSection from "@/publicSite/sections/getInvolved/PartnerSection";
import VolunteerSection from "@/publicSite/sections/getInvolved/VolunteerSection";

export default function GetInvolved() {
  return (
    <motion.main
      {...pageTransition}
      className="overflow-hidden pt-[90px]"
    >
      <GetInvolvedHero />
      <VolunteerSection />
      <DonationSection />
      <PartnerSection />
      <CareersCTA/>
    </motion.main>
  );
}