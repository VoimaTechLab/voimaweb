// src/publicSite/motion/variants.js
// Voima Initiative — Extended Motion Library

// ─── Easing Presets ───────────────────────────────────────────
const smooth = [0.22, 1, 0.36, 1];
const snappy = [0.16, 1, 0.3, 1];
const bouncy = [0.34, 1.56, 0.64, 1];

// ─── Core Reveals ─────────────────────────────────────────────

export const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: smooth },
  },
};

export const fadeDown = {
  hidden:  { opacity: 0, y: -30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: smooth },
  },
};

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const fadeLeft = {
  hidden:  { opacity: 0, x: -40 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.7, ease: smooth },
  },
};

export const fadeRight = {
  hidden:  { opacity: 0, x: 40 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.7, ease: smooth },
  },
};

export const slideLeft = {
  hidden:  { opacity: 0, x: -32 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.6, ease: smooth },
  },
};

export const slideRight = {
  hidden:  { opacity: 0, x: 32 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.6, ease: smooth },
  },
};

// ─── Scale Variants ───────────────────────────────────────────

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.6, ease: smooth },
  },
};

export const scalePop = {
  hidden:  { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1, scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
};

export const scaleRotate = {
  hidden:  { opacity: 0, scale: 0.8, rotate: -8 },
  visible: {
    opacity: 1, scale: 1, rotate: 0,
    transition: { duration: 0.7, ease: bouncy },
  },
};

// ─── Stagger Containers ───────────────────────────────────────

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

export const staggerFast = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

export const staggerSlow = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

// ─── Text Reveal ──────────────────────────────────────────────

export const wordReveal = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.1 },
  },
};

export const wordChild = {
  hidden:  { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.5, ease: smooth },
  },
};

export const charReveal = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.02, delayChildren: 0.05 },
  },
};

export const charChild = {
  hidden:  { opacity: 0, y: 12 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.35, ease: snappy },
  },
};

// ─── Floating / Loop Animations ───────────────────────────────

export const float = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const floatSlow = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const spinSlow = {
  animate: {
    rotate: 360,
    transition: {
      duration: 40,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

// ─── Draw / Line Animations ───────────────────────────────────

export const drawLine = {
  hidden:  { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1, opacity: 1,
    transition: { duration: 1.5, ease: smooth },
  },
};

// ─── Page Transition ──────────────────────────────────────────

export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.3, ease: 'easeIn' } },
};

// ─── Spring Presets ───────────────────────────────────────────

export const springBounce = {
  type: 'spring',
  stiffness: 400,
  damping: 17,
};

export const springSmooth = {
  type: 'spring',
  stiffness: 200,
  damping: 30,
};

// ─── Hover Presets ────────────────────────────────────────────

export const hoverLift = {
  y: -6,
  transition: { duration: 0.3, ease: smooth },
};

export const hoverScale = {
  scale: 1.03,
  transition: { duration: 0.3, ease: smooth },
};