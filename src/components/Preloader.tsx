"use client";

import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(
      () => setIsLoading(false),
      shouldReduceMotion ? 400 : 2000
    );

    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-background"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : { scale: [1, 1.1, 1] }
              }
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-4xl font-bold text-text-primary"
            >
              Bonjour!<span className="text-accent">.</span>
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: shouldReduceMotion ? 0.4 : 1.8,
                ease: "easeInOut",
              }}
              className="mx-auto mt-4 h-[2px] max-w-[200px] rounded-full bg-accent/50"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}