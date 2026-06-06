import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { usePageMeta } from "@/hooks/usePageMeta";
import { CONTACT } from "@/content/site";

export default function Tilgaengelighed() {
  usePageMeta({
    title: "Tilgængelighedserklæring",
    description: "AI Rådgivnings tilgængelighedserklæring. Vi tilstræber WCAG 2.2 AA på ai-raadgivning.dk.",
  });

  return (
    <Layout>
      <PageHeader
        title="Tilgængelighedserklæring"
        crumbs={[{ label: "Forside", href: "/" }, { label: "Tilgængelighed" }]}
      />
      <section className="section">
        <div className="container">
          <div className="prose prose-slate max-w-prose">
            <p>
              AI Rådgivning ønsker, at så mange som muligt kan bruge ai-raadgivning.dk. Vi
              arbejder efter de internationale retningslinjer <strong>WCAG 2.2, niveau AA</strong>.
            </p>
            <h2>Hvad vi gør</h2>
            <ul>
              <li>Synligt tastaturfokus og mulighed for at springe direkte til indholdet.</li>
              <li>Tilstrækkelig farvekontrast og tekst, der kan forstørres.</li>
              <li>Respekt for «reducér bevægelse», så animationer kan slås fra.</li>
              <li>Meningsfuld struktur, alternativ tekst på billeder og labels på formularer.</li>
            </ul>
            <h2>Noget der ikke virker?</h2>
            <p>
              Oplever du et tilgængelighedsproblem, så hører vi gerne fra dig — så retter vi det.
              Skriv til <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> eller ring på{" "}
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
