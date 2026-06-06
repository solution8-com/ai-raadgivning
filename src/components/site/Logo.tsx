import logoDark from "@/assets/logo-dark.svg";
import logoLight from "@/assets/logo-light.svg";

/**
 * AI Rådgivning wordmark+mark (LOCKED asset — never recolour/redraw).
 * variant="dark"  → navy wordmark, for LIGHT backgrounds
 * variant="light" → white wordmark, for NAVY/dark backgrounds
 */
export function Logo({
  variant = "dark",
  className = "h-9 w-auto",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <img
      src={variant === "light" ? logoLight : logoDark}
      alt="AI Rådgivning"
      className={className}
      width={180}
      height={40}
    />
  );
}
