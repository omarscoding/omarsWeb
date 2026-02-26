export interface Project {
  title: string;
  description: string;
  tech: string[];
  links: {
    github?: string;
    live?: string;
  };
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Personal developer portfolio built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: {
      github: "https://github.com/omarscoding/omarsWeb",
    },
  },
  {
    title: "Example Project",
    description: "A placeholder project — replace this with your own work.",
    tech: ["React", "Node.js"],
    links: {
      github: "https://github.com",
      live: "https://example.com",
    },
  },
];

export default projects;
