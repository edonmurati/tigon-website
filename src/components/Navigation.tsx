"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Leistungen", anchor: "leistungen" },
  { label: "Portfolio", anchor: "portfolio" },
  { label: "Ansatz", anchor: "ansatz" },
  { label: "Sicherheit", href: "/sicherheit" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const buttonRef = useRef<HTMLButtonElement>(null);
  const showSolid = scrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  const handleAnchorClick = useCallback(
    (anchor: string) => {
      setMobileOpen(false);
      if (isHome) {
        document
          .getElementById(anchor)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.location.href = "/#" + anchor;
      }
    },
    [isHome],
  );

  const linkClass = `text-sm font-medium transition-colors duration-300 cursor-pointer min-h-[44px] flex items-center ${
    showSolid
      ? "text-ink hover:text-accent"
      : "text-white/70 hover:text-white"
  }`;

  return (
    <nav
      aria-label="Hauptnavigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showSolid
          ? "bg-surface/95 backdrop-blur-md border-b border-ink/5 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-1.5 min-h-[44px]">
          <span className="font-serif text-xl text-accent tracking-wide">
            TIGON
          </span>
          <span
            className={`font-sans text-[0.7rem] font-medium tracking-[0.25em] uppercase ${
              showSolid ? "text-ink" : "text-white/80"
            }`}
          >
            Automation
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) =>
            link.href ? (
              <Link key={link.label} href={link.href} className={linkClass}>
                {link.label}
              </Link>
            ) : (
              <button
                key={link.anchor}
                onClick={() => handleAnchorClick(link.anchor!)}
                className={linkClass}
              >
                {link.label}
              </button>
            ),
          )}
          <Link href="/kontakt" className="btn-primary text-sm !px-5 !py-2.5">
            Projekt starten
          </Link>
        </div>

        <button
          ref={buttonRef}
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden flex flex-col gap-1.5 p-2 min-h-[44px] min-w-[44px] items-center justify-center ${
            showSolid ? "text-ink" : "text-white"
          }`}
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-current transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-surface border-t border-ink/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-1">
              {navLinks.map((link) =>
                link.href ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-ink font-medium py-3 min-h-[44px] flex items-center"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.anchor}
                    onClick={() => handleAnchorClick(link.anchor!)}
                    className="text-ink font-medium py-3 text-left min-h-[44px] flex items-center"
                  >
                    {link.label}
                  </button>
                ),
              )}
              <Link
                href="/kontakt"
                onClick={() => setMobileOpen(false)}
                className="btn-primary text-center mt-3 min-h-[44px] flex items-center justify-center"
              >
                Projekt starten
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
