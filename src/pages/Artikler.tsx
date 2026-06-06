import { ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";
import { CONTACT } from "@/content/site";

/** Dedicated knowledge micro-sites — the deep "viden" of the portfolio. */
const KNOWLEDGE = [
  { title: "AI Sikkerhed", body: "Praktisk overblik over AI-risici for danske organisationer — baseret på bl.a. MIT AI Risk Repository og OWASP.", href: "https://ai-sikkerhed.dk" },
  { title: "AI Compliance", body: "Bliv klar til EU AI Act. Lovkrav, standarder og drift — ISO 42001, NIST AI RMF, Datatilsynet.", href: "https://ai-compliance.dk" },
  { title: "AI Governance", body: "Sæt rammerne for ansvarlig AI: roller, politikker og kontrol — NIST AI RMF, ISO 42001, agent-governance.", href: "https://ai-governance.dk" },
];

export default function Artikler() {
  usePageMeta({
    title: "Artikler & viden",
    description:
      "AI-nyheder, guides og dybdegående overblik for danske virksomheder — i et sprog, alle kan forstå. Plus vores videnssites om AI-sikkerhed, compliance og governance.",
  });

  return (
    <Layout>
      <PageHeader
        eyebrow="Artikler & viden"
        title="AI, forklaret så det kan bruges"
        lead="Vi deler viden om AI for danske virksomheder — uden hype og i et sprog, alle kan forstå."
        crumbs={[{ label: "Forside", href: "/" }, { label: "Artikler" }]}
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <h2 className="h3">Gå i dybden på vores videnssites</h2>
            <p className="mt-3 max-w-prose text-muted-foreground">
              Vi har samlet praktisk, opdateret viden om de områder, hvor det betyder mest.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {KNOWLEDGE.map((k, i) => (
              <Reveal key={k.title} delay={i * 80}>
                <a href={k.href} target="_blank" rel="noopener noreferrer" className="group block h-full">
                  <Card className="flex h-full flex-col border-border p-7 transition-all group-hover:border-teal group-hover:shadow-sm">
                    <h3 className="flex items-center gap-1 font-display text-xl font-semibold">
                      {k.title}
                      <ArrowUpRight className="h-4 w-4 text-teal transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                    </h3>
                    <p className="mt-3 flex-1 text-sm text-muted-foreground">{k.body}</p>
                  </Card>
                </a>
              </Reveal>
            ))}
          </div>

          {/* Newsletter */}
          <Reveal className="mt-16 rounded-2xl border border-border bg-secondary/40 p-8 text-center md:p-12">
            <h2 className="h3">Få AI-nyheder direkte i indbakken</h2>
            <p className="mx-auto mt-3 max-w-prose text-muted-foreground">
              Konkrete tips, værktøjer og overblik for danske virksomheder. Ingen spam — og du kan
              altid framelde dig igen.
            </p>
            <Button asChild size="lg" className="mt-6">
              <a href="/#nyhedsbrev">Tilmeld nyhedsbrev</a>
            </Button>
          </Reveal>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            Flere artikler er på vej. Har du et emne, vi bør tage op?{" "}
            <a href={`mailto:${CONTACT.email}`} className="font-medium text-teal hover:underline">Skriv til os</a>.
          </p>
        </div>
      </section>
    </Layout>
  );
}
