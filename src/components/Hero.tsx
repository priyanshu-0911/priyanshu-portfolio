"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Magnetic } from "@/components/Magnetic";

const words = ["digital experiences", "full-stack systems", "things that matter"];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const currentWord = words[index];

    if (subIndex === currentWord.length && !reverse) {
      const pause = setTimeout(() => setReverse(true), 1400);
      return () => clearTimeout(pause);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 45 : 80
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section 
      id="hero"
      className="relative min-h-[100svh] overflow-hidden border-b border-border">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:80px_80px]" />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[15%] top-[15%] h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-10rem] right-[-5rem] h-[30rem] w-[30rem] rounded-full bg-accent/5 blur-[120px]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_75%)]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1500px] flex-col justify-between px-5 pb-6 pt-28 sm:px-10 sm:pt-32 lg:px-16">
        {/* Top metadata */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for opportunities
          </div>

          <div className="hidden text-[11px] uppercase tracking-[0.25em] text-text-muted sm:block">
            2026 / Indore, India
          </div>
        </motion.div>

        {/* Hero */}
        <div className="grid items-center gap-12 py-20 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          {/* Typography */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-text-muted"
            >
              Full-Stack Developer / Builder
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="max-w-5xl text-[clamp(3rem,14vw,9rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-text-primary">              Priyanshu
              <br />
              <span className="text-text-secondary">Ramchandani</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="mt-10 flex max-w-2xl flex-col gap-7"
            >
              <p className="text-xl leading-relaxed text-text-secondary sm:text-2xl">
                I build{" "}
                <span className="text-text-primary">
                  {words[index].substring(0, subIndex)}
                </span>
                <span className="ml-1 inline-block h-6 w-[2px] translate-y-1 animate-pulse bg-accent" />
              </p>

              <p className="max-w-xl text-sm leading-7 text-text-muted sm:text-base">
                Exploring full-stack development, creative interfaces,
                automation and emerging technology through real projects.
              </p>

              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"> 
                <Magnetic strength={0.18}>
                <a
                  href="#projects"
                  data-cursor="strong"
                  className="group inline-flex w-full items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(45,212,191,0.15)] sm:w-auto"
                >
                  Explore my work
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </Magnetic>

                <a
                  href="#contact"
                  className="group inline-flex w-full items-center gap-3 rounded-full border border-border-strong px-6 py-3.5 text-sm font-medium text-text-primary transition-all duration-300 hover:border-accent/50 hover:bg-white/[0.03] sm:w-auto"                >
                  Start a conversation
                  <ArrowUpRight
                    size={17}
                    className="text-text-muted transition-colors group-hover:text-accent"
                  />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Interactive visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[440px]"
          >
            {/* Outer rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[8%] rounded-full border border-white/[0.08]"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[20%] rounded-full border border-accent/[0.15]"
            />

            {/* Core */}
            <motion.div
              animate={{
                rotate: [0, 8, -8, 0],
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-[30%] border border-accent/20 bg-accent/[0.035] shadow-[0_0_100px_rgba(45,212,191,0.08)] backdrop-blur-sm"
            >
              <div className="absolute inset-[12%] rounded-[25%] border border-white/[0.08]" />

              <motion.div
                animate={{
                  scale: [0.8, 1, 0.8],
                  opacity: [0.25, 0.5, 0.25],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-[28%] rounded-full bg-accent/20 blur-2xl"
              />
            </motion.div>

            {/* Floating points */}
            {[
              { top: "12%", left: "52%", delay: 0 },
              { top: "72%", left: "17%", delay: 1 },
              { top: "27%", left: "82%", delay: 2 },
              { top: "84%", left: "68%", delay: 3 },
            ].map((point, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -12, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 3 + i,
                  delay: point.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  top: point.top,
                  left: point.left,
                }}
                className="absolute h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_15px_rgba(45,212,191,0.6)]"
              />
            ))}

            {/* Label */}
            <div className="absolute bottom-[7%] left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap text-[10px] uppercase tracking-[0.25em] text-text-muted">
              <Sparkles size={12} className="text-accent" />
              Always exploring
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex items-end justify-between"
        >
          <div className="hidden max-w-xs text-[10px] uppercase leading-5 tracking-[0.2em] text-text-muted sm:block">
            From ideas
            <br />
            to interfaces
            <br />
            to working systems.
          </div>

          <a
            href="#projects"
            className="group ml-auto flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-text-muted transition-colors hover:text-text-primary"
          >
            Scroll to explore
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border-strong transition-all duration-300 group-hover:border-accent group-hover:text-accent">
              <ArrowDown
                size={14}
                className="animate-bounce"
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}