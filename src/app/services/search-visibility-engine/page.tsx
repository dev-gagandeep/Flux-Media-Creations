import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  absoluteTitle: "SEO Service for Google, Maps & AI Search Visibility",
  description:
    "Improve Google, Maps, and AI search visibility with SEO strategy, content structure, local SEO, schema, and technical optimization for service businesses.",
  path: "/services/search-visibility-engine",
});

const trustItems = [
  "Keyword Research",
  "Technical SEO",
  "On Page SEO",
  "Local SEO",
  "Google Maps Optimization",
  "Service page layout",
  "Schema markup",
  "Internal linking",
  "AEO and GEO content",
  "SEO reporting",
];

const problems = [
  "Your service pages are too thin.",
  "Your homepage is trying to rank for everything.",
  "Your location pages are boilerplate.",
  "Your website does not clearly say who you serve.",
  "Your content does not match real search intent.",
  "Your Google Business Profile is inactive or incomplete.",
  "Your internal linking is weak.",
  "Your blog posts do not support commercial pages.",
  "Your headings are unclear.",
  "Your pages do not answer enough common questions.",
  "You have crawl or indexing issues in the technical SEO foundation.",
  "Your content is not structured for AI search and answer engines.",
];

const pillars = [
  {
    title: "Organic SEO",
    body: "We optimize your website pages so Google can understand your services, audience, locations, and expertise.",
  },
  {
    title: "Local SEO",
    body: "We improve local visibility so people near you can find your business on Google Search, Google Maps, and location-based service searches.",
  },
  {
    title: "AEO: Answer Engine Optimization",
    body: "We structure content to answer simple user questions clearly, supporting featured snippets, People Also Ask results, and conversational search.",
  },
  {
    title: "GEO: Generative Engine Optimization",
    body: "We improve entity clarity, service descriptions, topic depth, and structure so AI search systems can better understand what your business does.",
  },
  {
    title: "Technical SEO",
    body: "We review crawlability, indexing, metadata, headings, page speed signals, schema, broken links, redirects, and technical issues that could limit visibility.",
  },
];

const covered = [
  ["SEO Analysis", "We audit website architecture, titles, metadata, headings, content depth, internal linking, indexation, mobile experience, schema, technical setup, and local SEO signals."],
  ["Keyword Research", "We find service keywords, local keywords, industry keywords, comparison searches, and question keywords your customers actually use."],
  ["SEO Service Pages", "We optimize or build pages around search intent, including offer details, audience fit, scope, FAQs, and next steps."],
  ["Location Page SEO", "We build or improve local pages with real local relevance, nearby areas, services offered, trust sections, local FAQs, internal links, and CTAs."],
  ["Industry Page SEO", "We create industry pages for niches like healthcare clinics, home services, real estate, med spas, consultants, and local service businesses."],
  ["On Page SEO", "We optimize headings, titles, meta descriptions, content flow, image alt text, FAQs, internal links, and page structure."],
  ["Technical SEO", "We review crawlability, indexability, canonical URLs, redirects, sitemap status, page speed, mobile usability, broken links, and structured data opportunities."],
  ["Google Business Profile Optimization", "For local businesses, we review categories, services, descriptions, photos, appointment links, review strategy, posts, and local consistency."],
  ["Schema Markup Suggestions", "We recommend structured data that helps search engines understand services, locations, FAQs, organization details, and page purpose."],
  ["Content Planning", "We develop a roadmap that connects blogs, service pages, industry pages, and location pages into one clear SEO system."],
  ["Internal Linking System", "We connect related pages, blogs, industry pages, and location content to your most important service pages."],
  ["Reporting and Review", "We explain what is working, what needs more content, and where your next SEO opportunities are."],
];

const audiences = [
  ["Healthcare Clinics", "Clinics need search visibility for treatments, symptoms, providers, service areas, insurance questions, appointment requests, and patient education.", "/services/healthcare-seo-structure"],
  ["Local Service Businesses", "Home service companies need visibility for service keywords, emergency searches, city pages, quote requests, and near-me searches.", "/industries#home-services"],
  ["Real Estate Agents", "Real estate professionals need local authority, buyer and seller pages, neighborhood content, home valuation CTAs, and long-term organic visibility.", "/industries#real-estate"],
  ["Agencies and Consultants", "Consultants need content that demonstrates expertise, builds authority, and turns visitors into discovery calls.", "/contact"],
  ["Local Service Brands", "Local businesses need service pages, location pages, Google Business Profile optimization, and strong conversion paths.", "/industries"],
];

const answerEngineItems = [
  "Simple answer sections",
  "Clear service definitions",
  "Rich business descriptions with entities",
  "FAQ content",
  "Hierarchical headings",
  "Schema markup",
  "Internal links",
  "Topical content clusters",
  "Service and industry relevance",
  "Local signals",
  "Trust and proof",
];

const contentArchitecture = [
  ["Service Pages", "Core commercial pages for high-intent terms like SEO service, WordPress website design, GoHighLevel automation, CRM automation, and website maintenance."],
  ["Industry Pages", "Niche pages for searches like healthcare SEO, clinic website design, home services web design, and real estate website design."],
  ["Location Pages", "Pages focused on cities, states, countries, or service areas where customers search locally."],
  ["Blog Articles", "Educational pages that answer questions and internally link to commercial pages."],
  ["Proof and Trust Content", "Trust sections, testimonials, FAQs, and service examples that help users understand what you do."],
  ["FAQ Sections", "Answer blocks that reduce objections and improve answer-engine clarity."],
];

const localItems = [
  "Google Business Profile optimization",
  "Service area optimization",
  "Local landing pages",
  "Review strategy",
  "LocalBusiness schema",
  "NAP consistency",
  "Internal local links",
  "Location-specific FAQs",
  "Booking and contact links",
  "Local service page content",
];

const technicalItems = [
  "XML sitemap",
  "Robots.txt",
  "Index status",
  "Canonical tags",
  "Redirects",
  "Dead links",
  "404 errors",
  "Page titles",
  "Meta descriptions",
  "Headings",
  "Mobile accessibility",
  "Core Web Vitals",
  "Image optimization",
  "Schema markup",
  "Duplicate content",
  "Thin content",
  "Internal link URL structure",
];

const processSteps = [
  ["Check Visibility", "We audit your website, main pages, search visibility, page structure, metadata, content depth, technical setup, and local SEO foundation."],
  ["Keyword and Intent Research", "We find the keywords your ideal customers use when they are ready to compare, call, book, or request a quote."],
  ["SEO Structure Plan", "We determine the services, industries, locations, blogs, FAQs, and trust content your website needs."],
  ["On Page Optimization", "We improve titles, descriptions, headings, body copy, CTAs, internal links, image alt text, and schema opportunities."],
  ["Content Creation or Rework", "We rewrite thin pages, create SEO landing pages, and produce supporting blog content around real search intent."],
  ["Local SEO Setup", "We strengthen Google Business Profile signals, local content, service areas, and location pages for local businesses."],
  ["Technical Review", "We audit technical fundamentals and identify issues that may be limiting performance."],
  ["Reporting and Next Steps", "You get clear priorities, not confusing SEO reports. We explain what changed, why it matters, and what to do next."],
];

const pricing = [
  ["SEO Foundations Setup", "Best for companies that need a one-off SEO audit, metadata cleanup, page structure improvements, and basic technical review."],
  ["Local SEO Growth Setup", "Best for clinics, contractors, real estate professionals, and local businesses that need Google Maps visibility, local pages, service area optimization, and Google Business Profile enhancements."],
  ["Complete Search Visibility System", "Ideal for businesses that need service pages, location pages, industry pages, blog strategy, schema, technical SEO, internal linking, and ongoing content growth."],
];

const whyFlux = [
  "How people search before they contact you",
  "What visitors need to believe before they choose you",
  "Which content answers their questions",
  "How service pages should be structured",
  "How calls and forms should convert",
  "How GoHighLevel can follow up once the lead is captured",
  "How technical SEO helps with crawlability and visibility",
];

const faqs = [
  ["What is the difference between SEO and search visibility?", "SEO usually refers to optimizing a website for organic search rankings. Search visibility is broader. It includes Google Search, Google Maps, local results, featured snippets, AI answers, brand visibility, and how clearly your business appears across search platforms."],
  ["Do you guarantee first-page rankings?", "No. No ethical SEO provider can guarantee specific rankings. We focus on improving the structure, content, technical foundation, local signals, and authority of your website so it has a better chance to earn qualified visibility."],
  ["How long does SEO take?", "SEO timelines vary based on competition, website condition, content quality, local market, backlinks, and technical issues. Some improvements can be seen faster, but meaningful organic growth usually builds over time."],
  ["What is AEO?", "AEO stands for Answer Engine Optimization. It means structuring content so it clearly answers user questions and can be understood by search engines, featured snippets, voice assistants, and AI-powered search tools."],
  ["What is GEO?", "GEO stands for Generative Engine Optimization. It focuses on making your business, services, expertise, and content easier for AI-powered systems to understand, summarize, and potentially reference."],
  ["Do you optimize Google Business Profile?", "Yes. For local businesses, we can review and improve Google Business Profile categories, services, descriptions, photos, appointment links, posts, review strategy, and local consistency."],
  ["Do you write SEO content?", "Yes. We can write or rewrite service pages, industry pages, location pages, blogs, FAQs, and trust sections using keyword research and search intent."],
  ["Can you fix technical SEO issues?", "Yes. We can review technical SEO issues such as crawlability, indexation, redirects, metadata, broken links, page speed signals, mobile usability, sitemap issues, and schema opportunities."],
  ["Is schema markup included?", "We can recommend and implement schema depending on your website setup. This may include Organization, LocalBusiness, Service, FAQPage, BreadcrumbList, Article, and WebPage schema."],
  ["Is this service good for clinics and healthcare businesses?", "Yes. Healthcare clinics need clear service pages, local SEO, patient-focused content, provider trust signals, appointment CTAs, and structured medical service information. We can create a healthcare-specific SEO structure for clinics and specialty practices."],
];

const internalLinks = [
  ["WordPress Website Design", "/services/wordpress-website-build"],
  ["GoHighLevel Automation", "/services/gohighlevel-automation"],
  ["Local SEO New Jersey", "/local-seo-new-jersey"],
  ["Full Growth System", "/services/full-growth-system"],
  ["Healthcare SEO Structure", "/services/healthcare-seo-structure"],
  ["Healthcare Website Design Blog", "/blog/healthcare-website-design-clinic-conversions"],
  ["Industries", "/industries"],
  ["Contact", "/contact"],
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Search Visibility Engine",
  provider: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
  },
  serviceType: "SEO, Local SEO, AEO and GEO Service",
  areaServed: ["United States", "Canada", "United Kingdom", "India", "Worldwide"],
  description:
    "Flux Media Creations provides SEO, local SEO, AEO, GEO, technical SEO, content structure, schema markup, and Google Maps visibility services for clinics, home services, real estate professionals, and service businesses.",
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
  return <p className="text-xs uppercase tracking-[0.22em] text-flux font-semibold mb-4">{children}</p>;
}

function Section({
  eyebrow,
  title,
  children,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <section className={`section-sm ${dark ? "bg-ink text-cream" : ""}`}>
      <div className="max-w-[1400px] mx-auto">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight max-w-4xl mb-8" style={{ letterSpacing: "-0.03em" }}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

export default function SearchVisibilityEnginePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main>
        <section className="section pt-40 md:pt-48 pb-20 max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <div>
              <Eyebrow>Get Found Where Your Customers Are Searching</Eyebrow>
              <h1 className="font-display font-semibold text-4xl md:text-6xl leading-tight max-w-5xl mb-6" style={{ letterSpacing: "-0.035em" }}>
                SEO Service for Google, Maps and AI Search Visibility
              </h1>
              <p className="text-lg md:text-xl text-ink/60 leading-8 max-w-3xl mb-5">
                Your customers are not searching in one place anymore. They Google it. They Google Map it. They use AI Overviews, ChatGPT, Perplexity, Gemini, local directories, and service-specific searches. Then they decide who to call.
              </p>
              <p className="text-base md:text-lg text-ink/55 leading-8 max-w-3xl mb-8">
                Flux Media Creations helps service businesses improve visibility on organic search, local search, and AI-powered answer platforms with a clear SEO system based on structure, content, trust, and technical performance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-3 rounded-full bg-flux px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(255,88,51,0.22)] transition hover:-translate-y-0.5">
                  Get Started on Your SEO Visibility Audit <span aria-hidden="true">-&gt;</span>
                </Link>
                <Link href="/services/full-growth-system" className="inline-flex items-center gap-3 rounded-full border border-ink/15 px-6 py-4 text-sm font-semibold uppercase tracking-wide text-ink transition hover:border-flux hover:text-flux">
                  Explore Full Growth System
                </Link>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft">
              <p className="text-xs uppercase tracking-[0.2em] text-ink/35 mb-5">Visibility stack</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {trustItems.map((item) => (
                  <div key={item} className="rounded-2xl border border-ink/10 bg-cream px-4 py-3 text-sm font-medium text-ink/70">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-ink p-5 text-cream">
                <p className="text-xs uppercase tracking-[0.18em] text-cream/40 mb-3">Built for</p>
                <p className="text-sm leading-7 text-cream/70">
                  Clinics, home service companies, real estate professionals, consultants, and local service businesses that want more qualified traffic and stronger service pages.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <Section eyebrow="Search strategy" title="SEO is more than just rankings. It is about getting in the right hands.">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
            <p className="text-lg text-ink/60 leading-8">
              A high ranking is useless if the page does not align with search intent, build trust, or convert visitors into leads. Modern SEO needs clear service pages, helpful content, local relevance, fast performance, strong internal links, schema markup, and answers to the questions people already ask.
            </p>
            <div className="rounded-3xl border border-ink/10 bg-white p-8">
              <p className="text-ink/65 leading-8">
                Google's SEO guidance explains that search optimization is about helping search engines understand your content and helping users find useful pages. That is how we build search visibility: make your website more understandable, trustworthy, and selectable.
              </p>
            </div>
          </div>
        </Section>

        <Section eyebrow="Problem scope" title="Why Your Website Is Not Bringing In Enough Organic Leads">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {problems.map((problem) => (
              <div key={problem} className="rounded-2xl border border-ink/10 bg-white p-5 text-sm text-ink/70 leading-6">
                {problem}
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-ink/60 leading-8">
            The best SEO happens when your services, industries, locations, proof, FAQs, internal links, and technical signals work together in one clear structure.
          </p>
        </Section>

        <Section eyebrow="The solution" title="The Search Visibility Engine: SEO Designed for Service Businesses">
          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-4">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-3xl border border-ink/10 bg-white p-6">
                <h3 className="font-display text-xl font-semibold mb-3">{pillar.title}</h3>
                <p className="text-sm text-ink/60 leading-7">{pillar.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="What is covered" title="Complete SEO Visibility Setup">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {covered.map(([title, body]) => (
              <div key={title} className="rounded-3xl border border-ink/10 bg-white p-6">
                <h3 className="font-display text-xl font-semibold mb-3">{title}</h3>
                <p className="text-sm text-ink/60 leading-7">{body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Who it is for" title="Service Businesses That Rely on SEO Leads">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {audiences.map(([title, body, href]) => (
              <Link key={title} href={href} className="rounded-3xl border border-ink/10 bg-white p-6 transition hover:-translate-y-1 hover:border-flux/40">
                <h3 className="font-display text-xl font-semibold mb-3">{title}</h3>
                <p className="text-sm text-ink/60 leading-7">{body}</p>
              </Link>
            ))}
          </div>
        </Section>

        <Section eyebrow="AEO and GEO" title="Built for Google Search, AI Overviews, Perplexity, Gemini, and More" dark>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
            <p className="text-cream/65 leading-8">
              Search behavior is changing. People still use Google, but they also ask AI tools for recommendations, comparisons, explanations, and service options. Your website should be keyword optimized, but it also needs to be clear, organized, specific, and easy to summarize.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {answerEngineItems.map((item) => (
                <div key={item} className="rounded-2xl border border-cream/10 bg-cream/5 px-4 py-3 text-sm text-cream/75">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section eyebrow="Content architecture" title="Build SEO Structure, Not Random Blog Posts">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {contentArchitecture.map(([title, body]) => (
              <div key={title} className="rounded-3xl border border-ink/10 bg-blush p-6">
                <h3 className="font-display text-xl font-semibold mb-3">{title}</h3>
                <p className="text-sm text-ink/60 leading-7">{body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Local SEO" title="Local SEO and Google Maps Visibility">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8">
            <div>
              <p className="text-lg text-ink/60 leading-8">
                If your business serves a local area, your SEO strategy needs to include local search. Local SEO can be one of the most valuable parts of the marketing system for clinics, contractors, repair companies, and local service providers.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {localItems.map((item) => (
                <div key={item} className="rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm font-medium text-ink/70">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section eyebrow="Technical SEO" title="Technical SEO Helps Improve Visibility">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {technicalItems.map((item) => (
                <div key={item} className="rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink/70">
                  {item}
                </div>
              ))}
            </div>
            <p className="rounded-3xl bg-ink p-8 text-cream/70 leading-8">
              Great content needs a technical foundation. If search engines cannot crawl, index, or understand the site properly, strong pages may never get the chance to perform.
            </p>
          </div>
        </Section>

        <Section eyebrow="Process" title="Our SEO Process">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map(([title, body], index) => (
              <div key={title} className="rounded-3xl border border-ink/10 bg-white p-6">
                <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-flux text-sm font-bold text-white">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-xl font-semibold mb-3">{title}</h3>
                <p className="text-sm text-ink/60 leading-7">{body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Pricing" title="Search Visibility Engine Pricing">
          <p className="max-w-3xl text-ink/60 leading-8 mb-8">
            Our Search Visibility Engine starts at $500. Cost depends on page count, website size, technical issues, target locations, content needs, local SEO requirements, and whether we are optimizing existing pages or building the SEO structure from scratch.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {pricing.map(([title, body]) => (
              <div key={title} className="rounded-3xl border border-ink/10 bg-white p-7">
                <h3 className="font-display text-2xl font-semibold mb-4">{title}</h3>
                <p className="text-sm text-ink/60 leading-7">{body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Why Flux" title="Why Choose Flux Media Creations for SEO?">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
            <p className="text-lg text-ink/60 leading-8">
              Flux Media Creations builds websites, automation systems, and SEO structures together. That gives us a clearer view of the whole customer journey before and after the click.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {whyFlux.map((item) => (
                <div key={item} className="rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink/70">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section eyebrow="Direct answer" title="What Is a Search Visibility Engine?">
          <div className="rounded-3xl border border-ink/10 bg-white p-8">
            <p className="text-lg text-ink/65 leading-8">
              A Search Visibility Engine is a systematic approach to SEO that helps a business show up across Google Search, Google Maps, and AI-powered answer platforms. It combines keyword research, service page SEO, local SEO, technical SEO, schema markup, internal linking, and content strategy so users and search engines understand exactly what the business offers.
            </p>
          </div>
        </Section>

        <Section eyebrow="Internal links" title="Explore Related Services and Proof">
          <div className="flex flex-wrap gap-3">
            {internalLinks.map(([label, href]) => (
              <Link key={label} href={href} className="rounded-full border border-ink/10 bg-white px-5 py-3 text-sm font-medium text-ink/70 transition hover:border-flux hover:text-flux">
                {label}
              </Link>
            ))}
          </div>
        </Section>

        <Section eyebrow="FAQs" title="Search Visibility Engine FAQs">
          <div className="space-y-3 max-w-4xl">
            {faqs.map(([q, a]) => (
              <details key={q} className="group rounded-2xl border border-ink/10 bg-white p-6">
                <summary className="cursor-pointer list-none font-display text-lg font-semibold group-open:text-flux">{q}</summary>
                <p className="mt-4 text-sm text-ink/60 leading-7">{a}</p>
              </details>
            ))}
          </div>
        </Section>

        <section className="section-sm bg-blush">
          <div className="max-w-[1000px] mx-auto text-center">
            <Eyebrow>Ready to improve your search visibility?</Eyebrow>
            <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight mb-6" style={{ letterSpacing: "-0.035em" }}>
              Your customers are searching before they contact you.
            </h2>
            <p className="text-lg text-ink/60 leading-8 max-w-3xl mx-auto mb-8">
              The question is whether your business shows up clearly when they search. Flux Media Creations helps service businesses build stronger visibility across Google, Google Maps, and AI-powered discovery platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-3 rounded-full bg-flux px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white">
                Start Your SEO Visibility Audit <span aria-hidden="true">-&gt;</span>
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-3 rounded-full border border-ink/15 px-6 py-4 text-sm font-semibold uppercase tracking-wide text-ink">
                Build My SEO Structure
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
