"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

export function CursorGlow() {
  const mouseX = useMotionValue(-150);
  const mouseY = useMotionValue(-150);

  const intensity = useMotionValue(0);

  const glowX = useSpring(mouseX, {
    stiffness: 120,
    damping: 25,
    mass: 0.4,
  });

  const glowY = useSpring(mouseY, {
    stiffness: 120,
    damping: 25,
    mass: 0.4,
  });

  const scale = useSpring(
    useTransform(intensity, [0, 1, 2], [1, 1.08, 1.16]),
    {
      stiffness: 180,
      damping: 22,
    }
  );

  const opacity = useSpring(
    useTransform(intensity, [0, 1, 2], [0.05, 0.07, 0.1]),
    {
      stiffness: 180,
      damping: 22,
    }
  );

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");

    if (!finePointer.matches) return;

    const handlePointerMove = (event: PointerEvent) => {
      mouseX.set(event.clientX - 150);
      mouseY.set(event.clientY - 150);
    };

    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;

      if (!target) return;

      const interactive = target.closest(
        "a, button, [data-cursor]"
      ) as HTMLElement | null;

      if (!interactive) {
        intensity.set(0);
        return;
      }

      const cursorType = interactive.dataset.cursor;

      if (cursorType === "strong") {
        intensity.set(2);
      } else {
        intensity.set(1);
      }
    };

    const handlePointerOut = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;

      if (!target) return;

      const interactive = target.closest(
        "a, button, [data-cursor]"
      ) as HTMLElement | null;

      if (!interactive) return;

      const relatedTarget = event.relatedTarget as HTMLElement | null;

      if (relatedTarget?.closest("a, button, [data-cursor]")) {
        return;
      }

      intensity.set(0);
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
    };
  }, [mouseX, mouseY, intensity]);

  return (
    <motion.div
      aria-hidden="true"
      style={{
        x: glowX,
        y: glowY,
        scale,
        opacity,
      }}
      className="pointer-events-none fixed left-0 top-0 z-0 h-[300px] w-[300px] rounded-full bg-accent blur-[80px]"
    />
  );
}