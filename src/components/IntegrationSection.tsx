"use client";
import { useRef, useEffect, useCallback } from "react";

const tools = [
  { name: "SAP", logo: "/logos/sap.svg" }, { name: "Microsoft 365", logo: "/logos/microsoft.svg" },
  { name: "Salesforce", logo: "/logos/salesforce.svg" }, { name: "HubSpot", logo: "/logos/hubspot.svg" },
  { name: "WordPress", logo: "/logos/wordpress.svg" }, { name: "Slack", logo: "/logos/slack.svg" },
  { name: "Asana", logo: "/logos/asana.svg" }, { name: "Bitrix24", logo: "/logos/bitrix24.svg" },
  { name: "DocuSign", logo: "/logos/docusign.svg" }, { name: "monday.com", logo: "/logos/monday.svg" },
  { name: "Notion", logo: "/logos/notion.svg" }, { name: "Personio", logo: "/logos/personio.svg" },
  { name: "Shopify", logo: "/logos/shopify.svg" }, { name: "Stripe", logo: "/logos/stripe.svg" },
  { name: "Trello", logo: "/logos/trello.svg" },
];

const IntegrationSection = () => {
  const marqueeTools = [...tools, ...tools];
  const stripRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);
  const animate = useCallback(() => {
    if (stripRef.current) {
      const halfWidth = stripRef.current.scrollWidth / 2;
      offsetRef.current -= 0.5;
      if (Math.abs(offsetRef.current) >= halfWidth) offsetRef.current += halfWidth;
      stripRef.current.style.transform = `translateX(${offsetRef.current}px)`;
    }
    rafRef.current = requestAnimationFrame(animate);
  }, []);
  useEffect(() => { rafRef.current = requestAnimationFrame(animate); return () => cancelAnimationFrame(rafRef.current); }, [animate]);

  return (
    <section className="section-dark relative overflow-hidden" id="integrationen">
      <div className="container mx-auto px-6 md:py-40 py-[120px]">
        <div className="max-w-3xl mb-20 md:mb-28">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight letter-spacing-tight">
            Integration in Ihre bestehende Systemlandschaft
          </h2>
          <p className="text-lg text-white/50 leading-relaxed">Ihre Anwendungen bleiben. Ihre Server bleiben. Ihre Daten bleiben.</p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden mb-0 select-none">
            <div ref={stripRef} className="flex w-max will-change-transform">
              {marqueeTools.map((tool, i) => (
                <div key={`${tool.name}-${i}`} className="flex flex-col items-center flex-shrink-0" style={{ width: "120px" }}>
                  <div className="h-[40px] md:h-[48px] flex items-center justify-center">
                    <img src={tool.logo} alt={tool.name} draggable={false} className="h-[32px] md:h-[40px] w-auto max-w-[80px] md:max-w-[100px] object-contain select-none pointer-events-none" />
                  </div>
                  <svg width="120" height="80" className="block">
                    <defs><linearGradient id={`lg-${tool.name}-${i}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="rgba(245,166,35,0.25)" /><stop offset="100%" stopColor="rgba(245,166,35,0.08)" /></linearGradient></defs>
                    <circle cx="60" cy="2" r="1.5" fill="rgba(245,166,35,0.3)" />
                    <line x1="60" y1="0" x2="60" y2="80" stroke={`url(#lg-${tool.name}-${i})`} strokeWidth="1" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="absolute top-0 left-0 right-0 h-px bg-[rgba(245,166,35,0.15)]" />
            <p className="text-[11px] md:text-xs text-white/30 tracking-wide mt-4 mb-6">Kompatibilität mit 100+ weiteren Integrationen über API & individuelle Schnittstellen</p>
            <div className="grid grid-cols-3 gap-3 md:gap-4 w-full max-w-2xl">
              {[
                { label: "Web-Entwicklung", icon: "◆", desc: "Next.js · Supabase · Vercel" },
                { label: "Prozessautomatisierung", icon: "⚡", desc: "n8n · API · Workflows" },
                { label: "KI", icon: "✦", desc: "Claude · GPT · LLM-Integration" },
              ].map((item) => (
                <div key={item.label} className="relative group rounded-xl border border-[rgba(245,166,35,0.2)] p-5 md:p-6 text-center transition-all duration-500 hover:border-[rgba(245,166,35,0.4)]"
                  style={{ background: "linear-gradient(160deg, rgba(245,166,35,0.06), rgba(0,0,0,0.3))", boxShadow: "0 0 40px -15px rgba(245,166,35,0.08)" }}>
                  <span className="text-[hsl(var(--primary))] text-xl mb-3 block">{item.icon}</span>
                  <p className="text-white text-sm font-semibold mb-1.5">{item.label}</p>
                  <p className="text-white/30 text-[10px] tracking-wide">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-xs text-white/25 mt-20 md:mt-28 text-center tracking-wide">Integration in bestehende IT-Strukturen – ohne Systembruch.</p>
      </div>
    </section>
  );
};
export default IntegrationSection;
