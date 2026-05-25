import { motion } from 'framer-motion';
import { fadeUp } from '@/motion/variants';
import { useReducedMotion } from 'framer-motion';
 
export function ScrollReveal({ children, delay = 0, className = '' }) {
  const shouldReduce = useReducedMotion();
 
  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }
 
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}