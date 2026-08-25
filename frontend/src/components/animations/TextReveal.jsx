import { motion, useReducedMotion } from 'framer-motion';
import { wordReveal, wordChild } from '../../publicSite/motion/variants';

/**
 * Animates text word-by-word when scrolled into view.
 * Splits on whitespace and staggers each word.
 */
export default function TextReveal({
  text,
  as = 'p',
  className = '',
  once = true,
  delay = 0,
}) {
  const shouldReduce = useReducedMotion();
  const Tag = as;
  const words = text.split(' ');

  if (shouldReduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <motion.div
      variants={wordReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
      transition={{ delayChildren: delay }}
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3em' }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordChild}
          style={{ display: 'inline-block' }}
          aria-hidden="true"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
