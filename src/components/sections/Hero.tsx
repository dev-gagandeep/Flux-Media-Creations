"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SITE, STATS } from "@/lib/constants";
import MagneticButton from "@/components/ui/MagneticButton";

const words = ["Websites.", "Automation.", "Results."];

export default function Hero() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen flex flex-col justify-between pt-28 md:pt-32 pb-16 px-6 md:px-10 max-w-[1400px] mx-auto">

      {/* Main headline */}
      <div className="flex-1 flex flex-col justify-center pt-10 md:pt-16">
        <motion.p
          variants={fadeUp} initial="initial" animate="animate"
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm font-medium uppercase tracking-widest text-ink/40 mb-8"
        >
          WordPress + CRM Systems for US Businesses
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            className="font-display font-semibold leading-none"
            style={{ fontSize: "clamp(3.2rem, 9.5vw, 8.5rem)", letterSpacing: "-0.04em" }}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            We build sites
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="font-display font-semibold leading-none"
            style={{ fontSize: "clamp(3.2rem, 9.5vw, 8.5rem)", letterSpacing: "-0.04em" }}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            that close deals
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="font-display font-semibold leading-none flex items-baseline gap-4 flex-wrap"
            style={{ fontSize: "clamp(3.2rem, 9.5vw, 8.5rem)", letterSpacing: "-0.04em" }}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            while you{" "}
            <span
              className="italic font-display"
              style={{ color: "var(--flux)", fontStyle: "italic" }}
            >
              sleep.
            </span>
          </motion.h1>
        </div>

        {/* Subline + CTA row */}
        <motion.div
          variants={fadeUp} initial="initial" animate="animate"
          transition={{ delay: 0.65, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <p className="text-base md:text-lg text-ink/50 leading-relaxed max-w-md">
            We build conversion-first WordPress websites, GoHighLevel workflows, and integrated CRM automations that help teams respond faster and close more revenue.
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
        transition={{ delay: 0.85, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
