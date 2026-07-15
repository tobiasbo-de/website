import type { ReactNode } from "react";

import { Reveal } from "@/components/ui/reveal";

type SectionProps = {
  id: string;
  title?: string;
  children: ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="border-border/50 scroll-mt-16 border-t">
      <Reveal className="mx-auto w-full max-w-3xl px-6 py-20 sm:py-28">
        {title ? <SectionTitle>{title}</SectionTitle> : null}
        {children}
      </Reveal>
    </section>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-muted mb-12 font-mono text-sm font-medium tracking-[0.2em] uppercase">
      {children}
    </h2>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return <h3 className="mb-6 font-mono text-2xl font-semibold">{children}</h3>;
}
