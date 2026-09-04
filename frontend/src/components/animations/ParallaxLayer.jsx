import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Wraps children with scroll-driven parallax.
 * `speed` < 1 = moves slower than scroll (background feel)
 * `speed` > 1 = moves faster than scroll
 */
export default function ParallaxLayer({
  children,
  speed = 0.5,
  className = '',
  as = 'div',
  direction = 'y',
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const range = 100 * (1 - speed);
  const transform = useTransform(scrollYProgress, [0, 1], [range, -range]);

  const Tag = motion[as] || motion.div;
  const style = direction === 'x' ? { x: transform } : { y: transform };

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
