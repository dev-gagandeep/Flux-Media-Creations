"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import TextReveal from "@/components/ui/TextReveal";

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="section max-w-[1400px] mx-auto" ref={ref}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">What we do</p>
          <TextReveal
            text="Everything your business needs — built by one team."
            className="font-display font-semibold text-3xl md:text-5xl max-w-xl"
            as="h2"
          />
        </div>
        <Link
          href="/services"
          className="self-start md:self-end flex items-center gap-2 text-sm font-medium hover:gap-4 transition-all duration-300"
          style={{ color: "var(--flux)" }}
        >
          All services
          <span>→</span>
        </Link>
      </div>

      {/* Service cards */}
      <div className="divide-y divide-ink/8">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.number}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href={service.href}>
              <div className="service-card group flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-7 px-6 rounded-2xl -mx-6 transition-all duration-300">
                {/* Number + title */}
                <div className="flex items-start gap-6">
                  <span className="service-number font-display text-sm text-ink/20 group-hover:text-white/50 transition-colors pt-1 w-8 flex-shrink-0">
                    {service.number}
                  </span>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-display font-semibold text-xl md:text-2xl" style={{ letterSpacing: "-0.02em" }}>
                        {service.title}
                      </h3>
                      {service.featured && (
                        <span className="text-xs px-2.5 py-1 rounded-full bg-flux/10 text-flux group-hover:bg-white/20 group-hover:text-white transition-colors">
                          Most popular
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-ink/50 group-hover:text-white/70 transition-colors mt-1 max-w-lg">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full border border-ink/10 group-hover:border-white/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price + arrow */}
                <div className="flex items-center gap-6 ml-14 md:ml-0">
                  <div className="text-right">
                    <p className="text-xs text-ink/30 group-hover:text-white/40 transition-colors">from</p>
                    <p className="font-display font-semibold text-lg">{service.from}</p>
                  </div>
                  <span className="service-arrow text-2xl text-ink/20 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                    →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
