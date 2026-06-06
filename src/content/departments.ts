export type Department = {
  slug: string;
  label: string;
  title: string;
  intro: string;
  useCases: { title: string; body: string }[];
  cta: string;
};

export const DEPARTMENTS: Department[] = [
  {
    slug: "ledelse",
    label: "Ledelse",
    title: "AI i ledelsen",
    intro:
      "Træffer I beslutninger på mavefornemmelse eller på fakta? AI giver jer overblik over jeres data i realtid, så I kan lede på et solidt grundlag. I får mere tid til det strategiske og mindre tid på rapporter.",
    useCases: [
      { title: "Bedre beslutninger", body: "AI samler jeres tal og marked ét sted og giver jer et klart billede. I træffer beslutninger på fakta i stedet for fornemmelser." },
      { title: "Styr på risici", body: "AI spotter advarselstegn i jeres data, før de bliver til problemer. I kan handle i tide og holde forretningen stabil." },
      { title: "Mindre rutine", body: "Dataindsamling og rapportering kører af sig selv. I får frigjort tid til det, der virkelig flytter virksomheden." },
      { title: "Tættere på teamet", body: "AI giver indsigt i trivsel og engagement, så I ved, hvor jeres folk har brug for jer. I leder mere nærværende og målrettet." },
    ],
    cta: "Skal vi finde AI-mulighederne i jeres ledelse?",
  },
  {
    slug: "salg",
    label: "Salg",
    title: "AI i salget",
    intro:
      "Bruger jeres sælgere tiden på de rigtige kunder? AI finder de varme leads og tager rutinen, så I kan koncentrere jer om relationerne. Resultatet er flere salg og mere tid til kunderne.",
    useCases: [
      { title: "Skarpere leads", body: "AI vurderer jeres leads ud fra adfærd og data og peger på dem, der er klar til at købe. I bruger tiden, hvor den giver mest." },
      { title: "Personlige tilbud", body: "AI tilpasser tilbud til den enkelte kundes historik og behov. Kunden føler sig set, og chancen for et salg stiger." },
      { title: "Forudsig salget", body: "AI ser mønstre i jeres tal og forudser, hvad der sælger fremover. I planlægger lager og indsats med ro i maven." },
      { title: "Slip for rutinen", body: "Opfølgning, dataindtastning og CRM-opdateringer kører automatisk. Ingen kunder falder mellem to stole, og sælgerne får tid til at sælge." },
    ],
    cta: "Skal vi finde AI-mulighederne i jeres salg?",
  },
  {
    slug: "kundeservice",
    label: "Kundeservice",
    title: "AI i kundeservice",
    intro:
      "Hvor lang tid venter jeres kunder på svar? Med AI kan I hjælpe hurtigere og mere personligt, døgnet rundt. Jeres medarbejdere får mere overskud, og kunderne en bedre oplevelse.",
    useCases: [
      { title: "Hjælp døgnet rundt", body: "En chatbot besvarer de gængse spørgsmål og guider kunden videre, når som helst. Kunden får hurtigt svar, og ventetiden falder." },
      { title: "Forstå kunden", body: "AI læser stemning og tonefald i samtaler og fanger utilfredshed tidligt. I kan reagere, før en kunde forsvinder." },
      { title: "Personlig service", body: "AI trækker på kundens historik og giver svar, der passer til netop dem. Det skaber en mere nærværende oplevelse." },
      { title: "Mindre rutine", body: "Opdateringer og opfølgninger sker automatisk. Jeres medarbejdere får tid til de samtaler, der kræver et menneske." },
    ],
    cta: "Skal vi finde AI-mulighederne i jeres kundeservice?",
  },
  {
    slug: "projektstyring",
    label: "Projektstyring",
    title: "AI i projektstyringen",
    intro:
      "Skrider jeres deadlines, før I når at reagere? AI holder øje med projektet og advarer, før det går galt. I får bedre overblik, og projekterne kommer sikkert i mål.",
    useCases: [
      { title: "Mindre administration", body: "Tidsregistrering, opgavefordeling og statusopdateringer kører automatisk. Projektlederen får tid til at lede i stedet for at administrere." },
      { title: "Se problemer i tide", body: "AI lærer af tidligere projekter og advarer om forsinkelser, før de opstår. I kan sætte ind, mens der stadig er tid." },
      { title: "Rette folk, rette opgaver", body: "AI matcher opgaver med de rigtige kompetencer og kapacitet. Ressourcerne bruges, hvor de gør størst gavn." },
      { title: "Hold tidsplanen", body: "AI finder flaskehalse i tidslinjen og foreslår justeringer. Projektet holder sporet uden brandslukning." },
    ],
    cta: "Skal vi finde AI-mulighederne i jeres projektstyring?",
  },
  {
    slug: "regnskab",
    label: "Regnskab",
    title: "AI i regnskabet",
    intro:
      "Drukner regnskabet i manuel indtastning? AI tager rutinen og passer på, at tallene er rigtige. I sparer tid, undgår fejl og får frigjort hænder til det vigtige.",
    useCases: [
      { title: "Automatisk bogføring", body: "AI kategoriserer bilag og matcher fakturaer med betalinger. I slipper for manuel indtastning og minimerer fejl." },
      { title: "Se fremad", body: "AI forudser indtægter, omkostninger og likviditet ud fra jeres historik. I kan planlægge og handle i tide." },
      { title: "Fang svindel", body: "AI opdager unormale transaktioner og advarer jer. I beskytter virksomheden, før skaden sker." },
      { title: "Styr på reglerne", body: "AI overvåger løbende, om bogføringen følger gældende regler. I reducerer risikoen for bøder og dårligt omdømme." },
    ],
    cta: "Skal vi finde AI-mulighederne i jeres regnskab?",
  },
  {
    slug: "marketing",
    label: "Marketing",
    title: "AI i marketing",
    intro:
      "Rammer jeres kampagner de rigtige kunder? AI hjælper jer med at forstå data, ramme præcist og frigøre tid til det kreative. I får mere effekt for hver krone.",
    useCases: [
      { title: "Forstå jeres data", body: "AI finder mønstre i kundeadfærd og forudser, hvad der virker. I bygger kampagner på indsigt frem for gætteri." },
      { title: "Personligt indhold", body: "AI tilpasser budskaber til den enkelte kundes interesser på tværs af kanaler. Relevansen stiger, og det samme gør konverteringen." },
      { title: "Engager kunden", body: "Chatbots og målrettet kommunikation møder kunden, hvor de er. I skaber engagement uden at binde alle hænder." },
      { title: "Hjælp til indhold", body: "AI udarbejder og optimerer tekster til web og sociale medier. I producerer mere indhold og tester, hvad der virker bedst." },
    ],
    cta: "Skal vi finde AI-mulighederne i jeres marketing?",
  },
  {
    slug: "hr",
    label: "HR",
    title: "AI i HR",
    intro:
      "Mange tror, at AI og arbejdet med mennesker er hinandens modsætninger. Det er vi ikke enige i. AI skal være en støtte i arbejdet med mennesker, ikke i stedet for det, og tager rutinen, så I får mere tid til kollegerne.",
    useCases: [
      { title: "Hurtigere rekruttering", body: "AI screener ansøgninger og finder de kandidater, der matcher stillingen. I bruger tiden på samtalerne i stedet for bunken." },
      { title: "Tryg onboarding", body: "AI tilpasser oplæring og materiale til den enkelte nye kollega. De kommer hurtigere og trygt ind i arbejdet." },
      { title: "Spot trivsel i tide", body: "AI ser mønstre i undersøgelser og data, der peger på mistrivsel eller risiko for opsigelse. I kan tage hånd om det, mens det stadig kan nås." },
      { title: "Fair udvikling", body: "AI giver et mere objektivt billede af præstationer og foreslår udviklingsplaner. I udvikler jeres folk på et mere retfærdigt grundlag." },
    ],
    cta: "Skal vi finde AI-mulighederne i jeres HR?",
  },
  {
    slug: "esg",
    label: "ESG",
    title: "AI i ESG",
    intro:
      "Bruger I for lang tid på at samle bæredygtighedsdata i hånden? AI automatiserer dataindsamlingen og giver jer et pålideligt overblik. I rapporterer nemmere og kan handle på det, der betyder noget.",
    useCases: [
      { title: "Automatisk rapportering", body: "AI samler ESG-data fra jeres drift og forsyningskæde og laver rapporterne. I sparer tid og får tal, I kan stole på." },
      { title: "Forudse risici", body: "AI analyserer fx klima- og driftsdata og spotter risici tidligt. I kan lægge beredskab og tilpasse jer i tide." },
      { title: "Grønnere forsyningskæde", body: "AI overvåger leverandørernes praksis og peger på, hvor I kan blive mere bæredygtige. I træffer valg ud fra konkrete tal." },
      { title: "Tillid hos investorer", body: "AI leverer præcise, rettidige ESG-data og sammenligner med branchen. I kan vise jeres fremskridt tydeligt til omverdenen." },
    ],
    cta: "Skal vi finde AI-mulighederne i jeres ESG-arbejde?",
  },
];

export function getDepartment(slug?: string): Department | undefined {
  return DEPARTMENTS.find((d) => d.slug === slug);
}
