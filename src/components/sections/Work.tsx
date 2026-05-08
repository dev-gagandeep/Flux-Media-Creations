"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { WORK_PROJECTS } from "@/lib/constants";

const FILTERS = ["All", "Healthcare", "Home Services", "Real Estate"];

function toSlug(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function Work() {
  const [active, setActive] = useState("All");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered = active === "All"
    ? WORK_PROJECTS
    : WORK_PROJECTS.filter((p) =>
        p.industry.toLowerCase().replace("-", " ") === active.toLowerCase()
      );

  return (
    <section className="bg-white px-6 py-24 md:px-10 md:py-28" ref={ref}>
      <div className="mx-auto max-w-[1400px]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <p className="text-xs uppercase tracking-widest text-flux mb-4">Our work</p>
          <h2 className="font-display font-semibold text-4xl md:text-6xl leading-none max-w-3xl" style={{ letterSpacing: "0" }}>
            Real projects for service companies.
          </h2>
          <p className="text-base text-ink/50 leading-relaxed max-w-3xl mt-5">
            We develop real growth systems, not concept designs. Each project is designed to help real businesses earn trust, capture leads, follow up faster, and book more calls or appointments.
          </p>
        </div>
        <Link
          href="/work"
          className="self-start md:self-end flex items-center gap-2 text-sm font-medium hover:gap-4 transition-all duration-300"
          style={{ color: "var(--flux)" }}
        >
          View all projects
          <span>→</span>
        </Link>
      </div>

      <div className="flex gap-2 flex-wrap mb-10">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
            style={{
              background: active === f ? "var(--ink)" : "transparent",
              color: active === f ? "var(--cream)" : "var(--ink-muted)",
              border: `1.5px solid ${active === f ? "var(--ink)" : "rgba(13,13,13,0.12)"}`,
            }}
          >
            {f}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <WorkCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {[
          {
            title: "Medical Clinics",
            body: "WordPress custom sites and GoHighLevel automation for pain clinics, vein clinics, orthopedic practices, wellness providers, and medical service brands. Clear patient pathways, powerful service pages, appointment booking automation, insurance or intake form flows, and immediate follow-up for new patient inquiries.",
            services: "Healthcare Website Design · WordPress · GoHighLevel · Scheduling Automation",
          },
          {
            title: "Home Service Companies",
            body: "Websites for lead generation and CRM workflows for contractors, repair companies, local service providers, and appointment-based teams. We help service businesses capture quote requests, respond to missed calls, automate follow-up, and track leads from first contact to booked job.",
            services: "Lead capture · GHL CRM automation · Missed-call retrieval",
          },
          {
            title: "Real Estate Specialists",
            body: "IDX-ready websites, buyer and seller lead capture, long-term nurture workflows, and personal brand websites. GoHighLevel can automatically follow up on listings, valuation form responses, and pipeline tracking so inquiries move into one CRM.",
            services: "WordPress website · Lead automation · CRM nurture",
          },
        ].map((card) => (
          <article key={card.title} className="rounded-xl border border-ink/8 bg-blush/45 p-6">
            <h3 className="font-display text-2xl font-semibold mb-3" style={{ letterSpacing: "0" }}>{card.title}</h3>
            <p className="text-sm leading-7 text-ink/58">{card.body}</p>
            <p className="mt-5 text-xs uppercase tracking-wide text-flux">{card.services}</p>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}

function WorkCard({ project }: { project: (typeof WORK_PROJECTS)[0] }) {
  const slug = toSlug(project.title);
  const previewAlt = `${project.title} website preview`;

  return (
    <div className="work-card group block rounded-2xl overflow-hidden border border-ink/6 hover:border-ink/20 transition-all duration-500 bg-white" data-cursor="hover">
      <div className="relative overflow-hidden" style={{ height: "220px", background: `linear-gradient(135deg, ${project.accent}15, ${project.accent}30)` }}>
        {project.image && (
          <Image src={project.image} alt={previewAlt} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        )}
        <div className="absolute inset-0 flex items-end p-5" style={{ background: `linear-gradient(180deg, transparent 45%, ${project.accent}66 100%)` }}>
          <div className="px-3 py-1.5 rounded-full text-xs font-medium" style={{ background: project.accent, color: "white" }}>
            {project.category}
          </div>
        </div>
        <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} live site`} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-400" style={{ background: `${project.accent}ee` }}>
          <span className="text-white font-display font-semibold text-lg uppercase tracking-[0.12em] flex items-center gap-2">
            VISIT SITE <span aria-hidden="true">↗</span>
          </span>
        </a>
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: project.accent }} />
      </div>
      <div className="p-5">
        <h3 className="font-display font-semibold text-lg mb-1.5 group-hover:text-flux transition-colors duration-300" style={{ letterSpacing: "-0.02em" }}>
          {project.title}
        </h3>
        <p className="text-sm text-ink/50 leading-relaxed mb-4">{project.description}</p>
        <p className="text-xs text-ink/40 mb-4">
          Delivered as lead developer at Fast Visibility Tech
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full"
              style={{ background: `${project.accent}12`, color: project.accent }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 text-sm">
          <Link href={`/work/${slug}`} className="font-medium hover:text-flux transition-colors" style={{ color: "var(--flux)" }}>
            Case study →
          </Link>
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-ink/55 hover:text-ink transition-colors">
            Live site ↗
          </a>
        </div>
      </div>
    </div>
  );
}
