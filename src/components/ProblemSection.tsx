"use client";
import { motion } from "framer-motion";

const problems = [
  {
    title: "Manuelle Prozesse",
    desc: "Dokumente per E-Mail, Excel-Tabellen, WhatsApp — Ihr Team verschwendet Stunden pro Woche.",
  },
  {
    title: "Keine digitale Schnittstelle",
    desc: "Kunden und Partner haben keinen Self-Service. Alles läuft über Telefon und E-Mail.",
  },
  {
    title: "Veraltete Tools",
    desc: "Ihre aktuelle Software wurde vor Jahren eingerichtet. Keiner traut sich, sie anzufassen.",
  },
  {
    title: "Zu teuer, zu langsam",
    desc: "Jede Agentur will €25.000+ und 3 Monate. Für ein einfaches Portal?",
  },
];

const ProblemSection = () => (
  <section className="py-24 md:py-32 bg-surface">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="font-serif text-3xl md:text-5xl lg:text-6xl text-ink leading-heading tracking-tightest max-w-4xl mb-16 text-balance"
      >
        Ihr Problem ist nicht fehlende KI.{" "}
        <span className="text-ink-light">Es ist fehlende Software.</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-5">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group p-8 md:p-10 rounded-2xl bg-surface-alt border border-transparent hover:border-accent/10 transition-colors duration-500"
          >
            <h3 className="text-lg font-semibold text-ink mb-3">{p.title}</h3>
            <p className="text-ink-light text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
