import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tigon Automation — Produktionsreife Software in 72 Stunden",
  description: "Web-Apps für den Mittelstand. Festpreis €3.000–10.000. DSGVO-konform. Bis zu 50% BAFA-förderfähig.",
  openGraph: {
    title: "Tigon Automation — Produktionsreife Software in 72 Stunden",
    description: "Web-Apps für den Mittelstand. Festpreis. DSGVO-konform. Förderfähig.",
    url: "https://tigonautomation.de",
    siteName: "Tigon Automation",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  );
}
