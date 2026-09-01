"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function ProjectVisual({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const isClinic = project.id === "clinic-website";

  return (
    <motion.div
      className="group/visual relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-surface"
      whileHover={{ y: -4 }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Ambient glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[90px]"
        whileHover={{ scale: 1.35 }}
        transition={{ duration: 0.7 }}
      />

      {/* Browser */}
      <motion.div
        className="absolute left-[7%] right-[7%] top-[10%] overflow-hidden rounded-xl border border-white/10 bg-background shadow-2xl"
        whileHover={{
          scale: 1.025,
          y: -6,
        }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {/* Browser chrome */}
        <div className="flex h-9 items-center gap-1.5 border-b border-white/5 px-3">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />

          <div className="mx-auto h-4 w-40 rounded-md bg-white/[0.035]" />
        </div>

        {isClinic ? (
          /* CLINIC */
          <div className="p-5 sm:p-7">
            <div className="mb-7 flex items-center justify-between">
              <div className="h-4 w-24 rounded bg-white/10" />

              <div className="flex gap-3">
                <div className="h-2 w-10 rounded bg-white/5" />
                <div className="h-2 w-10 rounded bg-white/5" />
                <div className="h-2 w-10 rounded bg-white/5" />
              </div>
            </div>

            <div className="max-w-md">
              <div className="mb-3 h-7 w-[75%] rounded bg-white/10" />
              <div className="mb-2 h-3 w-full rounded bg-white/5" />
              <div className="mb-6 h-3 w-[80%] rounded bg-white/5" />

              <div className="h-9 w-28 rounded-lg bg-accent/15" />
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="h-16 rounded-lg bg-white/[0.035]" />
              <div className="h-16 rounded-lg bg-white/[0.035]" />
              <div className="h-16 rounded-lg bg-white/[0.035]" />
            </div>
          </div>
        ) : (
          /* CONNECTPRO */
          <div className="p-5 sm:p-7">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="mb-2 h-4 w-28 rounded bg-white/10" />
                <div className="h-2 w-20 rounded bg-white/5" />
              </div>

              <div className="h-8 w-20 rounded-lg bg-accent/10" />
            </div>

            <div className="grid grid-cols-[1.5fr_1fr] gap-3">
              <div className="h-28 rounded-lg bg-white/[0.035] p-4">
                <div className="mb-4 h-2 w-20 rounded bg-white/10" />

                <div className="flex items-end gap-2">
                  <div className="h-10 w-3 rounded bg-white/10" />
                  <div className="h-16 w-3 rounded bg-accent/20" />
                  <div className="h-12 w-3 rounded bg-white/10" />
                  <div className="h-20 w-3 rounded bg-accent/20" />
                  <div className="h-14 w-3 rounded bg-white/10" />
                </div>
              </div>

              <div className="h-28 rounded-lg bg-white/[0.035] p-4">
                <div className="mb-4 h-2 w-16 rounded bg-white/10" />
                <div className="mb-2 h-3 w-20 rounded bg-white/5" />
                <div className="h-3 w-16 rounded bg-accent/15" />
              </div>
            </div>

            <div className="mt-3 flex gap-3">
              <div className="h-12 flex-1 rounded-lg bg-white/[0.035]" />
              <div className="h-12 flex-1 rounded-lg bg-white/[0.035]" />
              <div className="h-12 flex-1 rounded-lg bg-white/[0.035]" />
            </div>
          </div>
        )}
      </motion.div>

      {/* Project index */}
      <span className="absolute bottom-5 left-5 font-mono text-xs text-text-muted">
        0{index + 1}
      </span>

      {/* Project category */}
      <span className="absolute bottom-5 right-5 text-[10px] uppercase tracking-[0.2em] text-text-muted sm:text-xs">
        {project.category}
      </span>
    </motion.div>
  );
}

export function ProjectShowcase() {
  return (
    <section id="projects" className="px-6 py-32 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent">
              Selected Work
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              Things I've built.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-text-secondary">
            A small collection of projects exploring interfaces,
            full-stack development and real-world integrations.
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-28"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className="group"
            >
              <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                {/* Visual */}
                <ProjectVisual
                  project={project}
                  index={index}
                />

                {/* Content */}
                <div className="lg:py-8">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="font-mono text-xs text-text-muted">
                      0{index + 1}
                    </span>

                    <span className="h-px w-8 bg-border" />

                    <span className="text-xs uppercase tracking-[0.2em] text-text-muted">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="mb-5 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mb-7 max-w-xl text-base leading-8 text-text-secondary">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-8 flex flex-wrap gap-2">
                    {project.id === "connect-pro" && (
                     <div className="mb-8 flex items-center gap-3 text-xs text-text-muted">
                     <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                         Razorpay payment integration
                     </div>
)}
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-border px-3 py-1.5 text-xs text-text-secondary transition-colors duration-300 group-hover:border-accent/30 group-hover:text-text-primary"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-6">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-text-primary transition-colors hover:text-accent"
                      >
                        View Project
                        <ArrowUpRight size={16} />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-text-primary transition-colors hover:text-accent"
                      >
                        GitHub
                        <span className="text-xs font-mono">GH</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Future projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-32 border-t border-border pt-8"
        >
          <div className="flex items-center justify-between gap-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
              More experiments coming
            </p>

            <span className="h-px flex-1 bg-border" />

            <span className="text-xs text-text-muted">
              02 / ∞
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}