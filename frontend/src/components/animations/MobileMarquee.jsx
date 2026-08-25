import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

/**
 * MobileMarquee – Continuous right-to-left scrolling on mobile.
 * On screens >= md (768px), renders children normally via the `desktopRender` prop.
 * On mobile, duplicates children and animates them in an infinite loop.
 *
 * Props:
 *  - items: Array of data items
 *  - renderCard: (item, index) => JSX — renders a single mobile card
 *  - desktopRender: JSX — the full desktop layout (flex accordion, etc.)
 *  - cardWidth: width of each mobile card in px (default 280)
 *  - gap: gap between cards in px (default 16)
 *  - speed: px per second (default 40)
 *  - pauseOnTouch: pause when user touches (default true)
 */
export default function MobileMarquee({
  items,
  renderCard,
  desktopRender,
  cardWidth = 280,
  gap = 16,
  speed = 40,
  pauseOnTouch = true,
}) {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Total width of one set of items
  const setWidth = items.length * (cardWidth + gap);

  // Duration for one full loop
  const duration = setWidth / speed;

  const handleTouchStart = useCallback(() => {
    if (pauseOnTouch) setIsPaused(true);
  }, [pauseOnTouch]);

  const handleTouchEnd = useCallback(() => {
    if (pauseOnTouch) {
      // Resume after a short delay so user can finish interacting
      setTimeout(() => setIsPaused(false), 2000);
    }
  }, [pauseOnTouch]);

  if (!isMobile) {
    return desktopRender;
  }

  return (
    <div
      ref={containerRef}
      className="overflow-hidden w-full"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <motion.div
        className="flex"
        style={{ gap: `${gap}px`, width: `${setWidth * 2}px` }}
        animate={{
          x: isPaused ? undefined : [0, -setWidth],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
      >
        {/* First set */}
        {items.map((item, i) => (
          <div
            key={`a-${i}`}
            className="flex-shrink-0"
            style={{ width: `${cardWidth}px` }}
          >
            {renderCard(item, i)}
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {items.map((item, i) => (
          <div
            key={`b-${i}`}
            className="flex-shrink-0"
            style={{ width: `${cardWidth}px` }}
          >
            {renderCard(item, i)}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
