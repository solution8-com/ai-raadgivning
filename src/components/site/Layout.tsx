import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

/**
 * Shared page shell: sticky Header + main + Footer, with scroll-to-top on
 * route change (anchor links within a page still work).
 */
export function Layout({ children }: { children: ReactNode }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return; // let in-page anchors handle their own scroll
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);

  return (
    <div id="top" className="flex min-h-screen flex-col bg-background">
      <a href="#indhold" className="skip-link">Spring til indhold</a>
      <Header />
      <main id="indhold" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
