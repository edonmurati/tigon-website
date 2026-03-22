import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tigon Automation — Produktionsreife Software in 72 Stunden",
  description:
    "Websites, Web-Apps & Automatisierung für den Mittelstand. Festpreis €3.000–10.000. DSGVO-konform. Potenziell förderfähig.",
  openGraph: {
    title: "Tigon Automation — Produktionsreife Software in 72 Stunden",
    description:
      "Websites, Web-Apps & Automatisierung für den Mittelstand. Festpreis. DSGVO-konform.",
    url: "https://tigonautomation.de",
    siteName: "Tigon Automation",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${instrumentSerif.variable}`}
    >
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[999] focus:top-4 focus:left-4 focus:bg-accent focus:text-dark focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
