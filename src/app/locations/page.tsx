import type { Metadata } from "next";
import Link from "next/link";
import { generateMeta } from "@/lib/seo";

const locationCards = [
  {
    label: "New York",
    short: "NY",
    href: "/web-development-ai-automation-new-york",
    headline: "WordPress web design and GoHighLevel automation for New York service businesses.",
    summary:
      "Built for clinics, home services, real estate professionals, consultants, agencies, and local brands competing in one of the fastest-moving markets.",
    focus: ["WordPress websites", "GoHighLevel CRM", "Local SEO", "Lead follow-up"],
  },
  {
    label: "New Jersey",
    short: "NJ",
    href: "/web-development-automation-new-jersey",
    headline: "Website and CRM systems for New Jersey clinics and service businesses.",
    summary:
      "A stronger digital foundation for New Jersey businesses that need clearer service pages, faster follow-up, and better local search visibility.",
    focus: ["Clinic websites", "Missed-call recovery", "Local pages", "CRM workflows"],
  },
  {
    label: "Canada",
    short: "CA",
    href: "/locations/canada",
    headline: "WordPress websites and GoHighLevel automation for Canadian service businesses.",
    summary:
      "WordPress websites, GoHighLevel automation, SEO structure, and CRM workflows for Canadian clinics, home services, real estate, and service brands.",
    focus: ["WordPress design", "GoHighLevel automation", "Local SEO", "CRM workflows"],
  },
  {
    label: "India",
    short: "IN",
    href: "/locations/india",
    headline: "WordPress websites and GoHighLevel automation for Indian service businesses.",
    summary:
      "WordPress websites, GoHighLevel automation, SEO structure, and workflow systems for Indian clinics, service businesses, agencies, and local brands.",
    focus: ["Mobile-first websites", "GoHighLevel workflows", "Local SEO", "WhatsApp-ready lead capture"],
  },
];

const services = [
  { label: "WordPress Website Design", href: "/services/wordpress-website-build" },
  { label: "GoHighLevel Automation", href: "/services/gohighlevel-automation" },
  { label: "Full Growth System", href: "/services/full-growth-system" },
  { label: "Search Visibility Engine", href: "/services/search-visibility-engine" },
  { label: "Healthcare SEO Structure", href: "/services/healthcare-seo-structure" },
  { label: "Airtable CRM & Business Hub", href: "/services/airtable-business-hub" },
  { label: "Make & Zapier Automation", href: "/services/make-zapier-automation" },
  { label: "Monthly Maintenance", href: "/services/monthly-maintenance" },
];

export const metadata: Metadata = generateMeta({
  title: "Locations",
  description:
    "WordPress web design, GoHighLevel automation, local SEO, CRM workflows, and lead generation systems for service businesses in New York, New Jersey, Canada, and India.",
  path: "/locations",
});

export default function LocationsPage() {
  return (
    <main>
      <section className="section pt-40 md:pt-48 pb-20 max-w-[1400px] mx-auto">
        <p className="text-sm uppercase tracking-widest text-flux font-semibold mb-5">Locations we serve</p>
        <div className="grid lg:grid-cols-[1fr_0.75fr] gap-10 items-end">
          <div>
            <h1 className="font-display font-semibold text-4xl md:text-6xl max-w-5xl mb-6" style={{ letterSpacing: "-0.035em" }}>
              WordPress Websites, GoHighLevel Automation and SEO Systems by Location
            </h1>
            <p className="text-base md:text-lg text-ink/60 max-w-3xl leading-8">
              Flux Media Creations builds connected website, CRM, automation, and search visibility systems for service businesses in New York, New Jersey, Canada, India, and remote markets worldwide.
            </p>
          </div>
          <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-soft">
            <p className="text-xs uppercase tracking-[0.2em] text-ink/35 mb-4">Best fit</p>
            <div className="flex flex-wrap gap-2">
              {["Healthcare clinics", "Home services", "Real estate", "Consultants", "Agencies", "Local brands"].map((item) => (
                <span key={item} className="rounded-full bg-blush px-3 py-2 text-xs font-medium text-ink/60">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-xs uppercase tracking-[0.22em] text-flux font-semibold mb-4">Markets</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight max-w-4xl mb-8" style={{ letterSpacing: "-0.03em" }}>
            Location Pages Built Around Real Lead Flow
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {locationCards.map((location) => (
              <article key={location.label} className="rounded-3xl border border-ink/10 bg-white p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-flux px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">{location.short}</span>
                  <Link href={location.href} className="text-sm font-semibold text-flux transition hover:opacity-70">
                    View page -&gt;
                  </Link>
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3" style={{ letterSpacing: "-0.02em" }}>
                  {location.label}
                </h3>
                <p className="text-base font-medium text-ink mb-3">{location.headline}</p>
                <p className="text-sm text-ink/60 leading-7 mb-5">{location.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {location.focus.map((item) => (
                    <span key={item} className="rounded-full bg-blush px-3 py-1 text-xs font-medium text-ink/60">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm bg-ink text-cream">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-xs uppercase tracking-[0.22em] text-flux font-semibold mb-4">What we build</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight max-w-4xl mb-8" style={{ letterSpacing: "-0.03em" }}>
            One System for Website Traffic, Lead Capture and Follow-Up
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              ["Website clarity", "Service pages, local pages, CTAs, trust sections, forms, and mobile layouts that make the next step clear."],
              ["CRM automation", "GoHighLevel pipelines, missed-call text back, SMS and email workflows, reminders, review requests, and lead tracking."],
              ["Search visibility", "SEO structure, internal links, schema, local relevance, FAQs, and answer-ready content for Google and AI search."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-3xl border border-cream/10 bg-cream/5 p-6">
                <h3 className="font-display text-xl font-semibold mb-3">{title}</h3>
                <p className="text-sm text-cream/65 leading-7">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-10">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-flux font-semibold mb-4">Related services</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-5" style={{ letterSpacing: "-0.03em" }}>
              Services That Support Every Location Page
            </h2>
            <p className="text-base text-ink/60 leading-8">
              Each market page connects back to the core services that help local and remote service businesses capture more demand and respond faster.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 self-start">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="rounded-full border border-ink/10 bg-white px-5 py-3 text-sm font-medium text-ink/70 transition hover:border-flux hover:text-flux">
                {service.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm bg-blush">
        <div className="max-w-[1000px] mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-flux font-semibold mb-4">Start here</p>
          <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight mb-6" style={{ letterSpacing: "-0.035em" }}>
            Need a Website and Lead System for Your Market?
          </h2>
          <p className="text-lg text-ink/60 leading-8 max-w-3xl mx-auto mb-8">
            We can review your current website, local search visibility, forms, CRM, and follow-up process, then recommend the cleanest path to more qualified leads.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-3 rounded-full bg-flux px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white">
              Get a Growth Review <span aria-hidden="true">-&gt;</span>
            </Link>
            <Link href="/work" className="inline-flex items-center gap-3 rounded-full border border-ink/15 px-6 py-4 text-sm font-semibold uppercase tracking-wide text-ink">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
