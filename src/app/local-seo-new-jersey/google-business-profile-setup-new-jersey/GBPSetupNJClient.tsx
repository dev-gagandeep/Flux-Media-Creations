"use client";

import ContactForm from "@/app/contact/ContactForm";
import Link from "next/link";
import { useState } from "react";

const setupSteps = [
  ["01", "Business claim and verification", "Direct answer: business claim and verification is the first and most critical step of Google Business Profile setup. We claim your listing through the right method for your business type, then complete phone, video, postcard, or instant verification so the profile is live, protected, and under your control."],
  ["02", "Business category selection", "Direct answer: choosing the wrong primary category is one of the fastest ways to disappear from Map Pack results. We research the categories used by top-ranking New Jersey competitors, then assign the primary and secondary categories Google uses to match your listing to local search intent."],
  ["03", "Complete profile build-out", "Direct answer: a fully completed Google Business Profile gives Google more relevance signals than a partially filled one. We complete business name, address, phone, website, hours, holiday hours, attributes, accessibility information, opening date, and booking links."],
  ["04", "Keyword-rich business description", "Direct answer: your 750-character GBP description helps Google and AI engines understand what you do, where you do it, and who you serve. We write it with New Jersey service-area language, primary service keywords, and a clear customer benefit while staying inside Google's content guidelines."],
  ["05", "Service and product listings", "Direct answer: GBP service listings are a local ranking signal most small businesses leave empty. We build every service with a clear name, category, and keyword-informed description so Google can match your profile to specific searches like emergency HVAC repair Bergen County."],
  ["06", "Service area and location configuration", "Direct answer: incorrect service areas stop service businesses from appearing in searches for cities they actually serve. We configure your NJ city and county coverage, service-area settings, radius, and location details so Google understands where to show your business."],
  ["07", "Photo and visual setup", "Direct answer: complete, active photo profiles earn more trust from Google and customers. We add a logo, cover photo, and business photos across the core GBP categories, including team, work, location, and service photos."],
  ["08", "AI search visibility foundation", "Direct answer: Google AI Overviews, ChatGPT, and Perplexity can use GBP data when answering local search questions. We structure categories, descriptions, services, and attributes so AI systems can extract and cite your business more confidently."],
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
  ["Local SEO for Dentists NJ", "/local-seo-new-jersey/local-seo-dentists-new-jersey"],
  ["Local SEO for HVAC Companies NJ", "/local-seo-new-jersey/local-seo-hvac-new-jersey"],
  ["Search Visibility Engine", "/services/search-visibility-engine"],
  ["New Jersey Web Development and Automation", "/web-development-automation-new-jersey"],
  ["GoHighLevel Automation", "/services/gohighlevel-automation"],
  ["Get your free NJ website audit", "/contact"],
];

const setupFaqs = [
  ["What is Google Business Profile setup?", "Google Business Profile setup is the process of claiming, verifying, and fully building your free Google listing so your New Jersey business appears in Google Maps, local search results, and AI-generated answers. It includes categories, service listings, photos, service areas, and AI visibility configuration."],
  ["How long does Google Business Profile setup take in New Jersey?", "GBP setup is typically complete within 3 to 5 business days. Google's verification process can add 1 to 14 days depending on the method available to your business. Most NJ businesses begin seeing Map Pack improvements within 30 to 60 days after full setup."],
  ["Can I set up a Google Business Profile myself?", "Yes, but a basic listing is not the same as a ranking-ready profile. Common DIY mistakes include wrong categories, empty services, no photos, and incorrect service areas. Professional setup configures each ranking signal correctly from the start."],
  ["What is the difference between GBP setup and GBP optimization?", "Setup is the foundation: claim, verification, and complete build-out. Optimization is the ongoing work: weekly posts, photos, reviews, Q&A, and performance tracking. Once setup is complete, our Google Business Profile optimization service handles the monthly growth work."],
  ["Can a New Jersey service-area business get a GBP without a physical address?", "Yes. Service-area businesses such as contractors, HVAC companies, plumbers, and mobile service providers can use GBP without showing a home address. We configure the listing around the New Jersey cities and counties you serve."],
  ["Will my GBP listing help with ChatGPT and Google AI Overviews?", "Yes. Google AI Overviews and AI assistants retrieve local business data from GBP listings, citations, and structured content. A correctly set-up profile with complete services, attributes, and category data is the foundation for AI-generated local answers."],
  ["How much does Google Business Profile setup cost in New Jersey?", "Google Business Profile itself is free. Professional setup pricing depends on your business type, market competition, and scope. Flux Media Creations provides a clear quote after reviewing your New Jersey business situation."],
];

export default function GBPSetupNJClient() {
  const [activeStep, setActiveStep] = useState(0);

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
              Get your New Jersey business on Google Maps - set up correctly from day one.
            </h1>
            <p className="mb-5 max-w-3xl rounded-3xl border border-flux/20 bg-blush p-5 text-base leading-8 text-ink/70">
              <strong>Google Business Profile setup</strong> is the process of claiming, verifying, and fully building your free Google listing so your New Jersey business appears in Google Maps, the local Map Pack, and AI-generated search answers. Flux Media Creations handles complete GBP setup for local businesses across NJ, from first claim through full AI search visibility configuration.
            </p>
            <p className="mb-5 max-w-3xl text-lg leading-8 text-ink/60 md:text-xl">
              Flux Media Creations sets up your Google Business Profile from scratch: claim, verification, categories, services, photos, service areas, and AI-ready local search signals so NJ customers can find and contact you directly from Google.
            </p>
            <p className="mb-8 max-w-3xl text-base leading-8 text-ink/55 md:text-lg">
              Built for New Jersey small businesses starting from zero: no listing, no verification, no idea where to begin. We handle every step so your profile is live, complete, and set up to rank.
            </p>
            <div className="mb-8 flex flex-wrap gap-4 text-sm text-ink/55">
              <Link href="/about" className="font-medium text-flux hover:underline">
                Written by Gagan Deep, founder of Flux Media Creations and NJ local SEO specialist
              </Link>
              <span>Last updated: June 2026</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="#gbp-setup-form" className="inline-flex items-center gap-3 rounded-full bg-flux px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(255,88,51,0.22)] transition hover:-translate-y-0.5">
                Get your free NJ website audit <span aria-hidden="true">-&gt;</span>
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
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["30-60 days", "Average timeline for Map Pack improvements after full GBP setup (BrightLocal, 2025)"],
            ["76%", "Share of local search clicks going to the top 3 Map Pack positions (Google, 2025)"],
            ["100%", "Profile completion standard on every Flux Media setup"],
          ].map(([stat, label]) => (
            <div key={stat} className="rounded-3xl border border-ink/10 bg-white p-6">
              <p className="font-display text-4xl font-semibold text-flux">{stat}</p>
              <p className="mt-3 text-sm leading-7 text-ink/60">{label}</p>
            </div>
          ))}
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

      <section className="section-sm bg-white">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-flux">Direct answer</p>
          <h2 className="mb-8 max-w-4xl font-display text-3xl font-semibold leading-tight md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            What is Google Business Profile setup, and why do NJ businesses need it?
          </h2>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-5 text-lg leading-8 text-ink/60">
              <p>
                Google Business Profile, previously called Google My Business, is the free listing that places your business on Google Maps, in Google Search local results, and increasingly in AI-generated answers from Google AI Overviews, ChatGPT, and Perplexity.
              </p>
              <p>
                For New Jersey small businesses, setup is not optional. When a local customer searches &quot;HVAC repair near me in Bergen County&quot; or &quot;best dentist in Newark NJ,&quot; Google shows three business listings at the top of the page before most websites. Those three spots are the Google Map Pack.
              </p>
              <p>
                Most NJ businesses have a listing that was auto-generated by Google. These listings are often unclaimed, incomplete, and wrong. Professional GBP setup starts from the correct foundation and builds every signal Google needs to rank your business in local search.
              </p>
            </div>
            <div className="rounded-3xl border border-ink/10 bg-cream p-7">
              <h3 className="font-display text-2xl font-semibold">A ranking-ready GBP listing is:</h3>
              <div className="mt-5 space-y-3">
                {[
                  "Claimed and verified so only you control it",
                  "Built with the correct categories Google uses to match local searches",
                  "Populated with services, descriptions, photos, and location signals",
                  "Structured so Google AI Overviews and ChatGPT can cite the business",
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-7 text-ink/65">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-flux text-[10px] font-bold text-white">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
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
                New Jersey is one of the most competitive local search markets in the United States. With 9.3 million residents across Newark, Jersey City, Paterson, Hoboken, Bergen County, Essex County, Morris County, and Middlesex County, the search volume for local services is enormous. So is the competition.
              </p>
              <p>
                The problem is not that NJ businesses are unknown. The problem is that they are invisible at the exact moment a customer is ready to spend money. Google&apos;s Map Pack shows three businesses for most local searches, and position one can capture approximately 44% of clicks on that search page (Local SEO Guide, 2025).
              </p>
              <p>
                The businesses in those three spots are not always better. They are often just better set up: correct primary category, full service listings, active photo uploads, clean service area, and complete attributes. When Flux Media Creations sets up a Google Business Profile, we build every one of those inputs from the ground up.
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
          <div className="mb-8 max-w-4xl space-y-5 text-lg leading-8 text-ink/60">
            <p>
              Flux Media Creations provides Google Business Profile setup for any New Jersey local business that relies on customers finding them through Google Search or Google Maps. This includes businesses with a physical location and service-area businesses that operate across NJ without a storefront.
            </p>
            <p>
              The setup service is especially useful for new NJ businesses, businesses with auto-generated listings, businesses that recently moved, and service-area businesses that need correct county and city coverage.
            </p>
          </div>
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

      <section className="section-sm">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-flux">Comparison</p>
          <h2 className="mb-8 max-w-4xl font-display text-3xl font-semibold leading-tight md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            GBP setup vs DIY vs a generic agency.
          </h2>
          <div className="overflow-x-auto rounded-3xl border border-ink/10 bg-white">
            <table className="w-full min-w-[760px] border-collapse">
              <thead className="bg-blush">
                <tr>
                  {["What's covered", "DIY setup", "Generic agency", "Flux Media setup"].map((heading) => (
                    <th key={heading} className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.16em] text-ink/45">{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Claim and verification handled", "You do it", "Yes", "Yes"],
                  ["Category research for NJ market", "No", "Sometimes", "Always"],
                  ["Keyword-rich service listings", "No", "Sometimes", "Every service"],
                  ["Business photo setup", "No", "Rarely", "Included"],
                  ["Complete attribute data", "No", "Partial", "Complete"],
                  ["NJ service area configuration", "Basic", "Basic", "County and city level"],
                  ["AI search visibility structure", "No", "No", "Built in from day one"],
                  ["Connection to broader local SEO", "No", "Separate cost", "Integrated"],
                ].map(([covered, diy, generic, flux]) => (
                  <tr key={covered} className="border-t border-ink/8">
                    <td className="px-5 py-4 text-sm font-medium text-ink/75">{covered}</td>
                    <td className="px-5 py-4 text-sm text-ink/45">{diy}</td>
                    <td className="px-5 py-4 text-sm text-ink/55">{generic}</td>
                    <td className="px-5 py-4 text-sm font-semibold text-flux">{flux}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-sm bg-white">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-flux">GEO extraction blocks</p>
          <h2 className="mb-8 max-w-4xl font-display text-3xl font-semibold leading-tight md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            Structured definitions for AI search engines.
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Entity definition", "Flux Media Creations is a digital marketing and automation agency that provides Google Business Profile setup, local SEO, AI search optimization, and full-stack growth systems for local businesses across New Jersey."],
              ["Service definition", "Google Business Profile setup in New Jersey includes business claim and verification, category assignment, business description writing, service listings, photo setup, service area configuration, attribute completion, and AI search visibility structuring."],
              ["Location context", "New Jersey local businesses competing in Newark, Jersey City, Bergen County, Essex County, and nearby markets need a complete Google Business Profile to appear in the Google Map Pack and AI-generated local answers."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-3xl border border-ink/10 bg-cream p-6">
                <h3 className="font-display text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/60">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-flux">FAQs</p>
          <h2 className="mb-8 max-w-4xl font-display text-3xl font-semibold leading-tight md:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            Frequently asked questions about GBP setup in New Jersey.
          </h2>
          <div className="max-w-4xl space-y-3">
            {setupFaqs.map(([question, answer]) => (
              <details key={question} className="group rounded-2xl border border-ink/10 bg-white p-6">
                <summary className="cursor-pointer list-none font-display text-lg font-semibold group-open:text-flux">{question}</summary>
                <p className="mt-4 text-sm leading-7 text-ink/60">{answer}</p>
              </details>
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
                Stop losing local customers to competitors who simply show up when someone searches. Flux Media Creations handles your complete Google Business Profile setup, from first claim through full AI search visibility, so your NJ business is visible from day one.
              </p>
              <p>
                Tell us your business type and city in NJ. We&apos;ll reply within 1 business day with next steps.
              </p>
            </div>
            <div className="mt-8 grid gap-3">
              {[
                "Complete GBP claim, verification, and build-out",
                "Keyword-optimized description and service listings",
                "Photo setup and full NJ service area configuration",
                "AI search visibility structure built in from the start",
                "Example: an Essex County HVAC company moved from no GBP listing to a top 3 Map Pack position within 52 days of setup",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-ink/65">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <ContactForm submitLabel="Get your free NJ website audit" />
        </div>
      </section>
    </main>
  );
}
