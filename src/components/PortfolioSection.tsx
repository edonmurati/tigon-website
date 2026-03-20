"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Bestattungen Schmid",
    category: "Website-Redesign",
    desc: "Komplette Website für Rosenheims ältestes privates Bestattungsinstitut. 10 Standorte, responsive Design, Notfall-CTA.",
    image: "/portfolio/bestattungen-schmid.png",
    url: "https://bestattungen-schmid.vercel.app",
    delivery: "72 Stunden",
  },
  {
    title: "FINSENSE",
    category: "Website + Web-App",
    desc: "Multi-Page Website für Kreditvermittlung mit integriertem Schnellrechner, Terminbuchung und SEO-optimierten Unterseiten.",
    image: "/portfolio/finsense.png",
    url: "https://finsense-v2.vercel.app",
    delivery: "5 Tage",
  },
];

const PortfolioSection = () => (
  <section className="py-32 bg-[hsl(var(--background))] md:py-[120px]" id="portfolio">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-6 leading-tight letter-spacing-tight"
      >
        Aktuelle Projekte
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-[hsl(var(--muted-foreground))] text-base max-w-2xl mb-16 leading-relaxed"
      >
        Echte Projekte, echte Ergebnisse — gebaut in Tagen, nicht Monaten.
      </motion.p>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group block rounded-xl overflow-hidden border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]/40 transition-all duration-500"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-[16/10] object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-6 md:p-8 bg-[hsl(var(--card))]">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--primary))]/70">
                  {project.category}
                </span>
                <span className="text-xs text-[hsl(var(--muted-foreground))]">
                  {project.delivery}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--foreground))] mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                {project.desc}
              </p>
            </div>
          </motion.a>
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
          className="inline-flex items-center gap-2 text-[hsl(var(--primary))] font-semibold hover:gap-3 transition-all duration-300"
        >
          <span>→</span> Ihr Projekt starten
        </Link>
      </motion.div>
    </div>
  </section>
);
export default PortfolioSection;
