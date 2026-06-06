# ai-raadgivning.dk — Redesign Plan

> Plan for the flagship hub redesign. Strategy lives in `../brand/DESIGN_PLAYBOOK.md`
> and `../brand/MARKET_RESEARCH.md`; locked brand in `../brand/BRAND_SYSTEM.md`.

## Goal
Turn the flagship into a credible, conversion-focused, **canonical** expression of the
AI Rådgivning brand that the micro-sites can later align to — proving "AI handler om
mennesker — ikke om maskiner" while keeping colours and logo locked.

## Tech
Vite + React 18 + TS + Tailwind 3 + shadcn/ui (same as the micro-sites, for shared
components later). `react-router-dom`, route-level head management, `tsx
scripts/prerender.ts` for SEO. Self-hosted Outfit + Inter (`@fontsource`). Netlify
deploy; repo under `solution8-com`.

## Design tokens (brand-locked)
- Light base `#FFFFFF`; navy anchor sections `#0b1d47`; tints `#D0E7F0`.
- Text near-black; **CTA/links teal `#1C8C9B`** on light; **cyan `#57FFFF` accents only
  on navy**; icon-blue `#3297C6`.
- Outfit headings (clamp scale, w500–700) / Inter body (16–18px, lh~1.65).
- Triangle motif: angled section dividers + subtle accents, low opacity. `rounded-xl`.

## Information architecture
Nav: **AI-ydelser · AI i afdelingen (mega-menu, 8 depts) · Cases · Artikler · Om os**
\+ persistent **Book møde** button. Kontakt + Nyhedsbrev in footer/inline.

## Homepage sections (v1)
1. Header (logo + 5 nav + Book møde CTA; mobile Sheet)
2. Hero (outcome headline + subhead + 1 primary CTA + ghost link + trust strip; motif)
3. Social-proof bar (client logos)
4. Problem + 3 value props ("Start med mennesker" / "Konkret frem for hype" / "Dansk og
   forretningsnær")
5. Services (3 cards) + "AI i afdelingen" 8 department chips
6. How we work (Afdæk → Prioritér → Indfør → Forankr)
7. Proof: testimonials (MBK A/S, Arkhus, Schoeller Plast) + featured case
8. Om os / Jacob teaser
9. Lead magnet → newsletter (MailerLite)
10. Final CTA band (navy) + Footer (kontakt, CVR, memberships, micro-site links, a11y)

## Conversion
Primary = Calendly booking (own page, off homepage LCP path); secondary = newsletter
(lead-magnet framed). Trust near every CTA (uforpligtende, response-time, GDPR).

## Build phases
- **Phase 1 (now):** scaffold + theme + homepage v1 + verify.
- **Phase 2:** services overview + 8 dept pages + Om os + cases.
- **Phase 3:** Artikler + Book + Kontakt + Nyhedsbrev pages; SEO/JSON-LD + prerender.
- **Phase 4:** a11y + CWV audit; deploy; then extract shared tokens for micro-site
  coherence work.

## Content sources
Live-site copy (above) + `Marketing/Hjemmeside/*.docx` (per-department drafts) +
brand voice. Real photos in `Marketing/Hjemmeside/` (Jacob, AI-Rådgivning-*.jpg).

## Definition of done (per page)
Brand-compliant (locked colours/logo, Outfit/Inter, voice) · WCAG 2.2 AA + contrast
audited · responsive · `tsc --noEmit` clean · builds · conversion path present ·
status files updated.
