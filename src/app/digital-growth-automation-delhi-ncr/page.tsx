import { Metadata } from "next";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "Premier Web Development & GoHighLevel Agency in Delhi NCR | Flux Media",
  description: "Dominate the competitive Delhi NCR market. We engineer high-authority WordPress websites, AI-driven SEO, and automated CRM pipelines for B2B enterprises and healthcare leaders across Gurgaon, Noida, and Delhi.",
  path: "/digital-growth-automation-delhi-ncr",
});

export default function DelhiNCRPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="section pt-10 md:pt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="inline-block mb-4 text-sm font-medium text-ink/60 border border-ink/20 rounded-full px-4 py-2">
                Delhi NCR, India
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                High-Conversion Web Architecture & Enterprise Lead Automation in Delhi NCR
              </h1>
              <p className="text-lg text-ink/70 mb-8 leading-relaxed">
                Engineering Digital Dominance for Delhi NCR's Business Elite.
              </p>
              <p className="text-base text-ink/60 mb-8 leading-relaxed">
                In India's most competitive corporate landscape, average digital presence means invisible. From Cyber City to Noida Sector 62, we build high-performance digital ecosystems and automated GoHighLevel pipelines that turn your traffic into high-ticket enterprise clients and patient bookings.
              </p>
              <button
                style={{ background: "var(--flux)", color: "white" }}
                className="inline-flex px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
              >
                Schedule Your Delhi NCR Market Audit
              </button>
            </div>
            <div className="rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=800&fit=crop"
                alt="Delhi NCR Skyline"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-lg text-ink/70 leading-relaxed">
            The Delhi National Capital Region (NCR) operates at a staggering scale. It is a massive, hyper-competitive hub for multinational corporations, high-end B2B service providers, and world-class medical facilities. In this environment, a standard website is a critical missed opportunity. Flux Media Creations provides the sophisticated technical infrastructure required to cut through the noise. We blend elite, authoritative web design with "Generative Engine Optimization" to ensure your brand isn't just found—it is revered as the premier choice by both Google algorithms and AI search assistants. We build systems designed for scale, volume, and elite prestige.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Enterprise Solutions for Delhi NCR</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Enterprise-Grade Web Development (WordPress/Elementor)",
                description: "We build digital fortresses. Utilizing advanced WordPress architecture and Elementor design systems, we create visually stunning, authoritative websites that load in under two seconds. Our designs are tailored to instantly communicate trust to high-net-worth individuals and corporate decision-makers.",
              },
              {
                title: "Complex Healthcare & B2B CRM Automation",
                description: "Delhi NCR deals in high volume. We specialize in mapping out multi-step, complex sales and intake journeys in GoHighLevel. Whether you need HIPAA-compliant-style data handling for a South Delhi medical clinic or multi-tiered lead qualification for a Gurgaon consultancy, our automated pipelines handle the heavy lifting.",
              },
              {
                title: "AI-Driven SEO & Entity Optimization (GEO)",
                description: "Ranking in Delhi requires precision. We don't just target broad keywords; we target \"entities.\" We weave deep semantic relevance into your site, ensuring your business is recognized as the authority across the entire NCR geography, positioning you perfectly for AI overviews (ChatGPT/Gemini) and Google's Search Generative Experience.",
              },
              {
                title: "Centralized Data Operations (Airtable)",
                description: "Managing lead flow across multiple NCR branch locations can be chaotic. We integrate your front-end lead generation into highly structured Airtable databases, allowing your management to track performance, lead disposition, and ROI across every department in real-time.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-ink/10 bg-white p-8 hover:border-flux/30 transition"
              >
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-ink/60 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Flux for Delhi NCR</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Mastery of High-Volume Architecture",
                description: "We understand the technical strain of the NCR market. Our systems are built to handle sudden spikes in traffic and lead volume without breaking, ensuring your automated follow-ups fire perfectly every time.",
              },
              {
                title: "Prestige-Focused Design Language",
                description: "We know that B2B buyers in Connaught Place or Cyber City judge your credibility within milliseconds. Our UI/UX design is meticulously crafted to exude corporate authority and premium service quality.",
              },
              {
                title: "Data-Backed Strategy",
                description: "Our decisions are driven by granular lead generation research specific to the NCR market. We analyze exactly what your top competitors are doing right—and where their funnels are leaking—so we can build a superior system.",
              },
              {
                title: "End-to-End System Ownership",
                description: "We don't just hand you a website and walk away. We own the entire digital pipeline, from the first SEO click to the final automated calendar booking.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-ink/10 bg-white p-8"
              >
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-ink/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Relevance */}
      <section className="section-sm">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-3xl border border-flux/20 bg-gradient-to-br from-flux/5 to-transparent p-10">
            <h3 className="text-2xl font-bold mb-6">Delhi NCR's Unique Market Demands</h3>
            <p className="text-ink/70 leading-relaxed mb-6">
              Delhi NCR is a premier destination for both massive corporate contracts and specialized medical tourism. Businesses here face the unique challenge of managing a high volume of incredibly diverse inquiries—from local residents to international patients and foreign investors. Our automated triage systems are specifically engineered for this complexity. We build intelligent routing protocols that instantly qualify leads, direct them to the appropriate department, and ensure your brand maintains a professional, high-end image, responding faster than any competitor in the region.
            </p>
            <p className="text-sm text-ink/50 font-medium">
              In Delhi NCR, speed and sophistication win enterprise contracts.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Delhi NCR Enterprise Process</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: "1",
                title: "NCR Ecosystem Audit",
                description: "Deep analysis of the local search landscape across Gurgaon, Noida, and Delhi, identifying high-value conversion gaps in your industry.",
              },
              {
                step: "2",
                title: "Authoritative Brand Architecture",
                description: "Developing the visual language and building a targeted URL silo structure designed to rank for high-intent, location-specific keywords.",
              },
              {
                step: "3",
                title: "Intelligent Routing & Automation",
                description: "Building the GoHighLevel pipelines to capture, score, and route your incoming NCR leads to the correct sales or intake personnel.",
              },
              {
                step: "4",
                title: "Database Integration & QA",
                description: "Wiring your front-end forms directly into Airtable for flawless team hand-offs, followed by rigorous stress testing of all automated triggers.",
              },
              {
                step: "5",
                title: "Launch & Authority Scaling",
                description: "Executing our advanced GEO/SEO protocols to establish immediate search engine dominance and drive targeted, high-ticket traffic.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="w-12 h-12 rounded-full border-2 border-flux bg-white flex items-center justify-center font-bold text-flux mb-4">
                  {item.step}
                </div>
                <h4 className="font-bold text-sm mb-2">{item.title}</h4>
                <p className="text-xs text-ink/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-sm">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-3xl border border-ink/10 bg-white p-10">
            <h3 className="text-2xl font-bold mb-6">Delhi NCR Case Study: Premium Dental & Aesthetic Clinic</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-ink mb-3">Problem</h4>
                <p className="text-ink/60 leading-relaxed">
                  A premium, multi-location dental and aesthetic clinic with branches in South Delhi and Gurgaon was struggling with a high cost-per-lead and a massive 45% "no-show" rate for booked consultations, wasting valuable doctor time.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-ink mb-3">Solution</h4>
                <p className="text-ink/60 leading-relaxed">
                  Flux Media Creations completely rebuilt their digital intake process. We launched a high-authority, incredibly fast WordPress site with specific location pages. We integrated a custom GoHighLevel pipeline featuring an automated "Instant Booking" system, coupled with an aggressive SMS and WhatsApp reminder sequence leading up to the appointment.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-ink mb-3">Outcome</h4>
                <p className="text-ink/60 leading-relaxed">
                  The clinic experienced a 35% increase in highly qualified patient inquiries and, crucially, reduced their no-show rate to under 12% within two months, dramatically increasing their daily revenue yield.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="section-sm">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&h=500&fit=crop"
              alt="Delhi NCR Business District"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Do you serve clients across the entire NCR, including Noida and Faridabad?",
                answer: "Yes, we architect digital systems for enterprises and clinics across the entire National Capital Region, implementing location-specific routing if you have multiple branches.",
              },
              {
                question: "How do you handle the high volume of spam leads typical in the Delhi market?",
                answer: "Our GoHighLevel systems include advanced bot-protection and custom qualification forms that filter out \"tire-kickers\" and spam, ensuring your sales team only speaks to verified, high-intent prospects.",
              },
              {
                question: "Can your systems integrate with our existing hospital or corporate CRM?",
                answer: "Yes. Through advanced webhooks, API connections, and Airtable syncing, we can push qualified lead data seamlessly into your existing legacy systems.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="rounded-3xl border border-ink/10 bg-white p-8">
                <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                <p className="text-ink/60 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        style={{ background: "var(--flux)" }}
        className="section text-white text-center"
      >
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            In Delhi NCR, the business that responds fastest, wins.
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Upgrade your digital infrastructure to an automated powerhouse today.
          </p>
          <button
            style={{ background: "white", color: "var(--flux)" }}
            className="inline-flex px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
          >
            Secure Your Delhi NCR Market Advantage
          </button>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Do you serve clients across the entire NCR, including Noida and Faridabad?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we architect digital systems for enterprises and clinics across the entire National Capital Region, implementing location-specific routing if you have multiple branches.",
                },
              },
              {
                "@type": "Question",
                name: "How do you handle the high volume of spam leads typical in the Delhi market?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our GoHighLevel systems include advanced bot-protection and custom qualification forms that filter out \"tire-kickers\" and spam, ensuring your sales team only speaks to verified, high-intent prospects.",
                },
              },
              {
                "@type": "Question",
                name: "Can your systems integrate with our existing hospital or corporate CRM?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Through advanced webhooks, API connections, and Airtable syncing, we can push qualified lead data seamlessly into your existing legacy systems.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
