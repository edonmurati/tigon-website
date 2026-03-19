"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const CtaSection = () => (
  <section className="section-hero py-32 md:py-40 relative overflow-hidden" id="kontakt">
    <div className="container mx-auto px-6 relative z-10 text-center">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-white mb-10 leading-tight letter-spacing-tight">
        72 Stunden bis zu<br />Ihrem Prototyp.
      </motion.h2>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
        <Link href="/kontakt" className="btn-gold text-lg inline-block rounded-xl">Projekt starten</Link>
      </motion.div>
    </div>
  </section>
);
export default CtaSection;
