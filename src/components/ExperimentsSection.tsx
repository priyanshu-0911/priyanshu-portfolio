"use client";

import { motion, useReducedMotion } from "framer-motion";
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
  shouldReduceMotion,
}: {
  experiment: Experiment;
  index: number;
  shouldReduceMotion: boolean | null;
}) {
  const content = (
    <motion.article
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
      viewport={{ once: true, margin: "-60px" }}
      transition={
        shouldReduceMotion
          ? undefined
          : {
              duration: 0.5,
              delay: index * 0.08,
            }
      }
      className="group border-t border-white/10 py-6 transition-colors duration-300 hover:border-white/25 sm:py-7"
    >
      <div className="grid gap-5 md:grid-cols-[80px_1fr_auto] md:items-start md:gap-6">
        {/* Index */}
        <div className="text-xs font-medium tracking-[0.18em] text-white/25">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-white/80 sm:text-2xl">
              {experiment.title}
            </h3>

            {experiment.status === "building" && (
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400/50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
              </span>
            )}
          </div>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/45">
            {experiment.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
            {experiment.technologies.map((technology) => (
              <span
                key={technology}
                className="text-xs text-white/30 transition-colors duration-300 group-hover:text-white/45"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Status / Link indicator */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-white/25 transition-colors duration-300 group-hover:text-white/60">
          <span>{statusLabel[experiment.status]}</span>

          {experiment.href && (
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          )}
        </div>
      </div>
    </motion.article>
  );

  if (experiment.href) {
    return (
      <a
        href={experiment.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
}

export function ExperimentsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="experiments"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-8">
        {/* Section heading */}
        <motion.div
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
              : { duration: 0.5 }
          }
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
            Not everything needs to become a finished project. These are
            the ideas, technologies, and interfaces I&apos;m actively
            exploring.
          </p>
        </motion.div>

        {/* Currently building */}
        {currentlyBuilding.length > 0 && (
          <div className="mt-14 sm:mt-20">
            <span className="flex items-center gap-2 text-sm text-white/60">
              <span
                className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-400"
                aria-hidden="true"
              />
              Currently building
            </span>

            <div className="grid gap-5">
              {currentlyBuilding.map((experiment, index) => (
                <ExperimentCard
                  key={experiment.id}
                  experiment={experiment}
                  index={index}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </div>
          </div>
        )}

        {/* Experiments */}
        {experiments.length > 0 && (
          <div className="mt-12 sm:mt-16">
            <div className="mb-5 text-xs uppercase tracking-[0.18em] text-white/30">
              Experiments
            </div>

            <div>
              {experiments.map((experiment, index) => (
                <ExperimentCard
                  key={experiment.id}
                  experiment={experiment}
                  index={index}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}