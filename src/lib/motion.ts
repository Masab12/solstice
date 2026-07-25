import type { Transition, Variants } from "motion/react";

export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export const springPreset: Transition = {
  type: "spring",
  damping: 20,
  stiffness: 100,
};

export const slideDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeOutExpo },
  },
};

export const staggerChildren: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

export function floatLoop(distanceY: number, distanceX: number, duration: number) {
  return {
    y: [0, -distanceY, 0],
    x: [0, distanceX, 0],
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };
}
