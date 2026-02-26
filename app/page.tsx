import Container from "@/components/Container";
import projects from "@/data/projects";
import experience from "@/data/experience";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <section className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Omar</h1>
        <p className="text-gray-600 mb-4">
          Software developer. I build things for the web.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/omarscoding"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/omar"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
        </h2>
        <ul className="space-y-2">
          {projects.map((p) => (
            <li key={p.title}>
              <span className="font-medium">{p.title}</span>
              <span className="text-gray-500"> — {p.description}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">
          <Link href="/experience" className="hover:underline">
            Experience
          </Link>
        </h2>
        <ul className="space-y-2">
          {experience.map((e) => (
            <li key={e.title}>
              <span className="font-medium">{e.title}</span>
              <span className="text-gray-500"> at {e.company}</span>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
