"use client";

import Link from "next/link";
import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbdedvgb";

const setupSteps = [
  ["01", "Business claim and verification", "We claim and verify your Google Business Profile through the right method for your business: phone, postcard, video, or instant verification."],
  ["02", "Business category selection", "We research your New Jersey market and choose the primary and secondary categories that match what top-ranking competitors use."],
  ["03", "Complete profile build-out", "We fill business description, services, products, attributes, hours, holiday hours, phone, website, and booking links so the profile is not left half-built."],
  ["04", "Keyword-rich business description", "We write a clear 750-character description that tells Google and customers what you do, where you do it, and why you are a credible local choice."],
  ["05", "Service and product listings", "We add each service with useful descriptions so Google can connect your listing to the local searches that matter."],
  ["06", "Service area and location configuration", "We configure your service area, NJ cities and counties, and map details so Google understands where your business should appear."],
  ["07", "Photo and visual setup", "We add logo, cover image, and business photos so your listing looks active, trustworthy, and ready for Map Pack visitors."],
  ["08", "AI search visibility foundation", "We structure categories, services, descriptions, and attributes so AI systems can understand and summarize your local business more confidently."],
];

const mistakes = [
  ["Wrong business category", "We research and assign the exact category your top New Jersey competitors use to rank."],
  ["Unverified listing", "We complete Google verification so the listing is live, protected, and under your control."],
  ["Empty service listings", "We build every service with keyword-rich descriptions Google can use for local relevance."],
  ["No photos uploaded", "We add business photos across the core GBP photo areas so the profile does not look abandoned."],
  ["Incorrect service area", "We configure the listing around the New Jersey cities and counties you actually serve."],
  ["Weak business description", "We write a local, conversion-focused description that fits GBP rules and supports search intent."],
];

const industries = [
  "Dental clinics",
  "Med spas",
  "HVAC companies",
  "Roofers and contractors",
  "Plumbers",
  "Electricians",
  "Law firms",
  "Real estate agents",
  "Chiropractors",
  "Salons and spas",
  "Fitness studios",
  "Coaches and consultants",
];

const cities = [
  "Newark",
  "Jersey City",
  "Paterson",
  "Hoboken",
  "Trenton",
  "Camden",
  "Paramus",
  "Hackensack",
  "Montclair",
  "Morristown",
  "Edison",
  "New Brunswick",
  "Bergen County",
  "Essex County",
  "Morris County",
  "Middlesex County",
  "Hudson County",
  "Monmouth County",
];

const relatedLinks = [
  ["Local SEO Services New Jersey", "/local-seo-new-jersey"],
  ["Google Business Profile Optimization NJ", "/local-seo-new-jersey/gbp-optimization-new-jersey"],
  ["Search Visibility Engine", "/services/search-visibility-engine"],
  ["New Jersey Web Development and Automation", "/web-development-automation-new-jersey"],
  ["GoHighLevel Automation", "/services/gohighlevel-automation"],
  ["Book a Strategy Call", "/contact"],
];

export default function GBPSetupNJClient() {
  const [form, setForm] = useState({ name: "", business: "", city: "", phone: "", email: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeStep, setActiveStep] = useState(0);

  const submitSetupRequest = async () => {
    if (!form.name || !form.business || !form.city || !form.phone || !form.email) {
      setError("Please fill out all fields.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          source: "local-seo-new-jersey/gbp-optimization-new-jersey/google-business-profile-setup-new-jersey",
          submittedAt: new Date().toISOString(),
          name: form.name,
          business: form.business,
          city: form.city,
          phone: form.phone,
          email: form.email,
          _subject: `New GBP setup request from ${form.name} - ${form.business}`,
        }),
      });

      if (response.ok) {
        setSent(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <section className="section mx-auto max-w-[1400px] pb-20 pt-40 md:pt-48">
        <div className="mb-8 text-sm text-ink/45">
          <Link href="/" className="hover:text-flux">Home</Link>
          <span> / </span>
          <Link href="/local-seo-new-jersey" className="hover:text-flux">Local SEO New Jersey</Link>
          <span> / Google Business Profile Setup</span>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-flux">Google Business Profile Setup - New Jersey</p>
            <h1 className="mb-6 max-w-5xl font-display text-4xl font-semibold leading-tight md:text-6xl" style={{ letterSpacing: "-0.035em" }}>
              Get your NJ business on Google Maps from day one
            </h1>
            <p className="mb-5 max-w-3xl text-lg leading-8 text-ink/60 md:text-xl">
              Flux Media Creations sets up your Google Business Profile from scratch: claim, verification, categories, services, photos, service areas, and AI-ready local search signals.
            </p>
            <p className="mb-8 max-w-3xl text-base leading-8 text-ink/55 md:text-lg">
              Built for New Jersey businesses starting from zero, with no listing, no verification, or no clear path to showing up in Google Maps.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#gbp-setup-form" className="inline-flex items-center gap-3 rounded-full bg-flux px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(255,88,51,0.22)] transition hover:-translate-y-0.5">
                Set Up My GBP Listing <span aria-hidden="true">-&gt;</span>
              </Link>
              <Link href="/local-seo-new-jersey/gbp-optimization-new-jersey" className="inline-flex items-center gap-3 rounded-full border border-ink/15 px-6 py-4 text-sm font-semibold uppercase tracking-wide text-ink transition hover:border-flux hover:text-flux">
                Need GBP Optimization?
              </Link>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs uppercase tracking-[0.2em] text-ink/35">GBP setup checklist</p>
              <span className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                Done for you
              </span>
            </div>
            <div className="space-y-3">
              {[
                "Claim and verify your Google listing",
                "Choose the right primary and secondary categories",
                "Write a keyword-rich business description",
                "Add services with optimized descriptions",
                "Configure New Jersey service areas",
                "Add photos, attributes, hours, and links",
                "Structure the listing for AI search visibility",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-cream p-4 text-sm leading-6 text-ink/65">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-flux text-xs font-bold text-white">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white px-6 py-6 md:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-wrap justify-center gap-3">
          {["GBP Claim", "Google Verification", "Category Research", "Service Listings", "Photo Setup", "AI Search Signals"].map((item) => (
            <span key={item} className="rounded-full bg-blush px-4 py-2 text-sm font-medium text-ink/70">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section-sm">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-flux">Why setup matters</p>
            <h2 className="mb-6 max-w-4xl font-display text-3xl font-semibold leading-tight md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
              Most NJ businesses have a Google listing. Almost none have it set up correctly.
            </h2>
            <div className="space-y-5 text-lg leading-8 text-ink/60">
              <p>
                Creating a Google Business Profile is quick. Setting it up in a way that can actually support local rankings in New Jersey takes category research, service-area clarity, complete profile fields, and a conversion path.
              </p>
              <p>
                If you already have a profile but it is incomplete or inactive, our{" "}
                <Link href="/local-seo-new-jersey/gbp-optimization-new-jersey" className="font-medium text-flux hover:underline">
                  Google Business Profile optimization service
                </Link>{" "}
                is the next step after setup.
              </p>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {mistakes.map(([mistake, fix]) => (
              <div key={mistake} className="rounded-3xl border border-ink/10 bg-white p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-red-500">Common mistake</p>
                <h3 className="font-display text-xl font-semibold">{mistake}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/60">{fix}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm bg-white" id="setup">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-flux">What is included</p>
          <h2 className="mb-8 max-w-4xl font-display text-3xl font-semibold leading-tight md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            Every step of your Google Business Profile setup, done right for New Jersey.
          </h2>
          <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
            <div className="grid gap-3">
              {setupSteps.map(([num, title], index) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition ${
                    activeStep === index ? "border-flux bg-blush text-flux" : "border-ink/10 bg-cream text-ink hover:border-flux/40"
                  }`}
                >
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${activeStep === index ? "bg-flux text-white" : "bg-white text-ink/55"}`}>
                    {num}
                  </span>
                  <span className="text-sm font-semibold">{title}</span>
                </button>
              ))}
            </div>
            <article className="rounded-3xl border border-ink/10 bg-cream p-8">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-flux text-sm font-bold text-white">
                {setupSteps[activeStep][0]}
              </span>
              <h3 className="font-display text-3xl font-semibold leading-tight" style={{ letterSpacing: "-0.03em" }}>
                {setupSteps[activeStep][1]}
              </h3>
              <p className="mt-5 max-w-3xl text-base leading-8 text-ink/60">
                {setupSteps[activeStep][2]}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-flux">Who this is for</p>
          <h2 className="mb-8 max-w-4xl font-display text-3xl font-semibold leading-tight md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            GBP setup for every New Jersey local business type.
          </h2>
          <div className="flex flex-wrap gap-3">
            {industries.map((industry) => (
              <Link key={industry} href="/industries" className="rounded-full border border-ink/10 bg-white px-5 py-3 text-sm font-medium text-ink/70 transition hover:border-flux hover:text-flux">
                {industry}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm bg-ink text-cream">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-flux">AI search in 2026</p>
            <h2 className="mb-6 max-w-4xl font-display text-3xl font-semibold leading-tight md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
              We set up your GBP to support ChatGPT visibility, not just Google Maps.
            </h2>
            <div className="space-y-5 text-lg leading-8 text-cream/65">
              <p>
                AI assistants and Google AI Overviews need structured local business data. A properly built GBP gives them categories, services, descriptions, attributes, and location signals they can understand.
              </p>
              <p>
                We also connect GBP setup back to your broader{" "}
                <Link href="/local-seo-new-jersey" className="font-medium text-flux hover:underline">
                  New Jersey local SEO system
                </Link>{" "}
                so your listing, website, citations, and reviews tell one consistent story.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              ["Google AI Overviews", "Best HVAC company in Bergen County NJ?", "Structured GBP data"],
              ["ChatGPT", "Who does Google Business Profile setup in NJ?", "Clear service entity"],
              ["Perplexity", "Top rated dentist near Newark NJ", "Local profile signals"],
              ["Google Maps", "Contractor near me Jersey City NJ", "Map Pack readiness"],
            ].map(([platform, query, status]) => (
              <div key={platform} className="rounded-2xl border border-cream/10 bg-cream/5 p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-cream/35">{platform}</p>
                  <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-300">{status}</span>
                </div>
                <p className="mt-3 text-sm italic leading-7 text-cream/75">&quot;{query}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-flux">Service areas</p>
          <h2 className="mb-8 max-w-4xl font-display text-3xl font-semibold leading-tight md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            GBP setup for businesses across New Jersey.
          </h2>
          <div className="flex flex-wrap gap-3">
            {cities.map((city) => (
              <span key={city} className="rounded-full bg-white px-5 py-3 text-sm font-medium text-ink/70">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm bg-white">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-flux">Related services</p>
          <h2 className="mb-8 max-w-4xl font-display text-3xl font-semibold leading-tight md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            Connect your setup page to the rest of your local search system.
          </h2>
          <div className="flex flex-wrap gap-3">
            {relatedLinks.map(([label, href]) => (
              <Link key={href} href={href} className="rounded-full border border-ink/10 bg-white px-5 py-3 text-sm font-medium text-ink/70 transition hover:border-flux hover:text-flux">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="gbp-setup-form" className="section-sm bg-blush scroll-mt-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-flux">Start your GBP setup</p>
            <h2 className="mb-6 font-display text-4xl font-semibold leading-tight md:text-6xl" style={{ letterSpacing: "-0.035em" }}>
              Get your NJ Google Business Profile set up correctly.
            </h2>
            <div className="space-y-5 text-lg leading-8 text-ink/60">
              <p>
                Send your business details and we will reply with the next steps for claiming, verifying, and building your Google Business Profile.
              </p>
              <p>
                If your listing already exists, we will point you toward optimization instead of setup.
              </p>
            </div>
          </div>
          <div className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft">
            {sent ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-2xl font-bold text-green-700">✓</div>
                <h3 className="font-display text-2xl font-semibold">We&apos;ll be in touch.</h3>
                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-ink/60">
                  Expect a reply within 1 business day with the next steps for your Google Business Profile setup.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-2xl font-semibold">Set up my Google Business Profile</h3>
                  <p className="mt-2 text-sm leading-7 text-ink/55">All fields are required.</p>
                </div>
                <input required className="w-full rounded-2xl border border-ink/10 bg-cream px-4 py-4 text-sm outline-none transition focus:border-flux" placeholder="Your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <input required className="w-full rounded-2xl border border-ink/10 bg-cream px-4 py-4 text-sm outline-none transition focus:border-flux" placeholder="Business type (e.g. plumber, med spa)" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} />
                <input required className="w-full rounded-2xl border border-ink/10 bg-cream px-4 py-4 text-sm outline-none transition focus:border-flux" placeholder="City or county in New Jersey" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
                <input required className="w-full rounded-2xl border border-ink/10 bg-cream px-4 py-4 text-sm outline-none transition focus:border-flux" placeholder="Best phone number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                <input required type="email" className="w-full rounded-2xl border border-ink/10 bg-cream px-4 py-4 text-sm outline-none transition focus:border-flux" placeholder="Email address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                {error && <p className="text-sm font-medium text-red-600">{error}</p>}
                <button type="button" onClick={submitSetupRequest} disabled={loading} className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-flux px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70">
                  {loading ? "Sending..." : "Set Up My Google Listing"}
                </button>
                <p className="text-center text-xs leading-6 text-ink/45">No spam. Just the next step for your GBP setup.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
