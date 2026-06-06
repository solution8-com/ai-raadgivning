import { Quote } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import { Card } from "@/components/ui/card";
import { usePageMeta } from "@/hooks/usePageMeta";
import { TESTIMONIALS, MEMBERSHIPS } from "@/content/site";

export default function Cases() {
  usePageMeta({
    title: "Cases & anbefalinger",
    description:
      "Hvad siger virksomhederne om samarbejdet med AI Rådgivning? Anbefalinger fra danske virksomheder, vi har hjulpet godt i gang med AI.",
  });

  return (
    <Layout>
      <PageHeader
        eyebrow="Cases & anbefalinger"
        title="Virksomheder, vi har hjulpet godt i gang"
        lead="Vi måler succes på, hvad I får ud af det. Her er nogle af de virksomheder, vi har arbejdet sammen med."
        crumbs={[{ label: "Forside", href: "/" }, { label: "Cases" }]}
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <Card className="flex h-full flex-col border-border p-7">
                  <Quote className="h-7 w-7 text-iconblue" aria-hidden />
                  <p className="mt-4 flex-1 text-lg leading-relaxed text-foreground">„{t.quote}”</p>
                  <div className="mt-6">
                    <p className="font-display font-semibold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 rounded-2xl border border-border bg-secondary/40 p-8 md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <h2 className="h3">Et ansvarligt valg af rådgiver</h2>
                <p className="mt-3 text-muted-foreground">
                  Vi tager ansvar og etik alvorligt. Derfor er vi aktive i de fora, der former
                  ansvarlig brug af AI i Danmark — og vi følger EU's AI Act tæt, så I kan bruge
                  AI trygt.
                </p>
              </div>
              <ul className="flex flex-wrap gap-2 md:justify-end">
                {MEMBERSHIPS.map((m) => (
                  <li key={m} className="rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium">
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand heading="Skal jeres virksomhed være den næste?" />
    </Layout>
  );
}
