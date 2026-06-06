import { ArrowRight, Check } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";
import jacob from "@/assets/jacob.jpg";
import { CONTACT, MEMBERSHIPS } from "@/content/site";

const VALUES = [
  { title: "Mennesker først", body: "AI skal gøre jeres medarbejdere stærkere — ikke overflødige. Forankring i hverdagen er hele pointen." },
  { title: "Nede på jorden", body: "Vi taler dansk og forretning, ikke buzzwords. I skal forstå, hvad I køber, og hvad I får ud af det." },
  { title: "Ansvarligt", body: "Vi tager etik, sikkerhed og lovgivning alvorligt — herunder EU's AI Act — så I kan bruge AI trygt." },
];

export default function OmOs() {
  usePageMeta({
    title: "Om os",
    description:
      "AI Rådgivning er drevet af Jacob Dalhoff og hjælper mellemstore danske virksomheder med praktisk AI. Vi sidder i Dansk Standards AI-udvalg og følger EU's AI Act tæt.",
  });

  return (
    <Layout>
      <section className="border-b border-border bg-secondary/40">
        <div className="container grid items-center gap-10 py-14 md:grid-cols-12 md:py-20">
          <Reveal className="md:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-border clip-slope-b">
              <img
                src={jacob}
                alt="Jacob Dalhoff, AI-rådgiver og indehaver af AI Rådgivning"
                className="aspect-[4/5] w-full object-cover"
                width={933}
                height={1166}
              />
            </div>
          </Reveal>
          <Reveal delay={100} className="md:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-wide text-teal">Om os</p>
            <h1 className="h1 mt-2">En rådgiver, der taler jeres sprog</h1>
            <p className="lead mt-5">
              AI Rådgivning er drevet af <strong className="text-foreground">Jacob Dalhoff</strong>.
              Vi hjælper mellemstore danske virksomheder med at bruge AI dér, hvor det skaber værdi —
              og vi sidder med ved bordet, til det rent faktisk bruges i hverdagen.
            </p>
            <div className="mt-7">
              <Button asChild size="lg">
                <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer">
                  Tag en snak med Jacob <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="max-w-prose">
            <h2 className="h2">Det, vi tror på</h2>
            <p className="lead mt-4">
              AI handler om mennesker — ikke om maskiner. Det er ikke bare en sætning; det er sådan,
              vi arbejder.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-teal">
                    <Check className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="font-display text-xl font-semibold">{v.title}</h3>
                  <p className="mt-2 text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="container grid items-center gap-8 md:grid-cols-2">
          <Reveal>
            <h2 className="h2 text-white">Med ved bordet, hvor AI formes</h2>
            <p className="mt-4 text-lg text-white/70">
              Vi er aktive i de fora, der former ansvarlig brug af AI i Danmark, og følger
              lovgivningen tæt. Det betyder, at I får rådgivning på et solidt og opdateret grundlag.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ul className="grid gap-3">
              {MEMBERSHIPS.map((m) => (
                <li key={m} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4">
                  <Check className="h-5 w-5 shrink-0 text-cyan" aria-hidden />
                  <span className="font-medium text-white">{m}</span>
                </li>
              ))}
              <li className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4">
                <Check className="h-5 w-5 shrink-0 text-cyan" aria-hidden />
                <span className="font-medium text-white">Kender EU's AI Act</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}
