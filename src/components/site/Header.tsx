import { useEffect, useState } from "react";
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
import { CONTACT, DEPARTMENTS } from "@/content/site";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "AI-ydelser", href: "#ydelser" },
  { label: "Cases", href: "#cases" },
  { label: "Artikler", href: "#nyhedsbrev" },
  { label: "Om os", href: "#om-os" },
];

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
        <a href="#top" aria-label="AI Rådgivning – til forsiden" className="shrink-0">
          <Logo variant="dark" className="h-8 w-auto md:h-9" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hovedmenu">
          <a href="#ydelser" className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground">
            AI-ydelser
          </a>
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground data-[state=open]:bg-accent">
              AI i afdelingen
              <ChevronDown className="h-4 w-4" aria-hidden />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-[420px] p-2">
              <p className="px-2 pb-1 pt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Find AI til din afdeling
              </p>
              <div className="grid grid-cols-2 gap-1">
                {DEPARTMENTS.map((d) => (
                  <DropdownMenuItem key={d.label} asChild>
                    <a href="#afdelinger" className="cursor-pointer rounded-md">
                      {d.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          {LINKS.slice(1).map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer">
              Book et møde
            </a>
          </Button>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Åbn menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm">
              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobilmenu">
                <SheetClose asChild>
                  <a href="#ydelser" className="rounded-md px-3 py-3 text-base font-medium hover:bg-accent">AI-ydelser</a>
                </SheetClose>
                <SheetClose asChild>
                  <a href="#afdelinger" className="rounded-md px-3 py-3 text-base font-medium hover:bg-accent">AI i afdelingen</a>
                </SheetClose>
                {LINKS.slice(1).map((l) => (
                  <SheetClose asChild key={l.href}>
                    <a href={l.href} className="rounded-md px-3 py-3 text-base font-medium hover:bg-accent">
                      {l.label}
                    </a>
                  </SheetClose>
                ))}
                <Button asChild className="mt-4">
                  <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer">
                    Book et møde
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
