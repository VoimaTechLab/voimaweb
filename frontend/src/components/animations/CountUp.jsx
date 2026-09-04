import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

/**
 * Animated counter that counts from `from` to `to` when scrolled into view.
 * Renders the number with optional prefix/suffix.
 */
export default function CountUp({
  from = 0,
  to = 0,
  duration = 2,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
  once = true,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.2 });

  const targetNum = isNaN(Number(to)) ? 0 : Number(to);
  const startNum = isNaN(Number(from)) ? 0 : Number(from);

  const [display, setDisplay] = useState(() => formatNumber(startNum, decimals));

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(startNum, targetNum, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(latest) {
        const num = typeof latest === 'number' ? latest : (latest?.value ?? targetNum);
        setDisplay(formatNumber(num, decimals));
      },
    });

    return () => controls.stop();
  }, [isInView, startNum, targetNum, duration, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
}

function formatNumber(value, decimals) {
  const num = Number(value);
  if (isNaN(num) || !isFinite(num)) return '0';
  return num.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}
