import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import markLight from "@/assets/mark-light.svg";

/**
 * Reusable final call-to-action band (navy, cyan button → /book).
 * cyan-on-navy keeps the accent within the brand contrast rules.
 */
export function CtaBand({
  heading = "Hvordan kan AI skabe værdi i jeres virksomhed?",
  text = "Book et 30-minutters uforpligtende møde. Vi vender tilbage inden for én arbejdsdag.",
}: {
  heading?: string;
  text?: string;
}) {
  return (
    <section className="bg-navy text-white">
      <div className="container py-16 text-center md:py-20">
        <img src={markLight} alt="" aria-hidden className="mx-auto mb-6 w-14 opacity-80" />
        <Reveal>
          <h2 className="h2 mx-auto max-w-2xl text-white">{heading}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">{text}</p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" className="bg-cyan text-navy hover:bg-cyan/90">
              <Link to="/book">Book et møde <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
