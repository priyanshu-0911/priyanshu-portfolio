"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  GraduationCap,
} from "lucide-react";
import { DeveloperAvatar } from "@/components/DeveloperAvatar";

const timeline = [
  {
    year: "2022",
    title: "Started the journey",
    description:
      "Began exploring programming and computer science with a focus on building things rather than just studying theory.",
    icon: Code2,
  },
  {
    year: "2024",
    title: "Web development",
    description:
      "Moved deeper into modern frontend development, React, responsive interfaces and real-world web projects.",
    icon: Code2,
  },
  {
    year: "2025",
    title: "Full-stack development",
    description:
      "Started connecting interfaces with APIs, backend systems, databases and real application workflows.",
    icon: GraduationCap,
  },
  {
    year: "2026",
    title: "Building & exploring",
    description:
      "Currently building projects, sharpening development skills and exploring AI-powered applications.",
    icon: BrainCircuit,
  },
];

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative overflow-hidden px-5 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={
            shouldReduceMotion
              ? undefined
              : { opacity: 0, y: 25 }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, margin: "-100px" }}
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 0.7 }
          }
          className="mb-14 sm:mb-20"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent">
            About Me
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            Developer. Builder.
            <br />
            <span className="text-text-muted">
              Always experimenting.
            </span>
          </h2>
        </motion.div>

        {/* Main About layout */}
        <div className="grid items-center gap-12 sm:gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* Avatar */}
          <motion.div
            initial={
              shouldReduceMotion
                ? undefined
                : { opacity: 0, scale: 0.95 }
            }
            whileInView={
              shouldReduceMotion
                ? undefined
                : { opacity: 1, scale: 1 }
            }
            viewport={{ once: true, margin: "-80px" }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 0.8 }
            }
          >
            <DeveloperAvatar />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={
              shouldReduceMotion
                ? undefined
                : { opacity: 0, x: 30 }
            }
            whileInView={
              shouldReduceMotion
                ? undefined
                : { opacity: 1, x: 0 }
            }
            viewport={{ once: true, margin: "-80px" }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 0.8 }
            }
            className="max-w-2xl"
          >
            <p className="text-lg leading-8 text-text-secondary sm:text-xl">
              I&apos;m Priyanshu Ramchandani, a developer focused on
              building modern web experiences and full-stack
              applications.
            </p>

            <p className="mt-6 text-base leading-8 text-text-secondary">
              I enjoy taking an idea from a rough concept to
              something people can actually use. My work currently
              revolves around React, Next.js, TypeScript, backend
              systems and real-world integrations.
            </p>

            <p className="mt-6 text-base leading-8 text-text-secondary">
              I&apos;m also constantly experimenting with new
              technologies, particularly AI, interactive interfaces
              and better ways to build products for the web.
            </p>

            {/* Quick facts */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-surface/50 p-4">
                <p className="font-mono text-xl text-text-primary">
                  2026
                </p>

                <p className="mt-1 text-xs text-text-muted">
                  B.Tech / IT
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-4">
                <p className="font-mono text-xl text-text-primary">
                  Full-Stack
                </p>

                <p className="mt-1 text-xs text-text-muted">
                  Development
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-4">
                <p className="font-mono text-xl text-text-primary">
                  ∞
                </p>

                <p className="mt-1 text-xs text-text-muted">
                  Things to build
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={
            shouldReduceMotion
              ? undefined
              : { opacity: 0, y: 30 }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, margin: "-80px" }}
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 0.8 }
          }
          className="mt-20 sm:mt-24 lg:mt-28"
        >
          <div className="mb-10 flex items-center gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-text-muted">
              The journey
            </p>

            <span className="h-px flex-1 bg-border" />
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.year}
                  initial={
                    shouldReduceMotion
                      ? undefined
                      : { opacity: 0, y: 20 }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? undefined
                      : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true }}
                  transition={
                    shouldReduceMotion
                      ? undefined
                      : {
                          duration: 0.5,
                          delay: index * 0.08,
                        }
                  }
                  className="group relative bg-background p-5 transition-colors duration-500 hover:bg-surface sm:p-6"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-mono text-xs text-accent">
                      {item.year}
                    </span>

                    <Icon
                      size={16}
                      strokeWidth={1.5}
                      className="text-text-muted transition-colors duration-300 group-hover:text-accent"
                    />
                  </div>

                  <h3 className="text-base font-medium text-text-primary">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-text-secondary">
                    {item.description}
                  </p>

                  <div className="mt-8 h-px w-8 bg-border transition-all duration-500 group-hover:w-16 group-hover:bg-accent" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}