"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PROCESS_STEPS } from "@/lib/constants";
import TextReveal from "@/components/ui/TextReveal";

export default function Process() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="section max-w-[1400px] mx-auto" ref={ref}>
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left sticky header */}
        <div className="md:sticky md:top-28">
          <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">How it works</p>
          <TextReveal
            text="A clear process from discovery call to go-live."
            className="font-display font-semibold text-3xl md:text-5xl mb-6"
            as="h2"
          />
          <p className="text-base text-ink/50 leading-relaxed mb-8 max-w-sm">
            We start with a free 30-minute discovery call, design everything in Figma before code, build WordPress and GoHighLevel in parallel when needed, test across browsers and devices, and hand the project over with a recorded walkthrough and 30 days of direct support.
          </p>
          <Link
            href="/process"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium border border-ink/15 hover:border-ink/40 hover:gap-3 transition-all duration-300"
          >
            See the full process →
          </Link>

          {/* Trust note */}
          <div className="mt-10 p-5 rounded-2xl border border-ink/8 bg-blush">
            <p className="text-sm font-medium text-ink mb-1">30 days post-launch support</p>
            <p className="text-sm text-ink/50">
              Direct access to us, not a ticket queue. Every project includes a recorded walkthrough so you are never dependent on us for basic edits or daily use.
            </p>
          </div>
        </div>

        {/* Right steps */}
        <div className="flex flex-col gap-0 divide-y divide-ink/8">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              className="process-step py-8 flex gap-6 group"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="process-num w-11 h-11 rounded-full flex items-center justify-center text-sm font-display font-semibold flex-shrink-0 transition-all duration-400"
                style={{
                  background: "#F3F1ED",
                  color: "var(--ink-muted)",
                  border: "1.5px solid rgba(13,13,13,0.1)",
                }}
              >
                {step.number}
              </div>
              <div>
                <h3
                  className="font-display font-semibold text-lg mb-2 group-hover:text-flux transition-colors duration-300"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-ink/50 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
