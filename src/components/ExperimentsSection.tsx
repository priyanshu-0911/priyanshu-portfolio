"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FlaskConical } from "lucide-react";
import {
  currentlyBuilding,
  experiments,
  type Experiment,
} from "@/data/experiments";

const statusLabel: Record<Experiment["status"], string> = {
  building: "Currently building",
  exploring: "Exploring",
  shipped: "Shipped",
};

function ExperimentCard({
  experiment,
  index,
}: {
  experiment: Experiment;
  index: number;
}) {
  const content = (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05]"
    >
      <div className="mb-8 flex items-start justify-between gap-4">
        <span className="text-xs uppercase tracking-[0.18em] text-white/40">
          {statusLabel[experiment.status]}
        </span>

        {experiment.href && (
          <ArrowUpRight
            size={18}
            className="text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
          />
        )}
      </div>

      <h3 className="text-2xl font-medium tracking-tight text-white">
        {experiment.title}
      </h3>

      <p className="mt-3 max-w-xl text-sm leading-6 text-white/50">
        {experiment.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {experiment.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/45"
          >
            {technology}
          </span>
        ))}
      </div>
    </motion.article>
  );

  if (experiment.href) {
    return (
      <a
        href={experiment.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {content}
      </a>
    );
  }

  return content;
}

export function ExperimentsSection() {
  return (
    <section
      id="experiments"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/40">
            <FlaskConical size={15} />
            <span>Exploring / Building</span>
          </div>

          <h2 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Still figuring
            <span className="text-white/35"> things out.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-white/50">
            Not everything needs to become a finished project. These are the
            ideas, technologies, and interfaces I&apos;m actively exploring.
          </p>
        </motion.div>

        {/* Currently building */}
        {currentlyBuilding.length > 0 && (
          <div className="mt-16">
            <div className="mb-5 text-xs uppercase tracking-[0.18em] text-white/30">
              Currently building
            </div>

            <div className="grid gap-5">
              {currentlyBuilding.map((experiment, index) => (
                <ExperimentCard
                  key={experiment.id}
                  experiment={experiment}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}

        {/* Experiments */}
        {experiments.length > 0 && (
          <div className="mt-16">
            <div className="mb-5 text-xs uppercase tracking-[0.18em] text-white/30">
              Experiments
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {experiments.map((experiment, index) => (
                <ExperimentCard
                  key={experiment.id}
                  experiment={experiment}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}