import { Variants } from 'framer-motion';

// Spring animation configuration
export const springConfig = {
  type: 'spring',
  damping: 20,
  stiffness: 300,
  mass: 0.5,
  restDelta: 0.0001
};

// Fade in up animation
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    transition: { 
      ...springConfig,
      opacity: { duration: 0.3 }
    } 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      ...springConfig,
      opacity: { duration: 0.3 }
    } 
  }
};

// Stagger container
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Card hover animation
export const cardHover = {
  hover: {
    y: -5,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 15
    }
  }
};

// Button hover animation
export const buttonHover = {
  hover: {
    scale: 1.05,
    boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)',
    transition: { 
      type: 'spring', 
      stiffness: 400, 
      damping: 10 
    }
  },
  tap: { 
    scale: 0.98 
  }
};

// Text reveal animation
export const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      ...springConfig,
    },
  }),
};

// Fade in animation
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.01, -0.05, 0.95]
    },
  },
};

// Optimized image load
// This helps with image loading performance
// Use with Framer Motion's AnimatePresence and motion.img
// Example: <motion.img {...imageLoad} src="..." />
export const imageLoad = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.01, -0.05, 0.95]
    }
  },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
};

// Optimized page transition
export const pageTransition = {
  type: 'spring',
  damping: 20,
  stiffness: 100,
  when: 'beforeChildren',
  staggerChildren: 0.1
};

// Optimized list item animation
export const listItem = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      ...springConfig,
    },
  }),
};
