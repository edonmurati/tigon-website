"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const programs = [
  { name: "Digitalbonus Bayern", detail: "Bis zu €7.500 Zuschuss (50% der Kosten) für kleine Unternehmen. Monatliche Antragsfenster." },
  { name: "MID NRW", detail: "Bis zu €15.000 Zuschuss (50%) für die Entwicklung digitaler Produkte in NRW. Monatliches Losverfahren über NRW.BANK." },
  { name: "Weitere Länderprogramme", detail: "Viele Bundesländer bieten eigene Digitalisierungsförderungen. Wir prüfen Ihre Optionen." },
];

const FoerderungSection = () => (
  <section className="py-32 bg-[hsl(var(--background))] md:py-[120px]">
    <div className="container mx-auto px-6">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-[hsl(var(--foreground))] max-w-3xl mb-6 leading-tight letter-spacing-tight">
        Bis zu <span className="gradient-gold-text">50%</span> Ihrer Kosten können gefördert werden.
      </motion.h2>
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
        className="text-[hsl(var(--muted-foreground))] text-base max-w-2xl mb-16 leading-relaxed">
        Über Landesprogramme wie den Digitalbonus Bayern oder MID NRW können kleine Unternehmen bis zu 50% der Projektkosten erstattet bekommen. Wir prüfen Ihre Förderfähigkeit kostenlos.
      </motion.p>
      <div className="grid md:grid-cols-3 gap-6">
        {programs.map((p, i) => (
          <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            className="border border-[hsl(var(--primary))]/20 rounded-xl p-8 hover:border-[hsl(var(--primary))]/40 transition-all duration-300"
            style={{ background: "linear-gradient(160deg, rgba(245,166,35,0.04), transparent)" }}>
            <h3 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-3">{p.name}</h3>
            <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">{p.detail}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} className="mt-12">
        <Link href="/kontakt" className="inline-flex items-center gap-2 text-[hsl(var(--primary))] font-semibold hover:gap-3 transition-all duration-300">
          <span>→</span> Förderfähigkeit prüfen
        </Link>
      </motion.div>
    </div>
  </section>
);
export default FoerderungSection;
