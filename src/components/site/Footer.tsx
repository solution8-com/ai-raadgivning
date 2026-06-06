import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { CONTACT, DEPARTMENTS, MEMBERSHIPS, NAV } from "@/content/site";

const SITES = [
  { label: "AI Sikkerhed", href: "https://ai-sikkerhed.dk" },
  { label: "AI Compliance", href: "https://ai-compliance.dk" },
  { label: "AI Governance", href: "https://ai-governance.dk" },
  { label: "AI Uddannelse", href: "https://ai-uddannelse.dk" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <Logo variant="light" className="h-9 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Praktisk AI-rådgivning, uddannelse og udvikling til mellemstore danske
            virksomheder. AI handler om mennesker — ikke om maskiner.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan" aria-hidden /> {CONTACT.address}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-cyan" aria-hidden />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-cyan">{CONTACT.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-cyan" aria-hidden />
              <a href={CONTACT.phoneHref} className="hover:text-cyan">{CONTACT.phone}</a>
            </li>
          </ul>
        </div>

        <nav className="md:col-span-2" aria-label="Sider">
          <h2 className="text-sm font-semibold text-white">Sider</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-cyan">{n.label}</a>
              </li>
            ))}
            <li><a href="/kontakt" className="hover:text-cyan">Kontakt</a></li>
          </ul>
        </nav>

        <nav className="md:col-span-3" aria-label="AI i afdelingen">
          <h2 className="text-sm font-semibold text-white">AI i afdelingen</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-white/70">
            {DEPARTMENTS.map((d) => (
              <li key={d.label}>
                <a href={d.href} className="hover:text-cyan">{d.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="md:col-span-3" aria-label="Videnssites">
          <h2 className="text-sm font-semibold text-white">Videnssites</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {SITES.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-cyan">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <h2 className="mt-6 text-sm font-semibold text-white">Medlem af</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {MEMBERSHIPS.map((m) => (
              <li key={m} className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80">
                {m}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {CONTACT.company} · {CONTACT.legal} · CVR {CONTACT.cvr}</p>
          <div className="flex gap-4">
            <a href="/handelsbetingelser" className="hover:text-cyan">Handelsbetingelser</a>
            <a href="/privatlivspolitik" className="hover:text-cyan">Privatlivspolitik</a>
            <a href="/tilgaengelighed" className="hover:text-cyan">Tilgængelighed</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
