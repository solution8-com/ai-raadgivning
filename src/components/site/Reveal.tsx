import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Subtle on-scroll entrance (fade + rise). Robust by design:
 *  - anything already in the viewport on mount reveals immediately,
 *  - a failsafe timer reveals regardless if the observer never fires,
 *  - prefers-reduced-motion is neutralised globally in index.css.
 * This guarantees content is never stuck hidden (matters for prerender/SSR + a11y).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Already (near) in view, or no observer support → reveal now.
    const inView = el.getBoundingClientRect().top < window.innerHeight * 0.95;
    if (inView || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(el);

    // Failsafe: never leave content hidden.
    const t = window.setTimeout(() => setShown(true), 1500);

    return () => {
      obs.disconnect();
      window.clearTimeout(t);
    };
  }, []);

  return (
    <Tag
      // @ts-expect-error ref union across element tags
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
