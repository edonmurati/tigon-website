"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const programs = [
  {
    name: "Digitalbonus Bayern",
    detail:
      "Bis zu €7.500 Zuschuss (50% der Kosten) für kleine Unternehmen. Monatliche Antragsfenster.",
  },
  {
    name: "MID NRW",
    detail:
      "Bis zu €15.000 Zuschuss (50%) für die Entwicklung digitaler Produkte in NRW. Monatliches Losverfahren über NRW.BANK.",
  },
  {
    name: "Weitere Länderprogramme",
    detail:
      "Viele Bundesländer bieten eigene Digitalisierungsförderungen. Wir prüfen Ihre Optionen.",
  },
];

const FoerderungSection = () => (
  <section className="py-24 md:py-32 bg-surface-alt">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <h2 className="font-serif text-3xl md:text-5xl text-ink leading-heading tracking-tightest max-w-3xl mb-5">
          Bis zu <span className="text-accent">50%</span> Ihrer Kosten können
          gefördert werden.
        </h2>
        <p className="text-ink-light text-base max-w-2xl leading-relaxed">
          Über Landesprogramme wie den Digitalbonus Bayern oder MID NRW können
          kleine Unternehmen bis zu 50% der Projektkosten erstattet bekommen. Wir
          prüfen Ihre Förderfähigkeit kostenlos.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5">
        {programs.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            className="bg-white rounded-2xl p-8 border border-ink/5 hover:border-accent/15 transition-colors duration-500"
          >
            <h3 className="text-lg font-semibold text-ink mb-3">{p.name}</h3>
            <p className="text-ink-light text-sm leading-relaxed">{p.detail}</p>
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
          Förderfähigkeit prüfen
          <span aria-hidden="true">→</span>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default FoerderungSection;
