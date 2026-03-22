"use client";
import { motion } from "framer-motion";

const rows = [
  {
    label: "Website",
    tigon: "Ab €3.500 — 48–72h",
    other: "Ab €5.000 — 4–8 Wochen",
  },
  {
    label: "Web-App",
    tigon: "€3.000–10.000 Festpreis",
    other: "Ab €25.000",
  },
  {
    label: "Lieferzeit",
    tigon: "48 Stunden bis 2 Wochen",
    other: "3–6 Monate",
  },
  {
    label: "Vorgehen",
    tigon: "Prototyp zuerst, dann entscheiden",
    other: "Beratung → Angebot → Vertrag",
  },
  {
    label: "DSGVO",
    tigon: "Konform ab Tag 1",
    other: '"Wird berücksichtigt"',
  },
  {
    label: "Förderung",
    tigon: "Digitalbonus, MID NRW u.a.",
    other: "Selten thematisiert",
  },
];

const DifferentiationSection = () => (
  <section className="py-24 md:py-32 bg-surface">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
          Vergleich
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-ink leading-heading tracking-tightest">
          Warum Tigon?
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Desktop comparison table */}
        <div className="hidden md:block rounded-2xl overflow-hidden border border-ink/5">
          <table className="w-full">
            <thead>
              <tr className="bg-surface-alt">
                <th scope="col" className="p-6 text-left w-1/4" />
                <th
                  scope="col"
                  className="p-6 text-left border-x border-accent/20 bg-accent/5"
                >
                  <span className="text-accent text-xs font-semibold tracking-[0.15em] uppercase">
                    Tigon Automation
                  </span>
                </th>
                <th scope="col" className="p-6 text-left">
                  <span className="text-ink-muted text-xs font-medium tracking-[0.15em] uppercase">
                    Typische Agentur
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-t border-ink/5">
                  <td className="p-6 text-sm font-medium text-ink">
                    {row.label}
                  </td>
                  <td className="p-6 text-sm font-medium text-ink border-x border-accent/20 bg-accent/[0.02]">
                    {row.tigon}
                  </td>
                  <td className="p-6 text-sm text-ink-muted">{row.other}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile card layout */}
        <div className="md:hidden space-y-3">
          {rows.map((row) => (
            <div
              key={row.label}
              className="rounded-xl border border-ink/5 overflow-hidden"
            >
              <div className="bg-surface-alt px-5 py-3">
                <span className="text-xs font-semibold text-ink tracking-wide uppercase">
                  {row.label}
                </span>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  <div>
                    <span className="text-[11px] text-accent font-medium block mb-0.5">
                      Tigon
                    </span>
                    <span className="text-sm font-medium text-ink">
                      {row.tigon}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-ink-muted/30 mt-1.5 shrink-0" />
                  <div>
                    <span className="text-[11px] text-ink-muted font-medium block mb-0.5">
                      Typisch
                    </span>
                    <span className="text-sm text-ink-muted">{row.other}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default DifferentiationSection;
