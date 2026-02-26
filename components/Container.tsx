import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      {children}
    </main>
  );
}
