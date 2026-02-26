export default function Footer() {
  return (
    <footer className="border-t py-6 mt-12">
      <div className="max-w-2xl mx-auto px-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Omar. Built with Next.js.
      </div>
    </footer>
  );
}
