"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const flow = [
  ["01", "Discover", "Search · Maps · AI"],
  ["02", "Capture", "Calls · Forms · Booking"],
  ["03", "Progress", "CRM · Workflows · Teams"],
  ["04", "Improve", "Revenue · Outcomes · Insight"],
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pb-8 pt-24 md:pt-28">
      <div className="flux-shell">
        <div className="flex items-center justify-between border-y border-ink/15 py-3">
          <p className="flux-kicker text-ink/55">Operating Intelligence Company</p>
          <p className="hidden text-xs font-semibold text-ink/45 sm:block">Healthcare first · Service businesses worldwide</p>
        </div>

        <div className="grid min-h-[calc(100vh-9rem)] gap-12 py-12 lg:grid-cols-[1.18fr_.82fr] lg:items-end lg:py-16">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-hero font-medium text-ink"
            >
              Intelligence
              <span className="block text-flux">in motion.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .22, duration: .7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 grid gap-7 border-t border-ink/15 pt-7 md:grid-cols-[1fr_auto] md:items-end"
            >
              <p className="max-w-2xl text-lg leading-8 text-ink/65 md:text-xl">
                Flux builds connected intelligence systems that help service businesses discover customers, capture opportunities, progress demand, automate workflows, and continuously improve.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/operating-intelligence" className="flux-button flux-button-dark">Explore the system <ArrowUpRight size={16} /></Link>
                <Link href="/business-intelligence-audit" className="flux-button flux-button-line">Measure your score</Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: .96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: .18, duration: .9, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-[560px] overflow-hidden rounded-[2rem] bg-pulse-light p-5 md:p-7"
          >
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-flux" />
            <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full border-[3.5rem] border-white/70" />
            <div className="absolute left-[18%] top-[24%] h-40 w-40 rotate-12 rounded-[2.5rem] bg-pulse" />

            <div className="relative flex h-full min-h-[506px] flex-col justify-between">
              <div className="flex items-start justify-between">
                <p className="flux-kicker max-w-32 text-ink/60">One connected operating layer</p>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white"><ArrowDownRight size={20} /></span>
              </div>
              <div className="ml-auto w-full max-w-[420px] rounded-[1.5rem] bg-white/95 p-3 shadow-[0_30px_90px_rgba(6,7,10,.16)] backdrop-blur">
                {flow.map(([number, title, detail], index) => (
                  <div key={title} className={`grid grid-cols-[2.25rem_1fr] items-center gap-3 p-3 ${index ? "border-t border-ink/10" : ""}`}>
                    <span className="text-[.65rem] font-bold text-flux">{number}</span>
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-display text-xl font-semibold tracking-[-.04em]">{title}</p>
                      <p className="text-right text-[.65rem] font-semibold uppercase tracking-[.08em] text-ink/40">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
