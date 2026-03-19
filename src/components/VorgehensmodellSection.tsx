"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  { num: "01", title: "Erstgespräch", desc: "Ihr Problem verstehen und den Lösungsansatz skizzieren" },
  { num: "02", title: "Prototyp", desc: "Funktionierender Prototyp in 72 Stunden — Sie entscheiden ob es weitergeht" },
  { num: "03", title: "Entwicklung", desc: "Produktionsreife Umsetzung mit klaren Meilensteinen" },
  { num: "04", title: "Go-Live", desc: "Deployment, Einweisung und Übergabe" },
  { num: "05", title: "Support", desc: "Wartung und Weiterentwicklung nach Bedarf" },
];

const VorgehensmodellSection = () => (
  <section className="py-32 bg-[hsl(var(--background))] md:py-[120px]" id="vorgehensmodell">
    <div className="container mx-auto px-6">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-20 leading-tight letter-spacing-tight">
        So arbeiten wir
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
        {steps.map((step, i) => (
          <motion.div key={step.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative text-center md:text-left">
            <span className="gradient-gold-text text-2xl md:text-3xl font-bold mb-3 block">{step.num}</span>
            <h3 className="text-sm font-semibold text-[hsl(var(--foreground))] mb-1.5">{step.title}</h3>
            <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-12">
        <Link href="/kontakt" className="inline-flex items-center gap-2 text-[hsl(var(--primary))] font-semibold hover:gap-3 transition-all duration-300">
          <span>→</span> Projekt starten
        </Link>
      </motion.div>
    </div>
  </section>
);
export default VorgehensmodellSection;
