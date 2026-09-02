export type ExperimentStatus = "building" | "exploring" | "shipped";

export type Experiment = {
  id: string;
  title: string;
  description: string;
  status: ExperimentStatus;
  technologies: string[];
  href?: string;
  featured?: boolean;
};

export const currentlyBuilding: Experiment[] = [
  {
    id: "portfolio",
    title: "This Portfolio",
    description:
      "An evolving frontend experiment focused on interaction, motion, visual systems, and thoughtful user experience.",
    status: "building",
    technologies: ["Next.js", "TypeScript", "Framer Motion"],
    href: "https://github.com/priyanshu-0911/priyanshu-portfolio",
    featured: true,
  },
];

export const experiments: Experiment[] = [
  {
    id: "motion",
    title: "Motion Systems",
    description:
      "Exploring how animation, transitions, and interaction can make interfaces feel more intentional without becoming distracting.",
    status: "exploring",
    technologies: ["Framer Motion", "GSAP"],
  },
  {
    id: "3d-ui",
    title: "3D Interfaces",
    description:
      "Experimenting with interactive 3D elements and spatial interfaces for the web.",
    status: "exploring",
    technologies: ["React Three Fiber", "Drei"],
  },
];