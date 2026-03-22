"use client";
import { motion } from "framer-motion";
import Image from "next/image";
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
  <section className="py-24 md:py-32 bg-dark" id="portfolio">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
          Portfolio
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-white leading-heading tracking-tightest mb-4">
          Aktuelle Projekte
        </h2>
        <p className="text-white/60 text-base max-w-xl leading-relaxed">
          Echte Projekte, echte Ergebnisse — gebaut in Tagen, nicht Monaten.
        </p>
      </motion.div>

      <div className="space-y-5">
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
            className="group block rounded-2xl overflow-hidden bg-dark-200 border border-white/5 hover:border-accent/20 transition-all duration-500"
          >
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-3 relative overflow-hidden bg-dark-300">
                <Image
                  src={project.image}
                  alt={`Screenshot der Website ${project.title}`}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-accent text-xs font-semibold tracking-[0.15em] uppercase">
                    {project.category}
                  </span>
                  <span className="text-white/40 text-xs">
                    {project.delivery}
                  </span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
                <span className="text-accent text-sm font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Projekt ansehen
                  <span aria-hidden="true">→</span>
                </span>
              </div>
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
          className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300 min-h-[44px]"
        >
          Ihr Projekt starten
          <span aria-hidden="true">→</span>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default PortfolioSection;
