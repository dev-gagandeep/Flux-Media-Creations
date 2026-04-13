import type { Metadata } from "next";
import Link from "next/link";
import { generateMeta } from "@/lib/seo";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = generateMeta({
  title: "About",
  description:
    "Meet Flux Media Creations. We build websites, automation systems, and search visibility engines for service businesses across US, UK, Canada, and India.",
  path: "/about",
});

const PRINCIPLES = [
  "Business outcomes before visual decoration",
  "Fast delivery with clear communication",
  "Conversion-focused copy and page structure",
  "Automation wherever repeat tasks appear",
];

const WHAT_WE_DO = [
  "Websites that make services easy to understand and trust",
  "CRM and follow-up automation that reduces lead leakage",
  "Discovery systems for search, map, and AI visibility",
  "Ongoing optimization and maintenance for growth teams",
];

export default function AboutPage() {
  return (
    <>
      <section className="section pt-40 md:pt-48 pb-20 max-w-[1200px] mx-auto">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-5">About</p>
        <h1 className="font-display font-semibold text-4xl md:text-6xl max-w-4xl mb-6" style={{ letterSpacing: "-0.03em" }}>
          A focused web and automation partner for service businesses.
        </h1>
        <p className="text-base md:text-lg text-ink/55 max-w-3xl leading-relaxed">
          Flux Media Creations is led by {SITE.founder}, helping clinics and service-led brands build stronger digital systems.
          We combine conversion-focused websites, process automation, and visibility strategy into one reliable delivery model.
        </p>
      </section>

      <section className="section-sm max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-ink/10 bg-white p-8">
            <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">What we do</p>
            <ul className="space-y-3 text-sm md:text-base text-ink/70 leading-7">
              {WHAT_WE_DO.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-flux mt-1">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-ink/10 bg-white p-8">
            <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">How we work</p>
            <ul className="space-y-3 text-sm md:text-base text-ink/70 leading-7">
              {PRINCIPLES.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-flux mt-1">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-sm max-w-[1200px] mx-auto">
        <div className="rounded-3xl bg-ink text-cream p-8 md:p-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-cream/40 mb-4">Work with us</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-4" style={{ letterSpacing: "-0.03em" }}>
              Need a website and automation system that actually converts?
            </h2>
            <p className="text-sm md:text-base text-cream/70 leading-7 max-w-xl">
              Tell us your goals and current setup. We will map the fastest path from click to qualified lead.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:gap-4"
            style={{ background: "var(--flux)", color: "white" }}
          >
            Start a project
            <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
