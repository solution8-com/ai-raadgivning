import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";
import { SERVICES, STEPS, CONTACT } from "@/content/site";

export default function Ydelser() {
  usePageMeta({
    title: "AI-ydelser",
    description:
      "Tre måder vi skaber værdi på: rådgivning & strategi, uddannelse af medarbejdere og udvikling af tilpassede AI-løsninger — til mellemstore danske virksomheder.",
  });

  return (
    <Layout>
      <PageHeader
        eyebrow="AI-ydelser"
        title="Tre måder vi skaber værdi på"
        lead="Vi møder jer dér, hvor I er — fra første afklaring til løsninger i drift. Altid med fokus på, hvad I får ud af det."
        crumbs={[{ label: "Forside", href: "/" }, { label: "AI-ydelser" }]}
      />

      <section className="section">
        <div className="container space-y-8">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <Card className="grid gap-6 border-border p-7 md:grid-cols-12 md:p-10">
                <div className="md:col-span-5">
                  <span className="font-display text-sm font-semibold text-teal">0{i + 1}</span>
                  <h2 className="h3 mt-1">{s.title}</h2>
                  <p className="mt-3 text-muted-foreground">{s.body}</p>
                  <Button asChild className="mt-6">
                    <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer">
                      Book en snak <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <ul className="grid content-start gap-3 md:col-span-7">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 rounded-lg bg-secondary/50 px-4 py-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden />
                      <span className="font-medium">{p}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section bg-navy text-white">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan">Sådan arbejder vi</p>
            <h2 className="h2 mt-2 text-white">Fra potentiale til forankret løsning</h2>
            <p className="mt-4 text-lg text-white/70">
              En enkel, gennemskuelig proces — vi gør det sammen med jer, ikke hen over hovedet på jer.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <span className="font-display text-3xl font-bold text-cyan">{s.n}</span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="rounded-2xl border border-border bg-secondary/40 p-8 text-center md:p-12">
            <h2 className="h3">Eller find AI til en konkret afdeling</h2>
            <p className="mx-auto mt-3 max-w-prose text-muted-foreground">
              Vi har konkrete forløb til ledelse, salg, kundeservice, HR og flere.
            </p>
            <Button asChild variant="outline" size="lg" className="mt-6">
              <Link to="/afdelinger">Se AI i afdelingen <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}
