"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Erstgespräch",
    desc: "Ihr Problem verstehen und den Lösungsansatz skizzieren",
  },
  {
    num: "02",
    title: "Prototyp",
    desc: "Funktionierender Prototyp in 72 Stunden — Sie entscheiden ob es weitergeht",
  },
  {
    num: "03",
    title: "Entwicklung",
    desc: "Produktionsreife Umsetzung mit klaren Meilensteinen",
  },
  {
    num: "04",
    title: "Go-Live",
    desc: "Deployment, Einweisung und Übergabe",
  },
  {
    num: "05",
    title: "Support",
    desc: "Wartung und Weiterentwicklung nach Bedarf",
  },
];

const VorgehensmodellSection = () => (
  <section className="py-24 md:py-32 bg-dark" id="ansatz">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
          Ablauf
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-white leading-heading tracking-tightest">
          So arbeiten wir
        </h2>
      </motion.div>

      <div className="space-y-0">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group flex gap-6 md:gap-10 py-6 md:py-8 border-b border-white/5 last:border-b-0"
          >
            <span className="font-serif text-3xl md:text-4xl text-accent/60 group-hover:text-accent transition-colors duration-500 shrink-0 w-12 md:w-16">
              {step.num}
            </span>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-1.5">
                {step.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-lg">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12"
      >
        <Link
          href="/kontakt"
          className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300 min-h-[44px]"
        >
          Projekt starten
          <span aria-hidden="true">→</span>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default VorgehensmodellSection;
