"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";

const FooterSection = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
      if (isHome) {
        e.preventDefault();
        document
          .getElementById(anchor)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [isHome],
  );

  return (
    <footer className="bg-[#050507] text-white">
      <div className="container py-20 md:py-24">
        <div className="grid md:grid-cols-3 gap-14 md:gap-20 mb-16">
          {/* Brand */}
          <div>
            <span className="flex items-center gap-1.5 mb-6">
              <span className="font-serif text-xl text-accent tracking-wide">
                TIGON
              </span>
              <span className="font-sans text-[0.7rem] font-medium tracking-[0.25em] uppercase text-white/80">
                Automation
              </span>
            </span>
            <p className="text-white/60 text-sm leading-relaxed mb-1">
              Produktionsreife Software für den Mittelstand.
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              Festpreis. DSGVO-konform. Potenziell förderfähig.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white/40 text-xs uppercase tracking-[0.15em] mb-6 font-semibold">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={isHome ? "#leistungen" : "/#leistungen"}
                onClick={(e) => handleAnchorClick(e, "leistungen")}
                className="text-white/60 text-sm hover:text-accent transition-colors duration-300 w-fit min-h-[44px] flex items-center"
              >
                Leistungen
              </a>
              <a
                href={isHome ? "#ansatz" : "/#ansatz"}
                onClick={(e) => handleAnchorClick(e, "ansatz")}
                className="text-white/60 text-sm hover:text-accent transition-colors duration-300 w-fit min-h-[44px] flex items-center"
              >
                Ansatz
              </a>
              <Link
                href="/kontakt"
                className="text-white/60 text-sm hover:text-accent transition-colors duration-300 w-fit min-h-[44px] flex items-center"
              >
                Kontakt
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/40 text-xs uppercase tracking-[0.15em] mb-6 font-semibold">
              Kontakt
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="mailto:kontakt@tigonautomation.de"
                className="text-white/80 hover:text-accent transition-colors duration-300 min-h-[44px] flex items-center"
              >
                kontakt@tigonautomation.de
              </a>
              <span className="text-white/50">Stuttgart, Deutschland</span>
              <span className="text-white/40 text-xs">
                Antwort innerhalb von 24 Stunden.
              </span>
            </div>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-white transition-colors duration-300 mt-6 min-h-[44px]"
            >
              Projekt starten
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Tigon Automation Muratovic & Cungu GbR.
            Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/impressum"
              className="text-white/30 text-xs hover:text-white/60 transition-colors duration-300 min-h-[44px] flex items-center"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-white/30 text-xs hover:text-white/60 transition-colors duration-300 min-h-[44px] flex items-center"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
