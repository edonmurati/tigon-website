"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const CtaSection = () => (
  <section className="py-32 md:py-40 bg-dark relative overflow-hidden">
    {/* Subtle radial glow */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(200,150,74,0.06) 0%, transparent 70%)",
      }}
    />

    <div className="container relative z-10 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[0.95] tracking-tightest mb-10"
      >
        72 Stunden bis zu
        <br />
        Ihrem <span className="text-accent italic">Prototyp.</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link href="/kontakt" className="btn-primary text-lg">
          Projekt starten
        </Link>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
