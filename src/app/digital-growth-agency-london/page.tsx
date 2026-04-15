import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "Premier Web Design, SEO & AI Automation Company in London",
  description:
    "Scale your London-based enterprise with Flux Media Creations. We deliver specialized WordPress development, intelligent SEO, and automated CRM workflows.",
  path: "/digital-growth-agency-london",
});

const services = [
  {
    title: "Bespoke Web Development",
    body: "Leveraging the power of WordPress and Elementor, we craft visually striking, technically sound websites. Our focus is on frictionless user journeys, robust security, and technical SEO compliance to ensure your site performs brilliantly.",
  },
  {
    title: "CRM & Pipeline Automation (GoHighLevel)",
    body: "We eradicate inefficiencies in your sales process. By configuring GoHighLevel, we automate your client onboarding, appointment scheduling, and multi-channel follow-up sequences, ensuring no lead falls through the cracks.",
  },
  {
    title: "Workflow & Database Integrations",
    body: "Your software should talk to each other. We specialize in mapping complex data flows, utilizing platforms like Airtable to create centralized, accessible sources of truth for your operational teams.",
  },
  {
    title: "AI-Optimized Search Visibility (SEO/GEO)",
    body: "We position your London business as the primary entity in your sector. By optimizing for user intent, natural language processing (NLP), and E-E-A-T principles, we ensure you rank at the top of Google and AI summaries alike.",
  },
];

const whyUs = [
  {
    title: "Deep Technical Ecosystem Knowledge",
    body: "We are experts in weaving together the best modern platforms - WordPress, Elementor, GoHighLevel, and Airtable - into one cohesive system.",
  },
  {
    title: "Data-Driven Decision Making",
    body: "We do not guess. Every design choice and automation trigger is based on analytics, user behavior, and proven conversion rate optimization (CRO) principles.",
  },
  {
    title: "Scalable Architectures",
    body: "We build sites and systems designed to grow with your London operations, preventing the need for costly rebuilds in the future.",
  },
  {
    title: "End-to-End Execution",
    body: "From the first pixel designed to the final automated SMS configured, we handle the entire lifecycle of your digital transformation.",
  },
];

const process = [
  "Strategic Audit: Evaluating your current London market positioning, existing tech stack, and identifying friction points in your client acquisition.",
  "System Design: Prototyping the website UI/UX and mapping out the automation logic (triggers, actions, and data routing).",
  "Build & Connect: Developing the front-end via Elementor/WordPress and wiring the back-end workflows in GoHighLevel and Airtable.",
  "Stress Testing: Simulating high-traffic events and lead submissions to ensure the automated pipelines fire perfectly.",
  "Deployment & Authority Building: Launching the finalized system and initiating aggressive local SEO/GEO campaigns to drive targeted UK traffic.",
];

const faqs = [
  {
    q: "Can you integrate my existing website with GoHighLevel?",
    a: "Yes. We can integrate GoHighLevel's powerful forms, chat widgets, and booking calendars seamlessly into your existing site, or build a new high-performance architecture from the ground up.",
  },
  {
    q: "Why is AI Search Optimization important for UK businesses?",
    a: "With users increasingly turning to AI assistants to find services (for example, best automated B2B agency in London), optimizing for these generative engines ensures you capture market share before a traditional Google search even occurs.",
  },
  {
    q: "Do you work with no-code/low-code tools?",
    a: "Absolutely. We heavily utilize sophisticated low-code environments like Airtable and Elementor because they provide our clients with agile, highly customized, and easily maintainable solutions without bloated development timelines.",
  },
];

export default function LondonLocationPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="section pt-40 md:pt-48 pb-14 max-w-[1200px] mx-auto">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">London, UK</p>
        <h1 className="font-display font-semibold text-4xl md:text-6xl max-w-5xl mb-6" style={{ letterSpacing: "-0.03em" }}>
          Strategic Web Development & Intelligent Automation in London
        </h1>
        <p className="text-lg text-ink/55 max-w-4xl leading-relaxed mb-8">
          Digital Infrastructure Built for London's Most Ambitious Brands.
        </p>
        <p className="text-base text-ink/60 max-w-4xl leading-8 mb-10">
          We engineer lead-generating websites and powerful, automated pipelines so your business operates flawlessly around the clock-from the City of London to Greater London and beyond.
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium" style={{ background: "var(--flux)", color: "white" }}>
            Schedule a Digital Architecture Consultation
            <span>→</span>
          </Link>
        </div>
        <img
          src="https://images.unsplash.com/photo-1488747279002-c8523379faaa?auto=format&fit=crop&w=1600&q=80"
          alt="London skyline representing modern digital growth opportunities"
          className="w-full rounded-3xl border border-ink/10"
        />
      </section>

      <section className="section-sm max-w-[1200px] mx-auto pt-0">
        <div className="rounded-3xl border border-ink/10 bg-white p-8 md:p-10">
          <p className="text-sm text-ink/70 leading-8">
            The digital landscape in London is dense and unforgiving. Standing out requires more than just a digital brochure; it demands an interconnected web presence that actively works to acquire and retain clients. Flux Media Creations provides high-end web development and AI-driven automation designed specifically for service-based businesses, B2B firms, and specialized clinics across London. We turn fragmented marketing efforts into a centralized, revenue-generating machine.
          </p>
        </div>
      </section>

      <section className="section-sm max-w-[1200px] mx-auto pt-0">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">Services</p>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-ink/10 bg-white p-7">
              <h2 className="font-display text-2xl font-semibold mb-3" style={{ letterSpacing: "-0.02em" }}>{service.title}</h2>
              <p className="text-sm text-ink/60 leading-7">{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-sm max-w-[1200px] mx-auto pt-0">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">Why Choose Us</p>
        <div className="grid md:grid-cols-2 gap-6">
          {whyUs.map((item) => (
            <article key={item.title} className="rounded-3xl border border-ink/10 bg-white p-7">
              <h3 className="font-medium text-lg mb-3">{item.title}</h3>
              <p className="text-sm text-ink/60 leading-7">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-sm max-w-[1200px] mx-auto pt-0">
        <div className="rounded-3xl bg-ink text-cream p-8 md:p-10">
          <p className="text-xs uppercase tracking-widest text-cream/40 mb-4">Local relevance</p>
          <p className="text-sm md:text-base text-cream/80 leading-8">
            London's diverse economy-from the financial hubs of Canary Wharf to the specialized private healthcare sectors in Harley Street-requires highly nuanced digital communication. London clients value authority, trust, and speed. If your website loads slowly or your response to an inquiry takes days, they will go elsewhere. Our automated architectures ensure that your business presents an elite, highly responsive front at all times, securing trust instantly and outpacing local competitors.
          </p>
        </div>
      </section>

      <section className="section-sm max-w-[1200px] mx-auto pt-0">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">Process</p>
        <div className="grid md:grid-cols-2 gap-5">
          {process.map((step, idx) => (
            <div key={step} className="rounded-3xl border border-ink/10 bg-white p-6">
              <p className="text-xs text-ink/40 mb-2">0{idx + 1}</p>
              <p className="text-sm text-ink/70 leading-7">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-sm max-w-[1200px] mx-auto pt-0">
        <div className="rounded-3xl border border-ink/10 bg-white p-8 md:p-10">
          <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">Case study / results</p>
          <h2 className="font-display text-3xl font-semibold mb-6" style={{ letterSpacing: "-0.03em" }}>
            Inbound lead velocity doubled in three months
          </h2>
          <p className="text-sm text-ink/65 leading-7 mb-4">
            Problem: A growing B2B consulting firm in Central London was losing valuable consulting hours managing a chaotic inbox and an outdated website that failed to capture inbound search traffic.
          </p>
          <p className="text-sm text-ink/65 leading-7 mb-4">
            Solution: We architected a streamlined, high-authority WordPress site utilizing a targeted silo structure for their core services. We then implemented a GoHighLevel system to automatically capture inquiries, route them to the correct consultant, and update an Airtable project management base in real-time.
          </p>
          <p className="text-sm text-ink/65 leading-7">
            Outcome: The firm doubled its inbound lead velocity within three months, and the automated triage system saved the consulting team over 20 hours a week in administrative overhead.
          </p>
        </div>
      </section>

      <section className="section-sm max-w-[1200px] mx-auto pt-0">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80"
          alt="London business district highlighting enterprise web and automation growth"
          className="w-full rounded-3xl border border-ink/10"
        />
      </section>

      <section className="section-sm max-w-[1200px] mx-auto pt-0">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">FAQs</p>
        <div className="grid md:grid-cols-3 gap-5">
          {faqs.map((faq) => (
            <article key={faq.q} className="rounded-3xl border border-ink/10 bg-white p-6">
              <h3 className="font-medium mb-2 text-sm">{faq.q}</h3>
              <p className="text-sm text-ink/60 leading-7">{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-sm max-w-[1200px] mx-auto pt-0 pb-20">
        <div className="rounded-3xl bg-ink text-cream p-8 md:p-12 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-4" style={{ letterSpacing: "-0.03em" }}>
            Your London competitors are upgrading their digital infrastructure. Do not get left behind.
          </h2>
          <p className="text-sm md:text-base text-cream/75 max-w-3xl mx-auto leading-7 mb-8">
            Contact Flux Media Creations today to build a system that works as hard as you do.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium" style={{ background: "var(--flux)", color: "white" }}>
            Book Your London Discovery Call
            <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
