"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const pillars = [
  { num: "01", title: "Strukturelle Analyse", desc: "Analyse von Prozessen, Datenflüssen und Systemlandschaft" },
  { num: "02", title: "Intelligente Integration", desc: "KI nahtlos integriert in bestehenden Systemen und Workflows" },
  { num: "03", title: "Skalierbare Architektur", desc: "Implementierung modularer, wartbarer und langfristiger Infrastrukturen" },
];

const FrameworkSection = () => (
  <section className="py-32 section-dark md:py-[120px]" id="ansatz">
    <div className="container mx-auto px-6">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-white max-w-3xl mb-20 leading-tight letter-spacing-tight">
        Wir entwickeln Systeme.<br />Keine Insellösungen.
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map((p, i) => (
          <motion.div key={p.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: i * 0.12 }}
            className="group bg-white/5 border border-white/10 p-8 md:p-10 hover:border-[hsl(var(--primary))]/30 transition-all duration-500 relative overflow-hidden rounded-xl">
            <div className="absolute top-0 left-0 w-full h-0.5 gradient-gold-bg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="gradient-gold-text text-3xl font-bold mb-6 block">{p.num}</span>
            <h3 className="text-xl font-semibold text-white mb-3">{p.title}</h3>
            <p className="text-white/60 leading-relaxed text-sm">{p.desc}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-12">
        <Link href="/kontakt" className="inline-flex items-center gap-2 text-[hsl(var(--primary))] font-semibold hover:gap-3 transition-all duration-300">
          <span>→</span> Systemkonzept besprechen
        </Link>
      </motion.div>
    </div>
  </section>
);
export default FrameworkSection;
