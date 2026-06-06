import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/Logo";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <Logo variant="dark" className="h-9 w-auto" />
      <p className="mt-10 font-display text-6xl font-bold text-teal">404</p>
      <h1 className="mt-3 font-display text-2xl font-semibold">Siden findes ikke</h1>
      <p className="mt-2 max-w-md text-muted-foreground">
        Måske er den flyttet, eller også er linket forkert. Lad os få dig videre.
      </p>
      <Button asChild className="mt-8">
        <a href="/">Til forsiden</a>
      </Button>
    </div>
  );
}
