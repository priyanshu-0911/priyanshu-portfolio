"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export function ProjectShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative pb-32">
      {/* Sticky Section Header */}
      <div className="sticky top-0 flex items-center justify-center h-screen pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center pointer-events-auto"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-text-muted">
            Selected Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mt-2">
            Projects
          </h2>
        </motion.div>
      </div>

      {/* Stacked Cards */}
      <div className="relative z-10">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - 1 - i) * 0.06;
          const range = [i * (1 / projects.length), 1];
          const scale = useTransform(scrollYProgress, range, [1, targetScale]);
          const opacity = useTransform(scrollYProgress, range, [1, 0.7]);

          return (
            <motion.div
              key={project.id}
              style={{ scale, opacity }}
              className="sticky top-[10vh] h-[80vh] flex items-center justify-center px-6"
            >
              <div className="w-full max-w-5xl h-full rounded-3xl border border-border bg-surface p-8 sm:p-12 flex flex-col justify-between hover:border-border-strong transition-colors duration-500">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-accent uppercase tracking-wider">
                      {project.status}
                    </span>
                    <a
                      href={project.demoUrl}
                      className="p-2 rounded-full border border-border hover:border-accent transition-colors group"
                    >
                      <ArrowUpRight className="w-5 h-5 text-text-secondary group-hover:text-accent transition-colors" />
                    </a>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-text-primary mt-4">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary mt-4 max-w-2xl text-base sm:text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-surface-elevated text-sm text-text-secondary border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}