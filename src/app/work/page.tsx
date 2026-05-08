import type { Metadata } from "next";
import Link from "next/link";
import { generateMeta } from "@/lib/seo";
import { WORK_PROJECTS } from "@/lib/constants";
import Work from "@/components/sections/Work";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = generateMeta({
  title: "Our Work",
  description:
    "Portfolio of WordPress websites and GoHighLevel automation systems for healthcare, home services, and real estate teams.",
  path: "/work",
});

export default function WorkPage() {
  const featured = WORK_PROJECTS.slice(0, 3);

  return (
    <>
      <section className="bg-blush/45 px-6 pb-24 pt-32 md:px-10 md:pb-28 md:pt-40">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-flux">Portfolio</p>
            <h1 className="font-display text-5xl font-semibold leading-[0.96] md:text-7xl" style={{ letterSpacing: "0" }}>
              Work that connects brand, conversion, and automation.
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-ink/58 md:text-lg">
              Selected delivery examples from client engagements, including projects executed in company and partner-team environments. Each one reflects the same conversion-first build quality and automation depth we bring to new work.
            </p>
          </div>

          <div className="rounded-xl border border-ink/8 bg-white p-6 shadow-[0_24px_70px_rgba(13,13,13,0.08)]">
            <p className="mb-5 text-xs uppercase tracking-widest text-ink/35">Portfolio signal</p>
            <div className="grid grid-cols-3 gap-3">
              {[
                ["6+", "Live builds"],
                ["3", "Core verticals"],
                ["90+", "Speed target"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-xl bg-blush/45 p-4">
                  <p className="font-display text-3xl font-semibold text-flux" style={{ letterSpacing: "0" }}>{value}</p>
                  <p className="mt-1 text-xs text-ink/45">{label}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-ink/55">
              The grid below is designed for scanning: industry, build type, tags, case study, and live site access in one place.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-flux">Featured systems</p>
              <h2 className="font-display text-4xl font-semibold leading-none md:text-6xl" style={{ letterSpacing: "0" }}>
                Built for businesses where trust and response time matter.
              </h2>
            </div>
            <Link href="/contact" className="self-start rounded-full border border-ink/15 px-5 py-3 text-sm font-medium text-ink/65 transition-colors hover:border-ink/35 hover:text-ink md:self-end">
              Discuss a similar build
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featured.map((project) => (
              <article key={project.title} className="rounded-xl border border-ink/8 bg-blush/35 p-6">
                <p className="mb-4 text-xs uppercase tracking-widest text-ink/35">{project.category}</p>
                <h3 className="font-display text-2xl font-semibold leading-tight" style={{ letterSpacing: "0" }}>
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ink/58">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="rounded-full bg-white px-3 py-1 text-xs uppercase tracking-wide text-flux">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Work />
      <CTA />
    </>
  );
}
