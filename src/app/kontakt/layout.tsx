import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt — Tigon Automation",
  description: "Starten Sie Ihr Projekt. Beschreiben Sie Ihr Vorhaben — wir melden uns innerhalb von 24 Stunden.",
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
