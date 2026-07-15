import { site } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border/60 border-t">
      <div className="text-muted mx-auto flex w-full max-w-3xl flex-col gap-1 px-6 py-10 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <p className="group relative w-fit">
          {site.location}
          <span
            aria-hidden
            className="pointer-events-none absolute left-full ml-1.5 -translate-x-1 scale-75 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 motion-reduce:transition-none"
          >
            🍺
          </span>
        </p>
      </div>
    </footer>
  );
}
