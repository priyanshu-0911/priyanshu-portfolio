"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Mail,
  MessageCircle,
} from "lucide-react";
import { socials } from "@/data/socials";

const contactLinks = [
  {
    href: socials.email,
    label: "Email",
    icon: Mail,
    available: Boolean(socials.email),
  },
  {
    href: socials.github,
    label: "GitHub",
    icon: Code2,
    available: Boolean(socials.github),
  },
  {
    href: socials.whatsapp,
    label: "WhatsApp",
    icon: MessageCircle,
    available: Boolean(socials.whatsapp),
  },
];

export function ContactSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 pb-20 pt-20 sm:px-10 sm:pb-28 sm:pt-28 lg:px-16 lg:pb-32 lg:pt-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={
            shouldReduceMotion
              ? undefined
              : { opacity: 0, y: 24 }
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
          className="relative overflow-hidden border-y border-white/10 py-12 sm:py-20 lg:py-24"
        >
          {/* Ambient accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
          />

          <div className="relative grid gap-10 sm:gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            {/* Content */}
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                Have an idea?
              </p>

              <h2 className="max-w-4xl text-[2.75rem] font-semibold leading-[0.95] tracking-[-0.04em] text-text-primary sm:text-6xl lg:text-7xl">
                Let&apos;s build
                <br />
                <span className="text-text-muted">
                  something interesting.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-7 text-text-secondary sm:text-lg">
                Have a project, opportunity, collaboration, or simply
                something interesting to discuss? I&apos;d love to hear
                about it.
              </p>
            </div>

            {/* Contact links */}
            <div className="flex flex-col items-start gap-4 lg:items-end">
              {contactLinks
                .filter((link) => link.available)
                .map((link, index) => {
                  const Icon = link.icon;

                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={
                        shouldReduceMotion
                          ? undefined
                          : { opacity: 0, x: 16 }
                      }
                      whileInView={
                        shouldReduceMotion
                          ? undefined
                          : { opacity: 1, x: 0 }
                      }
                      viewport={{ once: true }}
                      transition={
                        shouldReduceMotion
                          ? undefined
                          : {
                              duration: 0.45,
                              delay: 0.15 + index * 0.08,
                            }
                      }
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : { x: 5 }
                      }
                      className="group inline-flex min-h-11 items-center gap-3 text-sm text-text-secondary transition-colors duration-300 hover:text-text-primary"
                    >
                      <Icon className="h-4 w-4" />

                      <span>{link.label}</span>

                      <ArrowUpRight
                        className="h-4 w-4 opacity-40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </motion.a>
                  );
                })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}