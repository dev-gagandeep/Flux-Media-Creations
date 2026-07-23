import { safeJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  absoluteTitle: "Healthcare SEO Service for Clinics & Practices",
  description:
    "Improve clinic visibility with healthcare SEO, local SEO, service pages, provider trust, schema, and patient-focused content that drives appointments.",
  path: "/services/healthcare-seo-structure",
});

const trustItems = [
  "Healthcare SEO",
  "Local SEO Clinic",
  "Medical service pages",
  "Provider trust signals",
  "Google Business Profile",
  "Treatment page design",
  "Location pages",
  "Schema markup",
  "Appointment CTAs",
  "GoHighLevel follow-up",
];

const failReasons = [
  "Services are listed on one short page.",
  "Treatment pages do not answer patient questions.",
  "Location pages are thin or duplicated.",
  "Provider bios are weak or missing.",
  "There are no condition pages.",
  "Google Business Profile is incomplete.",
  "Reviews are not used strategically.",
  "Appointment CTAs are hard to find.",
  "FAQ sections are missing.",
  "Internal linking is weak.",
  "Schema markup is missing.",
  "Blog posts do not support service pages.",
  "Expertise, safety, and outcomes are not explained clearly.",
];

const framework = [
  {
    title: "Service Pages",
    body: "Dedicated pages for every treatment, procedure, or specialty.",
    examples: ["Pain management", "Knee pain relief", "Back pain treatment", "Varicose veins treatment", "Spider veins treatment", "Orthopedic care", "Physiotherapy", "Chiropractic", "Regenerative medicine", "Wellness services"],
  },
  {
    title: "Condition Pages",
    body: "Pages that explain symptoms, causes, treatment options, and when to see a provider.",
    examples: ["Back pain", "Knee pain", "Shoulder pain", "Leg swelling", "Varicose veins", "Sciatica", "Joint pain", "Neck pain"],
  },
  {
    title: "Provider Pages",
    body: "Doctor and provider pages that build trust through credentials, specialties, experience, education, and patient-focused introductions.",
    examples: ["Doctor profiles", "Specialist bios", "Care team pages", "Provider service focus"],
  },
  {
    title: "Location Pages",
    body: "Local pages for each city or service area, including address details, local CTAs, embedded maps, nearby areas, and local FAQs.",
    examples: ["City pages", "Service-area pages", "Multi-location clinic pages", "Local appointment CTAs"],
  },
  {
    title: "FAQ and Blog Support",
    body: "Patient-centered FAQs and educational posts that answer real questions about treatments, appointments, insurance, preparation, recovery, and next steps.",
    examples: ["Treatment explainers", "Symptom guides", "Preparation content", "Insurance guidance"],
  },
  {
    title: "Appointment Conversion Flow",
    body: "Clear phone numbers, booking buttons, forms, and CRM follow-up so patient inquiries do not get missed after the visit starts online.",
    examples: ["Appointment forms", "Click-to-call", "Missed-call text back", "Reminder workflows"],
  },
];

const deliverables = [
  ["Healthcare SEO Audit", "We review your website, service pages, local pages, Google Business Profile, technical setup, content depth, keywords, internal links, and patient conversion flow."],
  ["Keyword Research for Clinics", "We research patient-focused keywords by treatment, condition, provider, location, question, and appointment intent."],
  ["Medical Service Page Structure", "We create or update treatment pages with service details, who it is for, symptoms, options, provider expertise, FAQs, and appointment process."],
  ["Local SEO for Medical Practices", "We improve location pages, Google Business Profile signals, service area content, review strategy, and local schema guidance."],
  ["Provider Trust Signals", "We strengthen provider pages and trust sections with credentials, specialties, affiliations, patient care approach, photos, and appointment CTAs."],
  ["Healthcare E-E-A-T Enhancements", "We improve experience, expertise, authoritativeness, and trust signals through provider bios, responsible content, transparent clinic information, and update signals."],
  ["Technical SEO Audit", "We review indexability, speed signals, mobile usability, structured data, redirects, broken links, sitemap status, metadata, headings, and duplicate content."],
  ["Schema Markup Suggestions", "We suggest Organization, LocalBusiness, MedicalOrganization, Physician, MedicalClinic, Service, FAQPage, BreadcrumbList, WebPage, and Article schema where relevant."],
  ["Internal Link System", "We connect condition pages, service pages, provider pages, location pages, blogs, and appointment pages so patients and search engines can navigate the clinic's expertise."],
  ["Appointment Conversion Optimization", "We optimize calls to action, forms, phone buttons, appointment sections, and GoHighLevel CRM connection options."],
];

const architecture = [
  ["Main Pages", ["Home page", "About the clinic", "Providers", "Services", "Contact", "Schedule appointment", "Insurance information", "Patient resources"]],
  ["Service Pages", ["Pain management", "Vein treatment", "Orthopedic care", "Physiotherapy", "Chiropractic treatment", "Wellness services", "Diagnostic services"]],
  ["Condition Pages", ["Back pain", "Knee pain", "Shoulder pain", "Sciatica", "Neck pain", "Varicose veins", "Spider veins", "Leg pain", "Joint pain"]],
  ["Location Pages", ["[City] medical clinic", "Pain management in [City]", "Vein clinic in [City, State]", "Orthopedic clinic in [City]", "Physiotherapy in [City]"]],
  ["Provider Pages", ["Doctor profile", "Specialist profile", "Care team page", "Provider service focus"]],
  ["Blog and Patient Education", ["Treatment process", "Symptoms explained", "Preparation for procedure", "Recovery questions", "Insurance and appointment guidance", "Local patient education"]],
];

const trustSignals = [
  "Transparent clinic information",
  "Provider licensing",
  "Medical specialties",
  "Service descriptions",
  "Patient-centered language",
  "Appointment instructions",
  "Location information",
  "Contact details",
  "Reviews and testimonials",
  "Medical disclaimers where appropriate",
  "Updated content dates",
  "Author or reviewer info where available",
  "Internal links to related services and conditions",
];

const localSeo = [
  "Google Business Profile optimization",
  "Primary and secondary category review",
  "Clinic service listings",
  "Appointment link setup",
  "Photos and updates",
  "Review request approach",
  "Location page content",
  "Nearby area targeting",
  "NAP consistency",
  "LocalBusiness and MedicalClinic schema",
  "Local FAQs",
  "Embedded map sections",
  "Internal links between locations and services",
];

const conversionItems = [
  "Clear appointment buttons",
  "Click-to-call phone numbers",
  "Sticky CTAs on mobile",
  "Short booking request forms",
  "Trust sections near CTAs",
  "Provider images",
  "Review sections",
  "Insurance or payment details",
  "Common patient questions",
  "Location information",
  "GoHighLevel CRM integration",
  "Missed-call text back",
  "Appointment reminder workflows",
];

const specialties = [
  {
    title: "Pain Management Clinics Healthcare SEO",
    body: "Pain management patients often search by symptom before treatment name. Your site should connect back pain, neck pain, sciatica, joint pain, knee pain, shoulder pain, treatment options, providers, locations, and appointment requests.",
  },
  {
    title: "Healthcare SEO and Vein Clinic SEO",
    body: "Vein patients may search for varicose veins, spider veins, leg swelling, leg pain, visible veins, or vein treatment near me. We help organize treatment pages, symptom education, provider trust, local search, and consultation booking.",
  },
  {
    title: "Healthcare SEO for Orthopedic Practices",
    body: "Orthopedic SEO needs joint-specific pages, condition pages, treatment pages, provider pages, and location pages around how patients search: knee pain, shoulder pain, hip pain, sports injuries, arthritis care, and orthopedic doctors near me.",
  },
  {
    title: "Chiropractic and Physical Therapy Clinics Healthcare SEO",
    body: "Physical therapy and chiropractic clinics need strong local SEO, condition pages, appointment CTAs, and patient education for back pain, neck pain, injury recovery, mobility, sports rehab, posture, and local appointment searches.",
  },
];

const processSteps = [
  ["SEO Audit for Clinic", "We audit your website, rankings, local presence, service pages, technical foundation, provider trust signals, and appointment flow."],
  ["Keyword Research and Patient Intent", "We analyze how patients search for your services, conditions, treatments, locations, and providers."],
  ["SEO Structure Map", "We develop recommended page architecture including service pages, condition pages, provider pages, location pages, blogs, and FAQs."],
  ["Content Development or Writing", "We write or improve healthcare pages using clear, patient-friendly language and SEO-focused structure."],
  ["Local SEO Optimization", "We strengthen your local search foundation with location pages, Google Business Profile suggestions, service-area targeting, reviews, and local FAQs."],
  ["Technical SEO Audit", "We examine metadata, indexability, structured data, mobile experience, page speed signals, redirects, broken links, and crawl issues."],
  ["Conversion Optimization", "We optimize appointment CTAs, forms, phone links, trust sections, and CRM handoff."],
  ["Ongoing Content Strategy", "We develop a healthcare content roadmap that supports your highest-value services and patient search behavior."],
];

const pricing = [
  ["Clinic SEO Basics", "Great for smaller clinics that need an audit, metadata cleanup, service page optimization, basic local SEO, and Google Business Profile recommendations."],
  ["Build Healthcare SEO Structure", "Great for clinics needing service pages, condition pages, provider trust, location pages, FAQs, schema recommendations, and internal linking."],
  ["Complete Clinic Growth System", "Great for clinics looking for healthcare SEO, WordPress website improvements, GoHighLevel automation, appointment follow-up, missed-call text back, and review request workflows."],
];

const whyFlux = [
  ["Patient-first content", "We create pages that make services easier to understand without confusing jargon."],
  ["Search-oriented structure", "We organize services, conditions, providers, and locations around how patients actually search."],
  ["Trust-focused layout", "We place provider, clinic, review, and appointment trust signals where they matter."],
  ["Local SEO fundamentals", "We build pages and signals to help clinics compete in their real service areas."],
  ["Website plus CRM thinking", "We connect SEO visibility with appointment capture and follow-up using WordPress and GoHighLevel."],
];

const faqs = [
  ["What is healthcare SEO?", "Healthcare SEO is the process of optimizing a healthcare website so patients can find the clinic through Google Search, Google Maps, and other search platforms. It includes service pages, local SEO, provider pages, treatment content, technical SEO, and appointment conversion improvements."],
  ["How is healthcare SEO different from normal SEO?", "Healthcare SEO requires more trust, accuracy, clarity, and provider credibility. Patients need reliable information before choosing a clinic, so healthcare pages should include service details, provider credentials, location information, FAQs, appointment options, and responsible medical language."],
  ["What pages does a clinic website need for SEO?", "A clinic website usually needs a homepage, service pages, condition pages, provider pages, location pages, contact page, appointment page, FAQs, patient resources, and educational blog content."],
  ["Do clinics need location pages?", "Yes. Clinics that serve specific cities or have multiple locations should create unique location pages with services, providers, address details, hours, appointment CTAs, nearby areas, local FAQs, and Google Maps information."],
  ["What is local SEO for clinics?", "Local SEO for clinics helps patients find healthcare providers in their area. It includes Google Business Profile optimization, location pages, review strategy, NAP consistency, local keywords, maps visibility, and local schema markup."],
  ["Can SEO help my clinic get more appointment requests?", "Yes. SEO can help more patients discover your clinic, but the website also needs strong appointment CTAs, trust sections, mobile usability, forms, phone links, and follow-up systems to convert traffic into appointment requests."],
  ["Do you write healthcare website content?", "Yes. We can write patient-focused healthcare SEO content for service pages, condition pages, provider pages, location pages, FAQs, and blogs."],
  ["Can you optimize Google Business Profile for a clinic?", "Yes. We can review your clinic's Google Business Profile categories, services, description, appointment link, photos, reviews, posts, and local consistency."],
  ["Can you connect healthcare SEO with GoHighLevel?", "Yes. We can connect your clinic website forms, calls, appointment requests, missed-call text back, and follow-up workflows with GoHighLevel."],
  ["Do you guarantee rankings for medical SEO?", "No. SEO rankings cannot be guaranteed. We focus on improving your healthcare website structure, content quality, technical foundation, local signals, and patient conversion path to give your clinic a stronger chance of earning organic visibility."],
];

const internalLinks = [
  ["Search Visibility Engine", "/services/search-visibility-engine"],
  ["WordPress Website Design", "/services/wordpress-website-build"],
  ["GoHighLevel Automation", "/services/gohighlevel-automation"],
  ["Full Growth System", "/services/full-growth-system"],
  ["Healthcare Website Design Blog", "/blog/healthcare-website-design-clinic-conversions"],
  ["Contact", "/contact"],
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Healthcare SEO Structure",
  provider: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
  },
  serviceType: "Healthcare SEO and Clinic SEO Structure",
  areaServed: ["United States", "Canada", "United Kingdom", "India", "Worldwide"],
  audience: {
    "@type": "Audience",
    audienceType: "Healthcare clinics, medical practices, specialty clinics, and private practices",
  },
  description:
    "Flux Media Creations provides healthcare SEO structure for clinics and medical practices, including service pages, condition pages, provider trust signals, local SEO, schema recommendations, technical SEO, and patient appointment conversion strategy.",
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

export default function HealthcareSeoStructurePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }} />

      <main>
        <section className="section pt-40 md:pt-48 pb-20 max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <div>
              <Eyebrow>Healthcare SEO: Get Patients to Find, Trust, and Contact Your Clinic</Eyebrow>
              <h1 className="font-display font-semibold text-4xl md:text-6xl leading-tight max-w-5xl mb-6" style={{ letterSpacing: "-0.035em" }}>
                Healthcare SEO Service for Clinics and Medical Practices
              </h1>
              <p className="text-lg md:text-xl text-ink/60 leading-8 max-w-3xl mb-5">
                Patients search before they schedule. They search for symptoms, treatments, doctors, procedures, clinic locations, insurance questions, reviews, and appointment availability. If your clinic does not show up, those patients may never discover your website.
              </p>
              <p className="text-base md:text-lg text-ink/55 leading-8 max-w-3xl mb-8">
                Flux Media Creations specializes in healthcare SEO structures for clinics and medical practices that need to increase visibility on Google Search, Google Maps, and AI search platforms.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-3 rounded-full bg-flux px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(255,88,51,0.22)] transition hover:-translate-y-0.5">
                  Begin Your Healthcare SEO Audit <span aria-hidden="true">-&gt;</span>
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-3 rounded-full border border-ink/15 px-6 py-4 text-sm font-semibold uppercase tracking-wide text-ink transition hover:border-flux hover:text-flux">
                  Build My Clinic SEO Framework
                </Link>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft">
              <p className="text-xs uppercase tracking-[0.2em] text-ink/35 mb-5">Clinic visibility stack</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {trustItems.map((item) => (
                  <div key={item} className="rounded-2xl border border-ink/10 bg-cream px-4 py-3 text-sm font-medium text-ink/70">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-ink p-5 text-cream">
                <p className="text-xs uppercase tracking-[0.18em] text-cream/40 mb-3">Best for</p>
                <p className="text-sm leading-7 text-cream/70">
                  Pain management clinics, vein treatment centers, orthopedic practices, chiropractic clinics, physical therapy clinics, wellness clinics, specialty practices, and multi-location healthcare providers.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <Section eyebrow="Clinic search reality" title="Your Clinic Website Needs to Be Findable and Credible">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
            <p className="text-lg text-ink/60 leading-8">
              Healthcare SEO is not like regular SEO. A clinic website has to rank, but it also has to help patients understand their options, trust the provider, choose a location, and book an appointment.
            </p>
            <div className="rounded-3xl border border-ink/10 bg-white p-8">
              <p className="text-ink/65 leading-8">
                We build healthcare SEO frameworks around patient intent: what condition they have, what treatment they are considering, where they are searching from, which provider can help, what proof they need, and how they can book or call quickly.
              </p>
            </div>
          </div>
        </Section>

        <Section eyebrow="Problem" title="Why So Many Clinic Websites Fail to Rank">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {failReasons.map((item) => (
              <div key={item} className="rounded-2xl border border-ink/10 bg-white p-5 text-sm text-ink/70 leading-6">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-ink/60 leading-8">
            Healthcare SEO needs to go deeper because patients need more confidence before they book.
          </p>
        </Section>

        <Section eyebrow="Solution" title="A Healthcare SEO Framework Built Around the Patient Journey">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {framework.map((item) => (
              <div key={item.title} className="rounded-3xl border border-ink/10 bg-white p-6">
                <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-ink/60 leading-7 mb-4">{item.body}</p>
                <div className="flex flex-wrap gap-2">
                  {item.examples.map((example) => (
                    <span key={example} className="rounded-full bg-blush px-3 py-1 text-xs font-medium text-ink/60">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Deliverables" title="Deliverables for Healthcare SEO Structure">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {deliverables.map(([title, body]) => (
              <div key={title} className="rounded-3xl border border-ink/10 bg-white p-6">
                <h3 className="font-display text-xl font-semibold mb-3">{title}</h3>
                <p className="text-sm text-ink/60 leading-7">{body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Architecture" title="Clinic Website SEO Structure - Recommended">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {architecture.map(([title, items]) => (
              <div key={title as string} className="rounded-3xl border border-ink/10 bg-blush p-6">
                <h3 className="font-display text-xl font-semibold mb-4">{title as string}</h3>
                <ul className="space-y-2 text-sm text-ink/65">
                  {(items as string[]).map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Healthcare E-E-A-T" title="Healthcare SEO Needs Stronger Trust Factors" dark>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
            <p className="text-cream/65 leading-8">
              Healthcare pages can affect patient choices. The content has to be clear, responsible, and trustworthy. This is not about making medical claims; it is about presenting services clearly and helping patients contact the clinic for professional care.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {trustSignals.map((item) => (
                <div key={item} className="rounded-2xl border border-cream/10 bg-cream/5 px-4 py-3 text-sm text-cream/75">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section eyebrow="Local SEO" title="Local SEO for Healthcare Clinics">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8">
            <p className="text-lg text-ink/60 leading-8">
              Most patients search locally. They use phrases like near me, in a city, or best clinic near a location. If you have multiple locations, each location needs a strong page with unique services, providers, hours, contact information, and appointment CTAs.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {localSeo.map((item) => (
                <div key={item} className="rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm font-medium text-ink/70">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section eyebrow="Patient conversion" title="SEO Should Generate More Appointment Requests">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {conversionItems.map((item) => (
                <div key={item} className="rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink/70">
                  {item}
                </div>
              ))}
            </div>
            <p className="rounded-3xl bg-ink p-8 text-cream/70 leading-8">
              Traffic alone is not enough. We can connect your clinic website with <Link href="/services/gohighlevel-automation" className="text-flux hover:underline">GoHighLevel automation</Link> so forms, calls, appointment requests, missed-call text back, and reminders move into one follow-up system.
            </p>
          </div>
        </Section>

        <Section eyebrow="Specialties" title="Healthcare SEO by Clinic Type">
          <div className="grid md:grid-cols-2 gap-5">
            {specialties.map((item) => (
              <div key={item.title} className="rounded-3xl border border-ink/10 bg-white p-7">
                <h3 className="font-display text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-ink/60 leading-7">{item.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Process" title="Our Process for Healthcare SEO">
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

        <Section eyebrow="Pricing" title="Healthcare SEO Pricing Structure">
          <p className="max-w-3xl text-ink/60 leading-8 mb-8">
            Healthcare SEO structure starts at $700. Pricing is based on clinic size, number of services, number of locations, content needs, technical SEO issues, Google Business Profile setup, and whether you need new pages or existing page rewrites.
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

        <Section eyebrow="Why Flux" title="Why Select Flux Media Creations for Healthcare SEO?">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
            <p className="text-lg text-ink/60 leading-8">
              Flux Media Creations understands the full healthcare patient journey: search, trust, website experience, appointment request, CRM follow-up, and review generation. We create healthcare websites and automations for pain management, vein, orthopedic, and specialty medical practices.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {whyFlux.map(([title, body]) => (
                <div key={title} className="rounded-2xl border border-ink/10 bg-white p-5">
                  <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-ink/60 leading-7">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section eyebrow="Direct answer" title="What Is SEO in Healthcare?">
          <div className="rounded-3xl border border-ink/10 bg-white p-8">
            <p className="text-lg text-ink/65 leading-8">
              Healthcare SEO is the process of optimizing a clinic or medical practice website to be found by patients through search engines. This includes service page optimization, local SEO, provider trust signals, content for treatments, condition pages, technical SEO, schema markup, Google Business Profile optimization, and appointment-centric website architecture.
            </p>
          </div>
        </Section>

        <Section eyebrow="Internal links" title="Explore Related Healthcare SEO Resources">
          <div className="flex flex-wrap gap-3">
            {internalLinks.map(([label, href]) => (
              <Link key={label} href={href} className="rounded-full border border-ink/10 bg-white px-5 py-3 text-sm font-medium text-ink/70 transition hover:border-flux hover:text-flux">
                {label}
              </Link>
            ))}
          </div>
        </Section>

        <Section eyebrow="FAQs" title="Healthcare SEO FAQs">
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
            <Eyebrow>Ready to build your clinic SEO structure?</Eyebrow>
            <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight mb-6" style={{ letterSpacing: "-0.035em" }}>
              Patients are already searching for your services.
            </h2>
            <p className="text-lg text-ink/60 leading-8 max-w-3xl mx-auto mb-8">
              Your website needs to show up, build trust, and make the appointment process simple. Flux Media Creations helps clinics build healthcare SEO structures with service pages, condition pages, provider trust signals, local SEO, technical SEO, and appointment-focused conversion paths.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-3 rounded-full bg-flux px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white">
                Start Your Healthcare SEO Audit <span aria-hidden="true">-&gt;</span>
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-3 rounded-full border border-ink/15 px-6 py-4 text-sm font-semibold uppercase tracking-wide text-ink">
                Build My Clinic SEO Structure
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
