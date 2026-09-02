"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  Layers3,
  CreditCard,
  Sparkles,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Globe2,
    title: "Websites & Interfaces",
    description:
      "Modern, responsive websites focused on clarity, usability and a polished visual experience.",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    number: "02",
    icon: Layers3,
    title: "Full-Stack Applications",
    description:
      "End-to-end applications connecting frontend interfaces with backend logic, APIs and databases.",
    tags: ["Node.js", "REST APIs", "MySQL"],
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Payments & Integrations",
    description:
      "Practical integrations that connect applications to real-world services, including payment workflows.",
    tags: ["Razorpay", "APIs", "Backend"],
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Interactive Experiences",
    description:
      "Thoughtful motion, transitions and interactive details that make digital products feel alive.",
    tags: ["Framer Motion", "GSAP", "3D"],
  },
];

export function WhatIBuild() {
  return (
    <section
      id="services"
        className="px-5 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent">
            What I Build
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            From interface to
            <br />
            <span className="text-text-secondary">
              working product.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-text-secondary">
            I enjoy turning ideas into practical digital experiences,
            combining thoughtful interfaces with the engineering behind them.
          </p>
        </motion.div>

        {/* Services */}
        <div className="grid border-l border-t border-border md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group relative min-h-[320px] border-b border-r border-border p-8 transition-colors duration-500 hover:bg-white/[0.02] sm:p-10 lg:p-12"
              >
                {/* Number */}
                <div className="mb-12 flex items-center justify-between">
                  <span className="font-mono text-xs text-text-muted">
                    {service.number}
                  </span>

                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    className="text-text-muted transition-all duration-500 group-hover:scale-110 group-hover:text-accent"
                  />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-2xl font-medium tracking-tight text-text-primary sm:text-3xl">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="max-w-md text-sm leading-7 text-text-secondary">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1.5 text-[11px] text-text-muted transition-colors duration-300 group-hover:border-accent/20 group-hover:text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}