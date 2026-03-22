"use client";
import Link from "next/link";

const FooterSection = () => (
  <footer style={{ backgroundColor: "#0B0B0B" }} className="text-white">
    <div className="mx-auto max-w-[1300px] px-6 py-20 md:py-24">
      <div className="grid md:grid-cols-3 gap-14 md:gap-20 mb-20">
        <div>
          <span className="text-xl font-bold letter-spacing-wide tracking-widest flex items-center gap-1 mb-6">
            <span className="gradient-gold-text">TIGON</span>
            <span className="text-white font-light text-[0.85em]">Automation</span>
          </span>
          <p className="text-[#9CA3AF] text-sm leading-relaxed mb-1">Produktionsreife Software für den Mittelstand.</p>
          <p className="text-[#9CA3AF] text-sm leading-relaxed">Festpreis. DSGVO-konform. Potenziell förderfähig.</p>
        </div>
        <div>
          <h4 className="text-[#9CA3AF] text-xs uppercase tracking-wider mb-6 font-semibold">Navigation</h4>
          <div className="flex flex-col gap-3">
            <a href="#leistungen" className="text-[#9CA3AF] text-sm hover:text-[hsl(var(--primary))] transition-all duration-300 w-fit">Leistungen</a>
            <a href="#ansatz" className="text-[#9CA3AF] text-sm hover:text-[hsl(var(--primary))] transition-all duration-300 w-fit">Ansatz</a>
            <Link href="/kontakt" className="text-[#9CA3AF] text-sm hover:text-[hsl(var(--primary))] transition-all duration-300 w-fit">Kontakt</Link>
          </div>
        </div>
        <div>
          <h4 className="text-[#9CA3AF] text-xs uppercase tracking-wider mb-6 font-semibold">Kontakt</h4>
          <div className="flex flex-col gap-3 text-sm">
            <span className="text-white">kontakt@tigonautomation.de</span>
            <span className="text-[#9CA3AF]">Stuttgart, Deutschland</span>
            <span className="text-[#9CA3AF] text-xs">Antwort innerhalb von 24 Stunden.</span>
          </div>
          <Link href="/kontakt" className="inline-flex items-center gap-1.5 text-sm text-[hsl(var(--primary))] hover:text-white transition-colors duration-300 mt-6 group">
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>Projekt starten
          </Link>
        </div>
      </div>
      <div className="border-t border-[hsl(var(--primary))]/20 pt-8 flex items-center justify-between">
        <p className="text-[#9CA3AF]/50 text-xs">© {new Date().getFullYear()} Tigon Automation Muratovic & Cungu GbR. Alle Rechte vorbehalten.</p>
        <div className="flex items-center gap-4">
          <Link href="/impressum" className="text-[#9CA3AF]/50 text-xs hover:text-[#9CA3AF] transition-colors duration-300">Impressum</Link>
          <Link href="/datenschutz" className="text-[#9CA3AF]/50 text-xs hover:text-[#9CA3AF] transition-colors duration-300">Datenschutz</Link>
        </div>
      </div>
    </div>
  </footer>
);
export default FooterSection;
