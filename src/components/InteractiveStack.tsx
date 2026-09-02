"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Database,
  Globe,
  Layers3,
  Server,
  Wrench,
  ArrowUpRight,
} from "lucide-react";
import {
  siReact,
  siNextdotjs,
  siTypescript,
  siTailwindcss,
  siNodedotjs,
  siMysql,
  siFramer,
  siGit,
  siGithub,
  siCloudflare,
  siThreedotjs,
  siGreensock,
} from "simple-icons";

type Category =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Motion & 3D"
  | "Tools";

type Technology = {
  name: string;
  description: string;
  category: Category;
  icon: {
  title: string;
  path: string;
};
  tags: string[];
};

const categories: {
  name: Category;
  icon: typeof Globe;
}[] = [
  {
    name: "Frontend",
    icon: Globe,
  },
  {
    name: "Backend",
    icon: Server,
  },
  {
    name: "Database",
    icon: Database,
  },
  {
    name: "Motion & 3D",
    icon: Layers3,
  },
  {
    name: "Tools",
    icon: Wrench,
  },
];

const technologies: Technology[] = [
  {
    name: "React",
    description:
      "Building component-driven interfaces with reusable architecture and interactive state.",
    category: "Frontend",
    icon: siReact,
    tags: ["Components", "UI", "State"],
  },
  {
    name: "Next.js",
    description:
      "Creating production-ready React applications with modern routing, rendering, and deployment.",
    category: "Frontend",
    icon: siNextdotjs,
    tags: ["React", "SSR", "Full-stack"],
  },
  {
    name: "TypeScript",
    description:
      "Writing safer, more maintainable applications with strong typing and predictable interfaces.",
    category: "Frontend",
    icon: siTypescript,
    tags: ["Types", "DX", "Architecture"],
  },
  {
    name: "Tailwind CSS",
    description:
      "Designing responsive interfaces rapidly while keeping visual systems consistent.",
    category: "Frontend",
    icon: siTailwindcss,
    tags: ["CSS", "Responsive", "UI"],
  },
  {
    name: "Node.js",
    description:
      "Building backend services, APIs, and application logic with the JavaScript runtime.",
    category: "Backend",
    icon: siNodedotjs,
    tags: ["Runtime", "API", "Server"],
  },
  {
    name: "REST APIs",
    description:
      "Connecting applications through clean, predictable API architecture and data flows.",
    category: "Backend",
    icon: {
      path: "",
      title: "API",
    },
    tags: ["HTTP", "JSON", "Integration"],
  },
  {
    name: "MySQL",
    description:
      "Working with relational data, queries, schemas, and application persistence.",
    category: "Database",
    icon: siMysql,
    tags: ["SQL", "Data", "Relations"],
  },
  {
    name: "Framer Motion",
    description:
      "Creating expressive interfaces through spring physics, transitions, and scroll-aware motion.",
    category: "Motion & 3D",
    icon: siFramer,
    tags: ["Motion", "Spring", "UI"],
  },
  {
    name: "GSAP",
    description:
      "Building advanced animation sequences and timeline-driven interactions.",
    category: "Motion & 3D",
    icon: siGreensock,
    tags: ["Timeline", "Motion", "Scroll"],
  },
  {
    name: "React Three Fiber",
    description:
      "Exploring interactive 3D experiences inside the React ecosystem.",
    category: "Motion & 3D",
    icon: siThreedotjs,
    tags: ["Three.js", "3D", "WebGL"],
  },
  {
    name: "Git",
    description:
      "Managing source code, branches, experiments, and development workflows.",
    category: "Tools",
    icon: siGit,
    tags: ["Versioning", "CLI", "Workflow"],
  },
  {
    name: "GitHub",
    description:
      "Managing repositories, showcasing projects, and maintaining development history.",
    category: "Tools",
    icon: siGithub,
    tags: ["Repos", "Open Source", "Collaboration"],
  },
  {
    name: "Cloudflare",
    description:
      "Deploying modern web applications and experimenting with edge infrastructure.",
    category: "Tools",
    icon: siCloudflare,
    tags: ["Edge", "Workers", "Deploy"],
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

function MagneticButton({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 300,
    damping: 20,
    mass: 0.2,
  });

  const springY = useSpring(y, {
    stiffness: 300,
    damping: 20,
    mass: 0.2,
  });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const offsetX =
      event.clientX - (rect.left + rect.width / 2);

    const offsetY =
      event.clientY - (rect.top + rect.height / 2);

    x.set(offsetX * 0.12);
    y.set(offsetY * 0.12);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{
        x: springX,
        y: springY,
      }}
      whileTap={{
        scale: 0.985,
      }}
        className="group relative flex min-h-11 w-full items-center gap-4 rounded-xl px-4 py-3.5 text-left sm:py-4">
      {active && (
        <motion.div
          layoutId="active-stack-category"
          className="absolute inset-0 rounded-xl bg-white/[0.035]"
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 30,
          }}
        />
      )}

      <motion.span
        animate={{
          scale: active ? 1 : 0.7,
          opacity: active ? 1 : 0.35,
        }}
        transition={{
          duration: 0.25,
        }}
        className="relative z-10 h-1.5 w-1.5 rounded-full bg-accent"
      />

      {children}
    </motion.button>
  );
}

function InteractiveCard({
  technology,
}: {
  technology: Technology;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springRotateX = useSpring(rotateX, {
    stiffness: 180,
    damping: 22,
    mass: 0.4,
  });

  const springRotateY = useSpring(rotateY, {
    stiffness: 180,
    damping: 22,
    mass: 0.4,
  });

  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const lightX = useTransform(
    mouseX,
    (value) => `${value}%`,
  );

  const lightY = useTransform(
    mouseY,
    (value) => `${value}%`,
  );

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const relativeX = event.clientX - rect.left;
    const relativeY = event.clientY - rect.top;

    const percentX = (relativeX / rect.width) * 100;
    const percentY = (relativeY / rect.height) * 100;

    mouseX.set(percentX);
    mouseY.set(percentY);

    const rotationY = (percentX - 50) * 0.045;
    const rotationX = (50 - percentY) * 0.045;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);

    mouseX.set(50);
    mouseY.set(50);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 900,
      }}
      whileHover={{
        y: -3,
        scale: 1.01,
      }}
      transition={{
        duration: 0.35,
        ease,
      }}
      className="group relative overflow-hidden rounded-xl border border-border bg-background/40 p-5"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.08] blur-3xl"
        style={{
          left: lightX,
          top: lightY,
          width: 180,
          height: 180,
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-xl border border-accent/0 transition-colors duration-500 group-hover:border-accent/20"
      />

      <motion.div
        aria-hidden="true"
        className="absolute left-0 top-0 h-px w-full origin-left bg-accent"
        initial={{
          scaleX: 0,
        }}
        whileHover={{
          scaleX: 1,
        }}
        transition={{
          duration: 0.45,
          ease,
        }}
      />

      <div className="relative z-10 flex items-start justify-between gap-4">
        <motion.div
          whileHover={{
            rotate: -4,
            scale: 1.04,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 18,
          }}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white/[0.025] font-mono text-[10px] font-medium text-text-secondary transition-colors duration-300 group-hover:border-accent/30 group-hover:text-accent"
        >
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-5 w-5 fill-current transition-transform duration-300 group-hover:scale-110"
  >
    <path d={technology.icon.path} />
  </svg>
</motion.div>

        <ArrowUpRight
          size={15}
          className="text-text-muted opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent group-hover:opacity-100"
        />
      </div>

      <h3 className="relative z-10 mt-5 text-base font-medium text-text-primary">
        {technology.name}
      </h3>

      <p className="relative z-10 mt-2 text-sm leading-6 text-text-secondary">
        {technology.description}
      </p>

      <div className="relative z-10 mt-5 flex flex-wrap gap-1.5">
        {technology.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-text-muted transition-colors duration-300 group-hover:text-text-secondary"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function InteractiveStack() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("Frontend");

  const filteredTechnologies = technologies.filter(
    (technology) =>
      technology.category === activeCategory,
  );

  const ActiveIcon =
    categories.find(
      (category) => category.name === activeCategory,
    )?.icon ?? Globe;

  const activeIndex =
    categories.findIndex(
      (category) => category.name === activeCategory,
    ) + 1;

  return (
    <section
      id="stack"
        className="relative overflow-hidden px-5 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/[0.035] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="mb-14 max-w-3xl sm:mb-16"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent">
            Technical Arsenal
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            Tools I use to
            <span className="text-text-muted">
              {" "}
              turn ideas into products.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
            A growing collection of technologies I use
            to design, build, animate, connect, and ship
            digital experiences.
          </p>
        </motion.div>

        <div className="rounded-2xl border border-border bg-surface/50 p-2.5 backdrop-blur-sm lg:sticky lg:top-28">
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.7,
              ease,
            }}
            className="relative"
          >
            <div className="lg:sticky top-28 rounded-2xl border border-border bg-surface/50 p-3 backdrop-blur-sm">
              {categories.map((category, index) => {
                const Icon = category.icon;
                const isActive =
                  category.name === activeCategory;

                return (
                  <MagneticButton
                    key={category.name}
                    active={isActive}
                    onClick={() =>
                      setActiveCategory(category.name)
                    }
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.7}
                      className={`relative z-10 transition-colors duration-300 ${
                        isActive
                          ? "text-accent"
                          : "text-text-muted group-hover:text-text-secondary"
                      }`}
                    />

                    <span
                      className={`relative z-10 text-sm transition-colors duration-300 ${
                        isActive
                          ? "text-text-primary"
                          : "text-text-secondary group-hover:text-text-primary"
                      }`}
                    >
                      {category.name}
                    </span>

                    <span className="relative z-10 ml-auto font-mono text-[10px] text-text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </MagneticButton>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease,
            }}
            className="min-h-[520px] rounded-2xl border border-border bg-surface/30 p-5 sm:p-7"
          >
            <div className="mb-8 flex items-center justify-between border-b border-border pb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white/[0.025]">
                  <ActiveIcon
                    size={17}
                    strokeWidth={1.6}
                    className="text-accent"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium text-text-primary">
                    {activeCategory}
                  </p>

                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">
                    {filteredTechnologies.length} technologies
                  </p>
                </div>
              </div>

              <span className="font-mono text-[10px] text-text-muted">
                / {String(activeIndex).padStart(2, "0")}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{
                  opacity: 0,
                  y: 8,
                  filter: "blur(3px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                  filter: "blur(4px)",
                }}
                transition={{
                  duration: 0.35,
                  ease,
                }}
                className="grid gap-3 sm:grid-cols-2"
              >
                {filteredTechnologies.map(
                  (technology, index) => (
                    <motion.div
                      key={technology.name}
                      initial={{
                        opacity: 0,
                        y: 14,
                        scale: 0.985,
                        filter: "blur(3px)",
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        filter: "blur(0px)",
                      }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.055,
                        ease,
                      }}
                    >
                      <InteractiveCard
                        technology={technology}
                      />
                    </motion.div>
                  ),
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
            duration: 0.6,
          }}
          className="mt-10 flex items-center gap-4"
        >
          <span className="h-px flex-1 bg-border" />

          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
            Always learning · always building
          </span>

          <span className="h-px flex-1 bg-border" />
        </motion.div>
      </div>
    </section>
  );
}