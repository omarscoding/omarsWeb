import Container from "@/components/Container";
import experience from "@/data/experience";

export const metadata = {
  title: "Experience | Omar's Portfolio",
};

export default function ExperiencePage() {
  return (
    <Container>
      <h1 className="text-2xl font-bold mb-6">Experience</h1>
      <ul className="space-y-6">
        {experience.map((e) => (
          <li key={e.title}>
            <h2 className="text-lg font-semibold">{e.title}</h2>
            <p className="text-gray-500 text-sm mb-1">
              {e.company} · {e.period}
            </p>
            <p className="text-gray-600 mb-2">{e.description}</p>
            <p className="text-sm text-gray-500">{e.tech.join(", ")}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
