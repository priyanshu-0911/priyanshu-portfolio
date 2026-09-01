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
    description:
      "A modern, responsive healthcare website focused on clear information, accessible navigation and a polished digital experience.",
    category: "Web Experience",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    featured: true,
    status: "completed",
    githubUrl:
      "https://github.com/priyanshu-0911/clinic-website-sample",
  },

  {
    id: "connect-pro",
    title: "ConnectPro",
    description:
      "A full-stack platform built around real application flows, backend integration and Razorpay payment processing.",
    category: "Full-Stack Application",
    technologies: [
      "React",
      "Node.js",
      "Razorpay",
      "REST API",
    ],
    featured: true,
    status: "completed",
    githubUrl:
      "https://github.com/priyanshu-0911/connectpro",
  },
];