"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between rounded-2xl border border-border bg-surface/80 px-6 py-3 backdrop-blur-xl">
          <a
            href="#hero"
            className="text-sm font-semibold tracking-tight text-text-primary"
          >
            {profile.name}
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-lg text-text-secondary transition-colors hover:text-text-primary md:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id="mobile-navigation"
              initial={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 0, y: -10, scale: 0.98 }
              }
              animate={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 1, y: 0, scale: 1 }
              }
              exit={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 0, y: -10, scale: 0.98 }
              }
              transition={{
                duration: shouldReduceMotion ? 0 : 0.2,
              }}
              className="mt-2 overflow-hidden rounded-2xl border border-border bg-surface/95 backdrop-blur-xl md:hidden"
            >
              <ul className="flex flex-col p-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-lg px-4 py-3 text-sm text-text-secondary transition-colors hover:bg-surface-elevated hover:text-text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}