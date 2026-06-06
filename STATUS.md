# ai-raadgivning.dk Redesign — Status

> The flagship hub redesign. This is the canonical brand expression that the
> micro-sites will later align to. Context: `../brand/*.md` + `REDESIGN_PLAN.md`.

## Changelog
- **2026-06-06 (b)** — **Homepage v1 shipped (builds clean).** Scaffolded the project
  (cloned from the ai-compliance stack, pruned to needed shadcn components), themed to
  the official brand (Outfit/Inter self-hosted via `@fontsource`; light theme + navy
  anchor sections; teal CTAs / cyan-on-navy accents — locked palette as HSL tokens).
  Built all 10 homepage sections: Header (logo + nav + afdelinger dropdown + mobile
  sheet + Book-CTA), Hero (Jacob photo + triangle motif), trust strip, value props,
  services + 8 department chips, "Sådan arbejder vi" (navy), testimonials, Om os,
  newsletter lead-magnet, final navy CTA, Footer (kontakt/CVR/memberships/micro-site
  links/a11y). `tsc --noEmit` clean; `npm run build` OK (107 KB gzip JS); preview
  serves HTTP 200. Logos inlined as data-URIs. Real Jacob photo compressed 18 MB→165 KB.
- **2026-06-06 (a)** — Kickoff. Research done (market + design). Brand system, design
  playbook, and redesign plan written.

## Current state of the LIVE site (baseline being replaced)
- Hero: "AI løsninger, der skaber reel forandring". Nav: AI ydelser · AI i afdelingen
  (8 depts: ledelse, salg, kundeservice, projektstyring, regnskab, marketing, HR, ESG)
  · Artikler · Om os · Book møde · Nyhedsbrev · Kontakt.
- 3 services, "Automatiser/Optimér", human-centered section, 3 testimonials (MBK A/S,
  Arkhus, Schoeller Plast), memberships (IAMCP, IT-Branchen, Dansk Standard AI-udvalg).
- Built by Netinspire. Contact: Amtmandsvej 1, 4300 Holbæk · Kontakt@ai-raadgivning.dk
  · +45 91 41 34 03 · CVR 44715082.

## Target (what we're building)
Per `REDESIGN_PLAN.md` and `../brand/DESIGN_PLAYBOOK.md`: 5-item nav + persistent
"Book møde" CTA, 10-section conversion-focused homepage, light theme with navy anchor
sections, Outfit/Inter, contrast-disciplined teal/cyan, WCAG 2.2 AA, JSON-LD, Danish-only.

## Progress
- [x] Research (market + design)
- [x] Brand system + design playbook + plan
- [x] Project scaffold (Vite/TS/Tailwind/shadcn, brand tokens, fonts, logo assets)
- [x] Homepage v1 (hero → footer) — builds clean, serves
- [ ] Visual QA in browser + responsive/contrast audit (next session — no screenshot tool this session)
- [ ] Secondary pages (services + 8 dept, cases, om os, artikler, book, kontakt)
- [ ] SEO/JSON-LD per-route + prerender (reuse onepager `scripts/prerender.ts`)
- [ ] Deploy (GitHub solution8-com + Netlify + GoDaddy DNS)

## Known TODOs / gaps (v1)
- **og-image.png** referenced in `index.html` but not yet generated (port the onepager
  `scripts/generate_og.py`, navy + AIR logo). Social previews 404 until then.
- **Newsletter form** is a styled placeholder (client-side toast) — wire to MailerLite
  (konto `1571946`); add double opt-in + GDPR.
- **Nav/links to future routes** (ydelser/afdelinger/cases/om-os) currently scroll to
  homepage anchors; footer links to `/handelsbetingelser` etc. are placeholders.
- **Book** uses the external Calendly URL directly; build the dedicated inline Book page
  (off LCP path) in Phase 3.
- Run real Lighthouse/axe audit once deployed.

## Decisions log
- Flagship follows the **official BRANDGUIDE** (Outfit/Inter, light theme) — NOT the
  micro-sites' Space Grotesk/dark-dashboard look. The micro-sites will be aligned to
  this later.
- Calendly stays off the homepage LCP path (own Book page).

## Next steps
1. Scaffold + theme the project.
2. Build homepage v1 and verify (`tsc --noEmit`, `npm run build`, dev-server visual check).
3. Review against brand + a11y, then iterate / add secondary pages.
