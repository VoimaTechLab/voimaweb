import { motion } from 'framer-motion';
import { scaleIn } from '@/motion/variants';
 
export function GlassCard({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={`glass-card ${className}`}
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}