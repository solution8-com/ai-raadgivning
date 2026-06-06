import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Logo } from "./Logo";
import { DEPARTMENTS } from "@/content/departments";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "AI-ydelser", to: "/ydelser" },
  { label: "Cases", to: "/cases" },
  { label: "Artikler", to: "/artikler" },
  { label: "Om os", to: "/om-os" },
];

const linkBase =
  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-foreground";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors",
        scrolled ? "border-border bg-white/90 backdrop-blur" : "border-transparent bg-white",
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" aria-label="AI Rådgivning – til forsiden" className="shrink-0">
          <Logo variant="dark" className="h-8 w-auto md:h-9" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hovedmenu">
          <NavLink to="/ydelser" className={({ isActive }) => cn(linkBase, isActive ? "text-teal" : "text-foreground/80")}>
            AI-ydelser
          </NavLink>
          <DropdownMenu>
            <DropdownMenuTrigger className={cn(linkBase, "inline-flex items-center gap-1 text-foreground/80 data-[state=open]:bg-accent")}>
              AI i afdelingen
              <ChevronDown className="h-4 w-4" aria-hidden />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-[460px] p-2">
              <Link to="/afdelinger" className="block rounded-md px-2 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-teal">
                Find AI til din afdeling →
              </Link>
              <div className="grid grid-cols-2 gap-1">
                {DEPARTMENTS.map((d) => (
                  <DropdownMenuItem key={d.slug} asChild>
                    <Link to={`/afdelinger/${d.slug}`} className="cursor-pointer rounded-md">{d.label}</Link>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          {LINKS.slice(1).map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => cn(linkBase, isActive ? "text-teal" : "text-foreground/80")}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/book">Book et møde</Link>
          </Button>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Åbn menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm overflow-y-auto">
              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobilmenu">
                <SheetClose asChild>
                  <Link to="/ydelser" className="rounded-md px-3 py-3 text-base font-medium hover:bg-accent">AI-ydelser</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="/afdelinger" className="rounded-md px-3 py-3 text-base font-medium hover:bg-accent">AI i afdelingen</Link>
                </SheetClose>
                {LINKS.slice(1).map((l) => (
                  <SheetClose asChild key={l.to}>
                    <Link to={l.to} className="rounded-md px-3 py-3 text-base font-medium hover:bg-accent">{l.label}</Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link to="/kontakt" className="rounded-md px-3 py-3 text-base font-medium hover:bg-accent">Kontakt</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Button asChild className="mt-4">
                    <Link to="/book">Book et møde</Link>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
