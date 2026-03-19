"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, CheckCircle } from "lucide-react";
import { useRef, useEffect, useCallback } from "react";
import NetworkBackground from "./NetworkBackground";

const logos = [
  "/logos/sap.svg", "/logos/microsoft.svg", "/logos/salesforce.svg", "/logos/hubspot.svg",
  "/logos/wordpress.svg", "/logos/slack.svg", "/logos/asana.svg", "/logos/bitrix24.svg",
  "/logos/docusign.svg", "/logos/monday.svg", "/logos/notion.svg", "/logos/personio.svg",
  "/logos/shopify.svg", "/logos/stripe.svg", "/logos/trello.svg",
];

const HeroLogoStrip = () => {
  const stripRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);
  const doubled = [...logos, ...logos];
  const animate = useCallback(() => {
    if (stripRef.current) {
      const halfWidth = stripRef.current.scrollWidth / 2;
      offsetRef.current -= 0.4;
      if (Math.abs(offsetRef.current) >= halfWidth) offsetRef.current += halfWidth;
      stripRef.current.style.transform = `translateX(${offsetRef.current}px)`;
    }
    rafRef.current = requestAnimationFrame(animate);
  }, []);
  useEffect(() => { rafRef.current = requestAnimationFrame(animate); return () => cancelAnimationFrame(rafRef.current); }, [animate]);
  return (
    <div className="absolute bottom-8 left-0 right-0 overflow-hidden pointer-events-none z-[5]">
      <div ref={stripRef} className="flex w-max will-change-transform items-center gap-12">
        {doubled.map((logo, i) => (
          <img key={i} src={logo} alt="" className="h-5 md:h-6 w-auto max-w-[70px] object-contain opacity-20 grayscale brightness-200" draggable={false} />
        ))}
      </div>
    </div>
  );
};

const HeroSection = () => (
  <section className="section-hero relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 30% 50%, #111111 0%, transparent 70%)" }} />
    <NetworkBackground />
    <div className="container mx-auto px-6 relative z-10 pt-24 pb-16">
      <div className="max-w-2xl mx-auto flex flex-col justify-center items-center text-center min-h-[70vh]">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.08] letter-spacing-tight mb-6">
          Produktionsreife Software{" "}<br />in <span className="gradient-gold-text">72 Stunden.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
          className="text-white/55 text-base leading-relaxed font-light mb-6 max-w-lg">
          Festpreis €3.000–10.000. DSGVO-konform. Förderfähig über BAFA.
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.35 }}
          className="text-white/40 text-sm font-light mb-10 max-w-md">
          Wir bauen Web-Apps für den Mittelstand — in Tagen, nicht Monaten.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap gap-4 justify-center">
          <Link href="/kontakt" className="btn-gold text-sm px-6 py-2.5 rounded-lg">Projekt starten</Link>
          <a href="#leistungen" className="text-sm px-5 py-2.5 border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-all duration-300 rounded-lg">Mehr erfahren</a>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center gap-5 mt-8 justify-center">
          {["Festpreis — keine versteckten Kosten", "DSGVO-konform ab Tag 1", "Bis zu 50% BAFA-förderfähig"].map((t) => (
            <span key={t} className="inline-flex items-center gap-1.5 text-white/50 text-xs tracking-wide">
              <CheckCircle className="w-3.5 h-3.5 text-[hsl(var(--primary))]/70" />{t}
            </span>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.75 }}
          className="flex items-center gap-2 text-white/55 text-xs mt-4">
          <Globe className="w-3.5 h-3.5" />EU Hosting
        </motion.div>
      </div>
    </div>
    <HeroLogoStrip />
  </section>
);
export default HeroSection;
