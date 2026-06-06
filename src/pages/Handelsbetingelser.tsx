import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { usePageMeta } from "@/hooks/usePageMeta";
import { CONTACT } from "@/content/site";

export default function Handelsbetingelser() {
  usePageMeta({
    title: "Handelsbetingelser",
    description: "Handelsbetingelser for AI Rådgivning (Solution8).",
  });

  return (
    <Layout>
      <PageHeader
        title="Handelsbetingelser"
        crumbs={[{ label: "Forside", href: "/" }, { label: "Handelsbetingelser" }]}
      />
      <section className="section">
        <div className="container">
          <div className="prose prose-slate max-w-prose">
            <p>
              Disse handelsbetingelser gælder for ydelser leveret af {CONTACT.company}{" "}
              ({CONTACT.legal}, CVR {CONTACT.cvr}).
            </p>
            <p>
              <em>De fulde handelsbetingelser opdateres her. Har du spørgsmål til en konkret aftale
              eller et tilbud, er du velkommen til at kontakte os på{" "}
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> eller{" "}
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>.</em>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
