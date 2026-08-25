import { useWaitlist } from "@/publicSite/hooks/useWaitlist";
import confetti from "canvas-confetti";
import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function Countdown() {
  const { waitlistData } = useWaitlist();                    
  const launchDate = new Date(waitlistData.launchDate).getTime();

  const [timeLeft, setTimeLeft] = useState({});
  const [isLaunched, setIsLaunched] = useState(false);
  const confettiFired = useRef(false);

  const triggerConfetti = () => {
    if (confettiFired.current) return;
    confettiFired.current = true;

    confetti({ particleCount: 100, angle: 45, spread: 60, origin: { x: 0, y: 0.5 }, ticks: 200 });
    confetti({ particleCount: 100, angle: 135, spread: 60, origin: { x: 1, y: 0.5 }, ticks: 200 });
    setTimeout(() => {
      confetti({ particleCount: 50, angle: 90, spread: 100, origin: { x: 0.5, y: 0 }, ticks: 200 });
    }, 300);
  };

  useEffect(() => {
    const tick = () => {
      const difference = launchDate - Date.now();

      if (difference <= 0) {
        setIsLaunched(true);
        triggerConfetti();
        return true;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
      return false;
    };

    if (tick()) return;

    const timer = setInterval(() => {
      if (tick()) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  if (isLaunched) {
    return (
      <section id="countdown" className="px-6 py-12 sm:py-20 bg-[#fafafa] flex items-center justify-center min-h-[300px]">
        <ScrollReveal variant="scale-in">
          <div className="mx-auto max-w-2xl text-center border-4 border-black bg-white p-6 sm:p-12 shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[16px_16px_0px_rgba(0,0,0,1)]">
            <h2 className="mb-4 text-3xl sm:text-5xl font-black uppercase text-[#BC1D26] font-heading">
              {waitlistData.launchMessage.title}
            </h2>
            <p className="mb-6 sm:mb-8 text-base sm:text-lg text-black/75 font-semibold">
              {waitlistData.launchMessage.description}
            </p>
            <a
              href="https://apps.apple.com/app/voima"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#BC1D26] border-2 border-black px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-[4px_4px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]"
            >
              Download Voima App
            </a>
          </div>
        </ScrollReveal>
      </section>
    );
  }

  return (
    <section id="countdown" className="px-4 sm:px-6 py-12 sm:py-20 bg-[#fafafa] border-b-4 border-black">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-4">
        {Object.entries(timeLeft).map(([label, value], index) => (
          <ScrollReveal key={label} variant="fade-up" delay={0.1 * index}>
            <div className="border-4 border-black bg-white p-4 sm:p-8 text-center shadow-[4px_4px_0px_rgba(0,0,0,1)] sm:shadow-[10px_10px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform duration-200">
              <h3 className="text-3xl sm:text-5xl font-black uppercase text-[#BC1D26] font-heading">{value || 0}</h3>
              <p className="mt-1 sm:mt-2 font-black uppercase tracking-widest text-[10px] sm:text-xs text-black">{label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}