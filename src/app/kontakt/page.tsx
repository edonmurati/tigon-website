"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";

const BRANCHEN = [
  "Handwerk",
  "Finanzdienstleistungen",
  "Verlagswesen",
  "Gastronomie & Hotellerie",
  "Gesundheitswesen",
  "Immobilien",
  "Einzelhandel",
  "Logistik",
  "Beratung",
  "Sonstiges",
];

const GROESSEN = ["1–5 Mitarbeiter", "6–20", "21–50", "51–200", "200+"];

const PROJEKTTYPEN = [
  "Kundenportal",
  "Dashboard / Reporting",
  "Dokumentenmanagement",
  "Buchungssystem",
  "Marktplatz",
  "Prozessautomatisierung",
  "KI-Integration",
  "Mobile App (PWA)",
  "Sonstiges",
];

const BUDGETS = [
  "Unter €3.000",
  "€3.000–5.000",
  "€5.000–10.000",
  "Über €10.000",
  "Noch unklar",
];

const ZEITRAHMEN = [
  "So schnell wie möglich",
  "In den nächsten 2 Wochen",
  "In 1–3 Monaten",
  "Kein Zeitdruck",
];

const QUELLEN = ["Google", "Empfehlung", "Social Media", "Sonstiges"];

const TOTAL_STEPS = 4;

type FormData = {
  // Step 1
  name: string;
  email: string;
  telefon: string;
  unternehmen: string;
  // Step 2
  branche: string;
  groesse: string;
  website: string;
  aktuelleSoftware: string;
  // Step 3
  projekttypen: string[];
  problem: string;
  nutzer: string;
  integrationen: string;
  anforderungen: string;
  // Step 4
  budget: string;
  zeitrahmen: string;
  quelle: string;
  // Honeypot
  fax: string;
};

const initial: FormData = {
  name: "",
  email: "",
  telefon: "",
  unternehmen: "",
  branche: "",
  groesse: "",
  website: "",
  aktuelleSoftware: "",
  projekttypen: [],
  problem: "",
  nutzer: "",
  integrationen: "",
  anforderungen: "",
  budget: "",
  zeitrahmen: "",
  quelle: "",
  fax: "",
};

function validateStep(step: number, d: FormData): string | null {
  if (step === 1) {
    if (!d.name.trim()) return "Bitte geben Sie Ihren Namen ein.";
    if (!d.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email))
      return "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    if (!d.unternehmen.trim()) return "Bitte geben Sie Ihr Unternehmen ein.";
  }
  if (step === 2) {
    if (!d.branche) return "Bitte wählen Sie Ihre Branche.";
    if (!d.groesse) return "Bitte wählen Sie Ihre Unternehmensgröße.";
  }
  if (step === 3) {
    if (d.projekttypen.length === 0)
      return "Bitte wählen Sie mindestens einen Projekttyp.";
    if (!d.problem.trim())
      return "Bitte beschreiben Sie das Problem, das Sie lösen wollen.";
    if (!d.nutzer.trim())
      return "Bitte geben Sie an, wer die Software nutzen wird.";
  }
  if (step === 4) {
    if (!d.budget) return "Bitte wählen Sie ein Budget.";
    if (!d.zeitrahmen) return "Bitte wählen Sie einen Zeitrahmen.";
  }
  return null;
}

export default function Kontakt() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const lastSubmitRef = useRef<number>(0);

  const set = (field: keyof FormData, value: string | string[]) =>
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
    if (err) {
      setError(err);
      return;
    }
    setError("");
    setStep((s) => s + 1);
  };

  const back = () => {
    setError("");
    setStep((s) => s - 1);
  };

  const handleSubmit = async () => {
    if (formData.fax) return;
    const err = validateStep(step, formData);
    if (err) {
      setError(err);
      return;
    }
    if (Date.now() - lastSubmitRef.current < 60000) {
      setError("Bitte warten Sie eine Minute vor der nächsten Anfrage.");
      return;
    }
    setError("");
    setSending(true);
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        telefon: formData.telefon,
        unternehmen: formData.unternehmen,
        branche: formData.branche,
        groesse: formData.groesse,
        website: formData.website,
        aktuelleSoftware: formData.aktuelleSoftware,
        projekttypen: formData.projekttypen,
        problem: formData.problem,
        nutzer: formData.nutzer,
        integrationen: formData.integrationen,
        anforderungen: formData.anforderungen,
        budget: formData.budget,
        zeitrahmen: formData.zeitrahmen,
        quelle: formData.quelle,
      };
      const res = await fetch(
        "https://gentcungu.app.n8n.cloud/webhook/ec176610-4500-456b-8b18-4e910dc50c2d",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );
      if (!res.ok) throw new Error("Failed");
      lastSubmitRef.current = Date.now();
      setSubmitted(true);
    } catch {
      setError("Fehler beim Senden. Bitte versuchen Sie es erneut.");
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full bg-transparent border-b border-white/40 text-white py-3 text-sm focus:outline-none focus:border-[hsl(var(--primary))] transition-colors duration-300 placeholder:text-white/50";
  const selectClass =
    "w-full bg-transparent border-b border-white/40 text-white py-3 text-sm focus:outline-none focus:border-[hsl(var(--primary))] transition-colors duration-300 appearance-none cursor-pointer [&>option]:bg-[hsl(var(--secondary))] [&>option]:text-white";
  const labelClass =
    "block text-white text-xs uppercase tracking-wider mb-3 font-medium";

  const stepVariants = {
    enter: { opacity: 0, x: 40 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  };

  return (
    <div className="min-h-screen section-hero relative">
      <Navigation />
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-2xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold text-white leading-tight letter-spacing-tight mb-4"
          >
            Projekt starten.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/40 text-lg font-light mb-10 max-w-md"
          >
            Beschreiben Sie Ihr Vorhaben — wir melden uns innerhalb von 24
            Stunden.
          </motion.p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <p className="text-white text-xl font-semibold mb-3">
                Vielen Dank!
              </p>
              <p className="text-white/40 text-sm mb-8">
                Wir prüfen Ihr Projekt und melden uns innerhalb von 24 Stunden.
              </p>
              <Link href="/" className="btn-gold text-base rounded-xl">
                Zur Startseite
              </Link>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Progress Bar */}
              <div className="mb-10">
                <div className="flex justify-between mb-2">
                  {Array.from({ length: TOTAL_STEPS }, (_, i) => (
                    <span
                      key={i}
                      className={`text-xs font-medium ${i + 1 <= step ? "text-white" : "text-white/30"}`}
                    >
                      {i + 1 === 1 && "Kontakt"}
                      {i + 1 === 2 && "Unternehmen"}
                      {i + 1 === 3 && "Projekt"}
                      {i + 1 === 4 && "Budget"}
                    </span>
                  ))}
                </div>
                <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "var(--gradient-gold)" }}
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
              />

              <AnimatePresence mode="wait">
                {/* Step 1: Kontaktdaten */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    <h2 className="text-white text-lg font-semibold mb-6">
                      Kontaktdaten
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label className={labelClass}>Name *</label>
                        <input
                          type="text"
                          required
                          maxLength={100}
                          value={formData.name}
                          onChange={(e) => set("name", e.target.value)}
                          className={inputClass}
                          placeholder="Ihr Name"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>E-Mail *</label>
                        <input
                          type="email"
                          required
                          maxLength={255}
                          value={formData.email}
                          onChange={(e) => set("email", e.target.value)}
                          className={inputClass}
                          placeholder="ihre@email.de"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label className={labelClass}>Telefon</label>
                        <input
                          type="tel"
                          maxLength={30}
                          value={formData.telefon}
                          onChange={(e) => set("telefon", e.target.value)}
                          className={inputClass}
                          placeholder="+49 123 456789"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Unternehmen *</label>
                        <input
                          type="text"
                          required
                          maxLength={100}
                          value={formData.unternehmen}
                          onChange={(e) => set("unternehmen", e.target.value)}
                          className={inputClass}
                          placeholder="Firmenname"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Unternehmen */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    <h2 className="text-white text-lg font-semibold mb-6">
                      Ihr Unternehmen
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label className={labelClass}>Branche *</label>
                        <select
                          value={formData.branche}
                          onChange={(e) => set("branche", e.target.value)}
                          className={selectClass}
                        >
                          <option value="" disabled>
                            Bitte wählen
                          </option>
                          {BRANCHEN.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>
                          Unternehmensgröße *
                        </label>
                        <select
                          value={formData.groesse}
                          onChange={(e) => set("groesse", e.target.value)}
                          className={selectClass}
                        >
                          <option value="" disabled>
                            Bitte wählen
                          </option>
                          {GROESSEN.map((g) => (
                            <option key={g} value={g}>
                              {g}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label className={labelClass}>Website</label>
                        <input
                          type="url"
                          maxLength={255}
                          value={formData.website}
                          onChange={(e) => set("website", e.target.value)}
                          className={inputClass}
                          placeholder="https://ihre-firma.de"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Aktuelle Software</label>
                        <input
                          type="text"
                          maxLength={200}
                          value={formData.aktuelleSoftware}
                          onChange={(e) =>
                            set("aktuelleSoftware", e.target.value)
                          }
                          className={inputClass}
                          placeholder="z.B. Excel, SAP, keine"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Projekt */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    <h2 className="text-white text-lg font-semibold mb-2">
                      Ihr Projekt
                    </h2>
                    <div>
                      <label className={labelClass}>
                        Projekttyp * (max. 3)
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {PROJEKTTYPEN.map((typ) => {
                          const active = formData.projekttypen.includes(typ);
                          return (
                            <button
                              key={typ}
                              type="button"
                              onClick={() => toggleProjekttyp(typ)}
                              className={`text-left text-sm px-4 py-3 border rounded-sm transition-all duration-200 ${
                                active
                                  ? "border-[hsl(var(--primary))] text-white bg-[hsl(var(--primary))]/10"
                                  : "border-white/20 text-white/60 hover:border-white/40 hover:text-white/80"
                              }`}
                            >
                              {typ}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>Das Problem *</label>
                      <textarea
                        required
                        maxLength={1000}
                        rows={4}
                        value={formData.problem}
                        onChange={(e) => set("problem", e.target.value)}
                        className={`${inputClass} resize-none`}
                        placeholder="Beschreiben Sie das Problem, das Sie lösen wollen. Was kostet Sie dieses Problem an Zeit oder Geld?"
                      />
                      <span className="text-white/30 text-xs mt-1 block">
                        {formData.problem.length}/1000
                      </span>
                    </div>
                    <div>
                      <label className={labelClass}>
                        Wer nutzt die Software? *
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={200}
                        value={formData.nutzer}
                        onChange={(e) => set("nutzer", e.target.value)}
                        className={inputClass}
                        placeholder="z.B. Ihre Kunden, Ihre Mitarbeiter, beide"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label className={labelClass}>Integrationen</label>
                        <input
                          type="text"
                          maxLength={200}
                          value={formData.integrationen}
                          onChange={(e) =>
                            set("integrationen", e.target.value)
                          }
                          className={inputClass}
                          placeholder="z.B. Buchhaltung, E-Mail, Kalender"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>
                          Besondere Anforderungen
                        </label>
                        <input
                          type="text"
                          maxLength={500}
                          value={formData.anforderungen}
                          onChange={(e) =>
                            set("anforderungen", e.target.value)
                          }
                          className={inputClass}
                          placeholder="z.B. DSGVO, mobile Nutzung, mehrsprachig"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Budget & Zeitrahmen */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    <h2 className="text-white text-lg font-semibold mb-6">
                      Budget & Zeitrahmen
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label className={labelClass}>Budget *</label>
                        <select
                          value={formData.budget}
                          onChange={(e) => set("budget", e.target.value)}
                          className={selectClass}
                        >
                          <option value="" disabled>
                            Bitte wählen
                          </option>
                          {BUDGETS.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Zeitrahmen *</label>
                        <select
                          value={formData.zeitrahmen}
                          onChange={(e) => set("zeitrahmen", e.target.value)}
                          className={selectClass}
                        >
                          <option value="" disabled>
                            Bitte wählen
                          </option>
                          {ZEITRAHMEN.map((z) => (
                            <option key={z} value={z}>
                              {z}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>
                        Wie haben Sie von uns erfahren?
                      </label>
                      <select
                        value={formData.quelle}
                        onChange={(e) => set("quelle", e.target.value)}
                        className={selectClass}
                      >
                        <option value="">— Optional —</option>
                        {QUELLEN.map((q) => (
                          <option key={q} value={q}>
                            {q}
                          </option>
                        ))}
                      </select>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error */}
              {error && (
                <p className="text-red-400 text-sm mt-6">{error}</p>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-10">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={back}
                    className="text-white/50 hover:text-white text-sm font-medium transition-colors"
                  >
                    Zurück
                  </button>
                ) : (
                  <span />
                )}
                {step < TOTAL_STEPS ? (
                  <button
                    type="button"
                    onClick={next}
                    className="btn-gold text-base rounded-xl"
                  >
                    Weiter
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={sending}
                    className="btn-gold text-base rounded-xl disabled:opacity-50"
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
