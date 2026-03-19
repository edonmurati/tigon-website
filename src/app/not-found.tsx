import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold gradient-gold-text mb-4">404</h1>
        <p className="text-[hsl(var(--muted-foreground))] text-lg mb-8">Seite nicht gefunden.</p>
        <Link href="/" className="btn-gold text-base rounded-xl">Zur Startseite</Link>
      </div>
    </div>
  );
}
