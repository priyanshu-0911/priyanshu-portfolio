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
      ease: [0.16, 1, 0.3, 1] as const,
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

{/* Project Preview */}
<a
  href={project.liveUrl || project.githubUrl || "#"}
  data-cursor="strong"
  target="_blank"
  rel="noopener noreferrer"
  aria-label={`View ${project.title}`}
  className="absolute bottom-[8%] left-[6%] right-[6%] top-[8%] block"
>
  <motion.div
    className="h-full w-full overflow-hidden rounded-xl border border-white/10 bg-background shadow-2xl"
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
    <div className="relative z-10 flex h-9 items-center gap-1.5 border-b border-white/10 bg-background px-3">
      <span className="h-2 w-2 rounded-full bg-white/20" />
      <span className="h-2 w-2 rounded-full bg-white/20" />
      <span className="h-2 w-2 rounded-full bg-white/20" />

      <div className="mx-auto h-4 w-40 rounded-md bg-white/[0.035]" />
    </div>

    {/* Actual project screenshot */}
    <div className="relative h-[calc(100%-36px)] overflow-hidden">
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover/visual:scale-[1.03]"
        />
      ) : (
        <div className="flex h-full items-center justify-center text-xs text-text-muted">
          Preview coming soon
        </div>
      )}

      {/* Subtle overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
    </div>
  </motion.div>
</a>

      {/* Project index */}
      <span className="absolute bottom-5 left-5 font-mono text-xs text-text-muted">
        0{index + 1}
      </span>

      {/* Project category badge */}
      <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />

        <span className="text-[10px] uppercase tracking-[0.2em] text-white/70">
          {project.category}
        </span>
      </div>
    </motion.div>
  );
}

export function ProjectShowcase() {
  return (
<section
  id="projects"
  className="px-5 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 sm:mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end"
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
          className="space-y-20 sm:space-y-24 lg:space-y-28">
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
                <div className="mb-5 flex flex-wrap items-center gap-3">
  <span className="font-mono text-xs text-text-muted">
    0{index + 1}
  </span>

  <span className="h-px w-8 bg-border" />

  <span className="text-xs uppercase tracking-[0.2em] text-text-muted">
    {project.category}
  </span>

  <span className="h-1 w-1 rounded-full bg-border" />

  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent">
    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
    {project.status}
  </span>
</div>

                  <h3 className="mb-5 text-3xl font-semibold tracking-[-0.03em] text-text-primary sm:text-4xl lg:text-5xl">
                     {project.title}
                  </h3>

                  <p className="mb-7 max-w-xl text-base leading-8 text-text-secondary">
                    {project.description}
                  </p>

                  {/* Technologies */}
<div className="mb-6 flex flex-wrap gap-2">
  {project.technologies.map((technology) => (
    <span
      key={technology}
      className="rounded-full border border-border px-3 py-1.5 text-xs text-text-secondary transition-colors duration-300 group-hover:border-accent/30 group-hover:text-text-primary"
    >
      {technology}
    </span>
  ))}
</div>

{/* Integration highlight */}
{project.id === "connect-pro" && (
  <div className="mb-8 flex items-center gap-3 text-xs text-text-muted">
    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
    <span>Razorpay payment integration</span>
  </div>
)}

                  {/* Links */}
                  <div className="flex flex-wrap gap-6">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        data-cursor="strong"
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
                        data-cursor="strong"
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
          className="mt-20 border-t border-border pt-8 sm:mt-24 lg:mt-32"
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