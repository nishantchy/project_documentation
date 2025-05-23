import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
