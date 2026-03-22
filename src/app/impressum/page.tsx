import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Impressum — Tigon Automation",
  description: "Impressum der Tigon Automation Muratovic & Cungu GbR, Stuttgart.",
};

export default function Impressum() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen bg-surface">
        <div className="mx-auto max-w-[700px] px-6 pt-28 pb-16">
          <h1 className="font-serif text-2xl md:text-4xl text-ink tracking-tightest mb-10">
            Impressum
          </h1>
          <div className="space-y-8 text-ink-light text-sm leading-relaxed">
            <div>
              <h2 className="text-ink font-semibold text-sm mb-2">
                Angaben gemäß § 5 TMG
              </h2>
              <p>Tigon Automation Muratovic &amp; Cungu GbR</p>
              <p>vertreten durch: Edon Muratovic, Gent Cungu</p>
            </div>
            <div>
              <h2 className="text-ink font-semibold text-sm mb-2">Anschrift</h2>
              <p>Gartenstraße 50, 70563 Stuttgart, Deutschland</p>
            </div>
            <div>
              <h2 className="text-ink font-semibold text-sm mb-2">Kontakt</h2>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:kontakt@tigonautomation.de"
                  className="text-accent hover:underline"
                >
                  kontakt@tigonautomation.de
                </a>{" "}
                · Telefon: 0176 41501758
              </p>
            </div>
            <div>
              <h2 className="text-ink font-semibold text-sm mb-2">
                Umsatzsteuer
              </h2>
              <p>Nicht umsatzsteuerpflichtig gemäß § 19 Abs. 1 UStG</p>
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
