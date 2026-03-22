import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-dark flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-7xl text-accent mb-4">404</h1>
        <p className="text-white/60 text-lg mb-8">Seite nicht gefunden.</p>
        <Link href="/" className="btn-primary text-base">
          Zur Startseite
        </Link>
      </div>
    </main>
  );
}
