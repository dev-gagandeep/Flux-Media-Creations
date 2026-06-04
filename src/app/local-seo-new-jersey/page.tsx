import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  absoluteTitle: "Local SEO Services New Jersey | Google Maps & AI Search",
  description:
    "Local SEO services for New Jersey businesses that need stronger Google Maps visibility, Google Business Profile optimization, review automation, citations, and AI search visibility.",
  path: "/local-seo-new-jersey",
});

const services = [
  ["Google Business Profile Optimization", "Categories, services, descriptions, photos, Q&A, posts, and appointment links tuned for New Jersey service-area searches."],
  ["On-Page and Technical SEO", "Title tags, metadata, headings, schema, page speed signals, internal links, mobile experience, and local service page structure."],
  ["Local Citation Building", "NAP cleanup and local citation work across trusted directories so Google can verify your business location and service area."],
  ["Review Automation and Management", "SMS and email review request workflows that help you collect stronger local proof without adding manual front-desk work."],
  ["AI Search Visibility", "Entity clarity, FAQ structure, schema, and service descriptions built for Google AI Overviews, ChatGPT, Perplexity, and Gemini."],
  ["Analytics and Local Rank Tracking", "Clear reporting on keyword movement, Map Pack positions, website traffic, calls, forms, and lead quality."],
];

const industries = [
  "Dental clinics",
  "Med spas",
  "Chiropractors",
  "HVAC companies",
  "Roofers and contractors",
  "Plumbers and electricians",
  "Law firms",
  "Real estate agents",
  "Fitness studios",
  "Salons and spas",
  "Healthcare clinics",
  "Coaches and consultants",
];

const stats = [
  ["Google Maps", "Compete for the local Map Pack where high-intent searches turn into calls."],
  ["GBP + reviews", "Strengthen the local signals customers see before they visit your website."],
  ["NJ service areas", "Target Newark, Jersey City, Bergen County, Essex County, Middlesex County, and statewide markets."],
  ["AI search", "Structure your business so answer engines can understand your services, locations, and proof."],
];

const process = [
  ["01", "Local SEO audit", "We review your website, Google Business Profile, citations, reviews, technical SEO, service pages, and competitor positions."],
  ["02", "Strategy and keyword map", "We map your services to local intent across target cities, counties, and high-value New Jersey searches."],
  ["03", "Website and GBP optimization", "We improve service pages, local landing pages, metadata, schema, internal links, and Google Business Profile fields."],
  ["04", "Citations and review system", "We clean up business listings, strengthen NAP consistency, and set up review request automation where it fits."],
  ["05", "AI visibility setup", "We add answer-friendly structure so AI platforms can better understand your business, services, and service areas."],
  ["06", "Monthly growth and reporting", "You get plain-English reporting on visibility, leads, rankings, and the next highest-value improvements."],
];

const locations = [
  "Newark",
  "Jersey City",
  "Paterson",
  "Hoboken",
  "Trenton",
  "Camden",
  "Paramus",
  "Hackensack",
  "Morristown",
  "Montclair",
  "Bergen County",
  "Essex County",
  "Morris County",
  "Middlesex County",
  "Hudson County",
  "Union County",
  "Monmouth County",
  "Ocean County",
];

const faqs = [
  ["What is local SEO and how is it different from regular SEO?", "Local SEO focuses on helping a business show up for nearby customers, especially in Google Maps, the local Map Pack, and location-based searches. Traditional SEO is broader and may not include Google Business Profile, citations, reviews, or service-area signals."],
  ["How long does local SEO take to show results in New Jersey?", "Google Business Profile and citation improvements can start showing movement within 30 to 60 days. Strong organic and Map Pack gains usually build over 3 to 6 months, depending on competition, website condition, reviews, and location."],
  ["Can local SEO help my business show up in ChatGPT and Google AI?", "Yes. AI search systems often depend on clear business information, structured content, reviews, local entities, and credible source pages. We structure your website and local signals so AI platforms can better understand and reference your business."],
  ["Do I need local SEO if I already have a website?", "Yes, if your customers search locally. A website gives you a destination, but local SEO helps customers find that destination through Google Maps, near-me searches, service-area pages, and AI-powered answers."],
  ["What New Jersey areas do you serve?", "We serve businesses across New Jersey, including Newark, Jersey City, Paterson, Hoboken, Trenton, Camden, Bergen County, Essex County, Middlesex County, Morris County, Hudson County, and nearby service areas."],
  ["How much does local SEO cost for a New Jersey business?", "Pricing depends on your competition, number of locations, citation condition, review system, technical SEO needs, and content scope. Book a call and we will give you a clear quote based on your market."],
];

const internalLinks = [
  ["Search Visibility Engine", "/services/search-visibility-engine"],
  ["New Jersey Web Development and Automation", "/web-development-automation-new-jersey"],
  ["GoHighLevel Automation", "/services/gohighlevel-automation"],
  ["WordPress Website Build", "/services/wordpress-website-build"],
  ["Industries We Serve", "/industries"],
  ["Book a Strategy Call", "/contact"],
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local SEO Services New Jersey",
  provider: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
  },
  serviceType: "Local SEO, Google Business Profile Optimization, Google Maps SEO, AI Search Visibility",
  areaServed: {
    "@type": "State",
    name: "New Jersey",
  },
  description:
    "Flux Media Creations provides local SEO services for New Jersey businesses, including Google Business Profile optimization, citations, reviews, local landing pages, technical SEO, schema, and AI search visibility.",
  url: `${SITE.url}/local-seo-new-jersey`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-flux">{children}</p>;
}

function Section({
  eyebrow,
  title,
  children,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <section className={`section-sm ${dark ? "bg-ink text-cream" : ""}`}>
      <div className="mx-auto max-w-[1400px]">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mb-8 max-w-4xl font-display text-3xl font-semibold leading-tight md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

export default function LocalSeoNewJerseyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main>
        <section className="section mx-auto max-w-[1400px] pb-20 pt-40 md:pt-48">
          <div className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
            <div>
              <Eyebrow>Local SEO Services - New Jersey</Eyebrow>
              <h1 className="mb-6 max-w-5xl font-display text-4xl font-semibold leading-tight md:text-6xl" style={{ letterSpacing: "-0.035em" }}>
                Get your NJ business found on Google Maps, local search, and AI answers
              </h1>
              <p className="mb-5 max-w-3xl text-lg leading-8 text-ink/60 md:text-xl">
                Flux Media Creations helps New Jersey service businesses improve local visibility with Google Business Profile optimization, service-area SEO, citation cleanup, review automation, schema, and AI search structure.
              </p>
              <p className="mb-8 max-w-3xl text-base leading-8 text-ink/55 md:text-lg">
                Built for clinics, contractors, home service companies, law firms, salons, real estate professionals, and local brands that need qualified calls, forms, and booked appointments.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-3 rounded-full bg-flux px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(255,88,51,0.22)] transition hover:-translate-y-0.5">
                  Book a Free Local SEO Call <span aria-hidden="true">-&gt;</span>
                </Link>
                <Link href="/services/search-visibility-engine" className="inline-flex items-center gap-3 rounded-full border border-ink/15 px-6 py-4 text-sm font-semibold uppercase tracking-wide text-ink transition hover:border-flux hover:text-flux">
                  See Full SEO Service
                </Link>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft">
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-ink/35">Local visibility stack</p>
              <div className="space-y-4">
                {[
                  ["Customer searches", "They search for a service in Newark, Jersey City, Bergen County, or another NJ market."],
                  ["Your business appears", "Your Google profile, service pages, reviews, and local signals help you compete for the Map Pack."],
                  ["Lead gets captured", "Website forms, booking links, calls, and GoHighLevel workflows help route the inquiry."],
                  ["Follow-up happens", "Automation can confirm, remind, recover missed calls, and request reviews after the job or appointment."],
                ].map(([title, body], index) => (
                  <div key={title} className="flex gap-4 rounded-2xl border border-ink/10 bg-cream p-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-flux text-sm font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2 className="font-display text-lg font-semibold">{title}</h2>
                      <p className="mt-1 text-sm leading-6 text-ink/55">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="border-y border-ink/10 bg-white px-6 py-6 md:px-10">
          <div className="mx-auto flex max-w-[1400px] flex-wrap justify-center gap-3">
            {["Google Business Profile", "Map Pack SEO", "AI Search Visibility", "Review Automation", "Local Citations", "GoHighLevel CRM"].map((item) => (
              <span key={item} className="rounded-full bg-blush px-4 py-2 text-sm font-medium text-ink/70">
                {item}
              </span>
            ))}
          </div>
        </section>

        <Section eyebrow="Why New Jersey is competitive" title="New Jersey local search is dense, fast, and unforgiving.">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-5 text-lg leading-8 text-ink/60">
              <p>
                New Jersey businesses compete across dense city corridors, suburban service areas, and nearby New York and Philadelphia markets. For many searches, only three businesses get the prime Google Map Pack positions.
              </p>
              <p>
                A stronger local SEO system connects your Google Business Profile, website service pages, location relevance, review strategy, citations, internal links, and follow-up path into one clear customer journey.
              </p>
              <p>
                You do not need random blog posts. You need a local search structure that tells Google, AI engines, and customers exactly what you do, where you do it, and why you are a credible choice.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {stats.map(([title, body]) => (
                <div key={title} className="rounded-3xl border border-ink/10 bg-white p-6">
                  <h3 className="font-display text-2xl font-semibold text-flux">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/60">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section eyebrow="What is included" title="Everything your NJ business needs to compete in local search.">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([title, body]) => (
              <div key={title} className="rounded-3xl border border-ink/10 bg-white p-6">
                <h3 className="font-display text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/60">{body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Who this is for" title="Built for New Jersey businesses that rely on local customers.">
          <div className="flex flex-wrap gap-3">
            {industries.map((industry) => (
              <Link key={industry} href="/industries" className="rounded-full border border-ink/10 bg-white px-5 py-3 text-sm font-medium text-ink/70 transition hover:border-flux hover:text-flux">
                {industry}
              </Link>
            ))}
          </div>
        </Section>

        <Section eyebrow="Local SEO vs traditional SEO" title="What NJ businesses actually need from local SEO.">
          <div className="overflow-x-auto rounded-3xl border border-ink/10 bg-white">
            <table className="w-full min-w-[720px] border-collapse">
              <thead className="bg-blush">
                <tr>
                  <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.16em] text-ink/45">Coverage</th>
                  <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.16em] text-ink/45">Local SEO</th>
                  <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.16em] text-ink/45">Traditional SEO</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Google Map Pack rankings", "Yes", "No"],
                  ["Google Business Profile optimization", "Yes", "No"],
                  ["Near-me visibility", "Yes", "No"],
                  ["Local citation building", "Yes", "No"],
                  ["Organic website rankings", "Yes", "Yes"],
                  ["Review automation", "Yes", "No"],
                  ["AI search structure", "Yes", "Limited"],
                  ["LocalBusiness schema", "Yes", "Sometimes"],
                ].map(([feature, local, traditional]) => (
                  <tr key={feature} className="border-t border-ink/8">
                    <td className="px-5 py-4 text-sm font-medium text-ink/75">{feature}</td>
                    <td className="px-5 py-4 text-sm font-semibold text-flux">{local}</td>
                    <td className="px-5 py-4 text-sm text-ink/45">{traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section eyebrow="Process" title="How we improve local SEO visibility for your New Jersey market.">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {process.map(([number, title, body]) => (
              <div key={number} className="rounded-3xl border border-ink/10 bg-white p-6">
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-flux text-sm font-bold text-white">{number}</span>
                <h3 className="font-display text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/60">{body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="AI search visibility" title="Your business should be understandable to Google and answer engines." dark>
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="space-y-5 text-lg leading-8 text-cream/65">
              <p>
                Customers increasingly ask AI tools for service recommendations, comparisons, and local options. Your website needs more than keywords. It needs clear entities, service definitions, FAQs, schema, reviews, location context, and internal links.
              </p>
              <p>
                We build local SEO pages so Google, ChatGPT, Perplexity, Gemini, and AI Overviews can better understand your business and connect it to the right New Jersey search intent.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {["FAQ schema", "LocalBusiness schema", "Service-area clarity", "Review signals", "Entity-based content", "Internal linking", "Google Business Profile signals", "Answer-friendly sections"].map((item) => (
                <div key={item} className="rounded-2xl border border-cream/10 bg-cream/5 px-4 py-3 text-sm text-cream/75">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section eyebrow="Service areas" title="Serving businesses across New Jersey.">
          <div className="flex flex-wrap gap-3">
            {locations.map((location) => (
              <span key={location} className="rounded-full bg-white px-5 py-3 text-sm font-medium text-ink/70">
                {location}
              </span>
            ))}
          </div>
          <p className="mt-8 max-w-3xl leading-8 text-ink/60">
            For a broader New Jersey website, SEO, and automation build, visit our{" "}
            <Link href="/web-development-automation-new-jersey" className="font-medium text-flux hover:underline">
              New Jersey web development and automation page
            </Link>
            .
          </p>
        </Section>

        <Section eyebrow="Internal links" title="Explore related Flux services.">
          <div className="flex flex-wrap gap-3">
            {internalLinks.map(([label, href]) => (
              <Link key={href} href={href} className="rounded-full border border-ink/10 bg-white px-5 py-3 text-sm font-medium text-ink/70 transition hover:border-flux hover:text-flux">
                {label}
              </Link>
            ))}
          </div>
        </Section>

        <Section eyebrow="FAQs" title="Frequently asked questions about local SEO in New Jersey.">
          <div className="max-w-4xl space-y-3">
            {faqs.map(([q, a]) => (
              <details key={q} className="group rounded-2xl border border-ink/10 bg-white p-6">
                <summary className="cursor-pointer list-none font-display text-lg font-semibold group-open:text-flux">{q}</summary>
                <p className="mt-4 text-sm leading-7 text-ink/60">{a}</p>
              </details>
            ))}
          </div>
        </Section>

        <section className="section-sm bg-blush">
          <div className="mx-auto max-w-[1000px] text-center">
            <Eyebrow>Ready to improve local visibility?</Eyebrow>
            <h2 className="mb-6 font-display text-4xl font-semibold leading-tight md:text-6xl" style={{ letterSpacing: "-0.035em" }}>
              Start with a clear local SEO roadmap for your NJ market.
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-ink/60">
              Book a strategy call and we will review your current visibility, Google profile, website structure, local competition, and next best opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-3 rounded-full bg-flux px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white">
                Book a Free Strategy Call <span aria-hidden="true">-&gt;</span>
              </Link>
              <Link href="/services/gohighlevel-automation" className="inline-flex items-center gap-3 rounded-full border border-ink/15 px-6 py-4 text-sm font-semibold uppercase tracking-wide text-ink">
                Connect Leads to CRM
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
