"use client";
import { useRef, useEffect, useCallback, useState } from "react";
import { motion } from "framer-motion";

const tools = [
  { name: "SAP", logo: "/logos/sap.svg" },
  { name: "Microsoft 365", logo: "/logos/microsoft.svg" },
  { name: "Salesforce", logo: "/logos/salesforce.svg" },
  { name: "HubSpot", logo: "/logos/hubspot.svg" },
  { name: "WordPress", logo: "/logos/wordpress.svg" },
  { name: "Slack", logo: "/logos/slack.svg" },
  { name: "Asana", logo: "/logos/asana.svg" },
  { name: "Bitrix24", logo: "/logos/bitrix24.svg" },
  { name: "DocuSign", logo: "/logos/docusign.svg" },
  { name: "monday.com", logo: "/logos/monday.svg" },
  { name: "Notion", logo: "/logos/notion.svg" },
  { name: "Personio", logo: "/logos/personio.svg" },
  { name: "Shopify", logo: "/logos/shopify.svg" },
  { name: "Stripe", logo: "/logos/stripe.svg" },
  { name: "Trello", logo: "/logos/trello.svg" },
];

const capabilities = [
  { label: "Web-Entwicklung", desc: "Next.js · Supabase · Vercel" },
  { label: "Prozessautomatisierung", desc: "n8n · API · Workflows" },
  { label: "KI", desc: "Claude · GPT · LLM-Integration" },
];

const IntegrationSection = () => {
  const doubled = [...tools, ...tools];
  const stripRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const animate = useCallback(() => {
    if (stripRef.current) {
      const halfWidth = stripRef.current.scrollWidth / 2;
      offsetRef.current -= 0.4;
      if (Math.abs(offsetRef.current) >= halfWidth)
        offsetRef.current += halfWidth;
      stripRef.current.style.transform = `translateX(${offsetRef.current}px)`;
    }
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate, prefersReducedMotion]);

  return (
    <section className="py-24 md:py-32 bg-dark-100" id="integrationen">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Integrationen
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white leading-heading tracking-tightest max-w-3xl mb-4">
            Integration in Ihre bestehende Systemlandschaft
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-xl">
            Ihre Anwendungen bleiben. Ihre Server bleiben. Ihre Daten bleiben.
          </p>
        </motion.div>

        {/* Logo marquee */}
        <div
          className="relative overflow-hidden mb-16 select-none"
          aria-hidden="true"
        >
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-dark-100 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-dark-100 to-transparent z-10" />
          <div
            ref={stripRef}
            className="flex w-max will-change-transform items-center gap-16"
          >
            {doubled.map((tool, i) => (
              <img
                key={`${tool.name}-${i}`}
                src={tool.logo}
                alt=""
                className="h-6 md:h-8 w-auto max-w-[80px] object-contain opacity-25 grayscale brightness-200"
                draggable={false}
              />
            ))}
          </div>
        </div>

        {/* Capability cards */}
        <div className="grid sm:grid-cols-3 gap-4">
          {capabilities.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="rounded-xl border border-white/5 bg-dark-200 p-6 md:p-8 hover:border-accent/15 transition-colors duration-500"
            >
              <p className="text-white text-sm font-semibold mb-1.5">
                {item.label}
              </p>
              <p className="text-white/40 text-xs tracking-wide">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-white/30 text-xs mt-12 tracking-wide">
          Kompatibilität mit 100+ weiteren Integrationen über API & individuelle
          Schnittstellen.
        </p>
      </div>
    </section>
  );
};

export default IntegrationSection;
