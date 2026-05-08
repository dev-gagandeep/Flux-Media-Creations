"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { INDUSTRIES } from "@/lib/constants";
import TextReveal from "@/components/ui/TextReveal";

const ACCENT_COLORS = ["#FF5C35", "#2563EB", "#16A34A", "#9333EA"];

export default function Industries() {
  const [open, setOpen] = useState<string>("healthcare");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section
      className="section"
      ref={ref}
      style={{ background: "#F3F1ED" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">Industries we serve</p>
          <TextReveal
            text="Who we build for."
            className="font-display font-semibold text-3xl md:text-5xl max-w-2xl"
            as="h2"
          />
          <p className="text-base text-ink/50 leading-relaxed max-w-4xl mt-5">
            We work with service-based businesses where every lead counts and fast follow-up has a direct revenue impact. Clinics, home service companies, and real estate professionals all lose leads differently, so we build around the trust signals, local visibility needs, and lead-flow behavior each industry actually has.
          </p>
          <div className="mt-8 rounded-xl border border-flux/15 bg-white p-6">
            <p className="text-xs uppercase tracking-widest text-flux mb-4">Healthcare industry</p>
            <h3 className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-4" style={{ letterSpacing: "0" }}>
              Web design for healthcare that answers patient questions, not passive traffic.
            </h3>
            <p className="text-sm leading-7 text-ink/58">
              Flux Media Creations is a healthcare website design agency for clinics that want more than a clean homepage. We build websites that help patients understand what you do, trust your team, and confidently take the next step.
            </p>
            <p className="mt-3 text-sm leading-7 text-ink/58">
              Speed is essential in healthcare. A patient may call once, fill out one form, or check appointment availability after hours. That window can close when your system does not respond quickly, so we connect WordPress websites to GoHighLevel CRM automation with SMS auto-responses, booking links, internal notifications, reminder sequences, and pipeline updates.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Pain clinics", "Vein treatment clinics", "Orthopedic practices", "Telehealth providers", "Health clinics", "Chiropractic and physical therapy", "Specialty practices"].map((item) => (
                <span key={item} className="rounded-full bg-blush px-3 py-1 text-xs text-ink/58">{item}</span>
              ))}
            </div>
            <Link href="/healthcare-website-crm" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-flux px-5 py-3 text-sm font-medium text-white">
              Create a clinic growth system →
            </Link>
          </div>
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 mt-5 text-sm font-medium hover:gap-3 transition-all duration-300"
            style={{ color: "var(--flux)" }}
          >
            View all industries we serve
            <span>→</span>
          </Link>
        </div>

        <div className="flex flex-col gap-0 divide-y divide-ink/8 border-y border-ink/8">
          {INDUSTRIES.map((industry, i) => {
            const isOpen = open === industry.slug;
            const accent = ACCENT_COLORS[i];

            return (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <button
                  onClick={() => setOpen(isOpen ? "" : industry.slug)}
                  className="w-full text-left py-7 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-5">
                    <span
                      className="w-10 h-10 rounded-full flex items-center justify-center text-base font-medium transition-all duration-300 flex-shrink-0"
                      style={{
                        background: isOpen ? accent : "transparent",
                        color: isOpen ? "white" : "var(--ink-muted)",
                        border: `1.5px solid ${isOpen ? accent : "rgba(13,13,13,0.12)"}`,
                      }}
                    >
                      {industry.emoji}
                    </span>
                    <h3
                      className="font-display font-semibold text-xl md:text-2xl transition-colors duration-300"
                      style={{
                        letterSpacing: "-0.02em",
                        color: isOpen ? accent : "var(--ink)",
                      }}
                    >
                      {industry.label}
                    </h3>
                  </div>
                  <span
                    className="text-2xl text-ink/20 transition-transform duration-400"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-15 md:pl-0 grid md:grid-cols-2 gap-8 ml-0 md:ml-[60px]">
                        <div>
                          <p
                            className="text-base font-medium mb-3"
                            style={{ color: accent }}
                          >
                            {industry.headline}
                          </p>
                          <p className="text-sm text-ink/55 leading-relaxed">
                            {industry.description}
                          </p>
                          <Link
                            href={`/industries#${industry.slug}`}
                            className="inline-flex items-center gap-2 mt-5 text-sm font-medium hover:gap-3 transition-all duration-300"
                            style={{ color: accent }}
                          >
                            Learn more →
                          </Link>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-widest text-ink/30 mb-4">What we build</p>
                          <ul className="flex flex-col gap-2.5">
                            {industry.what.map((item) => (
                              <li key={item} className="flex items-center gap-3 text-sm text-ink/60">
                                <span
                                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                  style={{ background: accent }}
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
