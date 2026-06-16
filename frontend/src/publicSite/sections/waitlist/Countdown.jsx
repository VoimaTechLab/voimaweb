import { useWaitlist } from "@/publicSite/hooks/useWaitlist";
import confetti from "canvas-confetti";
import { useEffect, useRef, useState } from "react";

export default function Countdown() {
  const { waitlistData } = useWaitlist();                    
  const launchDate = new Date(waitlistData.launchDate).getTime();

  const [timeLeft, setTimeLeft] = useState({});
  const [isLaunched, setIsLaunched] = useState(false);
  const confettiFired = useRef(false); // ref instead of state (no dep churn)

  const triggerConfetti = () => {
    if (confettiFired.current) return; // fire once per mount
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
        return true; // launched
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
      return false;
    };

    if (tick()) return; // already launched

    const timer = setInterval(() => {
      if (tick()) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]); // confettiTriggered removed

  if (isLaunched) {
    return (
      <section id="countdown" className="px-6 pb-24 flex items-center justify-center min-h-[500px]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-6xl font-bold text-[#BC1D26] animate-bounce">
            {waitlistData.launchMessage.title}
          </h2>
          <p className="mb-8 text-xl text-black/70">
            {waitlistData.launchMessage.description}
          </p>
          <a
            href="https://apps.apple.com/app/voima"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-[#BC1D26] px-8 py-4 font-semibold text-white transition hover:bg-[#9a1720] hover:shadow-lg"
          >
            Download Voima App
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="countdown" className="px-6 pb-24">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label} className="min-w-[120px] rounded-[28px] border border-black/5 bg-white p-8 text-center">
            <h3 className="text-5xl font-bold text-[#BC1D26]">{value || 0}</h3>
            <p className="mt-2 capitalize text-black/50">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}