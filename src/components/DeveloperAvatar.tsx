"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Code2,
  Cpu,
  Database,
  Globe2,
} from "lucide-react";
import { useRef } from "react";

const orbitItems = [
  { icon: Code2, angle: 0 },
  { icon: Globe2, angle: 90 },
  { icon: Database, angle: 180 },
  { icon: Cpu, angle: 270 },
];

export function DeveloperAvatar() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [8, -8]),
    {
      stiffness: 120,
      damping: 18,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
    {
      stiffness: 120,
      damping: 18,
    }
  );

  function handleMouseMove(
    event: React.MouseEvent<HTMLDivElement>
  ) {
    if (shouldReduceMotion || !containerRef.current) {
      return;
    }

    const rect =
      containerRef.current.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[430px]"
    >
      <motion.div
        style={
          shouldReduceMotion
            ? undefined
            : {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }
        }
        className="relative h-full w-full"
      >
        {/* Ambient glow */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: [1, 1.12, 1],
                  opacity: [0.2, 0.35, 0.2],
                }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[90px]"
        />

        {/* Outer orbit */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : { rotate: 360 }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 24,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
          className="absolute inset-[7%] rounded-full border border-accent/20"
        >
          <span className="absolute -right-1.5 top-1/2 h-3 w-3 rounded-full bg-accent shadow-[0_0_20px_rgba(45,212,190,0.8)]" />
        </motion.div>

        {/* Second orbit */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : { rotate: -360 }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
          className="absolute inset-[17%] rounded-full border border-white/10"
        >
          <span className="absolute -left-1 top-1/2 h-2 w-2 rounded-full bg-accent/70" />
        </motion.div>

        {/* Inner dashed orbit */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : { rotate: 360 }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
          className="absolute inset-[27%] rounded-full border border-dashed border-accent/20"
        />

        {/* Developer core */}
        <motion.div
          whileHover={
            shouldReduceMotion
              ? undefined
              : { scale: 1.05 }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }
          }
          className="absolute left-1/2 top-1/2 flex h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/30 bg-surface/90 shadow-[0_0_60px_rgba(45,212,190,0.12)] backdrop-blur-xl"
        >
          {/* Core grid */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-full opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />

          {/* Core content */}
          <div className="relative text-center">
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: [0.65, 1, 0.65],
                    }
              }
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: 2.5,
                      repeat: Infinity,
                    }
              }
              className="font-mono text-4xl font-semibold tracking-[-0.08em] text-text-primary"
            >
              P<span className="text-accent">R</span>
            </motion.div>

            <div className="mt-2 font-mono text-[8px] uppercase tracking-[0.35em] text-text-muted">
              DEV_CORE
            </div>
          </div>
        </motion.div>

        {/* Technology orbit */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : { rotate: 360 }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
          className="absolute inset-[10%]"
        >
          {orbitItems.map(({ icon: Icon, angle }) => {
            const radius = 40;

            const x =
              50 +
              radius *
                Math.cos((angle * Math.PI) / 180);

            const y =
              50 +
              radius *
                Math.sin((angle * Math.PI) / 180);

            return (
              <div
                key={angle}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                }}
              >
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : { rotate: -360 }
                  }
                  transition={
                    shouldReduceMotion
                      ? undefined
                      : {
                          duration: 30,
                          repeat: Infinity,
                          ease: "linear",
                        }
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/90 text-text-muted backdrop-blur-md"
                >
                  <Icon
                    size={15}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </motion.div>
              </div>
            );
          })}
        </motion.div>

        {/* Online indicator */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : { y: [0, -5, 0] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          className="absolute right-[2%] top-[15%] rounded-full border border-border bg-surface/80 px-3 py-1.5 backdrop-blur-md"
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(45,212,190,0.8)]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-muted">
              Online
            </span>
          </div>
        </motion.div>

        {/* Terminal status */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : { y: [0, 6, 0] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          className="absolute bottom-[12%] left-[0%] rounded-lg border border-border bg-surface/80 px-4 py-3 backdrop-blur-md"
        >
          <div className="font-mono text-[9px] text-text-muted">
            <span className="text-accent">&gt;</span>{" "}
            building_web
          </div>

          <div className="mt-1 flex items-center gap-1">
            <span
              className={`h-1 w-1 rounded-full bg-accent ${
                shouldReduceMotion ? "" : "animate-pulse"
              }`}
            />

            <span className="font-mono text-[8px] text-text-muted">
              system.ready
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}