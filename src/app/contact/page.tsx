import { safeJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";
import ContactForm from "./ContactForm";

export const metadata: Metadata = generateMeta({
  absoluteTitle: "Contact Flux | Business Intelligence Assessment",
  description:
    "Tell Flux where your website, search, lead capture, CRM, follow-up, automation, or reporting is breaking down and get a clear next-step recommendation.",
  path: "/contact",
});

const helpItems = [
  ["Website Growth System", "Strategy, conversion-focused design, development, lead capture, booking, analytics, technical SEO foundations, and CRM integration."],
  ["Lead Conversion System", "CRM pipelines, lead routing, follow-up, booking workflows, reminders, review workflows, reactivation, and conversion tracking."],
  ["Search Growth System", "Technical and on-page SEO, local search, Google Business Profile, content architecture, reporting, and AI-search considerations."],
  ["Business Automation System", "APIs, webhooks, application integrations, data synchronization, internal workflows, and reporting automation."],
  ["Complete Growth System", "A custom connection from discovery and website conversion through CRM, follow-up, automation, and measurement."],
  ["Healthcare specialization", "Clinic and practice systems shaped around patient enquiries, booking, appropriate data handling, and clear staff ownership."],
];

const fitItems = [
  "Healthcare clinics that need more patient inquiries and faster follow-up",
  "Home service businesses that miss calls or lose quote requests",
  "Real estate professionals who need buyer and seller lead capture",
  "Beauty and wellness brands that need booking automation",
  "Professional service businesses that need a stronger website and CRM",
  "Small teams that want automation without building a large admin department",
];

const faqs = [
  ["Do I need a new website or a better lead system?", "It depends on where opportunities are being lost. Flux reviews the current journey before recommending a website change, CRM work, search engagement, automation, or a connected combination."],
  ["Can you connect my existing WordPress website to GoHighLevel?", "Yes. Forms, calls, calendars, landing pages, and lead sources can be connected to GoHighLevel so inquiries enter your CRM pipeline and trigger the correct follow-up workflows."],
  ["Do you work with clients outside India?", "Yes. Flux Media Creations serves US clients and worldwide businesses, with target regions including the United States, Canada, the United Kingdom, New Jersey, New York, and India."],
  ["What should I send before contacting you?", "Share your website if you have one, your business type, the primary challenge, and any current systems involved. You do not need to diagnose the solution first."],
  ["Can you help healthcare clinics?", "Yes. Healthcare is a core focus, including pain clinics, vein clinics, orthopedic practices, telehealth providers, wellness providers, and specialty practices."],
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function ContactPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }} />
      <section className="section pt-32 md:pt-36 pb-16 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-start">
          <div>
            <p className="text-sm uppercase tracking-widest text-flux font-semibold mb-5">Contact Flux Media Creations</p>
            <h1 className="font-display font-semibold text-4xl md:text-6xl max-w-5xl mb-6" style={{ letterSpacing: "-0.035em" }}>
              Start with the gap—not a predetermined deliverable.
            </h1>
            <div className="space-y-5 text-base md:text-lg text-ink/58 leading-8 max-w-3xl">
              <p>
                Tell us where your customer journey is breaking down. Flux connects websites, search visibility, lead capture, CRM, follow-up, booking, automation, and business data so fewer opportunities disappear between systems.
              </p>
              <p>
                The assessment comes first. We review the current situation and recommend the smallest useful scope—one system or a connected implementation—without forcing a new platform where the existing one can work.
              </p>
              <p>
                We work with healthcare clinics, home service companies, real estate professionals, wellness brands, professional service businesses, and local teams that depend on fast response times and consistent follow-up.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#project-form" className="inline-flex items-center gap-3 rounded-full bg-flux px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white">
                Start your assessment <span aria-hidden="true">-&gt;</span>
              </Link>
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full border border-ink/15 px-6 py-4 text-sm font-semibold uppercase tracking-wide text-ink">
                Message us on WhatsApp
              </a>
            </div>
          </div>
          <div id="project-form">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section-sm bg-blush">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-xs uppercase tracking-[0.22em] text-flux font-semibold mb-4">What we can help with</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {helpItems.map(([title, body]) => (
              <article key={title} className="rounded-3xl border border-ink/10 bg-white p-6">
                <h2 className="font-display text-xl font-semibold mb-3">{title}</h2>
                <p className="text-sm text-ink/60 leading-7">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-10">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-flux font-semibold mb-4">Who this is for</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-5" style={{ letterSpacing: "-0.03em" }}>
              Built for businesses that depend on booked calls, appointments, quotes, and inbound leads.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {fitItems.map((item) => (
              <div key={item} className="rounded-2xl border border-ink/10 bg-white px-4 py-4 text-sm text-ink/65">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm bg-ink text-cream">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-flux font-semibold mb-4">After you contact us</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-6" style={{ letterSpacing: "-0.03em" }}>
              What happens next?
            </h2>
          </div>
          <div className="space-y-5 text-cream/65 leading-8">
            <p>First, we review your website, services, current lead flow, and the problem you are trying to solve. If you already have a website or CRM, we look for the gaps that may be costing you leads.</p>
            <p>Next, we reply with the clearest recommendation. That may be a new WordPress website, a GoHighLevel setup, a landing page, a missed-call recovery workflow, a local SEO structure, or a complete website plus CRM system.</p>
            <p>If the fit is right, we send a simple proposal with scope, timeline, pricing, and next steps. If we believe you should fix something smaller first, we will tell you that too.</p>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-flux font-semibold mb-4">Why businesses contact Flux</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-6" style={{ letterSpacing: "-0.03em" }}>
              Your website and CRM should not operate separately.
            </h2>
          </div>
          <div className="space-y-5 text-ink/60 leading-8">
            <p>When they are disconnected, leads fall through the cracks. A visitor fills out a form, calls after hours, clicks a booking link, or sends a message, but if the follow-up is slow, the opportunity can disappear.</p>
            <p>We build systems where the website, forms, phone calls, calendars, CRM pipelines, SMS replies, email follow-up, and reporting work together. That means fewer missed inquiries, faster response times, and a clearer path from visitor to booked call.</p>
            <p>Your project is handled by one team, from strategy and website structure to WordPress development, GoHighLevel setup, automation testing, and post-launch support.</p>
          </div>
        </div>
      </section>

      <section className="section-sm bg-blush">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs uppercase tracking-[0.22em] text-flux font-semibold mb-4">Contact page FAQ</p>
          <div className="grid md:grid-cols-2 gap-5">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-2xl border border-ink/10 bg-white p-6">
                <summary className="cursor-pointer list-none font-display text-lg font-semibold group-open:text-flux">{question}</summary>
                <p className="mt-4 text-sm text-ink/60 leading-7">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
