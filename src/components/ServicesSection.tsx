"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const serviceAreas = [
  {
    title: "Website-Erstellung & Redesign",
    subtitle: "Ihr digitales Aushängeschild",
    price: "Ab €3.500",
    delivery: "48–72 Stunden",
    items: [
      "Moderne Unternehmenswebsites",
      "Redesign veralteter Webauftritte",
      "Responsive Design für alle Geräte",
      "SEO-optimierte Struktur",
      "Impressum & Datenschutz vorbereitet",
    ],
    result: "Wir bauen zuerst — Sie entscheiden danach.",
  },
  {
    title: "Web-App Entwicklung",
    subtitle: "Maßgeschneiderte Anwendungen",
    price: "€3.000–10.000",
    delivery: "72h bis 2 Wochen",
    items: [
      "Kundenportale & Dashboards",
      "Dokumentenmanagement",
      "Buchungssysteme",
      "B2B Marktplätze",
    ],
    result: "Produktionsreife Software. Festpreis.",
  },
  {
    title: "Prozessautomatisierung & KI",
    subtitle: "Intelligente Workflows",
    price: "Ab €3.000",
    delivery: "1–2 Wochen",
    items: [
      "n8n Workflow-Automatisierung",
      "KI-gestützte Dokumentenverarbeitung",
      "API-Integrationen",
      "Automatisierte Reports",
    ],
    result: "Weniger manuelle Arbeit. Mehr Kerngeschäft.",
  },
];

const ServicesSection = () => (
  <section className="py-24 md:py-32 bg-surface-alt" id="leistungen">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
          Leistungen
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-ink leading-heading tracking-tightest">
          Was wir bauen
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Featured service — full width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 bg-dark rounded-2xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl">
            <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              {serviceAreas[0].subtitle}
            </p>
            <h3 className="font-serif text-2xl md:text-4xl text-white leading-heading tracking-tight mb-4">
              {serviceAreas[0].title}
            </h3>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-xl font-semibold text-accent">
                {serviceAreas[0].price}
              </span>
              <span className="text-sm text-white/50">
                {serviceAreas[0].delivery}
              </span>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {serviceAreas[0].items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/70"
                >
                  <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm font-medium text-white/90">
              {serviceAreas[0].result}
            </p>
          </div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-accent/40 via-accent/10 to-transparent" />
        </motion.div>

        {/* Secondary services */}
        {serviceAreas.slice(1).map((area, i) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: (i + 1) * 0.12 }}
            className="bg-white rounded-2xl p-8 md:p-10 border border-ink/5"
          >
            <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              {area.subtitle}
            </p>
            <h3 className="text-xl md:text-2xl font-semibold text-ink mb-4">
              {area.title}
            </h3>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-lg font-semibold text-accent">
                {area.price}
              </span>
              <span className="text-xs text-ink-muted">{area.delivery}</span>
            </div>
            <ul className="space-y-2.5 mb-6">
              {area.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-ink-light"
                >
                  <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm font-medium text-ink pt-5 border-t border-ink/5">
              {area.result}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12"
      >
        <Link
          href="/kontakt"
          className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300 min-h-[44px]"
        >
          Leistungen anfragen
          <span aria-hidden="true">→</span>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
