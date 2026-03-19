"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const problems = [
  { title: "Manuelle Prozesse", desc: "Dokumente per E-Mail, Excel-Tabellen, WhatsApp — Ihr Team verschwendet Stunden pro Woche." },
  { title: "Keine digitale Schnittstelle", desc: "Kunden und Partner haben keinen Self-Service. Alles läuft über Telefon und E-Mail." },
  { title: "Veraltete Tools", desc: "Ihre aktuelle Software wurde vor Jahren eingerichtet. Keiner traut sich, sie anzufassen." },
  { title: "Zu teuer, zu langsam", desc: "Jede Agentur will €25.000+ und 3 Monate. Für ein einfaches Portal?" },
];

const ProblemSection = () => (
  <section className="py-32 bg-[hsl(var(--background))] md:py-[120px]">
    <div className="container mx-auto px-6">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-[hsl(var(--foreground))] max-w-4xl mb-16 leading-tight letter-spacing-tight">
        Ihr Problem ist nicht fehlende KI.<br />Es ist fehlende Software.
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-16">
        {problems.map((p, i) => (
          <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: i * 0.1 }}
            className="border-t border-[hsl(var(--primary))]/30 pt-6">
            <h3 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-3">{p.title}</h3>
            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed text-sm">{p.desc}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-10">
        <Link href="/kontakt" className="inline-flex items-center gap-2 text-[hsl(var(--primary))] font-semibold hover:gap-3 transition-all duration-300">
          <span>→</span> Kostenlose Erstberatung
        </Link>
      </motion.div>
    </div>
  </section>
);
export default ProblemSection;
