"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";

// Note: metadata must be in a separate file for client components
// See kontakt/layout.tsx for page metadata

export default function Kontakt() {
  const [formData, setFormData] = useState({ name: "", email: "", telefon: "", unternehmen: "", nachricht: "", website: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("Fehler beim Senden. Bitte versuchen Sie es erneut.");
  const lastSubmitRef = useRef<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website) return;
    if (Date.now() - lastSubmitRef.current < 60000) { setErrorMsg("Bitte warten Sie eine Minute vor der nächsten Anfrage."); setError(true); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { setErrorMsg("Bitte geben Sie eine gültige E-Mail-Adresse ein."); setError(true); return; }
    setSending(true); setError(false);
    try {
      const res = await fetch("https://gentcungu.app.n8n.cloud/webhook/ec176610-4500-456b-8b18-4e910dc50c2d", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed");
      lastSubmitRef.current = Date.now();
      setSubmitted(true);
    } catch { setErrorMsg("Fehler beim Senden. Bitte versuchen Sie es erneut."); setError(true); } finally { setSending(false); }
  };

  const inputClass = "w-full bg-transparent border-b border-white/40 text-white py-3 text-sm focus:outline-none focus:border-[hsl(var(--primary))] transition-colors duration-300 placeholder:text-white/50";

  return (
    <div className="min-h-screen section-hero relative">
      <Navigation />
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-2xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold text-white leading-tight letter-spacing-tight mb-4">
            Projekt starten.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/40 text-lg font-light mb-14 max-w-md">
            Beschreiben Sie Ihr Vorhaben — wir melden uns innerhalb von 24 Stunden.
          </motion.p>
          {submitted ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20">
              <p className="text-white text-xl font-semibold mb-3">Nachricht gesendet.</p>
              <p className="text-white/40 text-sm mb-8">Wir melden uns in Kürze bei Ihnen.</p>
              <Link href="/" className="btn-gold text-base rounded-xl">Zur Startseite</Link>
            </motion.div>
          ) : (
            <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div><label className="block text-white text-xs uppercase tracking-wider mb-3 font-medium">Name *</label><input type="text" name="name" required maxLength={100} value={formData.name} onChange={handleChange} className={inputClass} placeholder="Ihr Name" /></div>
                <div><label className="block text-white text-xs uppercase tracking-wider mb-3 font-medium">E-Mail *</label><input type="email" name="email" required maxLength={255} value={formData.email} onChange={handleChange} className={inputClass} placeholder="ihre@email.de" /></div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div><label className="block text-white text-xs uppercase tracking-wider mb-3 font-medium">Telefon</label><input type="tel" name="telefon" maxLength={30} value={formData.telefon} onChange={handleChange} className={inputClass} placeholder="+49 123 456789" /></div>
                <div><label className="block text-white text-xs uppercase tracking-wider mb-3 font-medium">Unternehmen</label><input type="text" name="unternehmen" maxLength={100} value={formData.unternehmen} onChange={handleChange} className={inputClass} placeholder="Firmenname" /></div>
              </div>
              <input type="text" name="website" value={formData.website} onChange={handleChange} style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
              <div><label className="block text-white text-xs uppercase tracking-wider mb-3 font-medium">Nachricht *</label><textarea name="nachricht" required maxLength={2000} rows={5} value={formData.nachricht} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Beschreiben Sie kurz Ihr Vorhaben..." /></div>
              {error && <p className="text-red-400 text-sm">{errorMsg}</p>}
              <button type="submit" disabled={sending} className="btn-gold text-base rounded-xl mt-4 disabled:opacity-50">{sending ? "Wird gesendet..." : "Nachricht senden"}</button>
            </motion.form>
          )}
        </div>
      </div>
    </div>
  );
}
