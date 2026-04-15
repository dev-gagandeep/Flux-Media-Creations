"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { WORK_PROJECTS } from "@/lib/constants";
import TextReveal from "@/components/ui/TextReveal";

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
    <section className="section max-w-[1400px] mx-auto" ref={ref}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">Our work</p>
          <TextReveal
            text="Real WordPress and GoHighLevel projects. Real results."
            className="font-display font-semibold text-3xl md:text-5xl"
            as="h2"
          />
          <p className="text-base text-ink/50 leading-relaxed max-w-3xl mt-5">
            Every project below is a live site we designed, built, and automated — from Figma mockup to deployed WordPress website with GoHighLevel CRM integration.
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

      {/* Filter tabs */}
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

      {/* Project grid */}
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
    </section>
  );
}

function WorkCard({ project }: { project: (typeof WORK_PROJECTS)[0] }) {
  const slug = toSlug(project.title);

  return (
    <div
      className="work-card group block rounded-2xl overflow-hidden border border-ink/6 hover:border-ink/20 transition-all duration-500 bg-white"
      data-cursor="hover"
    >
      {/* Image area */}
      <div
        className="relative overflow-hidden"
        style={{
          height: "220px",
          background: `linear-gradient(135deg, ${project.accent}15, ${project.accent}30)`,
        }}
      >
        {project.image && (
          <Image
            src={project.image}
            alt={`${project.title} website preview`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}

        <div
          className="absolute inset-0 flex items-end p-5"
          style={{ background: `linear-gradient(180deg, transparent 45%, ${project.accent}66 100%)` }}
        >
          <div
            className="px-3 py-1.5 rounded-full text-xs font-medium"
            style={{ background: project.accent, color: "white" }}
          >
            {project.category}
          </div>
        </div>

        {/* Hover reveal — clickable live-site link */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.title} live site`}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-400"
          style={{ background: `${project.accent}ee` }}
        >
          <span className="text-white font-display font-semibold text-lg flex items-center gap-2">
            Visit site →
          </span>
        </a>

        {/* Color bar top */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: project.accent }}
        />
      </div>

      {/* Card content */}
      <div className="p-5">
        <h3
          className="font-display font-semibold text-lg mb-1.5 group-hover:text-flux transition-colors duration-300"
          style={{ letterSpacing: "-0.02em" }}
        >
          {project.title}
        </h3>
        <p className="text-sm text-ink/50 leading-relaxed mb-4">
          {project.description}
        </p>
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
