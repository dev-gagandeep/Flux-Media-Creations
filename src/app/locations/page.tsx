import type { Metadata } from "next";
import Link from "next/link";
import { LOCATION_PAGES } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "Locations",
  description:
    "Areas we target and serve: Canada and India.",
  path: "/locations",
});

export default function LocationsPage() {
  return (
    <section className="section pt-40 md:pt-48 pb-20 max-w-[1200px] mx-auto">
      <p className="text-sm uppercase tracking-widest text-ink/30 mb-5">Locations</p>
      <h1 className="font-display font-semibold text-4xl md:text-6xl max-w-4xl mb-6" style={{ letterSpacing: "-0.03em" }}>
        Markets we currently target.
      </h1>
      <p className="text-base text-ink/55 max-w-2xl leading-relaxed mb-12">
        We build region-aware service pages and conversion systems for these focus geographies.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {LOCATION_PAGES.map((location) => (
          <article key={location.slug} className="rounded-3xl border border-ink/10 bg-white p-6">
            <p className="text-xs uppercase tracking-widest text-ink/35 mb-3">{location.short}</p>
            <h2 className="font-display text-2xl font-semibold mb-3" style={{ letterSpacing: "-0.02em" }}>
              {location.label}
            </h2>
            <p className="text-sm text-ink/60 leading-7 mb-5">{location.headline}</p>
            <Link
              href={`/locations/${location.slug}`}
              className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
              style={{ color: "var(--flux)" }}
            >
              View location page
              <span>→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
