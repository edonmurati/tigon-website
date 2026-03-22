"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";

const BRANCHEN = [
  "Handwerk", "Finanzdienstleistungen", "Verlagswesen",
  "Gastronomie & Hotellerie", "Gesundheitswesen", "Immobilien",
  "Einzelhandel", "Logistik", "Beratung", "Sonstiges",
];
const GROESSEN = ["1–5 Mitarbeiter", "6–20", "21–50", "51–200", "200+"];
const SERVICEBEDARF = [
  "Website (Erstellung oder Redesign)", "Web-App (Portal, Dashboard, Tool)",
  "Beides", "Weiß ich noch nicht",
];
const PROJEKTTYPEN = [
  "Kundenportal", "Dashboard / Reporting", "Dokumentenmanagement",
  "Buchungssystem", "Marktplatz", "Prozessautomatisierung",
  "KI-Integration", "Mobile App (PWA)", "Sonstiges",
];
const BUDGETS = [
  "Unter €3.000", "€3.000–5.000", "€5.000–10.000",
  "Über €10.000", "Noch unklar",
];
const ZEITRAHMEN = [
  "So schnell wie möglich", "In den nächsten 2 Wochen",
  "In 1–3 Monaten", "Kein Zeitdruck",
];
const QUELLEN = ["Google", "Empfehlung", "Social Media", "Sonstiges"];

const TOTAL_STEPS = 4;

type FormData = {
  name: string;
  email: string;
  telefon: string;
  unternehmen: string;
  servicebedarf: string;
  branche: string;
  groesse: string;
  website: string;
  aktuelleSoftware: string;
  projekttypen: string[];
  problem: string;
  nutzer: string;
  integrationen: string;
  anforderungen: string;
  budget: string;
  zeitrahmen: string;
  quelle: string;
  datenschutz: boolean;
  fax: string;
};

const initial: FormData = {
  name: "", email: "", telefon: "", unternehmen: "", servicebedarf: "",
  branche: "", groesse: "", website: "", aktuelleSoftware: "",
  projekttypen: [], problem: "", nutzer: "", integrationen: "",
  anforderungen: "", budget: "", zeitrahmen: "", quelle: "",
  datenschutz: false, fax: "",
};

function validateStep(step: number, d: FormData): string | null {
  if (step === 1) {
    if (!d.name.trim()) return "Bitte geben Sie Ihren Namen ein.";
    if (!d.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email))
      return "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    if (!d.unternehmen.trim()) return "Bitte geben Sie Ihr Unternehmen ein.";
    if (!d.servicebedarf) return "Bitte wählen Sie, was Sie brauchen.";
  }
  if (step === 2) {
    if (!d.branche) return "Bitte wählen Sie Ihre Branche.";
    if (!d.groesse) return "Bitte wählen Sie Ihre Unternehmensgröße.";
  }
  if (step === 3) {
    if (d.projekttypen.length === 0) return "Bitte wählen Sie mindestens einen Projekttyp.";
    if (!d.problem.trim()) return "Bitte beschreiben Sie das Problem, das Sie lösen wollen.";
    if (!d.nutzer.trim()) return "Bitte geben Sie an, wer die Software nutzen wird.";
  }
  if (step === 4) {
    if (!d.budget) return "Bitte wählen Sie ein Budget.";
    if (!d.zeitrahmen) return "Bitte wählen Sie einen Zeitrahmen.";
    if (!d.datenschutz) return "Bitte bestätigen Sie die Datenschutzerklärung.";
  }
  return null;
}

export default function Kontakt() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState<FormData>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const lastSubmitRef = useRef<number>(0);

  const set = (field: keyof FormData, value: string | string[] | boolean) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const toggleProjekttyp = (typ: string) => {
    setFormData((prev) => ({
      ...prev,
      projekttypen: prev.projekttypen.includes(typ)
        ? prev.projekttypen.filter((t) => t !== typ)
        : prev.projekttypen.length < 3
          ? [...prev.projekttypen, typ]
          : prev.projekttypen,
    }));
  };

  const next = () => {
    const err = validateStep(step, formData);
    if (err) { setError(err); return; }
    setError("");
    setDirection(1);
    setStep((s) => s + 1);
  };

  const back = () => {
    setError("");
    setDirection(-1);
    setStep((s) => s - 1);
  };

  const handleSubmit = async () => {
    if (formData.fax) return;
    const err = validateStep(step, formData);
    if (err) { setError(err); return; }
    if (Date.now() - lastSubmitRef.current < 60000) {
      setError("Ihre Anfrage wurde bereits gesendet. Bitte warten Sie eine Minute.");
      return;
    }
    setError("");
    setSending(true);
    try {
      const { fax, datenschutz, ...payload } = formData;
      const res = await fetch(
        "https://gentcungu.app.n8n.cloud/webhook/ec176610-4500-456b-8b18-4e910dc50c2d",
        { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) },
      );
      if (!res.ok) throw new Error("Failed");
      lastSubmitRef.current = Date.now();
      setSubmitted(true);
    } catch {
      setError("Verbindungsfehler. Bitte prüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.");
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full bg-dark-200 border border-white/10 rounded-lg text-white py-3 px-4 text-sm focus:outline-none focus:border-accent transition-colors duration-300 placeholder:text-white/30";
  const selectClass =
    "w-full bg-dark-200 border border-white/10 rounded-lg text-white py-3 px-4 text-sm focus:outline-none focus:border-accent transition-colors duration-300 appearance-none cursor-pointer [&>option]:bg-dark-200 [&>option]:text-white";
  const labelClass = "block text-white/70 text-xs uppercase tracking-[0.15em] mb-2.5 font-medium";
  const stepLabels = ["Kontakt", "Unternehmen", "Projekt", "Budget"];

  const stepVariants = {
    enter: (d: number) => ({ opacity: 0, x: d * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d * -40 }),
  };

  return (
    <div className="min-h-screen bg-dark relative">
      <Navigation />
      <div className="container pt-32 pb-20">
        <div className="max-w-2xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-serif text-3xl md:text-5xl text-white leading-heading tracking-tightest mb-4"
          >
            Projekt starten.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/50 text-lg mb-10 max-w-md"
          >
            Beschreiben Sie Ihr Vorhaben — wir melden uns innerhalb von 24 Stunden.
          </motion.p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
              role="status"
              aria-live="polite"
            >
              <p className="text-white text-xl font-semibold mb-3">Vielen Dank!</p>
              <p className="text-white/50 text-sm mb-8">
                Wir prüfen Ihr Projekt und melden uns innerhalb von 24 Stunden.
              </p>
              <Link href="/" className="btn-primary text-base">Zur Startseite</Link>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Progress bar */}
              <div
                className="mb-10"
                role="progressbar"
                aria-valuenow={step}
                aria-valuemin={1}
                aria-valuemax={TOTAL_STEPS}
                aria-label={`Schritt ${step} von ${TOTAL_STEPS}: ${stepLabels[step - 1]}`}
              >
                <div className="flex justify-between mb-2">
                  {stepLabels.map((label, i) => (
                    <span
                      key={label}
                      className={`text-xs font-medium ${i + 1 <= step ? "text-white" : "text-white/30"}`}
                      aria-current={i + 1 === step ? "step" : undefined}
                    >
                      {label}
                    </span>
                  ))}
                </div>
                <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-accent"
                    initial={false}
                    animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                </div>
              </div>

              {/* Honeypot */}
              <input
                type="text"
                name="fax"
                value={formData.fax}
                onChange={(e) => set("fax", e.target.value)}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <AnimatePresence mode="wait" custom={direction}>
                {step === 1 && (
                  <motion.div
                    key="step1"
                    custom={direction}
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h2 className="text-white text-lg font-semibold mb-4">Kontaktdaten</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className={labelClass}>Name *</label>
                        <input id="name" type="text" required maxLength={100} autoComplete="name"
                          value={formData.name} onChange={(e) => set("name", e.target.value)}
                          className={inputClass} placeholder="Ihr Name" />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClass}>E-Mail *</label>
                        <input id="email" type="email" required maxLength={255} autoComplete="email"
                          value={formData.email} onChange={(e) => set("email", e.target.value)}
                          className={inputClass} placeholder="ihre@email.de" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="telefon" className={labelClass}>Telefon</label>
                        <input id="telefon" type="tel" maxLength={30} autoComplete="tel"
                          value={formData.telefon} onChange={(e) => set("telefon", e.target.value)}
                          className={inputClass} placeholder="+49 123 456789" />
                      </div>
                      <div>
                        <label htmlFor="unternehmen" className={labelClass}>Unternehmen *</label>
                        <input id="unternehmen" type="text" required maxLength={100} autoComplete="organization"
                          value={formData.unternehmen} onChange={(e) => set("unternehmen", e.target.value)}
                          className={inputClass} placeholder="Firmenname" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="servicebedarf" className={labelClass}>Was brauchen Sie? *</label>
                      <select id="servicebedarf" value={formData.servicebedarf}
                        onChange={(e) => set("servicebedarf", e.target.value)} className={selectClass}>
                        <option value="" disabled>Bitte wählen</option>
                        {SERVICEBEDARF.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    custom={direction}
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h2 className="text-white text-lg font-semibold mb-4">Ihr Unternehmen</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="branche" className={labelClass}>Branche *</label>
                        <select id="branche" value={formData.branche}
                          onChange={(e) => set("branche", e.target.value)} className={selectClass}>
                          <option value="" disabled>Bitte wählen</option>
                          {BRANCHEN.map((b) => <option key={b} value={b}>{b}</option>)}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="groesse" className={labelClass}>Unternehmensgröße *</label>
                        <select id="groesse" value={formData.groesse}
                          onChange={(e) => set("groesse", e.target.value)} className={selectClass}>
                          <option value="" disabled>Bitte wählen</option>
                          {GROESSEN.map((g) => <option key={g} value={g}>{g}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="website" className={labelClass}>Website</label>
                        <input id="website" type="url" maxLength={255} autoComplete="url"
                          value={formData.website} onChange={(e) => set("website", e.target.value)}
                          className={inputClass} placeholder="https://ihre-firma.de" />
                      </div>
                      <div>
                        <label htmlFor="aktuelleSoftware" className={labelClass}>Aktuelle Software</label>
                        <input id="aktuelleSoftware" type="text" maxLength={200}
                          value={formData.aktuelleSoftware} onChange={(e) => set("aktuelleSoftware", e.target.value)}
                          className={inputClass} placeholder="z.B. Excel, SAP, keine" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    custom={direction}
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h2 className="text-white text-lg font-semibold mb-2">Ihr Projekt</h2>
                    <div>
                      <label className={labelClass}>Projekttyp * (max. 3)</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
                        {PROJEKTTYPEN.map((typ) => {
                          const active = formData.projekttypen.includes(typ);
                          return (
                            <button
                              key={typ}
                              type="button"
                              onClick={() => toggleProjekttyp(typ)}
                              aria-pressed={active}
                              className={`text-left text-sm px-4 py-3 border rounded-lg transition-all duration-200 min-h-[44px] ${
                                active
                                  ? "border-accent text-white bg-accent/10"
                                  : "border-white/10 text-white/60 hover:border-white/20 hover:text-white/80"
                              }`}
                            >
                              {typ}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="problem" className={labelClass}>Das Problem *</label>
                      <textarea id="problem" required maxLength={1000} rows={4}
                        value={formData.problem} onChange={(e) => set("problem", e.target.value)}
                        className={`${inputClass} resize-none`}
                        placeholder="Beschreiben Sie das Problem, das Sie lösen wollen." />
                      <span className="text-white/30 text-xs mt-1 block">{formData.problem.length}/1000</span>
                    </div>
                    <div>
                      <label htmlFor="nutzer" className={labelClass}>Wer nutzt die Software? *</label>
                      <input id="nutzer" type="text" required maxLength={200}
                        value={formData.nutzer} onChange={(e) => set("nutzer", e.target.value)}
                        className={inputClass} placeholder="z.B. Ihre Kunden, Ihre Mitarbeiter, beide" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="integrationen" className={labelClass}>Integrationen</label>
                        <input id="integrationen" type="text" maxLength={200}
                          value={formData.integrationen} onChange={(e) => set("integrationen", e.target.value)}
                          className={inputClass} placeholder="z.B. Buchhaltung, E-Mail, Kalender" />
                      </div>
                      <div>
                        <label htmlFor="anforderungen" className={labelClass}>Besondere Anforderungen</label>
                        <input id="anforderungen" type="text" maxLength={500}
                          value={formData.anforderungen} onChange={(e) => set("anforderungen", e.target.value)}
                          className={inputClass} placeholder="z.B. DSGVO, mobile Nutzung, mehrsprachig" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    custom={direction}
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h2 className="text-white text-lg font-semibold mb-4">Budget & Zeitrahmen</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="budget" className={labelClass}>Budget *</label>
                        <select id="budget" value={formData.budget}
                          onChange={(e) => set("budget", e.target.value)} className={selectClass}>
                          <option value="" disabled>Bitte wählen</option>
                          {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="zeitrahmen" className={labelClass}>Zeitrahmen *</label>
                        <select id="zeitrahmen" value={formData.zeitrahmen}
                          onChange={(e) => set("zeitrahmen", e.target.value)} className={selectClass}>
                          <option value="" disabled>Bitte wählen</option>
                          {ZEITRAHMEN.map((z) => <option key={z} value={z}>{z}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="quelle" className={labelClass}>Wie haben Sie von uns erfahren?</label>
                      <select id="quelle" value={formData.quelle}
                        onChange={(e) => set("quelle", e.target.value)} className={selectClass}>
                        <option value="">— Optional —</option>
                        {QUELLEN.map((q) => <option key={q} value={q}>{q}</option>)}
                      </select>
                    </div>
                    <div className="flex items-start gap-3 pt-2">
                      <input
                        id="datenschutz"
                        type="checkbox"
                        checked={formData.datenschutz}
                        onChange={(e) => set("datenschutz", e.target.checked)}
                        className="mt-1 accent-accent w-4 h-4 shrink-0"
                      />
                      <label htmlFor="datenschutz" className="text-white/60 text-sm leading-relaxed">
                        Ich habe die{" "}
                        <Link href="/datenschutz" target="_blank" className="text-accent underline">
                          Datenschutzerklärung
                        </Link>{" "}
                        gelesen und stimme der Verarbeitung meiner Daten zu. *
                      </label>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error */}
              {error && (
                <p role="alert" aria-live="assertive" className="text-red-400 text-sm mt-6">
                  {error}
                </p>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-10">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={back}
                    className="text-white/50 hover:text-white text-sm font-medium transition-colors min-h-[44px] px-2"
                  >
                    Zurück
                  </button>
                ) : (
                  <span />
                )}
                {step < TOTAL_STEPS ? (
                  <button type="button" onClick={next} className="btn-primary text-base">
                    Weiter
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={sending}
                    className="btn-primary text-base disabled:opacity-50"
                  >
                    {sending ? "Wird gesendet..." : "Projekt einreichen"}
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
