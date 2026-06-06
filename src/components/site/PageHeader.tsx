import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

type Crumb = { label: string; href?: string };

/**
 * Standard page header band: optional breadcrumb + eyebrow + H1 + lead.
 */
export function PageHeader({
  eyebrow,
  title,
  lead,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="container py-14 md:py-20">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Brødkrumme" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
              {crumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-1">
                  {c.href ? (
                    <Link to={c.href} className="hover:text-teal">{c.label}</Link>
                  ) : (
                    <span className="text-foreground">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && <ChevronRight className="h-4 w-4 opacity-50" aria-hidden />}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <Reveal>
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wide text-teal">{eyebrow}</p>
          )}
          <h1 className="h1 mt-2 max-w-3xl">{title}</h1>
          {lead && <p className="lead mt-5 max-w-prose">{lead}</p>}
        </Reveal>
      </div>
    </section>
  );
}
