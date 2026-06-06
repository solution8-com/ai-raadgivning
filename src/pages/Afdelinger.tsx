import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import { Card } from "@/components/ui/card";
import { usePageMeta } from "@/hooks/usePageMeta";
import { DEPARTMENTS } from "@/content/departments";

export default function Afdelinger() {
  usePageMeta({
    title: "AI i afdelingen",
    description:
      "Hvor i jeres organisation skaber AI mest værdi? Vi har konkrete forløb til ledelse, salg, kundeservice, projektstyring, regnskab, marketing, HR og ESG.",
  });

  return (
    <Layout>
      <PageHeader
        eyebrow="AI i afdelingen"
        title="Hvor skal vi kigge først?"
        lead="AI ser forskelligt ud fra afdeling til afdeling. Vælg et område og se, hvor det konkret kan flytte noget hos jer."
        crumbs={[{ label: "Forside", href: "/" }, { label: "AI i afdelingen" }]}
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DEPARTMENTS.map((d, i) => (
              <Reveal key={d.slug} delay={(i % 3) * 80}>
                <Link to={`/afdelinger/${d.slug}`} className="group block h-full">
                  <Card className="flex h-full flex-col border-border p-7 transition-all group-hover:border-teal group-hover:shadow-sm">
                    <h2 className="font-display text-xl font-semibold">{d.title}</h2>
                    <p className="mt-3 flex-1 text-sm text-muted-foreground">{d.intro}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-teal">
                      Se mulighederne
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand heading="Er jeres afdeling ikke på listen?" text="Vi finder altid mulighederne — uanset hvor i organisationen I starter. Tag en uforpligtende snak med os." />
    </Layout>
  );
}
