# ai-raadgivning.dk

Flagship hub for AI Rådgivning (Solution8). The canonical brand expression that the
topic micro-sites align to. Stack: Vite + React 18 + TypeScript + Tailwind 3 +
shadcn/ui. Brand fonts Outfit + Inter (self-hosted). Locked brand palette.

## Develop
```bash
npm install
npm run dev        # http://localhost:8080
npm run typecheck  # tsc --noEmit (vite build does NOT type-check)
npm run build      # production build → dist/
npm run preview    # serve the build
```

## Where things live
- Brand truth + strategy: `../brand/*.md` (read these before changing anything).
- Status & plan: `STATUS.md`, `REDESIGN_PLAN.md`.
- Brand tokens: `src/index.css` (HSL vars) + `tailwind.config.ts`.
- Content (Danish copy): `src/content/site.ts`.
- Site components: `src/components/site/`; page: `src/pages/Index.tsx`.

## Hard rules
Never change brand colours or logos. Danish-first, brand voice. No AI-cliché imagery.
WCAG 2.2 AA. See `../brand/BRAND_SYSTEM.md`.

## Deploy (when ready)
GitHub org `solution8-com`, Netlify auto-deploy on push, GoDaddy DNS. Not yet wired —
see `STATUS.md`.
