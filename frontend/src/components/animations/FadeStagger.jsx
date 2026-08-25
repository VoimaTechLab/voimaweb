import { motion, useReducedMotion } from 'framer-motion';
import { stagger, fadeUp } from '../../publicSite/motion/variants';

/**
 * Container that staggers children into view on scroll.
 * Each direct child is wrapped in a motion.div with the given childVariant.
 */
export default function FadeStagger({
  children,
  className = '',
  childVariant,
  staggerSpeed = 'normal',
  delay = 0,
  once = true,
  threshold = 0.15,
}) {
  const shouldReduce = useReducedMotion();

  const staggerVariants = {
    fast:   { hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 + delay } } },
    normal: { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 + delay } } },
    slow:   { hidden: {}, visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 + delay } } },
  };

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  const containerVar = staggerVariants[staggerSpeed] || staggerVariants.normal;
  const itemVar = childVariant || fadeUp;

  return (
    <motion.div
      className={className}
      variants={containerVar}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={itemVar}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={itemVar}>{children}</motion.div>
      }
    </motion.div>
  );
}
