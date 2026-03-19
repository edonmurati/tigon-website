"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const programs = [
  { name: "BAFA Digital Consulting Grants", detail: "Bis zu 50% für kleine, 30% für mittlere Unternehmen" },
  { name: "KfW Digital & Innovation Credit", detail: "Kredite bis zu €7,5 Mio. für Digitalisierung" },
  { name: "go-digital (BMWK)", detail: "Bis zu 80% der Beratungskosten gefördert" },
];

const FoerderungSection = () => (
  <section className="py-32 bg-[hsl(var(--background))] md:py-[120px]">
    <div className="container mx-auto px-6">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-[hsl(var(--foreground))] max-w-3xl mb-6 leading-tight letter-spacing-tight">
        Bis zu <span className="gradient-gold-text">50%</span> Ihrer Kosten werden gefördert.
      </motion.h2>
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
        className="text-[hsl(var(--muted-foreground))] text-base max-w-2xl mb-16 leading-relaxed">
        Kleine Unternehmen erhalten über BAFA-Förderprogramme bis zu 50% der Digitalisierungskosten erstattet. Wir unterstützen Sie beim Antrag.
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
