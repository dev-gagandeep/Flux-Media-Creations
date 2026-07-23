"use client";

import Link from "next/link";
import { m } from "framer-motion";
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
            <m.div
              key={`${t.author}-${t.quote}`}
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
                  <p className="text-xs text-ink/40">{t.role}</p>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </section>

      {/* Big CTA block */}
      <section className="bg-blush/45 px-6 py-24 md:px-10 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest mb-6 text-flux"
          >
            Connect the whole operating system.
          </m.p>

          <div className="overflow-hidden mb-6">
            <m.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-semibold text-ink"
              style={{ fontSize: "clamp(2.6rem, 6vw, 5.5rem)", letterSpacing: "0", lineHeight: 1 }}
            >
              Your business should understand
            </m.h2>
          </div>
          <div className="overflow-hidden mb-10">
            <m.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-semibold"
              style={{
                fontSize: "clamp(2.5rem, 7vw, 6.5rem)",
                letterSpacing: "0",
                lineHeight: 1,
                color: "var(--flux)",
                fontStyle: "italic",
              }}
            >
                how growth happens.
            </m.h2>
          </div>

          <m.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-base max-w-md mx-auto mb-10 leading-relaxed text-ink/50"
          >
            Flux connects discovery, opportunity capture, customer progression, workflows, and revenue signals so your team can see what is working and improve what happens next.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <MagneticButton>
              <Link
                href="/business-intelligence-audit"
                className="flex items-center gap-3 px-8 py-4 rounded-full text-base font-medium transition-[color,background-color,border-color,box-shadow,opacity,transform] duration-300 hover:scale-105"
                style={{
                  background: "var(--flux)",
                  color: "white",
                  boxShadow: "0 4px 30px rgba(255,92,53,0.4)",
                }}
              >
                Measure your intelligence score
                <span className="text-lg">→</span>
              </Link>
            </MagneticButton>

            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium border border-ink/15 text-ink/60 transition-[color,background-color,border-color,box-shadow,opacity,transform] duration-300 hover:border-ink/40 hover:text-ink"
            >
              WhatsApp us
            </a>
          </m.div>

          <m.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-8 text-xs text-ink/30"
          >
            Built first for healthcare clinics and appointment-based service businesses.
          </m.p>
        </div>
      </section>
    </>
  );
}
