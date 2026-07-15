"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useCallback, useSyncExternalStore } from "react";

type LottieWordmarkProps = {
  src: string;
  fallbackText: string;
};

export function LottieWordmark({ src, fallbackText }: LottieWordmarkProps) {
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)",
  );

  if (prefersReducedMotion) {
    return (
      <div className="flex aspect-1211/400 w-full items-center" aria-hidden>
        <span className="font-mono text-5xl font-semibold sm:text-7xl">
          {fallbackText}
        </span>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden" aria-hidden>
      <DotLottieReact
        src={src}
        autoplay
        loop={false}
        className="aspect-1211/400 w-full"
      />
    </div>
  );
}

function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}
