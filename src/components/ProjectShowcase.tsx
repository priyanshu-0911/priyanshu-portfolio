"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export function ProjectShowcase() {
  return (
    <section id="projects" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 text-sm font-medium tracking-widest uppercase text-text-muted">
            Selected Work
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Projects
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-elevated text-accent">
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <span className="rounded-full border border-border px-3 py-1 text-xs text-text-muted">
                  {project.status}
                </span>
              </div>

              <h3 className="mb-2 text-lg font-semibold text-text-primary">
                {project.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                {project.description || "Description coming soon."}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-surface-elevated px-2.5 py-1 text-xs text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}