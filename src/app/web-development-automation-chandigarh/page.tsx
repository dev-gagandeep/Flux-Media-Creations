import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "Top Web Development & GoHighLevel Automation Agency in Chandigarh",
  description:
    "Flux Media Creations empowers Chandigarh and Tricity businesses with high-converting Elementor websites, smart SEO, and GoHighLevel CRM automation.",
  path: "/web-development-automation-chandigarh",
});

const services = [
  {
    title: "High-Performance WordPress Development",
    body: "We craft visually stunning, highly responsive websites using Elementor. Our architecture guarantees lightning-fast load speeds, clean code structure, and mobile-first indexing, perfectly suited for both local Indian markets and your international client base.",
  },
  {
    title: "GoHighLevel CRM & Lead Routing",
    body: "We eliminate manual lead tracking. Our team builds custom automation pipelines within GoHighLevel, capturing inquiries instantly and triggering automated SMS and email nurture sequences to close deals faster.",
  },
  {
    title: "Airtable Database Integration",
    body: "Say goodbye to messy spreadsheets. We sync your front-end lead generation directly into structured, low-code Airtable databases, giving your team a centralized, real-time view of all business operations.",
  },
  {
    title: "Local & Generative SEO (GEO)",
    body: "We dominate the Tricity search landscape. By optimizing for entity relationships and natural language processing (NLP), we ensure your business ranks prominently on Google Maps and is recommended by AI search tools like ChatGPT and Perplexity.",
  },
];

const whyUs = [
  {
    title: "Tricity Roots, Global Standards",
    body: "We understand the local Chandigarh business ecosystem but build digital infrastructure designed to compete on a global scale.",
  },
  {
    title: "Conversion-Centric Design",
    body: "Every pixel and button placement is dictated by user psychology and data, ensuring your traffic actually converts.",
  },
  {
    title: "No-Code / Low-Code Agility",
    body: "By utilizing advanced platforms like WordPress, Elementor, and Airtable, we deliver highly customized, scalable solutions without the bloated timelines of traditional hard-coding.",
  },
  {
    title: "Measurable ROI",
    body: "We focus strictly on the metrics that matter: booked appointments, lead velocity, and operational hours saved through intelligent automation.",
  },
];

const process = [
  "Tricity Market Analysis: Deep dive into your local and international competitors, mapping out a winning digital strategy.",
  "Architecture & UI Design: Wireframing and designing a high-converting front-end utilizing WordPress and Elementor.",
  "Automation Engineering: Setting up GoHighLevel workflows, calendars, and syncing data seamlessly to Airtable.",
  "Performance Optimization: Rigorous speed testing, mobile responsiveness checks, and technical SEO deployment.",
  "Launch & Scale: Pushing live and initiating aggressive local SEO campaigns to capture Tricity market share.",
];

const faqs = [
  {
    q: "Do you work with businesses outside of Chandigarh?",
    a: "Absolutely. While we have a strong footprint in the Tricity, our automation and web systems are built to scale businesses internationally.",
  },
  {
    q: "Why do you recommend Elementor and WordPress?",
    a: "It provides the perfect balance of elite, customized design and easy content management, allowing your site to scale without heavy developer dependencies.",
  },
  {
    q: "How fast can you deploy an automated GoHighLevel system?",
    a: "Depending on complexity, we can architect and launch foundational lead-capture and nurture pipelines within weeks.",
  },
];

export default function ChandigarhLocationPage() {
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
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">Chandigarh, India (Tricity Area)</p>
        <h1 className="font-display font-semibold text-4xl md:text-6xl max-w-5xl mb-6" style={{ letterSpacing: "-0.03em" }}>
          Next-Generation Web Development & Business Automation in Chandigarh
        </h1>
        <p className="text-lg text-ink/55 max-w-4xl leading-relaxed mb-8">
          Scale Your Tricity Business with Intelligent Web Infrastructure.
        </p>
        <p className="text-base text-ink/60 max-w-4xl leading-8 mb-10">
          We build more than websites. From IT Park to Mohali, we engineer fast, conversion-optimized Elementor sites and automated GoHighLevel pipelines that turn local and global traffic into retained clients.
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium" style={{ background: "var(--flux)", color: "white" }}>
            Request Your Tricity Digital Audit
            <span>→</span>
          </Link>
        </div>
        <img
          src="https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=1600&q=80"
          alt="Modern Chandigarh city infrastructure representing Tricity digital growth"
          className="w-full rounded-3xl border border-ink/10"
        />
      </section>

      <section className="section-sm max-w-[1200px] mx-auto pt-0">
        <div className="rounded-3xl border border-ink/10 bg-white p-8 md:p-10">
          <p className="text-sm text-ink/70 leading-8">
            Chandigarh is rapidly evolving into a premier digital and entrepreneurial hub. For startups, medical facilities, and service businesses across the Tricity (Chandigarh, Mohali, Panchkula), relying on outdated, static websites is a liability. Flux Media Creations bridges the gap between high-end visual design and back-end operational efficiency. We specialize in building robust digital ecosystems that capture leads, automate tedious follow-ups, and position your brand as the undisputed authority in the region.
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
            The business landscape spanning from Sector 17 to the Mohali industrial area is highly competitive. Local clients demand modern interfaces and instant communication. Whether you are a specialized clinic needing secure patient booking systems or an IT service provider requiring advanced lead qualification, our solutions are engineered for this market. We provide the digital polish of a top-tier global agency with the localized understanding needed to capture the Chandigarh audience.
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
            35% higher enrollment conversion and zero manual entry
          </h2>
          <p className="text-sm text-ink/65 leading-7 mb-4">
            Problem: A growing educational consultancy in Sector 34 was overwhelmed by manual lead tracking across WhatsApp and email, resulting in delayed responses and lost enrollments.
          </p>
          <p className="text-sm text-ink/65 leading-7 mb-4">
            Solution: We deployed a high-speed Elementor landing page integrated directly into a custom GoHighLevel pipeline. Leads were instantly routed, greeted with an automated WhatsApp/SMS sequence, and synced into an Airtable management system.
          </p>
          <p className="text-sm text-ink/65 leading-7">
            Outcome: The consultancy increased their student enrollment conversion rate by 35% and completely eliminated manual data entry.
          </p>
        </div>
      </section>

      <section className="section-sm max-w-[1200px] mx-auto pt-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
          alt="Team collaboration and lead automation planning for Chandigarh businesses"
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
            Ready to dominate the Tricity market and beyond?
          </h2>
          <p className="text-sm md:text-base text-cream/75 max-w-3xl mx-auto leading-7 mb-8">
            Let us architect a digital system that drives serious growth.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium" style={{ background: "var(--flux)", color: "white" }}>
            Book Your Chandigarh Strategy Session
            <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
