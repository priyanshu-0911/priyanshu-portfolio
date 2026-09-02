"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  useEffect,
  useRef,
  type ReactNode,
} from "react";

type MagneticProps = {
  children: ReactNode;
  strength?: number;
  className?: string;
};

export function Magnetic({
  children,
  strength = 0.2,
  className,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 300,
    damping: 20,
    mass: 0.25,
  });

  const springY = useSpring(y, {
    stiffness: 300,
    damping: 20,
    mass: 0.25,
  });

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const finePointer = window.matchMedia("(pointer: fine)");

    if (!finePointer.matches) return;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();

      const relativeX =
        event.clientX - (rect.left + rect.width / 2);

      const relativeY =
        event.clientY - (rect.top + rect.height / 2);

      x.set(relativeX * strength);
      y.set(relativeY * strength);
    };

    const handlePointerLeave = () => {
      x.set(0);
      y.set(0);
    };

    element.addEventListener("pointermove", handlePointerMove);
    element.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      element.removeEventListener(
        "pointermove",
        handlePointerMove
      );
      element.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );
    };
  }, [strength, x, y]);

  return (
    <motion.div
      ref={ref}
      style={{
        x: springX,
        y: springY,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}