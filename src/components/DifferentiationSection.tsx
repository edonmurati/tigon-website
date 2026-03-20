"use client";
import { motion } from "framer-motion";

const rows = [
  { label: "Website", tigon: "Ab €3.500 — fertig in 48–72h", other: "Ab €5.000 — 4–8 Wochen" },
  { label: "Web-App", tigon: "€3.000–10.000 Festpreis", other: "Ab €25.000" },
  { label: "Lieferzeit", tigon: "48 Stunden bis 2 Wochen", other: "3–6 Monate" },
  { label: "Vorgehen", tigon: "Prototyp zuerst, dann entscheiden", other: "Beratung → Angebot → Vertrag → Projekt" },
  { label: "DSGVO", tigon: "Konform ab Tag 1", other: "\"Wird berücksichtigt\"" },
  { label: "Förderung", tigon: "Digitalbonus Bayern, MID NRW u.a.", other: "Selten thematisiert" },
];

const DifferentiationSection = () => (
  <section className="section-dark py-32 md:py-[120px]">
    <div className="container mx-auto px-6">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-white mb-16 leading-tight letter-spacing-tight">
        Warum Tigon?
      </motion.h2>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
        className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th scope="col" className="py-4 pr-6 text-white/40 font-medium w-1/4"></th>
              <th scope="col" className="py-4 px-6 text-[hsl(var(--primary))] font-semibold">Tigon Automation</th>
              <th scope="col" className="py-4 pl-6 text-white/40 font-medium">Typische KI-Agentur</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <motion.tr key={row.label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="border-b border-white/5">
                <th scope="row" className="py-5 pr-6 text-white/60 font-medium text-left">{row.label}</th>
                <td className="py-5 px-6 text-white font-medium">{row.tigon}</td>
                <td className="py-5 pl-6 text-white/30">{row.other}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  </section>
);
export default DifferentiationSection;
