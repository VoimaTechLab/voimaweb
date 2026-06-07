import AppMockup from "@/publicSite/sections/waitlist/AppMockup";
import Countdown from "@/publicSite/sections/waitlist/Countdown";
import Hero from "@/publicSite/sections/waitlist/Hero";
import WaitlistForm from "@/publicSite/sections/waitlist/WaitlistForm";

export default function Waitlist() {
  return (
    <main>
      <Hero />
      <Countdown />
      <WaitlistForm />
      <AppMockup />
      {/*<Features />
      <LaunchCTA />*/}
    </main>
  );
}