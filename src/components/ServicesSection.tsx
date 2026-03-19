"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const serviceAreas = [
  {
    title: "Web-App Entwicklung",
    subtitle: "Maßgeschneiderte Anwendungen",
    items: ["Individuelle Web-Apps", "Kundenportale & Dashboards", "Dokumentenmanagement", "Buchungssysteme", "B2B Marktplätze"],
    result: "Produktionsreife Software. Festpreis. In Tagen, nicht Monaten."
  },
  {
    title: "Prozessautomatisierung & KI",
    subtitle: "Intelligente Workflows",
    items: ["n8n Workflow-Automatisierung", "KI-gestützte Dokumentenverarbeitung", "API-Integrationen", "Automatisierte Reports", "DSGVO-konforme Datenverarbeitung"],
    result: "Weniger manuelle Arbeit. Mehr Kapazität für Ihr Kerngeschäft."
  },
];

const ServicesSection = () => (
  <section className="py-32 bg-[hsl(var(--muted))] md:py-[120px]" id="leistungen">
    <div className="container mx-auto px-6">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-10 leading-tight letter-spacing-tight">
        Leistungen
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {serviceAreas.map((area, i) => (
          <motion.div key={area.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative rounded-xl p-px" style={{ background: "linear-gradient(160deg, hsl(var(--primary) / 0.45), hsl(var(--primary) / 0.1) 35%, hsl(var(--border)) 55%, hsl(var(--primary) / 0.2))" }}>
            <div className="bg-[hsl(var(--card))] p-8 md:p-10 rounded-[11px] flex flex-col h-full">
              <div className="flex-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--primary))]/70 mb-2 block">{area.subtitle}</span>
                <h3 className="text-xl md:text-2xl font-bold text-[hsl(var(--foreground))] mb-8">{area.title}</h3>
                <ul className="space-y-3">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[hsl(var(--muted-foreground))]">
                      <span className="w-1 h-1 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-[hsl(var(--primary))]/20 pt-6 mt-8">
                <p className="text-sm font-medium text-[hsl(var(--foreground))] leading-relaxed">{area.result}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-12">
        <Link href="/kontakt" className="inline-flex items-center gap-2 text-[hsl(var(--primary))] font-semibold hover:gap-3 transition-all duration-300">
          <span>→</span> Leistungen anfragen
        </Link>
      </motion.div>
    </div>
  </section>
);
export default ServicesSection;
