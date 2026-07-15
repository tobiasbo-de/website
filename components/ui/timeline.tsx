import type { TimelineEntry } from "@/content/site";

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="border-border/80 space-y-8 border-l pl-6">
      {entries.map((entry) => (
        <li key={`${entry.period}-${entry.title}`} className="group relative">
          <span
            className="border-background bg-accent absolute top-1.5 -left-7 size-2 rounded-full transition-transform duration-150 group-hover:scale-200"
            aria-hidden
          />
          <p className="text-muted font-mono text-sm tracking-[0.12em] uppercase transition duration-150 group-hover:underline">
            {entry.period}
          </p>
          <h4 className="mt-1 font-mono text-xl font-semibold">
            {entry.title}
          </h4>
          <p className="text-accent text-base">{entry.organization}</p>
          {entry.description && (
            <p className="text-muted mt-2 leading-relaxed">
              {entry.description}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}
