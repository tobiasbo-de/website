import { LottieWordmark } from "@/components/ui/lottie-wordmark";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-3xl flex-col justify-center px-6 py-20"
    >
      <h1 className="sr-only">{site.name}</h1>

      <LottieWordmark src="/name.lottie" fallbackText={site.name} />

      <div className="mt-6 flex flex-col gap-5 sm:mt-8">
        <p className="text-accent font-mono text-xl font-medium tracking-[0.18em] uppercase sm:text-2xl">
          {site.role}
        </p>
        <p className="text-muted max-w-md text-base leading-relaxed sm:text-lg">
          {site.tagline}
        </p>
      </div>

      <a
        href="#about"
        className="group text-muted hover:text-foreground mt-14 inline-flex w-fit items-center gap-2 text-base transition-colors"
      >
        More about me
        <span
          aria-hidden
          className="group-hover:text-accent transition duration-100 group-hover:translate-y-1/4"
        >
          ↓
        </span>
      </a>
    </section>
  );
}
