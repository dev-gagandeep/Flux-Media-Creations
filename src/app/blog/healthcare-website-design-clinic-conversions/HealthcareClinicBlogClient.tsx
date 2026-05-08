"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

const TOC = [
  { id: "why-matters", label: "Why It Matters" },
  { id: "patient-journey", label: "The Patient Journey" },
  { id: "must-haves", label: "Must-Have Features" },
  { id: "why-fail", label: "Why Clinics Fail" },
  { id: "automation", label: "Automation & CRM" },
  { id: "conversion-flow", label: "End-to-End Flow" },
  { id: "seo-pages", label: "SEO Page Structure" },
  { id: "metrics", label: "Metrics That Matter" },
  { id: "redesign", label: "Time to Redesign?" },
  { id: "faq", label: "FAQ" },
];

const JOURNEY_STEPS = [
  { label: "01", title: "Problem Aware", body: "Someone has a symptom, condition, or need. They do not know where to go yet." },
  { label: "02", title: "Research Phase", body: "They search online for clinics, read about services, check locations, and look at photos." },
  { label: "03", title: "Trust Stage", body: "They want provider bios, patient reviews, payment options, and a clear booking flow." },
  { label: "04", title: "Action Stage", body: "They are ready to call, book, or submit a form with the least friction possible." },
  { label: "05", title: "Follow-Up Stage", body: "How quickly does the clinic respond? This is where most clinics completely break down." },
];

const FEATURES = [
  {
    num: "01",
    title: "Crystal-Clear Homepage Message",
    body: "In 3 seconds a visitor must know what you treat, who you help, where you are, and how to book. Bury any of these and you lose the patient.",
  },
  {
    num: "02",
    title: "Dedicated Service & Treatment Pages",
    body: "Every core treatment needs its own page, not a bullet point. This is the backbone of healthcare website SEO and a passive patient-acquisition engine.",
  },
  {
    num: "03",
    title: "Mobile-First Design",
    body: "Most patients are on their phones, often late at night. If it takes more than two taps to call or book on mobile, most users give up.",
  },
  {
    num: "04",
    title: "Online Appointment Booking",
    body: "Patients who are ready to book do not want to wait until office hours. Embedded booking removes the single biggest conversion barrier.",
  },
  {
    num: "05",
    title: "Trust Signals That Actually Reassure",
    wide: true,
    list: [
      "Doctor credentials, qualifications, and photos",
      "Real clinic photos, not stock imagery",
      "Patient testimonials and Google reviews",
      "Years of experience and specialisations",
      "Insurance and payment details",
      "Hours of operation and precise location",
    ],
  },
  {
    num: "06",
    title: "Local SEO Architecture",
    body: "Without it, even a beautiful website is invisible. City and service keywords, location pages, schema markup, and a synced Google Business Profile matter.",
  },
  {
    num: "07",
    title: "Multiple Contact Methods",
    body: "Tap-to-call, short contact form, map embed, WhatsApp, or live chat. Different patients prefer different channels.",
  },
  {
    num: "08",
    title: "Strong, Visible CTAs",
    body: "Book Appointment, Request Consultation, and Check Availability need to be visible above the fold on every key page, especially on mobile.",
  },
];

const FAIL_REASONS = [
  { strong: "Generic homepage", rest: "visitors do not know what you specialise in." },
  { strong: "No clear appointment CTA", rest: "the path to booking is buried or missing." },
  { strong: "Slow load speed", rest: "Google penalises it and patients leave." },
  { strong: "Poor mobile layout", rest: "buttons are too small, text is cramped, and booking feels difficult." },
  { strong: "Stock images", rest: "the experience feels impersonal and untrustworthy." },
  { strong: "Dead-end forms", rest: "forms get submitted, but there is no confirmation or follow-up." },
  { strong: "No CRM tracking", rest: "the clinic has no idea which page or campaign sent the enquiry." },
  { strong: "No missed-call recovery", rest: "a patient calls, no one answers, and the lead is gone." },
  { strong: "No reminder system", rest: "patients do not show and appointment slots are wasted." },
];

const AUTO_FEATURES = [
  { title: "Instant SMS & Email Follow-Up", body: "Every new enquiry gets an automated reply within seconds, even after hours." },
  { title: "Missed Call Text-Back", body: "We missed your call, here is how to book online. Sent automatically, every time." },
  { title: "Appointment Reminders", body: "Confirmation, 24-hour reminder, and day-of reminder with zero manual effort." },
  { title: "Pipeline Tracking", body: "See who enquired, who booked, and who went cold in one dashboard." },
  { title: "Review Requests", body: "After every visit, a message is sent automatically asking for a Google review." },
  { title: "Staff Notifications", body: "Your team is instantly alerted the moment a new lead lands in the system." },
];

const FLOW_STEPS = [
  { num: "01", title: "Patient searches on Google", body: "Back pain physiotherapy New Jersey leads them to your optimised service page." },
  { num: "02", title: "Reads, trusts, decides", body: "Condition info, treatment options, provider credentials, and patient reviews do the selling." },
  { num: "03", title: "Clicks Book and fills intake form", body: "A short, frictionless form is embedded directly on the page." },
  { num: "04", title: "Instant CRM confirmation", body: "The form hits GoHighLevel. The patient gets a text confirmation within seconds." },
  { num: "05", title: "Team notified, lead tracked", body: "Staff get a notification. The lead appears in the CRM pipeline." },
  { num: "06", title: "Automated reminders fire", body: "24-hour and day-of reminders are sent so no-shows drop." },
  { num: "07", title: "Post-visit review request", body: "An automatic message boosts your Google presence for the next patient." },
];

const SEO_PAGES = [
  { name: "Home Page", badge: "SEO", badgeType: "seo" },
  { name: "About the Clinic", badge: "Trust" },
  { name: "Provider / Doctor Pages", badge: "Trust" },
  { name: "Service / Treatment Pages", badge: "SEO", badgeType: "seo" },
  { name: "Condition Pages", badge: "SEO", badgeType: "seo" },
  { name: "Location Pages", badge: "SEO", badgeType: "seo" },
  { name: "Insurance & Payment Page", badge: "Converts" },
  { name: "Online Appointment Booking Page", badge: "Converts" },
  { name: "Patient Blog / Resources", badge: "Authority" },
  { name: "Reviews & Testimonials", badge: "Trust" },
  { name: "Contact Page", badge: "Converts" },
];

const METRICS = [
  { title: "Phone calls from site", body: "Tracked through call-tracking numbers" },
  { title: "Weekly form submissions", body: "Appointment and enquiry requests" },
  { title: "Booking completion rate", body: "How many who start a form finish it" },
  { title: "Missed call recovery", body: "Calls recovered vs. lost forever" },
  { title: "Page load speed", body: "Target under 3 seconds" },
  { title: "Local Google rankings", body: "For your core services by city" },
  { title: "GBP actions", body: "Calls, directions, and site visits" },
  { title: "Conversion rate", body: "Percent of visitors who take action" },
  { title: "No-show rate", body: "Should drop significantly with reminders" },
];

const SIGNS = [
  "The website is old and does not represent the quality of your clinic today.",
  "It is not mobile-friendly or loads slowly.",
  "You get very few appointment requests through the site.",
  "Services are difficult to find or unclear to visitors.",
  "You are not ranking locally for the treatments you offer.",
  "Your team manually chases every lead with no automation.",
  "Patients have said booking feels confusing or difficult.",
  "No CRM tracking, so you do not know where your leads come from.",
];

export const FAQS = [
  {
    q: "What must every clinic website have?",
    a: "A clinic website needs a clear homepage message, dedicated service pages, provider information, patient trust signals, online appointment booking, mobile-first design, local SEO structure, and multiple easy-to-find contact options.",
  },
  {
    q: "How do I get a healthcare website to convert more visitors into appointments?",
    a: "Focus on the full patient journey: clear service explanations, trust signals, patient reviews, fast mobile load times, strong appointment CTAs above the fold, and CRM-connected forms and calls so every enquiry triggers immediate follow-up.",
  },
  {
    q: "Is WordPress good for healthcare website development?",
    a: "Yes. WordPress is flexible, SEO-friendly, easy to update, and ideal for service pages, blogs, landing pages, and conversion-focused layouts. It also integrates cleanly with booking tools and CRM systems like GoHighLevel.",
  },
  {
    q: "Do clinics really need online appointment booking?",
    a: "Absolutely. Patient self-scheduling removes the single biggest barrier to conversion: the wait. Patients who decide to book often do not want to call during office hours, so booking should capture that intent immediately.",
  },
  {
    q: "What can GoHighLevel do for my clinic?",
    a: "GoHighLevel enables automatic SMS and email follow-up, missed-call text-back, appointment reminders, lead pipeline tracking, staff notifications, and review request automation, all connected directly to your website.",
  },
  {
    q: "What is conversion optimisation for healthcare websites?",
    a: "It is improving your website so a higher percentage of visitors take action, such as calling, submitting a form, booking, or requesting a consultation. It combines design, content, page speed, trust signals, and backend automation.",
  },
  {
    q: "Why is my clinic website losing patient leads?",
    a: "Common causes include confusing design, weak CTAs, poor mobile experience, slow loading, long forms, and delayed or missing follow-up. Any one of these can reduce the number of visitors who become patients.",
  },
  {
    q: "What is the ideal structure for a clinic website?",
    a: "A strong clinic website usually includes Home, About, Provider pages, individual treatment pages, location pages, booking page, reviews, patient resources, and contact. Every page should support both patient decisions and local search.",
  },
];

function SectionIntro({ number, children }: { number: string; children: ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-10 bg-flux/35" />
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-flux">{number}</span>
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/35">{children}</span>
    </div>
  );
}

export default function HealthcareClinicBlogClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("why-matters");

  useEffect(() => {
    const sectionEls = TOC.map((item) => document.getElementById(item.id)).filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -55% 0px" },
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-cream">
      <section className="section pt-32 md:pt-40 pb-12 max-w-[1320px] mx-auto">
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-ink/45" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-flux transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-flux transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-ink/70">Healthcare Website Design</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <div>
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-flux/20 bg-blush px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-flux">
                Healthcare
              </span>
              <span className="rounded-full border border-ink/10 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink/50">
                Web Design
              </span>
              <span className="rounded-full border border-ink/10 bg-white px-3 py-1 text-xs font-medium text-ink/45">May 2026</span>
              <span className="rounded-full border border-ink/10 bg-white px-3 py-1 text-xs font-medium text-ink/45">12 min read</span>
            </div>

            <h1 className="font-display text-[clamp(2.5rem,6.6vw,6rem)] font-semibold leading-[0.94] tracking-[-0.04em] text-ink">
              Healthcare Website Design:
              <span className="block text-flux">What Every Clinic Needs</span>
              <span className="block text-[0.48em] leading-[1.05] tracking-[-0.025em] text-ink/82 md:max-w-4xl">
                to Convert Visitors Into Appointments
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-ink/58">
              Most clinic websites are not patient-acquisition tools. They are digital placeholders. Here is everything a real converting healthcare website needs, from design structure to full CRM automation.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/healthcare-website-crm" className="rounded-lg bg-flux px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(255,92,53,0.2)] transition-colors hover:bg-flux-dark">
                See Our Healthcare System →
              </Link>
              <Link href="/contact" className="rounded-lg border border-ink/12 bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-flux/40 hover:text-flux">
                Book a Free Audit
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-ink/10 bg-white p-5 shadow-[0_24px_80px_rgba(13,13,13,0.06)]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink/35">Clinic conversion checklist</p>
            {["Clear treatment pages", "Online appointment path", "Instant missed-call recovery", "CRM follow-up visibility"].map((item, index) => (
              <div key={item} className="flex items-center gap-4 border-t border-ink/8 py-4 first:border-t-0 first:pt-0">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-flux text-sm font-semibold text-white">
                  0{index + 1}
                </span>
                <span className="font-medium text-ink/78">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section max-w-[1320px] mx-auto pb-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_310px] lg:items-start">
          <article className="space-y-16 text-base leading-8 text-ink/66">
            <section id="why-matters" className="scroll-mt-28">
              <SectionIntro number="01">Why It Matters</SectionIntro>
              <h2 className="mb-5 font-display text-3xl font-semibold leading-tight tracking-[-0.025em] text-ink md:text-5xl">
                Your Website Is Your First Consultation
              </h2>
              <div className="space-y-5">
                <p>Over 70% of patients go online before choosing a healthcare provider. Your website is your first handshake, your first chance to build trust. The problem is not just that most clinic sites look dated. It is that they quietly lose patients every single day.</p>
                <p>Before a person picks up the phone, they are already judging you. That split-second impression happens on your website.</p>
              </div>
              <div className="my-8 grid overflow-hidden rounded-lg border border-ink/10 bg-white md:grid-cols-3">
                {[
                  ["70%", "of patients research online before choosing a provider"],
                  ["<3s", "to form a first impression on your homepage"],
                  ["60%", "of healthcare searches happen on mobile devices"],
                ].map(([num, label]) => (
                  <div key={num} className="border-b border-ink/10 p-6 text-center last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
                    <strong className="block font-display text-4xl text-flux">{num}</strong>
                    <span className="mt-2 block text-sm leading-6 text-ink/50">{label}</span>
                  </div>
                ))}
              </div>
              <p>
                A well-structured clinic website takes a concerned patient from “I found this clinic” to “I am booking an appointment” without your front desk lifting a finger. That is the level we should be designing to.
              </p>
            </section>

            <section id="patient-journey" className="scroll-mt-28 border-t border-ink/10 pt-16">
              <SectionIntro number="02">Patient Journey</SectionIntro>
              <h2 className="mb-5 font-display text-3xl font-semibold leading-tight tracking-[-0.025em] text-ink md:text-5xl">
                Build Around How Patients Actually Think
              </h2>
              <p>The biggest mistake in healthcare web development is designing for the clinic, not the patient. Your website should not be a brochure. It should be an experience that follows how patients actually behave.</p>
              <div className="mt-8 overflow-hidden rounded-lg border border-ink/10 bg-white">
                {JOURNEY_STEPS.map((step) => (
                  <div key={step.label} className="grid gap-5 border-b border-ink/8 p-6 last:border-b-0 sm:grid-cols-[56px_1fr]">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-flux/20 bg-blush font-display text-sm font-semibold text-flux">
                      {step.label}
                    </span>
                    <div>
                      <h3 className="mb-1 font-display text-xl font-semibold tracking-[-0.02em] text-ink">{step.title}</h3>
                      <p className="text-sm leading-7 text-ink/58">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6">When your website is designed around this journey with the right content, structure, and automation, each stage flows into the next. Patients feel supported, not abandoned.</p>
            </section>

            <section id="must-haves" className="scroll-mt-28 border-t border-ink/10 pt-16">
              <SectionIntro number="03">Must-Have Features</SectionIntro>
              <h2 className="mb-5 font-display text-3xl font-semibold leading-tight tracking-[-0.025em] text-ink md:text-5xl">
                What a Real Patient-Converting Clinic Website Needs
              </h2>
              <p>Here is what separates a website that generates booked appointments from one that just exists online.</p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {FEATURES.map((feature) => (
                  <div key={feature.num} className={`rounded-lg border border-ink/10 bg-white p-6 ${feature.wide ? "md:col-span-2" : ""}`}>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-flux/70">{feature.num}</p>
                    <h3 className="mb-3 font-display text-xl font-semibold tracking-[-0.02em] text-ink">{feature.title}</h3>
                    {feature.body ? <p className="text-sm leading-7 text-ink/58">{feature.body}</p> : null}
                    {feature.list ? (
                      <div className="mt-4 grid gap-2 sm:grid-cols-2">
                        {feature.list.map((item) => (
                          <span key={item} className="rounded-md border border-ink/8 bg-cream px-3 py-2 text-sm text-ink/62">
                            {item}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-flux/20 bg-blush p-8 text-center">
              <h2 className="mb-3 font-display text-3xl font-semibold tracking-[-0.025em] text-ink">Is Your Clinic Website Missing Any of These?</h2>
              <p className="mx-auto mb-6 max-w-2xl text-ink/60">We audit healthcare websites for free. Get a clear picture of exactly what is costing you appointments.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="rounded-lg bg-flux px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-flux-dark">
                  Book Your Free Audit →
                </Link>
                <Link href="/healthcare-website-crm" className="rounded-lg border border-ink/12 bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-flux/40 hover:text-flux">
                  See Our Work
                </Link>
              </div>
            </section>

            <section id="why-fail" className="scroll-mt-28 border-t border-ink/10 pt-16">
              <SectionIntro number="04">Why Clinics Fail</SectionIntro>
              <h2 className="mb-5 font-display text-3xl font-semibold leading-tight tracking-[-0.025em] text-ink md:text-5xl">
                The Uncomfortable Truth About Most Clinic Websites
              </h2>
              <p>Most clinic websites are not patient acquisition tools. They are digital proxies. And the reasons are almost always the same.</p>
              <div className="mt-8 overflow-hidden rounded-lg border border-ink/10 bg-white">
                {FAIL_REASONS.map((reason) => (
                  <div key={reason.strong} className="flex gap-4 border-b border-ink/8 p-5 last:border-b-0">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blush text-xs font-semibold text-flux">×</span>
                    <p className="text-sm leading-7 text-ink/62">
                      <strong className="text-ink">{reason.strong}</strong>: {reason.rest}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-6">If you recognise any of these, the problem is not just a design problem. The entire patient acquisition system is broken, and fixing it starts with understanding the website is step one, not the entire solution.</p>
            </section>

            <section id="automation" className="scroll-mt-28 border-t border-ink/10 pt-16">
              <SectionIntro number="05">CRM & Automation</SectionIntro>
              <h2 className="mb-5 font-display text-3xl font-semibold leading-tight tracking-[-0.025em] text-ink md:text-5xl">
                The Follow-Up System That Closes the Gap
              </h2>
              <div className="space-y-5">
                <p>The enquiry comes from the website. But it is the follow-up system that determines whether that enquiry becomes an appointment. That is where most clinics leave money on the table.</p>
                <p>
                  Integrate your website with <Link href="/services/gohighlevel-automation" className="font-medium text-flux hover:underline">GoHighLevel automation</Link> and every form submission, missed call, booking request, and message feeds into a structured CRM pipeline, triggering the right response automatically.
                </p>
              </div>
              <div className="mt-8 grid overflow-hidden rounded-lg border border-ink/10 bg-white md:grid-cols-2">
                {AUTO_FEATURES.map((feature) => (
                  <div key={feature.title} className="border-b border-ink/8 p-6 last:border-b-0 md:border-r md:odd:border-r md:even:border-r-0">
                    <h3 className="mb-2 font-display text-lg font-semibold tracking-[-0.02em] text-ink">{feature.title}</h3>
                    <p className="text-sm leading-7 text-ink/58">{feature.body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6">Clinic CRM automation turns a passive website into an active patient acquisition engine. The website draws them in. The CRM converts and keeps them.</p>
            </section>

            <section id="conversion-flow" className="scroll-mt-28 border-t border-ink/10 pt-16">
              <SectionIntro number="06">End-to-End Flow</SectionIntro>
              <h2 className="mb-5 font-display text-3xl font-semibold leading-tight tracking-[-0.025em] text-ink md:text-5xl">
                What the Full System Looks Like in Practice
              </h2>
              <p>Here is the complete patient acquisition flow for a healthcare website connected to GoHighLevel:</p>
              <div className="mt-8 rounded-lg border border-ink/10 bg-white p-3">
                {FLOW_STEPS.map((step) => (
                  <div key={step.num} className="grid gap-4 rounded-md p-4 sm:grid-cols-[44px_1fr]">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-flux text-xs font-semibold text-white">{step.num}</span>
                    <div>
                      <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-ink">{step.title}</h3>
                      <p className="text-sm leading-7 text-ink/58">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6">It is not a complicated setup. But it is the difference between a website that just sits there and one that works for your clinic 24/7.</p>
            </section>

            <section className="rounded-lg border border-ink/10 bg-white p-8">
              <h2 className="mb-3 font-display text-3xl font-semibold tracking-[-0.025em] text-ink">Want This System Built for Your Clinic?</h2>
              <p className="mb-6 text-ink/60">
                Flux Media Creations builds <Link href="/services/wordpress-website-build" className="font-medium text-flux hover:underline">WordPress healthcare websites</Link> with seamless GoHighLevel CRM automation, fully connected from day one.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/healthcare-website-crm" className="rounded-lg bg-flux px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-flux-dark">
                  See the Healthcare Package →
                </Link>
                <Link href="/contact" className="rounded-lg border border-ink/12 bg-cream px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-flux/40 hover:text-flux">
                  Talk to Us
                </Link>
              </div>
            </section>

            <section id="seo-pages" className="scroll-mt-28 border-t border-ink/10 pt-16">
              <SectionIntro number="07">SEO Structure</SectionIntro>
              <h2 className="mb-5 font-display text-3xl font-semibold leading-tight tracking-[-0.025em] text-ink md:text-5xl">
                The Right Pages, Not Just More Pages
              </h2>
              <p>
                The cornerstone of a strong <Link href="/healthcare-website-crm" className="font-medium text-flux hover:underline">healthcare website SEO</Link> strategy is having the right pages. Here is the structure we recommend for most clinics, with every page built for patients and search engines simultaneously.
              </p>
              <div className="mt-8 overflow-hidden rounded-lg border border-ink/10 bg-white">
                {SEO_PAGES.map((page, index) => (
                  <div key={page.name} className="grid grid-cols-[44px_1fr_auto] items-center gap-3 border-b border-ink/8 p-4 text-sm last:border-b-0">
                    <span className="font-display text-xs font-semibold text-flux/70">{String(index + 1).padStart(2, "0")}</span>
                    <span className="font-medium text-ink/72">{page.name}</span>
                    <span className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] ${page.badgeType === "seo" ? "bg-sage text-green-700" : "bg-blush text-flux"}`}>
                      {page.badge}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6">Together these pages are the foundation for a patient lead generation website that ranks and converts, not just one or the other.</p>
            </section>

            <section id="metrics" className="scroll-mt-28 border-t border-ink/10 pt-16">
              <SectionIntro number="08">Metrics</SectionIntro>
              <h2 className="mb-5 font-display text-3xl font-semibold leading-tight tracking-[-0.025em] text-ink md:text-5xl">
                How to Know If Your Website Is Actually Working
              </h2>
              <p>Most clinics are guessing. These are the metrics that tell you definitively whether your site is performing or quietly losing patients.</p>
              <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
                {METRICS.map((metric) => (
                  <div key={metric.title} className="bg-white p-5">
                    <h3 className="mb-2 font-display text-base font-semibold tracking-[-0.02em] text-ink">{metric.title}</h3>
                    <p className="text-sm leading-6 text-ink/55">{metric.body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6">When you have these numbers you can make real decisions. Without them you are just guessing.</p>
            </section>

            <section id="redesign" className="scroll-mt-28 border-t border-ink/10 pt-16">
              <SectionIntro number="09">Time to Redesign?</SectionIntro>
              <h2 className="mb-5 font-display text-3xl font-semibold leading-tight tracking-[-0.025em] text-ink md:text-5xl">
                Clear Signs It Is Time to Invest in a Proper Redesign
              </h2>
              <p>Not sure if your current site needs attention? These are the clearest signals that it is time to act.</p>
              <div className="mt-8 grid gap-3 md:grid-cols-2">
                {SIGNS.map((sign) => (
                  <div key={sign} className="flex gap-3 rounded-lg border border-ink/10 bg-white p-4">
                    <span className="mt-1 text-flux">→</span>
                    <p className="text-sm leading-7 text-ink/62">{sign}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6">Any one of these is a reason to act. Most of the clinics we work with have several.</p>
            </section>

            <section className="rounded-lg bg-ink p-8 text-white md:p-10">
              <h2 className="mb-3 font-display text-3xl font-semibold tracking-[-0.025em] md:text-4xl">Ready to Turn Your Website Into a Patient Acquisition Engine?</h2>
              <p className="mb-6 max-w-3xl text-white/68">
                Flux Media Creations builds high-conversion WordPress healthcare websites with GoHighLevel CRM automation. We help clinics capture every enquiry, recover missed calls, automate follow-up, and create a frictionless path from visitor to booked appointment.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/healthcare-website-crm" className="rounded-lg bg-flux px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-flux-dark">
                  See Our Healthcare System →
                </Link>
                <Link href="/contact" className="rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                  Book a Free Audit
                </Link>
              </div>
            </section>

            <section id="faq" className="scroll-mt-28 border-t border-ink/10 pt-16">
              <SectionIntro number="10">FAQ</SectionIntro>
              <h2 className="mb-8 font-display text-3xl font-semibold leading-tight tracking-[-0.025em] text-ink md:text-5xl">
                Frequently Asked Questions
              </h2>
              <div className="divide-y divide-ink/10 overflow-hidden rounded-lg border border-ink/10 bg-white">
                {FAQS.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div key={faq.q}>
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition-colors hover:bg-blush/50"
                        aria-expanded={isOpen}
                      >
                        <span className="font-display text-lg font-semibold tracking-[-0.02em] text-ink">{faq.q}</span>
                        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg transition-transform ${isOpen ? "rotate-45 border-flux text-flux" : "border-ink/12 text-ink/45"}`}>
                          +
                        </span>
                      </button>
                      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                        <div className="overflow-hidden">
                          <p className="px-5 pb-5 text-sm leading-7 text-ink/62">{faq.a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-4">
              <div className="rounded-lg border border-ink/10 bg-white p-5 shadow-[0_20px_60px_rgba(13,13,13,0.04)]">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink/35">On this page</p>
                <nav aria-label="Table of contents">
                  <ul className="space-y-1">
                    {TOC.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                            activeSection === item.id ? "bg-blush text-flux" : "text-ink/55 hover:bg-cream hover:text-ink"
                          }`}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="rounded-lg bg-ink p-5 text-white">
                <p className="mb-2 font-display text-xl font-semibold tracking-[-0.02em]">Want this system built for your clinic?</p>
                <p className="mb-4 text-sm leading-6 text-white/65">See the healthcare package for websites, reminders, missed-call recovery, and CRM follow-up.</p>
                <Link href="/healthcare-website-crm" className="inline-flex w-full justify-center rounded-lg bg-flux px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-flux-dark">
                  View Healthcare Package →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
