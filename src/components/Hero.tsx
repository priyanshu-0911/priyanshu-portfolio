"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { ArrowDown } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl text-center"
      >
        <motion.p
          variants={itemVariants}
          className="mb-6 text-sm font-medium tracking-widest uppercase text-text-muted"
        >
          {profile.title}
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="mb-6 text-5xl font-semibold tracking-tight text-text-primary sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-text-secondary sm:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="inline-flex h-12 items-center justify-center rounded-full bg-text-primary px-8 text-sm font-medium text-background transition-transform hover:scale-105 active:scale-95"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border-strong px-8 text-sm font-medium text-text-primary transition-colors hover:bg-surface-elevated"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}