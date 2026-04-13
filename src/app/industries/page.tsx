import type { Metadata } from "next";
import Link from "next/link";
import { generateMeta } from "@/lib/seo";
import { INDUSTRIES, SECONDARY_INDUSTRIES } from "@/lib/constants";
import CTA from "@/components/sections/CTA";
import TextReveal from "@/components/ui/TextReveal";

export const metadata: Metadata = generateMeta({
  title: "Industries We Serve",
  description:
    "Specialized websites and automation for healthcare clinics, home service businesses, real estate agents, beauty & wellness studios, and more across the US.",
  path: "/industries",
});

const ACCENTS = ["#FF5C35", "#2563EB", "#16A34A", "#9333EA"];
const SECONDARY_ACCENTS = ["#EA580C", "#0F766E", "#7C3AED", "#CA8A04", "#DB2777", "#0284C7"];

export default function IndustriesPage() {
  return (
    <>
      <section className="section pt-40 md:pt-48 pb-20 max-w-[1400px] mx-auto">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-5">Industries</p>
        <TextReveal
          text="We know your industry. We know your customers."
          className="font-display font-semibold text-4xl md:text-6xl max-w-3xl mb-6"
          as="h1"
        />
        <p className="text-base text-ink/50 max-w-xl leading-relaxed">
          We don't build generic websites. Every site we build is designed around how your specific type of customer thinks, searches, and makes decisions.
        </p>

        <div className="flex flex-wrap gap-3 mt-10">
          {INDUSTRIES.map((ind) => (
            <a
              key={ind.slug}
              href={`#${ind.slug}`}
              className="px-4 py-2 rounded-full text-sm font-medium border border-ink/12 hover:border-ink/30 transition-colors"
            >
              {ind.label}
            </a>
          ))}
        </div>
      </section>

      {INDUSTRIES.map((industry, i) => {
        const accent = ACCENTS[i];

        return (
          <section
            key={industry.slug}
            id={industry.slug}
            className="section max-w-[1400px] mx-auto border-t border-ink/8"
          >
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center text-base"
                    style={{ background: `${accent}15`, color: accent }}
                  >
                    {industry.emoji}
                  </span>
                  <span
                    className="text-sm font-medium uppercase tracking-widest"
                    style={{ color: accent }}
                  >
                    {industry.label}
                  </span>
                </div>

                <h2
                  className="font-display font-semibold text-3xl md:text-4xl mb-5"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  {industry.headline}
                </h2>
                <p className="text-base text-ink/55 leading-relaxed mb-8">
                  {industry.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:gap-3"
                  style={{ background: accent, color: "white" }}
                >
                  Get a quote for {industry.label.toLowerCase()} →
                </Link>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-ink/30 mb-5">What we build for you</p>
                <ul className="flex flex-col gap-0 divide-y divide-ink/8">
                  {industry.what.map((item, j) => (
                    <li key={j} className="flex items-center gap-4 py-4">
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0"
                        style={{ background: `${accent}15`, color: accent }}
                      >
                        {j + 1}
                      </span>
                      <span className="text-sm text-ink/70">{item}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className="mt-6 p-5 rounded-2xl"
                  style={{ background: `${accent}10`, border: `1px solid ${accent}20` }}
                >
                  <p className="text-sm font-medium mb-1" style={{ color: accent }}>
                    Why this matters
                  </p>
                  <p className="text-sm text-ink/60 leading-relaxed">
                    {i === 0 && "A patient who calls and gets no answer calls a competitor within 60 seconds. Our missed call text-back responds in 30."}
                    {i === 1 && "Emergency home service calls peak at evenings and weekends. Our automation captures leads when you can't pick up."}
                    {i === 2 && "87% of buyers begin their property search online. Your website is your first showing — it needs to perform."}
                    {i === 3 && "Rebooking an existing client costs 5x less than acquiring a new one. Automated rebooking sequences do this passively."}
                  </p>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="section max-w-[1400px] mx-auto pt-0">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">Other industries</p>
            <h2 className="font-display font-semibold text-3xl md:text-4xl" style={{ letterSpacing: "-0.03em" }}>
              Smaller cards for other businesses we serve
            </h2>
          </div>
          <p className="hidden md:block text-sm text-ink/45 max-w-md leading-relaxed">
            These aren't full deep dives, but they show the range of businesses we can shape for better trust, lead capture, and follow-up.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SECONDARY_INDUSTRIES.map((industry, index) => {
            const accent = SECONDARY_ACCENTS[index % SECONDARY_ACCENTS.length];

            return (
              <article
                key={industry.slug}
                className="rounded-3xl border border-ink/10 bg-white p-5 md:p-6 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <span
                    className="w-11 h-11 rounded-2xl flex items-center justify-center text-lg"
                    style={{ background: `${accent}14`, color: accent }}
                  >
                    {industry.emoji}
                  </span>
                  <span className="text-[11px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-ink/5 text-ink/45">
                    Other focus
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3" style={{ letterSpacing: "-0.02em" }}>
                  {industry.label}
                </h3>
                <p className="text-sm text-ink/60 leading-relaxed mb-5">{industry.headline}</p>

                <div className="rounded-2xl p-4 mb-5" style={{ background: `${accent}0d` }}>
                  <p className="text-sm text-ink/65 leading-relaxed">{industry.summary}</p>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {industry.what.map((item) => (
                    <li key={item} className="text-xs px-2.5 py-1 rounded-full bg-ink/5 text-ink/55">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <CTA />
    </>
  );
}
