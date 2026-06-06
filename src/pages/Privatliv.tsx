import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { usePageMeta } from "@/hooks/usePageMeta";
import { CONTACT } from "@/content/site";

export default function Privatliv() {
  usePageMeta({
    title: "Privatlivspolitik",
    description: "AI Rådgivnings privatlivspolitik — hvordan vi behandler personoplysninger.",
  });

  return (
    <Layout>
      <PageHeader
        title="Privatlivspolitik"
        crumbs={[{ label: "Forside", href: "/" }, { label: "Privatlivspolitik" }]}
      />
      <section className="section">
        <div className="container">
          <div className="prose prose-slate max-w-prose">
            <p>
              {CONTACT.company} ({CONTACT.legal}, CVR {CONTACT.cvr}) er dataansvarlig for de
              personoplysninger, vi behandler om dig, når du kontakter os, tilmelder dig vores
              nyhedsbrev eller booker et møde.
            </p>
            <p>
              Vi behandler kun de oplysninger, der er nødvendige for at besvare din henvendelse og
              levere vores ydelser, og vi videregiver dem ikke til uvedkommende. Du har til enhver
              tid ret til indsigt, berigtigelse og sletning.
            </p>
            <p>
              <em>Den fulde privatlivspolitik opdateres her. Har du spørgsmål til, hvordan vi
              behandler dine oplysninger, er du velkommen til at kontakte os på{" "}
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.</em>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
