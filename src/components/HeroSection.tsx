"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => (
  <section className="bg-dark relative min-h-screen flex items-center">
    {/* Subtle radial gradient for depth */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 20% 60%, rgba(200,150,74,0.04) 0%, transparent 70%)",
      }}
    />

    <div className="container relative z-10 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-8"
        >
          Software-Entwicklung für den Mittelstand
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-white leading-[0.95] tracking-tightest mb-8"
        >
          Produktionsreife
          <br />
          Software in{" "}
          <span className="text-accent italic">72&nbsp;Stunden.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
        >
          Festpreis €3.000–10.000. DSGVO-konform.
          <br className="hidden sm:block" />
          Potenziell förderfähig.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap gap-4 mb-16"
        >
          <Link href="/kontakt" className="btn-primary text-base">
            Projekt starten
          </Link>
          <a href="#leistungen" className="btn-ghost">
            Leistungen ansehen
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center gap-x-8 gap-y-3 text-white/50 text-sm"
        >
          {[
            "Festpreis — keine versteckten Kosten",
            "DSGVO-konform ab Tag 1",
            "Fördermittel-Check inklusive",
          ].map((text) => (
            <span key={text} className="flex items-center gap-2.5">
              <span className="w-1 h-1 rounded-full bg-accent" />
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </div>

    {/* Bottom accent line */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
  </section>
);

export default HeroSection;
