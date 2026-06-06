import { useState } from "react";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";
import { toast } from "sonner";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";
import { CONTACT } from "@/content/site";

export default function Kontakt() {
  usePageMeta({
    title: "Kontakt",
    description:
      "Kontakt AI Rådgivning. Skriv eller ring — vi vender tilbage inden for én arbejdsdag. Amtmandsvej 1, 4300 Holbæk · Kontakt@ai-raadgivning.dk · +45 91 41 34 03.",
  });

  const [form, setForm] = useState({ navn: "", email: "", virksomhed: "", besked: "", consent: false });
  const set = (k: string, v: string | boolean) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to backend/mail (placeholder confirmation for now).
    if (!form.consent) {
      toast.error("Sæt venligst flueben i samtykket.");
      return;
    }
    toast.success("Tak for din besked! Vi vender tilbage inden for én arbejdsdag.");
    setForm({ navn: "", email: "", virksomhed: "", besked: "", consent: false });
  };

  const field = "h-11 w-full rounded-md border border-input bg-background px-3 text-base outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <Layout>
      <PageHeader
        eyebrow="Kontakt"
        title="Lad os tale sammen"
        lead="Skriv eller ring — vi vender tilbage inden for én arbejdsdag."
        crumbs={[{ label: "Forside", href: "/" }, { label: "Kontakt" }]}
      />

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-12">
          {/* Details */}
          <Reveal className="lg:col-span-5">
            <h2 className="h3">Kontaktoplysninger</h2>
            <ul className="mt-6 space-y-4 text-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-teal">{CONTACT.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden />
                <a href={CONTACT.phoneHref} className="hover:text-teal">{CONTACT.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden />
                <span>{CONTACT.company} · {CONTACT.legal} · CVR {CONTACT.cvr}</span>
              </li>
            </ul>
            <div className="mt-8 rounded-xl border border-border bg-secondary/40 p-5">
              <p className="text-sm text-muted-foreground">
                Vil du hellere booke et møde med det samme?{" "}
                <a href="/book" className="font-medium text-teal hover:underline">Find en tid her</a>.
              </p>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={100} className="lg:col-span-7">
            <form onSubmit={onSubmit} className="rounded-2xl border border-border p-7 md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="navn" className="mb-1.5 block text-sm font-medium">Navn</label>
                  <input id="navn" required value={form.navn} onChange={(e) => set("navn", e.target.value)} className={field} />
                </div>
                <div>
                  <label htmlFor="virksomhed" className="mb-1.5 block text-sm font-medium">Virksomhed</label>
                  <input id="virksomhed" value={form.virksomhed} onChange={(e) => set("virksomhed", e.target.value)} className={field} />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">E-mail</label>
                <input id="email" type="email" required value={form.email} onChange={(e) => set("email", e.target.value)} className={field} />
              </div>
              <div className="mt-4">
                <label htmlFor="besked" className="mb-1.5 block text-sm font-medium">Besked</label>
                <textarea id="besked" required rows={5} value={form.besked} onChange={(e) => set("besked", e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-base outline-none focus-visible:ring-2 focus-visible:ring-ring" />
              </div>
              <label className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
                <input type="checkbox" checked={form.consent} onChange={(e) => set("consent", e.target.checked)} className="mt-1 h-4 w-4 accent-teal" />
                <span>Jeg accepterer, at AI Rådgivning må behandle mine oplysninger for at besvare min henvendelse.</span>
              </label>
              <Button type="submit" size="lg" className="mt-6">Send besked</Button>
            </form>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
