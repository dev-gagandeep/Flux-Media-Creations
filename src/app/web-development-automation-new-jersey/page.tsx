import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "Web Development & Automation Agency in New Jersey",
  description:
    "Specialized web design and GoHighLevel automation for New Jersey businesses and healthcare clinics. Scale your operations with Flux Media Creations.",
  path: "/web-development-automation-new-jersey",
});

const services = [
  {
    title: "Specialized Medical & B2B Web Design",
    body: "We build authoritative, high-speed websites using WordPress and Elementor. From customized color palettes to strategic branding icons, we ensure your site reflects the premium quality of your services.",
  },
  {
    title: "Automated Lead Generation (GoHighLevel)",
    body: "We engineer comprehensive lead capture systems. Whether you need patient intake pipelines or B2B sales funnels, our GoHighLevel integrations automate follow-ups, appointment reminders, and reputation management.",
  },
  {
    title: "Data Syncing & Operational Architecture",
    body: "We utilize Airtable to create dynamic, interconnected databases. This ensures that every lead captured on your website is instantly organized and accessible for your administrative or sales teams.",
  },
  {
    title: "Search Engine Dominance (SEO/GEO)",
    body: "We optimize your digital assets to rank at the top of Google for highly competitive NJ search terms, while structuring your site's data to be accurately summarized by emerging AI platforms like ChatGPT and Gemini.",
  },
];

const whyUs = [
  {
    title: "Healthcare & B2B Acumen",
    body: "We understand the nuances of generating high-value leads in specialized industries, ensuring compliance, privacy, and professionalism are at the forefront of your digital systems.",
  },
  {
    title: "End-to-End Solutions",
    body: "We do not just build a site and leave. We architect the entire journey, from the first click on Google to the automated appointment confirmation via SMS.",
  },
  {
    title: "Best-in-Class Technology",
    body: "We deploy scalable, proven technologies - WordPress for content authority, Elementor for pixel-perfect design, and GoHighLevel for ruthless automation.",
  },
  {
    title: "Data-Backed Strategy",
    body: "Our decisions are driven by granular lead generation research and competitor analysis specific to the New Jersey market.",
  },
];

const process = [
  "NJ Market & Competitor Audit: Deep analysis of the local search landscape and the digital systems utilized by your top competitors.",
  "Brand Identity & Web Architecture: Developing the visual language and building a targeted URL silo structure designed to rank for high-intent local keywords.",
  "CRM Integration: Building the GoHighLevel pipelines to capture, nurture, and route your incoming New Jersey leads.",
  "Launch & QA: Rigorous testing of all forms, automated triggers, and site speed before pushing the system live.",
  "Ongoing Growth: Continuous SEO optimization and database management to ensure sustained lead flow.",
];

const faqs = [
  {
    q: "Do you have experience with medical and clinic branding?",
    a: "Yes. We specialize in creating authoritative digital identities and web architectures specifically tailored for healthcare and specialized clinics in the US market.",
  },
  {
    q: "How does GoHighLevel benefit a New Jersey service business?",
    a: "It consolidates your marketing tools. It replaces separate software for email marketing, SMS, calendar booking, and CRM, putting your entire lead generation system under one automated roof.",
  },
  {
    q: "Can you integrate with our existing operational software?",
    a: "Yes. Through webhooks and platforms like Airtable, we can seamlessly connect your new lead capture system with your existing operational databases.",
  },
];

export default function NewJerseyLocationPage() {
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
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">New Jersey, USA</p>
        <h1 className="font-display font-semibold text-4xl md:text-6xl max-w-5xl mb-6" style={{ letterSpacing: "-0.03em" }}>
          Advanced Web Development & Patient Lead Automation in New Jersey
        </h1>
        <p className="text-lg text-ink/55 max-w-4xl leading-relaxed mb-8">
          Digital Infrastructure Engineered for New Jersey's Leading Clinics and B2B Firms.
        </p>
        <p className="text-base text-ink/60 max-w-4xl leading-8 mb-10">
          Transform your digital presence. We specialize in high-converting WordPress web design and sophisticated GoHighLevel automation to capture high-ticket leads and streamline patient or client acquisition across NJ.
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium" style={{ background: "var(--flux)", color: "white" }}>
            Get Your New Jersey Growth Blueprint
            <span>→</span>
          </Link>
        </div>
        <img
          src="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1600&q=80"
          alt="New Jersey skyline and business district representing high-competition local digital market"
          className="w-full rounded-3xl border border-ink/10"
        />
      </section>

      <section className="section-sm max-w-[1200px] mx-auto pt-0">
        <div className="rounded-3xl border border-ink/10 bg-white p-8 md:p-10">
          <p className="text-sm text-ink/70 leading-8">
            The New Jersey market - particularly within the healthcare, specialized medical, and B2B service sectors - requires a digital presence that instantly communicates authority and trust. A generic website simply will not rank or convert in this high-density region. Flux Media Creations designs elite digital experiences that act as automated growth engines. We connect bespoke front-end design with powerful backend CRM systems to ensure your NJ business operates at maximum efficiency.
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
            From specialized spine care clinics in North Jersey to expanding B2B services in Princeton, the operational challenge is the same: capturing attention and managing leads without overwhelming your staff. The New Jersey consumer is highly educated and expects frictionless digital interactions. By deploying our intelligent web architectures, you provide an elite user experience that builds instant credibility, while our automation systems work in the background to qualify and convert those users into loyal clients.
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
            50% more booked consultations in 90 days
          </h2>
          <p className="text-sm text-ink/65 leading-7 mb-4">
            Problem: A specialized spine care clinic in New Jersey was struggling to manage inbound patient inquiries, resulting in long response times and a high patient drop-off rate to local competitors.
          </p>
          <p className="text-sm text-ink/65 leading-7 mb-4">
            Solution: Flux Media Creations rebranded their digital identity and launched a high-converting WordPress site. We integrated a GoHighLevel automated triage system to instantly follow up with inquiries, schedule consultations, and sync patient data securely into an Airtable database.
          </p>
          <p className="text-sm text-ink/65 leading-7">
            Outcome: The clinic achieved a 50% increase in booked consultations within 90 days, completely streamlining their front-desk operations.
          </p>
        </div>
      </section>

      <section className="section-sm max-w-[1200px] mx-auto pt-0">
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80"
          alt="Healthcare and business operations environment reflecting New Jersey clinic lead management"
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
            Elevate your New Jersey business with digital infrastructure that actually generates revenue.
          </h2>
          <Link href="/contact" className="mt-3 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium" style={{ background: "var(--flux)", color: "white" }}>
            Schedule Your Free Systems Audit Today
            <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
