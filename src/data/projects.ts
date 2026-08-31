export type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  featured: boolean;
  status: "completed" | "in-progress" | "experimental";
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: "clinic-website",
    title: "Clinic Website",
    description: "",
    category: "Web Experience",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
    status: "completed",
    liveUrl: "",
    githubUrl: "",
    image: "",
  },

  {
    id: "payment-application",
    title: "Full-Stack Payment Application",
    description: "",
    category: "Full-Stack Application",
    technologies: [],
    featured: true,
    status: "completed",
    liveUrl: "",
    githubUrl: "",
    image: "",
  },
];