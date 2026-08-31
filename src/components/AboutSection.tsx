"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-text-muted">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-2">
            Building the future, one line of code at a time.
          </h2>
          <div className="mt-8 space-y-4 text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            <p>
              I&apos;m Priyanshu Ramchandani, a Full-Stack Developer who loves
              turning complex problems into elegant, fast, and user-friendly
              solutions.
            </p>
            <p>
              With a strong focus on Next.js, TypeScript, and modern UI/UX, I
              build products that are not just functional, but a joy to use.
            </p>
            <p>
              Currently exploring AI integrations and pushing the boundaries of
              what&apos;s possible on the web.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}