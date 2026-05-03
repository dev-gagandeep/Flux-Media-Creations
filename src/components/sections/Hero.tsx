"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  const subheadingLines = ["We Build Systems", "That Actually Convert."];

  return (
    <section className="min-h-screen flex flex-col justify-between pt-28 md:pt-32 pb-16 px-6 md:px-10 max-w-[1400px] mx-auto">

      {/* Main headline */}
      <div className="flex-1 flex flex-col justify-center pt-10 md:pt-16">
        <motion.p
          variants={fadeUp} initial="initial" animate="animate"
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm font-medium uppercase tracking-widest text-ink/40 mb-8"
        >
          WordPress <span style={{ color: "var(--flux)" }}>GoHighLevel</span> Agency for Service Businesses
        </motion.p>

        <motion.h1
          className="font-display font-semibold leading-[0.95]"
          style={{ fontSize: "clamp(2.4rem, 6vw, 5.7rem)", letterSpacing: "-0.03em" }}
        >
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Struggling to Get Leads Online?
            </motion.span>
          </span>
        </motion.h1>

        <motion.h2
          className="mt-5 font-display font-semibold leading-[1.02]"
          style={{ fontSize: "clamp(1.8rem, 4.2vw, 4rem)", letterSpacing: "-0.03em" }}
        >
          {subheadingLines.map((line, index) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </motion.h2>

        {/* Subline + CTA row */}
        <motion.div
          variants={fadeUp} initial="initial" animate="animate"
          transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <p className="text-base md:text-lg text-ink/50 leading-relaxed max-w-2xl">
            Most service businesses have a website. Very few have one that actually works. Flux Media Creations builds WordPress websites and GoHighLevel CRM automations that connect together so every visitor who fills out a form gets a reply within seconds, not hours. We serve healthcare clinics, home service businesses, and real estate teams across the United States. One team builds everything. Nothing gets outsourced.
          </p>
          <div className="flex gap-4 items-center">
            <MagneticButton>
              <Link
                href="/contact"
                className="flex items-center gap-3 px-7 py-4 rounded-full text-base font-medium transition-all duration-300"
                style={{ background: "var(--flux)", color: "white", boxShadow: "0 4px 24px rgba(255,92,53,0.3)" }}
              >
                Start a project
                <span>→</span>
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="/work"
                className="flex items-center gap-2 px-7 py-4 rounded-full text-base font-medium border border-ink/15 hover:border-ink/40 transition-all duration-300"
              >
                See our work
              </Link>
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        variants={fadeUp} initial="initial" animate="animate"
        transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16 pt-8 border-t border-ink/8 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {STATS.map((stat) => (
          <div key={stat.label}>
            <p
              className="font-display font-semibold text-3xl md:text-4xl"
              style={{ letterSpacing: "-0.03em", color: "var(--flux)" }}
            >
              {stat.number}
            </p>
            <p className="text-sm text-ink/40 mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
