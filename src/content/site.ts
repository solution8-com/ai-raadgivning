/**
 * Central content for ai-raadgivning.dk. Danish-first, brand voice
 * (professionel · i øjenhøjde · imødekommende · nede på jorden).
 * Keep copy outcome-focused. See ../../brand/* for the brand system.
 */

export const CONTACT = {
  company: "AI Rådgivning",
  legal: "Solution8",
  cvr: "44715082",
  email: "Kontakt@ai-raadgivning.dk",
  phone: "+45 91 41 34 03",
  phoneHref: "tel:+4591413403",
  address: "Amtmandsvej 1, 4300 Holbæk",
  calendly: "https://calendly.com/ai-raadgivning_jacob/30min",
} as const;

export const NAV = [
  { label: "AI-ydelser", href: "/ydelser" },
  { label: "AI i afdelingen", href: "/afdelinger" },
  { label: "Cases", href: "/cases" },
  { label: "Artikler", href: "/artikler" },
  { label: "Om os", href: "/om-os" },
] as const;

export const DEPARTMENTS = [
  { label: "Ledelse", href: "/afdelinger/ledelse" },
  { label: "Salg", href: "/afdelinger/salg" },
  { label: "Kundeservice", href: "/afdelinger/kundeservice" },
  { label: "Projektstyring", href: "/afdelinger/projektstyring" },
  { label: "Regnskab", href: "/afdelinger/regnskab" },
  { label: "Marketing", href: "/afdelinger/marketing" },
  { label: "HR", href: "/afdelinger/hr" },
  { label: "ESG", href: "/afdelinger/esg" },
] as const;

export const VALUE_PROPS = [
  {
    title: "Vi starter med mennesker",
    body: "AI skaber kun værdi, når jeres medarbejdere bruger den. Vi forankrer løsningerne i hverdagen — ikke kun i et slidedeck.",
  },
  {
    title: "Konkret frem for hype",
    body: "Ingen buzzwords. Vi finder de steder, hvor AI faktisk flytter noget hos jer, og prioriterer efter værdi og indsats.",
  },
  {
    title: "Dansk og forretningsnær",
    body: "Vi taler jeres sprog og kender mellemstore danske virksomheders hverdag, økonomi og lovkrav — herunder EU's AI Act.",
  },
] as const;

export const SERVICES = [
  {
    title: "Rådgivning & strategi",
    body: "Vi afdækker jeres optimeringspotentiale og lægger en prioriteret AI-plan, der hænger sammen med forretningen.",
    href: "/ydelser/raadgivning",
    points: ["Potentialeanalyse", "AI-strategi & roadmap", "Sparring til direktion & bestyrelse"],
  },
  {
    title: "Uddannelse af medarbejdere",
    body: "Praktiske forløb i fx Copilot og ChatGPT, så jeres folk kommer trygt i gang. Lever også op til AI-literacy-kravet i AI Act.",
    href: "/ydelser/uddannelse",
    points: ["Workshops & kurser", "Copilot & ChatGPT", "AI-literacy (Artikel 4)"],
  },
  {
    title: "Udvikling & implementering",
    body: "Vi bygger og indfører tilpassede AI-løsninger — fra første prototype til drift og forankring hos jer.",
    href: "/ydelser/udvikling",
    points: ["Skræddersyede løsninger", "Integration & drift", "Ansvarlig & sikker AI"],
  },
] as const;

export const STEPS = [
  { n: "01", title: "Afdæk", body: "Vi kortlægger jeres processer og finder, hvor AI kan skabe reel værdi." },
  { n: "02", title: "Prioritér", body: "Vi vælger de indsatser, der giver mest værdi for mindst indsats — sammen med jer." },
  { n: "03", title: "Indfør", body: "Vi sætter løsningerne i drift og uddanner de medarbejdere, der skal bruge dem." },
  { n: "04", title: "Forankr", body: "Vi sikrer, at det holder: ejerskab, måling og en plan for det næste skridt." },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "En skarp rådgiver, der formår at kombinere strategi med praktisk implementering.",
    name: "Michael Brorsen",
    role: "MBK A/S",
  },
  {
    quote: "Workshoppen var en øjenåbner på adskillige områder.",
    name: "Carsten Lindschmidt",
    role: "Arkhus Bygningsrådgivning",
  },
  {
    quote: "Professionel og kompetent rådgivning.",
    name: "Jan Bybjerg Pedersen",
    role: "Schoeller Plast",
  },
] as const;

export const MEMBERSHIPS = ["IT-Branchen", "IAMCP", "Dansk Standards AI-udvalg"] as const;
