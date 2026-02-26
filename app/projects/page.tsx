import Container from "@/components/Container";
import projects from "@/data/projects";

export const metadata = {
  title: "Projects | Omar's Portfolio",
};

export default function ProjectsPage() {
  return (
    <Container>
      <h1 className="text-2xl font-bold mb-6">Projects</h1>
      <ul className="space-y-6">
        {projects.map((p) => (
          <li key={p.title}>
            <h2 className="text-lg font-semibold">{p.title}</h2>
            <p className="text-gray-600 mb-1">{p.description}</p>
            <p className="text-sm text-gray-500 mb-2">{p.tech.join(", ")}</p>
            <div className="flex gap-4 text-sm">
              {p.links.github && (
                <a
                  href={p.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  GitHub
                </a>
              )}
              {p.links.live && (
                <a
                  href={p.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Live
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}
