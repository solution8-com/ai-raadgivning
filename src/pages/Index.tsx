import { useState } from "react";
import { ArrowRight, Check, Clock, ShieldCheck, Quote } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import markLight from "@/assets/mark-light.svg";
import markDark from "@/assets/mark-dark.svg";
import jacob from "@/assets/jacob.jpg";
import {
  CONTACT,
  DEPARTMENTS,
  MEMBERSHIPS,
  SERVICES,
  STEPS,
  TESTIMONIALS,
  VALUE_PROPS,
} from "@/content/site";

function BookButton({ className, children = "Book et uforpligtende møde" }: { className?: string; children?: React.ReactNode }) {
  return (
    <Button asChild size="lg" className={className}>
      <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer">
        {children}
        <ArrowRight className="h-4 w-4" />
      </a>
    </Button>
  );
}

export default function Index() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to MailerLite (konto 1571946). Placeholder confirmation for now.
    if (!consent) {
      toast.error("Sæt venligst flueben i samtykket først.");
      return;
    }
    toast.success("Tak! Du er tilmeldt vores AI-nyheder.");
    setEmail("");
    setConsent(false);
  };

  return (
    <div id="top" className="min-h-screen bg-background">
      <a href="#ydelser" className="skip-link">Spring til indhold</a>
      <Header />

      <main>
        {/* 1 — HERO */}
        <section className="relative overflow-hidden">
          <img
            src={markDark}
            alt=""
            aria-hidden
            className="pointer-events-none absolute -left-16 -top-10 w-72 opacity-[0.06] md:w-96"
          />
          <div className="container grid items-center gap-10 py-16 md:grid-cols-2 md:gap-12 md:py-24">
            <Reveal>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-sm font-medium text-teal">
                AI-rådgivning til mellemstore danske virksomheder
              </p>
              <h1 className="h1 text-foreground">
                AI, der gør jeres <span className="text-teal">medarbejdere</span> stærkere
              </h1>
              <p className="lead mt-5 max-w-prose">
                Vi hjælper jer med at finde, prioritere og indføre AI dér, hvor det skaber
                værdi — afdeling for afdeling. Nede på jorden og uden hype.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <BookButton />
                <Button asChild variant="outline" size="lg">
                  <a href="#ydelser">Se hvad vi gør</a>
                </Button>
              </div>
              <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-teal" aria-hidden />
                Gratis og uforpligtende — vi vender tilbage inden for én arbejdsdag.
              </p>
            </Reveal>

            <Reveal delay={120} className="relative">
              <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-2xl bg-iceblue" aria-hidden />
              <div className="overflow-hidden rounded-2xl border border-border shadow-sm clip-slope-b">
                <img
                  src={jacob}
                  alt="Jacob Dalhoff, AI-rådgiver hos AI Rådgivning"
                  className="aspect-[4/5] w-full object-cover"
                  width={933}
                  height={1166}
                  loading="eager"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* 2 — TRUST STRIP */}
        <section aria-label="Troværdighed" className="border-y border-border bg-muted/40">
          <div className="container flex flex-col items-center justify-between gap-4 py-5 text-sm text-muted-foreground sm:flex-row">
            <span className="font-medium text-foreground">Medlem af og aktiv i:</span>
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {MEMBERSHIPS.map((m) => (
                <li key={m} className="font-display font-semibold tracking-tight text-foreground/70">
                  {m}
                </li>
              ))}
              <li className="text-foreground/70">EU AI Act-litterær</li>
            </ul>
          </div>
        </section>

        {/* 3 — VALUE PROPS */}
        <section className="section">
          <div className="container">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="h2">AI handler om mennesker — ikke om maskiner</h2>
              <p className="lead mt-4">
                Teknologien er ikke det svære. Det svære er at få den til at skabe værdi i en
                travl hverdag. Det er dér, vi kommer ind.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {VALUE_PROPS.map((v, i) => (
                <Reveal key={v.title} delay={i * 90}>
                  <Card className="h-full border-border p-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-teal">
                      <Check className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="font-display text-xl font-semibold">{v.title}</h3>
                    <p className="mt-2 text-muted-foreground">{v.body}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4 — SERVICES + DEPARTMENTS */}
        <section id="ydelser" className="section scroll-mt-24 bg-muted/40">
          <div className="container">
            <Reveal className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-teal">AI-ydelser</p>
              <h2 className="h2 mt-2">Tre måder vi skaber værdi på</h2>
              <p className="lead mt-4">
                Vi møder jer dér, hvor I er — fra første afklaring til løsninger i drift.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {SERVICES.map((s, i) => (
                <Reveal key={s.title} delay={i * 90}>
                  <Card className="flex h-full flex-col border-border p-7">
                    <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
                    <p className="mt-3 text-muted-foreground">{s.body}</p>
                    <ul className="mt-5 space-y-2 text-sm">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={CONTACT.calendly}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-teal hover:underline"
                    >
                      Læs mere <ArrowRight className="h-4 w-4" aria-hidden />
                    </a>
                  </Card>
                </Reveal>
              ))}
            </div>

            {/* Departments */}
            <Reveal id="afdelinger" className="mt-16 scroll-mt-24 rounded-2xl border border-border bg-background p-7 md:p-10">
              <div className="md:flex md:items-end md:justify-between md:gap-8">
                <div className="max-w-xl">
                  <h3 className="h3">AI i afdelingen</h3>
                  <p className="mt-3 text-muted-foreground">
                    Hvor i jeres organisation skal vi kigge først? Vi har konkrete forløb til
                    hver afdeling.
                  </p>
                </div>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {DEPARTMENTS.map((d) => (
                  <li key={d.label}>
                    <a
                      href={d.href}
                      className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-teal hover:text-teal"
                    >
                      {d.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* 5 — HOW WE WORK (navy) */}
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
                <Reveal key={s.n} delay={i * 90}>
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

        {/* 6 — PROOF / TESTIMONIALS */}
        <section id="cases" className="section scroll-mt-24">
          <div className="container">
            <Reveal className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-teal">Cases & anbefalinger</p>
              <h2 className="h2 mt-2">Hvad kunderne siger</h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={t.name} delay={i * 90}>
                  <Card className="flex h-full flex-col border-border p-7">
                    <Quote className="h-7 w-7 text-iconblue" aria-hidden />
                    <p className="mt-4 flex-1 text-lg leading-relaxed text-foreground">
                      „{t.quote}”
                    </p>
                    <div className="mt-6">
                      <p className="font-display font-semibold">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 7 — OM OS */}
        <section id="om-os" className="section scroll-mt-24 bg-muted/40">
          <div className="container grid items-center gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-border clip-slope-t">
                <img
                  src={jacob}
                  alt="Jacob Dalhoff"
                  className="aspect-[4/5] w-full object-cover"
                  width={933}
                  height={1166}
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal delay={120} className="md:col-span-7">
              <p className="text-sm font-semibold uppercase tracking-wide text-teal">Om os</p>
              <h2 className="h2 mt-2">En rådgiver, der taler jeres sprog</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                AI Rådgivning er drevet af <strong className="text-foreground">Jacob Dalhoff</strong>.
                Vi kombinerer strategisk overblik med praktisk implementering — og vi sidder med ved
                bordet, til AI faktisk bruges i hverdagen.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Vi sidder i Dansk Standards AI-udvalg og følger EU's AI Act tæt, så I kan
                bruge AI ansvarligt og trygt.
              </p>
              <div className="mt-7 flex items-center gap-3">
                <BookButton>Tag en snak med Jacob</BookButton>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 8 — NEWSLETTER LEAD MAGNET */}
        <section id="nyhedsbrev" className="section scroll-mt-24">
          <div className="container">
            <Card className="mx-auto max-w-3xl border-border p-8 text-center md:p-12">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-teal">
                <ShieldCheck className="h-6 w-6" aria-hidden />
              </div>
              <h2 className="h3">Få AI-nyheder, der faktisk kan bruges</h2>
              <p className="mx-auto mt-3 max-w-prose text-muted-foreground">
                Konkrete tips, værktøjer og overblik over AI for danske virksomheder — i et
                sprog, alle kan forstå. Ingen spam.
              </p>
              <form onSubmit={onSubscribe} className="mx-auto mt-6 max-w-md text-left">
                <div className="flex flex-col gap-2 sm:flex-row">
                  <label htmlFor="nl-email" className="sr-only">E-mail</label>
                  <input
                    id="nl-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="din@email.dk"
                    className="h-11 w-full rounded-md border border-input bg-background px-3 text-base outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                  <Button type="submit" size="lg" className="shrink-0">Tilmeld</Button>
                </div>
                <label className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 h-4 w-4 accent-teal"
                  />
                  <span>Ja tak, send mig AI-nyheder. Jeg kan altid framelde mig igen.</span>
                </label>
              </form>
            </Card>
          </div>
        </section>

        {/* 9 — FINAL CTA (navy) */}
        <section className="bg-navy text-white">
          <div className="container py-16 text-center md:py-20">
            <img src={markLight} alt="" aria-hidden className="mx-auto mb-6 w-16 opacity-80" />
            <Reveal>
              <h2 className="h2 mx-auto max-w-2xl text-white">
                Hvordan kan AI skabe værdi i jeres virksomhed?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
                Book et 30-minutters uforpligtende møde. Vi vender tilbage inden for én arbejdsdag.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg" className="bg-cyan text-navy hover:bg-cyan/90">
                  <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer">
                    Book et møde <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
