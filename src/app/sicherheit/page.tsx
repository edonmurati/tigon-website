import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Shield, Lock, Server, FileCheck } from "lucide-react";

const certifications = [
  { icon: "FileCheck", title: "DSGVO", status: "Konform", desc: "Vollständige Einhaltung der EU-Datenschutz-Grundverordnung" },
  { icon: "Server", title: "EU-Hosting", status: "DE", desc: "Datenverarbeitung ausschließlich auf EU-Servern" },
  { icon: "Shield", title: "Datensicherheit", status: "AES-256", desc: "Verschlüsselung für gespeicherte und übertragene Daten" },
  { icon: "Lock", title: "AVV", status: "Bereit", desc: "Auftragsverarbeitungsverträge auf Anfrage verfügbar" },
];

const principles = [
  { num: "01", title: "Zero Trust", desc: "Kein implizites Vertrauen – jede Anfrage wird verifiziert" },
  { num: "02", title: "Encryption at Rest & in Transit", desc: "AES-256-Verschlüsselung für gespeicherte und übertragene Daten" },
  { num: "03", title: "Least Privilege", desc: "Minimale Zugriffsrechte nach dem Need-to-know-Prinzip" },
  { num: "04", title: "Audit Logging", desc: "Lückenlose Protokollierung aller sicherheitsrelevanten Ereignisse" },
];

export default function Sicherheit() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Navigation />
      <section className="section-dark pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="flex items-center gap-3 mb-5">
            <Shield className="w-5 h-5 text-[hsl(var(--primary))]" />
            <span className="text-[hsl(var(--primary))] text-xs font-semibold tracking-widest uppercase">Security & Compliance</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white letter-spacing-tight mb-4 max-w-[800px]">DSGVO-konforme Sicherheit</h1>
          <p className="text-white/60 text-base max-w-[600px] leading-relaxed">Systematischer Schutz sensibler Unternehmensdaten durch bewährte Sicherheitsarchitekturen und EU-konforme Datenverarbeitung.</p>
        </div>
      </section>
      <section className="section-dark border-t border-white/10 py-16 md:py-24">
        <div className="mx-auto max-w-[1100px] px-6">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-[hsl(var(--primary))] mb-10">Standards & Compliance</h2>
          <div className="grid md:grid-cols-2 gap-px bg-white/10">
            {certifications.map((cert) => (
              <div key={cert.title} className="bg-[hsl(var(--secondary))] p-6 md:p-8 flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <span className="text-[hsl(var(--primary))]">{cert.icon === "FileCheck" ? <FileCheck className="w-5 h-5" /> : cert.icon === "Server" ? <Server className="w-5 h-5" /> : cert.icon === "Shield" ? <Shield className="w-5 h-5" /> : <Lock className="w-5 h-5" />}</span>
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-[hsl(var(--primary))]/80 border border-[hsl(var(--primary))]/20 px-2.5 py-1 rounded-sm">{cert.status}</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-1.5">{cert.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-dark border-t border-white/10 py-16 md:py-24">
        <div className="mx-auto max-w-[1100px] px-6">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-[hsl(var(--primary))] mb-10">Sicherheitsprinzipien</h2>
          <div className="space-y-0">
            {principles.map((p) => (
              <div key={p.num} className="border-t border-white/10 py-6 md:py-8 flex flex-col md:flex-row md:items-baseline gap-3 md:gap-12">
                <span className="gradient-gold-text text-sm font-bold tracking-widest w-12 shrink-0">{p.num}</span>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-base mb-1">{p.title}</h3>
                  <p className="text-white/50 text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-dark border-t border-white/10 py-10">
        <div className="mx-auto max-w-[1100px] px-6">
          <p className="text-white/40 text-xs leading-relaxed max-w-[700px]">
            Alle Kundendaten werden ausschließlich auf EU-Servern verarbeitet. Wir stellen AVV (Auftragsverarbeitungsverträge) auf Anfrage bereit. Keine Datenübertragung in Drittländer.
          </p>
        </div>
      </section>
      <FooterSection />
    </div>
  );
}
