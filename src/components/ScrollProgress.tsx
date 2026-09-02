"use client";

import { motion, useReducedMotion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: scrollYProgress }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : undefined
      }
      className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-accent"
    />
  );
}