import { Navigate, useParams, Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import { Card } from "@/components/ui/card";
import { usePageMeta } from "@/hooks/usePageMeta";
import { getDepartment, DEPARTMENTS } from "@/content/departments";

export default function Afdeling() {
  const { slug } = useParams();
  const dept = getDepartment(slug);

  // Hooks must run unconditionally — compute meta with safe fallbacks.
  usePageMeta({
    title: dept ? dept.title : "AI i afdelingen",
    description: dept ? dept.intro : "AI til din afdeling.",
  });

  if (!dept) return <Navigate to="/afdelinger" replace />;

  const others = DEPARTMENTS.filter((d) => d.slug !== dept.slug).slice(0, 4);

  return (
    <Layout>
      <PageHeader
        eyebrow="AI i afdelingen"
        title={dept.title}
        lead={dept.intro}
        crumbs={[
          { label: "Forside", href: "/" },
          { label: "AI i afdelingen", href: "/afdelinger" },
          { label: dept.label },
        ]}
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <h2 className="h3">Sådan kan AI hjælpe</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {dept.useCases.map((u, i) => (
              <Reveal key={u.title} delay={(i % 2) * 80}>
                <Card className="flex h-full gap-4 border-border p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-teal">
                    <Check className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{u.title}</h3>
                    <p className="mt-1.5 text-muted-foreground">{u.body}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>

          {/* Other departments */}
          <div className="mt-16">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Se også
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {others.map((d) => (
                <li key={d.slug}>
                  <Link
                    to={`/afdelinger/${d.slug}`}
                    className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm font-medium transition-colors hover:border-teal hover:text-teal"
                  >
                    {d.label}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand heading={dept.cta} text="Book et uforpligtende møde, så finder vi de konkrete muligheder sammen." />
    </Layout>
  );
}
