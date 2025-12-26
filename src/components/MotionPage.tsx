import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionPageProps {
  children: ReactNode;
  className?: string;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      when: "beforeChildren" as const,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export const MotionPage = ({ children, className = '' }: MotionPageProps) => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Animation variants for child elements
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  enter: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  enter: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  enter: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export const staggerContainer = {
  initial: {},
  enter: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};
