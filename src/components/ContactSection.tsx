"use client";

import { motion } from "framer-motion";
import { socials } from "@/data/socials";
import { Mail, Code2, MessageCircle } from "lucide-react";
const contactLinks = [
  {
    href: socials.email || "#",
    label: "Email",
    icon: Mail,
    available: !!socials.email,
  },
  {
    href: socials.github,
    label: "GitHub",
    icon: Code2,
    available: true,
  },
  {
    href: socials.whatsapp || "#",
    label: "WhatsApp",
    icon: MessageCircle,
    available: !!socials.whatsapp,
  },
];

export function ContactSection() {
  return (
<section
  id="contact"
  className="px-6 pb-20 pt-12 sm:px-10 lg:px-16 lg:pb-24 lg:pt-16">      
  <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-3 text-sm font-medium tracking-widest uppercase text-text-muted">
            Contact
          </p>
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Let&apos;s work together
          </h2>
          <p className="mx-auto mb-12 max-w-lg text-text-secondary">
            Have a project in mind or just want to say hi? I&apos;m always open
            to discussing new opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {contactLinks
              .filter((link) => link.available)
              .map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-3 rounded-full border border-border bg-surface px-6 text-sm text-text-secondary transition-all duration-300 hover:scale-105 hover:border-accent hover:shadow-[0_0_20px_rgba(45,212,191,0.15)] hover:text-text-primary"
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </a>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}