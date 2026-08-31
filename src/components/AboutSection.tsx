"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-medium tracking-widest uppercase text-text-muted">
              About
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              Who I am
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-text-secondary">
              I&apos;m {profile.name}, a {profile.title.toLowerCase()} based in{" "}
              {profile.location || "India"}. I build digital experiences that
              are fast, accessible, and visually refined.
            </p>
            <p className="leading-relaxed text-text-secondary">
              Currently pursuing my {profile.education.degree} at{" "}
              {profile.education.college}, graduating in{" "}
              {profile.education.graduationYear}. I&apos;m passionate about
              clean code, thoughtful design, and solving real problems through
              technology.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {profile.availability.jobs && (
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Open to opportunities
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}