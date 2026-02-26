export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
}

const experience: Experience[] = [
  {
    title: "Software Engineer",
    company: "Example Company",
    period: "2023 – Present",
    description: "Placeholder role — replace this with your actual experience.",
    tech: ["TypeScript", "React", "Node.js"],
  },
  {
    title: "Junior Developer",
    company: "Another Company",
    period: "2021 – 2023",
    description: "Worked on full-stack web applications.",
    tech: ["JavaScript", "Python", "PostgreSQL"],
  },
];

export default experience;
