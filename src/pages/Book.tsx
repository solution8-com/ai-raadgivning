import { Check, Clock, ShieldCheck } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { usePageMeta } from "@/hooks/usePageMeta";
import { CONTACT } from "@/content/site";

const AGENDA = [
  "Hvad I gerne vil opnå med AI",
  "Hvor det giver mest mening at starte hos jer",
  "Et bud på de næste konkrete skridt",
];

export default function Book() {
  usePageMeta({
    title: "Book et møde",
    description:
      "Book et 30-minutters uforpligtende møde med AI Rådgivning. Vi taler om, hvor AI kan skabe værdi i jeres virksomhed, og hvad de næste skridt er.",
  });

  return (
    <Layout>
      <PageHeader
        eyebrow="Book et møde"
        title="Lad os tage en uforpligtende snak"
        lead="30 minutter, gratis og uden forpligtelser. Vælg et tidspunkt, der passer dig — så taler vi om, hvor AI kan skabe værdi hos jer."
        crumbs={[{ label: "Forside", href: "/" }, { label: "Book et møde" }]}
      />

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h2 className="h3">Det taler vi om</h2>
            <ul className="mt-5 space-y-3">
              {AGENDA.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-teal" aria-hidden /> 30 minutter</li>
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-teal" aria-hidden /> Gratis og uforpligtende</li>
            </ul>
            <p className="mt-8 text-sm text-muted-foreground">
              Passer ingen af tiderne? Skriv til{" "}
              <a href={`mailto:${CONTACT.email}`} className="font-medium text-teal hover:underline">{CONTACT.email}</a>{" "}
              eller ring på{" "}
              <a href={CONTACT.phoneHref} className="font-medium text-teal hover:underline">{CONTACT.phone}</a>.
            </p>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-8">
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Book et møde med AI Rådgivning"
                src={`${CONTACT.calendly}?hide_gdpr_banner=1`}
                className="h-[760px] w-full"
                loading="lazy"
              />
            </div>
            <noscript>
              <p className="mt-4">
                Aktivér JavaScript for at booke direkte, eller{" "}
                <a href={CONTACT.calendly}>book her</a>.
              </p>
            </noscript>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
