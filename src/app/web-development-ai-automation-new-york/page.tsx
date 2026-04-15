import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "High-Converting Web Development & AI Automation Agency in New York",
  description:
    "Elevate your New York business with Flux Media Creations. We engineer conversion-optimized websites, GoHighLevel automation workflows, and GEO-driven SEO.",
  path: "/web-development-ai-automation-new-york",
});

const services = [
  {
    title: "Performance-Driven Web Development",
    body: "We build dynamic, high-converting websites utilizing industry-leading visual builders like Elementor and robust WordPress architectures. Our sites are engineered for rapid load times, flawless mobile responsiveness, and intuitive UI/UX that guides users directly to the point of conversion.",
  },
  {
    title: "GoHighLevel Automation Systems",
    body: "Stop losing leads to slow response times. We design sophisticated lead capture pipelines and automated follow-up sequences within GoHighLevel. From calendar booking routing to SMS nurture campaigns, we automate the heavy lifting of client acquisition.",
  },
  {
    title: "AI Automation & Database Syncing",
    body: "We integrate intelligent solutions that connect your frontend lead capture directly to your operational databases. Using powerful low-code platforms and Airtable integrations, we ensure your data flows securely and instantly across your entire organization.",
  },
  {
    title: "Generative & Local SEO",
    body: "We optimize your brand not just for Google's localized NYC map pack, but for the emerging landscape of AI search engines (ChatGPT, Perplexity, Gemini). By employing entity-based optimization and deep semantic relevance, we establish your brand as the authoritative answer in your niche.",
  },
];

const whyUs = [
  {
    title: "Specialized Tool Expertise",
    body: "We do not rely on theoretical frameworks. We deploy proven, scalable platforms - from Elementor for pixel-perfect design to GoHighLevel and Airtable for operational flow.",
  },
  {
    title: "Conversion-First Architecture",
    body: "Traffic is meaningless without action. Every page we design is meticulously structured around clear conversion pathways and user psychology.",
  },
  {
    title: "Transparent, Agile Process",
    body: "No hidden technical jargon. We provide clear deliverables, transparent workflow mapping, and continuous communication.",
  },
  {
    title: "Results-Oriented Focus",
    body: "Our key performance indicator is your revenue growth. We measure success by leads generated, appointments booked, and administrative hours saved through automation.",
  },
];

const process = [
  "Discovery & Blueprinting: We analyze your New York competitors, define your ideal customer profile, and map out your URL structure and automation needs.",
  "Design & Architecture: Crafting the visual front-end and structuring the underlying databases for maximum efficiency.",
  "Development & Integration: Building the site and connecting your GoHighLevel CRM, automated email/SMS sequences, and AI tools.",
  "Testing & Optimization: Rigorous QA across all devices to ensure lightning-fast speeds and unbroken lead flows.",
  "Launch & Scale: Pushing the site live and initiating ongoing SEO and GEO strategies to capture high-intent local traffic.",
];

const faqs = [
  {
    q: "Do you build custom CRM solutions for New York businesses?",
    a: "Yes. We specialize in configuring and customizing GoHighLevel to act as an all-in-one CRM, perfectly mapped to your unique sales cycle.",
  },
  {
    q: "How does Generative Engine Optimization (GEO) differ from traditional SEO?",
    a: "While traditional SEO targets Google's algorithm, GEO ensures your brand is frequently cited and recommended by AI language models (like ChatGPT) when users ask conversational questions about services in NYC.",
  },
  {
    q: "What platforms do you use for web development?",
    a: "We focus on highly customizable, scalable platforms like WordPress and Elementor, ensuring you have a fast, secure, and easily manageable digital asset.",
  },
];

export default function NewYorkLocationPage() {
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
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">New York, NY</p>
        <h1 className="font-display font-semibold text-4xl md:text-6xl max-w-5xl mb-6" style={{ letterSpacing: "-0.03em" }}>
          Elite Web Development & Business Automation Services in New York City
        </h1>
        <p className="text-lg text-ink/55 max-w-4xl leading-relaxed mb-8">
          Transforming New York Businesses with High-Converting Web Infrastructure & Smart Automation.
        </p>
        <p className="text-base text-ink/60 max-w-4xl leading-8 mb-10">
          Dominate the competitive NYC market. We build blazing-fast, professionally designed websites and deploy custom GoHighLevel CRM workflows to turn your traffic into qualified, booked appointments-on autopilot.
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium" style={{ background: "var(--flux)", color: "white" }}>
            Get Your Free NYC Market Strategy Audit
            <span>→</span>
          </Link>
        </div>
        <img
          src="https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1600&q=80"
          alt="New York skyline representing competitive NYC digital market growth"
          className="w-full rounded-3xl border border-ink/10"
        />
      </section>

      <section className="section-sm max-w-[1200px] mx-auto pt-0">
        <div className="rounded-3xl border border-ink/10 bg-white p-8 md:p-10">
          <p className="text-sm text-ink/70 leading-8">
            New York City operates at an unrelenting pace. For B2B companies, healthcare clinics, and service-based enterprises in the five boroughs, having a digital presence that simply "looks good" is no longer enough. Your website must function as a 24/7 digital sales representative. At Flux Media Creations, we specialize in bridging the gap between front-end design and back-end business logic, ensuring that every visitor to your site is captured, nurtured, and converted through seamless digital ecosystems.
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
            Operating a business in Manhattan or Brooklyn comes with immense overhead and fierce competition. New York consumers expect immediate gratification and frictionless digital experiences. Whether you are a specialized medical clinic in Queens needing secure patient intake forms or a Manhattan B2B service firm requiring multi-stage lead qualification, our solutions are tailored to the high expectations of the New York market. We build systems that give you a competitive edge by responding faster and looking more professional than the agency down the street.
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
            45% more verified bookings in 60 days
          </h2>
          <p className="text-sm text-ink/65 leading-7 mb-4">
            Problem: A multi-practitioner specialty clinic in the NY metro area was experiencing high traffic but low appointment bookings, relying on manual follow-ups that led to a 60% lead drop-off rate.
          </p>
          <p className="text-sm text-ink/65 leading-7 mb-4">
            Solution: Flux Media Creations redesigned their digital presence with a high-converting Elementor landing page, integrated directly into a custom GoHighLevel pipeline. We synced their new lead data seamlessly into an Airtable database for the administrative staff to manage.
          </p>
          <p className="text-sm text-ink/65 leading-7">
            Outcome: The clinic saw a 45% increase in verified patient bookings within 60 days, and staff saved over 15 hours a week in manual data entry and follow-up calls.
          </p>
        </div>
      </section>

      <section className="section-sm max-w-[1200px] mx-auto pt-0">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80"
          alt="New York business team working with digital systems and automation"
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
            Stop letting your New York competitors capture your market share.
          </h2>
          <p className="text-sm md:text-base text-cream/75 max-w-3xl mx-auto leading-7 mb-8">
            Let us build a digital engine that scales your business automatically.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium" style={{ background: "var(--flux)", color: "white" }}>
            Claim Your Free Growth Strategy Session Today
            <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
