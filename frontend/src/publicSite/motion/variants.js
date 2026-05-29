// src/motion/variants.js

export const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

export const stagger = {
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

export const slideLeft = {
  hidden:  { opacity: 0, x: -32 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

// Page transition
export const pageTransition = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.25, ease: 'easeIn' } }
};