"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      animate={{ x: mousePos.x - 150, y: mousePos.y - 150 }}
      transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      className="fixed top-0 left-0 pointer-events-none z-0 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[80px]"
    />
  );
}