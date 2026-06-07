import { waitlistData } from "@/publicSite/data/waitlistData";
import confetti from "canvas-confetti";
import { useEffect, useState } from "react";

export default function Countdown() {
  const launchDate = new Date(
    waitlistData.launchDate
  ).getTime();

  const [timeLeft, setTimeLeft] = useState({});
  const [isLaunched, setIsLaunched] = useState(false);
  const [confettiTriggered, setConfettiTriggered] = useState(false);

  useEffect(() => {
    const now = Date.now();
    const difference = launchDate - now;

    // Check if already launched
    if (difference <= 0) {
      setIsLaunched(true);
      if (!confettiTriggered) {
        triggerConfetti();
        setConfettiTriggered(true);
      }
      return;
    }

    const timer = setInterval(() => {
      const now = Date.now();
      const difference = launchDate - now;

      if (difference <= 0) {
        setIsLaunched(true);
        if (!confettiTriggered) {
          triggerConfetti();
          setConfettiTriggered(true);
        }
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(
          difference / (1000 * 60 * 60 * 24)
        ),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate, confettiTriggered]);

  const triggerConfetti = () => {
    // Confetti from left side
    confetti({
      particleCount: 100,
      angle: 45,
      spread: 60,
      origin: { x: 0, y: 0.5 },
      ticks: 200,
    });

    // Confetti from right side
    confetti({
      particleCount: 100,
      angle: 135,
      spread: 60,
      origin: { x: 1, y: 0.5 },
      ticks: 200,
    });

    // Additional celebration confetti from top
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 90,
        spread: 100,
        origin: { x: 0.5, y: 0 },
        ticks: 200,
      });
    }, 300);
  };

  if (isLaunched) {
    return (
      <section
        id="countdown"
        className="px-6 pb-24 flex items-center justify-center min-h-[500px]"
      >
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
    <section
      id="countdown"
      className="px-6 pb-24"
    >
      <div
        className="
            mx-auto
            grid
            max-w-4xl
            grid-cols-2
            gap-4
            sm:grid-cols-4
        "
      >
        {Object.entries(timeLeft).map(
          ([label, value]) => (
            <div
              key={label}
              className="
                min-w-[120px]
                rounded-[28px]
                border
                border-black/5
                bg-white
                p-8
                text-center
              "
            >
              <h3 className="text-5xl font-bold text-[#BC1D26]">
                {value || 0}
              </h3>

              <p className="mt-2 capitalize text-black/50">
                {label}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}