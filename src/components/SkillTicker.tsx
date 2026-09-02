"use client";

import { motion, useReducedMotion } from "framer-motion";

const items = [
  "FULL-STACK DEVELOPER",
  "CREATIVE DEVELOPER",
  "REACT",
  "NEXT.JS",
  "JAVASCRIPT",
  "UI / UX",
  "3D WEB",
  "BUILDING DIGITAL EXPERIENCES",
];

const tickerItems = [...items, ...items];

export function SkillTicker() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Skills and specialties"
      className="relative overflow-hidden border-b border-border border-t bg-background py-5"
    >
      {/* Subtle top/bottom glow */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent sm:w-40" />

      <motion.div
        className="flex w-max items-center"
        animate={
          shouldReduceMotion
            ? undefined
            : { x: ["0%", "-50%"] }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }
        }
      >
        {tickerItems.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center"
          >
            <span className="px-6 text-sm font-medium uppercase tracking-[0.22em] text-text-secondary transition-colors duration-300 hover:text-text-primary sm:px-8 sm:text-base">
              {item}
            </span>

            <span
              aria-hidden="true"
              className="text-xs text-accent"
            >
              ✦
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}