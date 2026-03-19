"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Leistungen", anchor: "leistungen" },
  { label: "Integrationen", anchor: "integrationen" },
  { label: "Ansatz", anchor: "ansatz" },
  { label: "Sicherheit", href: "/sicherheit" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isDark = scrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = useCallback((anchor: string) => {
    setMobileOpen(false);
    if (isHome) {
      document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = "/#" + anchor;
    }
  }, [isHome]);

  const linkClass = `text-sm font-medium transition-colors duration-300 cursor-pointer ${isDark ? "text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]" : "text-white/50 hover:text-white"}`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isDark ? "bg-[hsl(var(--background))]/95 backdrop-blur-md border-b border-[hsl(var(--border))] shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-6">
        <Link href="/" className="text-xl font-bold letter-spacing-wide tracking-widest flex items-center gap-1">
          <span className="gradient-gold-text">TIGON</span>
          <span className={`font-light text-[0.85em] ${isDark ? "text-[hsl(var(--foreground))]" : "text-white"}`}>Automation</span>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) =>
            link.href ? (
              <Link key={link.label} href={link.href} className={linkClass}>{link.label}</Link>
            ) : (
              <button key={link.anchor} onClick={() => handleAnchorClick(link.anchor!)} className={linkClass}>{link.label}</button>
            )
          )}
          <Link href="/kontakt" className={`text-sm font-medium px-5 py-2 border transition-all duration-300 rounded-sm ${isDark ? "border-[hsl(var(--primary))]/40 text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]" : "border-[hsl(var(--primary))]/30 text-white/70 hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]"}`}>
            Kontakt
          </Link>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className={`md:hidden flex flex-col gap-1.5 ${isDark ? "text-[hsl(var(--foreground))]" : "text-white"}`} aria-label="Menu" aria-expanded={mobileOpen}>
          <span className={`block w-6 h-0.5 bg-current transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-[hsl(var(--background))] border-t border-[hsl(var(--border))]">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) =>
              link.href ? (
                <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="text-[hsl(var(--foreground))] font-medium py-2">{link.label}</Link>
              ) : (
                <button key={link.anchor} onClick={() => handleAnchorClick(link.anchor!)} className="text-[hsl(var(--foreground))] font-medium py-2 text-left">{link.label}</button>
              )
            )}
            <Link href="/kontakt" onClick={() => setMobileOpen(false)} className="text-[hsl(var(--foreground))] font-medium py-2 border border-[hsl(var(--primary))]/40 text-center rounded-sm mt-2">Kontakt</Link>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navigation;
