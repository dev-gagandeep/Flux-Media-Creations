"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

const journeySteps = [
  { label: "Visitor search", detail: "A high-intent visitor arrives at your SEO optimized WordPress website.", value: "01" },
  { label: "Lead recovered", detail: "They fill out a form, call your business, begin a chat, or request an appointment.", value: "02" },
  { label: "Follow-up immediately", detail: "GoHighLevel sends the proper SMS, email, reminder, and missed-call reply.", value: "03" },
  { label: "Call set up", detail: "The lead enters your pipeline and progresses toward a confirmed appointment.", value: "04" },
];

const stackItems = ["WordPress", "GoHighLevel", "SEO", "GA4", "Make", "Zapier"];

export default function Hero() {
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-[86vh] px-6 md:px-10 pt-28 md:pt-32 pb-20 bg-blush/45">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1.12fr_0.88fr] gap-12 xl:gap-20 items-center">
        <div>
          <motion.p
            variants={fadeUp} initial="initial" animate="animate"
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs font-semibold uppercase tracking-widest text-flux mb-5"
          >
            WordPress GoHighLevel agency for service businesses
          </motion.p>

          <motion.h1
            className="font-display font-semibold leading-[0.96] max-w-4xl"
            style={{ fontSize: "clamp(3.05rem, 6.4vw, 6.7rem)", letterSpacing: "0" }}
          >
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                More leads from your site.
              </motion.span>
            </span>
            <span className="block overflow-hidden text-flux">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Quicker follow-up from your CRM.
              </motion.span>
            </span>
          </motion.h1>

          <motion.div
            variants={fadeUp} initial="initial" animate="animate"
            transition={{ delay: 0.48, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6"
          >
            <p className="text-base md:text-lg text-ink/55 leading-relaxed max-w-2xl">
              Flux Media Creations is a WordPress GoHighLevel agency for service businesses that can&apos;t afford to lose leads. We build fast, premium WordPress websites that integrate with GoHighLevel CRM automation so every form fill, call, chat, and booking request is captured, followed up, and driven toward an appointment.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/45">
              Built for healthcare clinics, home service companies, real estate professionals, and local service brands that need a website and CRM to work together.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide transition-all duration-300 hover:gap-4"
                  style={{ background: "var(--flux)", color: "white", boxShadow: "0 18px 45px rgba(255,92,53,0.22)" }}
                >
                  Start a project
                  <span>→</span>
                </Link>
              </MagneticButton>
              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ink/70 transition-colors hover:border-ink/35 hover:text-ink"
              >
                See our work
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.58, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative ml-auto w-full max-w-[520px]"
        >
          <LeadJourneyPreview />
        </motion.div>
      </div>
    </section>
  );
}

function LeadJourneyPreview() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-ink/8 bg-white p-5 shadow-[0_30px_90px_rgba(255,92,53,0.13)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(255,92,53,0.12),transparent_28%),radial-gradient(circle_at_15%_80%,rgba(13,13,13,0.04),transparent_24%)]" />

      <div className="relative rounded-[1.45rem] border border-ink/8 bg-cream p-5 md:p-6">
        <div className="flex items-start justify-between gap-4 border-b border-ink/8 pb-5">
          <div>
            <p className="text-xs uppercase tracking-widest text-ink/35">Preview growth system</p>
            <h2 className="mt-2 font-display text-3xl font-semibold leading-none text-ink md:text-4xl" style={{ letterSpacing: "0" }}>
              Visitor on booked call
            </h2>
          </div>
          <div className="rounded-full bg-sage px-3 py-1 text-xs font-semibold text-ink/65">Live flow</div>
        </div>

        <div className="mt-6 space-y-3">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.label}
              className="group grid grid-cols-[3rem_1fr] gap-4 rounded-2xl border border-ink/8 bg-white p-4 shadow-[0_12px_30px_rgba(13,13,13,0.04)]"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.75 + index * 0.12, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-flux text-sm font-bold text-white">
                {step.value}
              </span>
              <div>
                <p className="font-display text-xl font-semibold leading-tight text-ink" style={{ letterSpacing: "0" }}>
                  {step.label}
                </p>
                <p className="mt-1 text-sm leading-6 text-ink/48">{step.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl bg-ink p-4 text-cream">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs uppercase tracking-widest text-cream/35">Connected stack</p>
            <span className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_0_6px_rgba(34,197,94,0.14)]" />
          </div>
          <div className="flex flex-wrap gap-2">
            {stackItems.map((item) => (
              <span key={item} className="rounded-full bg-cream/[0.08] px-3 py-1.5 text-xs font-medium text-cream/65">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
