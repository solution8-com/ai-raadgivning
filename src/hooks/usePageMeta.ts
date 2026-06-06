import { useEffect } from "react";

const SITE = "AI Rådgivning";
const BASE = "https://ai-raadgivning.dk";

function setMeta(attr: "name" | "property", key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function setCanonical(path: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", `${BASE}${path}`);
}

/**
 * Client-side per-route <head> management. (Full per-route prerender for SEO is a
 * later phase — see REDESIGN_PLAN.md.) Pass a page title + description; path defaults
 * to the current location.
 */
export function usePageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path?: string;
}) {
  useEffect(() => {
    const full = title === SITE ? title : `${title} | ${SITE}`;
    document.title = full;
    setMeta("name", "description", description);
    setMeta("property", "og:title", full);
    setMeta("property", "og:description", description);
    const p = path ?? window.location.pathname;
    setMeta("property", "og:url", `${BASE}${p}`);
    setCanonical(p);
  }, [title, description, path]);
}
