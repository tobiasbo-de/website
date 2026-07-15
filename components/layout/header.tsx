import Image from "next/image";

import { nav, site } from "@/content/site";

export default function Header() {
  return (
    <header className="border-border/60 bg-background/70 sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-3xl items-center justify-between px-6">
        <a
          href="#top"
          className="transition-opacity hover:opacity-80"
          aria-label={`${site.name} — back to top`}
        >
          <Image
            src="/tb-logo.svg"
            alt={site.name}
            width={68}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </a>

        <nav aria-label="Sections">
          <ul className="flex items-center gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-muted hover:text-foreground text-base transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
