"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TESTIMONIALS, SITE } from "@/lib/constants";
import MagneticButton from "@/components/ui/MagneticButton";

export default function CTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      {/* Testimonials */}
      <section className="section max-w-[1400px] mx-auto" ref={ref}>
        <div className="mb-10">
          <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">What clients say</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-2xl border border-ink/8 bg-white flex flex-col justify-between gap-6"
            >
              <div>
                <span className="text-4xl font-display font-bold" style={{ color: "var(--flux)" }}>"</span>
                <p className="text-base text-ink/70 leading-relaxed mt-2">{t.quote}</p>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium text-white"
                  style={{ background: "var(--flux)" }}
                >
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">{t.author}</p>
                  <p className="text-xs text-ink/40">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Big CTA block */}
      <section
        className="section"
        style={{ background: "var(--ink)" }}
      >
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-widest mb-6"
            style={{ color: "rgba(250,248,244,0.35)" }}
          >
            Ready to build?
          </motion.p>

          <div className="overflow-hidden mb-6">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-semibold text-cream"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6.5rem)", letterSpacing: "-0.04em", lineHeight: 0.92 }}
            >
              Your site should work
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-semibold"
              style={{
                fontSize: "clamp(2.5rem, 7vw, 6.5rem)",
                letterSpacing: "-0.04em",
                lineHeight: 0.92,
                color: "var(--flux)",
                fontStyle: "italic",
              }}
            >
              while you sleep.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-base max-w-md mx-auto mb-10 leading-relaxed"
            style={{ color: "rgba(250,248,244,0.45)" }}
          >
            Free 30-minute discovery call. No pitch — just a conversation about what you need and how we can help.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <MagneticButton>
              <Link
                href="/contact"
                className="flex items-center gap-3 px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover:scale-105"
                style={{
                  background: "var(--flux)",
                  color: "white",
                  boxShadow: "0 4px 30px rgba(255,92,53,0.4)",
                }}
              >
                Book a free call
                <span className="text-lg">→</span>
              </Link>
            </MagneticButton>

            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium border transition-all duration-300 hover:border-cream/40"
              style={{ color: "rgba(250,248,244,0.6)", borderColor: "rgba(250,248,244,0.15)" }}
            >
              WhatsApp us
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-8 text-xs"
            style={{ color: "rgba(250,248,244,0.2)" }}
          >
            {SITE.email} · {SITE.phone}
          </motion.p>
        </div>
      </section>
    </>
  );
}
