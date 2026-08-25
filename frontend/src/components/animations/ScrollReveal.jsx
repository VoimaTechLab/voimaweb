import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, fadeDown, fadeLeft, fadeRight, scaleIn, fadeIn, scalePop, scaleRotate } from '../../publicSite/motion/variants';

const VARIANT_MAP = {
  'fade-up': fadeUp,
  'fade-down': fadeDown,
  'fade-left': fadeLeft,
  'fade-right': fadeRight,
  'scale-in': scaleIn,
  'fade-in': fadeIn,
  'scale-pop': scalePop,
  'scale-rotate': scaleRotate,
};

export function ScrollReveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration,
  className = '',
  as = 'div',
  threshold = 0.1,
  once = true,
}) {
  const shouldReduce = useReducedMotion();
  const Tag = motion[as] || motion.div;
  const baseVariant = VARIANT_MAP[variant] || fadeUp;

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  const customVariants = {
    hidden: baseVariant.hidden,
    visible: {
      ...baseVariant.visible,
      transition: {
        ...baseVariant.visible?.transition,
        ...(duration ? { duration } : {}),
        ...(delay ? { delay } : {}),
      },
    },
  };

  return (
    <Tag
      className={className}
      variants={customVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold, margin: '0px 0px -40px 0px' }}
    >
      {children}
    </Tag>
  );
}