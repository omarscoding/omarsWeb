import Container from "@/components/Container";

export const metadata = {
  title: "Contact | Omar's Portfolio",
};

export default function ContactPage() {
  return (
    <Container>
      <h1 className="text-2xl font-bold mb-6">Contact</h1>
      <ul className="space-y-3">
        <li>
          <span className="font-medium">Email: </span>
          <a href="mailto:omaryoussefnz@gmail.com" className="underline">
            omaryoussefnz@gmail.com
          </a>
        </li>
        <li>
          <span className="font-medium">GitHub: </span>
          <a
            href="https://github.com/omarscoding"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            github.com/omarscoding
          </a>
        </li>
        <li>
          <span className="font-medium">LinkedIn: </span>
          <a
            href="https://www.linkedin.com/in/omar-6-youssef/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            linkedin.com/in/omar-6-youssef
          </a>
        </li>
      </ul>
    </Container>
  );
}
