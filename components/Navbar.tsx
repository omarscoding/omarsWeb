import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b py-4">
      <div className="max-w-2xl mx-auto px-4 flex gap-6">
        <Link href="/" className="font-semibold">
          Home
        </Link>
        <Link href="/projects">Projects</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
