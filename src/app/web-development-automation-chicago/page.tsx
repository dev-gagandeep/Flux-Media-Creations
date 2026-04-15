import { Metadata } from "next";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "High-Converting Web Design & GoHighLevel Agency in Chicago | Flux Media",
  description: "Scale your Chicago B2B or healthcare firm with Flux Media Creations. We deliver elite WordPress development, GEO-driven SEO, and automated GoHighLevel CRM pipelines across the Chicagoland area.",
  path: "/web-development-automation-chicago",
});

export default function ChicagoPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="section pt-10 md:pt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="inline-block mb-4 text-sm font-medium text-ink/60 border border-ink/20 rounded-full px-4 py-2">
                Chicago, Illinois
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Strategic Web Architecture & Intelligent Sales Automation in Chicago
              </h1>
              <p className="text-lg text-ink/70 mb-8 leading-relaxed">
                Driving Revenue for Chicago's Leading Businesses Through Automated Digital Infrastructure.
              </p>
              <p className="text-base text-ink/60 mb-8 leading-relaxed">
                In the highly competitive Midwest market, your website must be an active revenue generator. We engineer blazing-fast WordPress sites and deploy sophisticated GoHighLevel CRM systems that turn high-intent Chicago traffic into your most loyal clients and patients.
              </p>
              <button
                style={{ background: "var(--flux)", color: "white" }}
                className="inline-flex px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
              >
                Claim Your Chicago Growth Blueprint
              </button>
            </div>
            <div className="rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=800&fit=crop"
                alt="Chicago Downtown Skyline"
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
            Chicago is the economic powerhouse of the Midwest. From the massive healthcare networks and legal firms in The Loop to the sprawling B2B industrial sectors in suburbs like Naperville and Evanston, the digital environment is unforgiving. A visually pleasing but functionally static website will not survive here. Flux Media Creations specializes in high-end digital engineering. We build advanced web architectures that are intrinsically linked to powerful CRM automations. We focus heavily on "Generative Engine Optimization" (GEO) to ensure you dominate traditional local search and emerge as the top-cited authority in Chicago's rapidly evolving AI-search landscape.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Enterprise Services for Chicago</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Performance-Driven Web Development (WordPress/Elementor)",
                description: "We build Chicago-tough digital assets. Utilizing the flexibility of WordPress and the precision of Elementor, we create highly secure, incredibly fast websites optimized for the stringent standards of the US market. Our designs prioritize frictionless user journeys that guide prospects directly to conversion points.",
              },
              {
                title: "GoHighLevel CRM & Complex Sales Pipelines",
                description: "We build the automated \"brains\" of your operation. For Chicago B2B firms with long sales cycles or clinics requiring detailed intake, we configure GoHighLevel to handle the heavy lifting. We automate multi-stage lead qualification, schedule appointments, and deploy targeted email nurture campaigns to keep your pipeline full and moving.",
              },
              {
                title: "Airtable Operational Data Syncing",
                description: "We bring order to data chaos. We seamlessly connect your front-end lead generation mechanisms to customized Airtable databases. This ensures your Chicago-based sales and administrative teams have a real-time, perfectly organized view of every prospect, project, and patient interaction.",
              },
              {
                title: "Strategic SEO & AI Search Visibility (GEO)",
                description: "Ranking in Chicagoland requires aggressive, entity-based optimization. We structure your site's content and metadata so that when a corporate buyer asks an AI assistant, \"What is the most reliable automated B2B service in Chicago?\", your brand is recognized and recommended as the definitive answer.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Flux for Chicago</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Expertise in High-Ticket Conversion",
                description: "We understand the psychology of the Chicago corporate and medical buyer. Our UI/UX architectures are specifically designed to build rapid trust, demonstrate authority, and facilitate high-ticket conversions.",
              },
              {
                title: "Platform Mastery",
                description: "We don't guess with untested tech. We deploy the absolute best-in-class platforms—WordPress, Elementor, GoHighLevel, and Airtable—weaving them into a single, cohesive, and highly reliable digital ecosystem.",
              },
              {
                title: "Frictionless Compliance & Security",
                description: "For our healthcare and financial clients in the metro area, we ensure that our web architectures and lead capture systems are built with security, privacy, and industry compliance top of mind.",
              },
              {
                title: "Relentless Focus on ROI",
                description: "We measure our success purely by the metrics that impact your bottom line: reduced cost-per-acquisition, increased appointment show rates, and administrative hours saved through our automation systems.",
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
            <h3 className="text-2xl font-bold mb-6">Chicago's Competitive Market Reality</h3>
            <p className="text-ink/70 leading-relaxed mb-6">
              Chicago is a city of high standards and fierce competition; buyers here do their research and expect operational excellence. Businesses cannot afford "leaky" sales funnels or slow response times. Whether you operate a specialized spine care clinic in the suburbs needing a streamlined patient intake flow, or a logistics firm near O'Hare requiring multi-tiered lead qualification, our systems adapt to your reality. By deploying our automated architectures, you guarantee that every potential client in the Chicagoland area is greeted with an immediate, highly professional response—establishing your authority long before your competitors even open their inbox.
            </p>
            <p className="text-sm text-ink/50 font-medium">
              In Chicago, automation and authority drive premium contracts.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Chicago Enterprise Process</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: "1",
                title: "Chicagoland Market & Competitor Audit",
                description: "A granular analysis of the local search landscape, identifying the exact keywords, AI prompts, and conversion tactics your top Chicago competitors are using.",
              },
              {
                step: "2",
                title: "Silo Architecture & UI Design",
                description: "Blueprinting a targeted URL structure and designing a conversion-first front-end using Elementor to maximize user engagement and trust.",
              },
              {
                step: "3",
                title: "GoHighLevel Automation Engineering",
                description: "Custom-building your CRM pipelines—configuring automated calendars, AI chatbots, SMS triage sequences, and lead scoring protocols.",
              },
              {
                step: "4",
                title: "Database Integration & Stress Testing",
                description: "Wiring all systems into your Airtable master database and rigorously testing the automation logic to ensure flawless execution under high traffic.",
              },
              {
                step: "5",
                title: "Deployment & Authority Scaling",
                description: "Launching the site and initiating ongoing GEO/SEO strategies to capture prime real estate on Google Maps, organic search, and AI overviews.",
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
            <h3 className="text-2xl font-bold mb-6">Chicago Case Study: B2B Financial Consultancy</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-ink mb-3">Problem</h4>
                <p className="text-ink/60 leading-relaxed">
                  A specialized B2B financial consultancy based in River North was generating decent web traffic but suffering from an abysmal conversion rate. Their generic contact form resulted in unqualified leads, and their sales team was wasting 20 hours a week on "tire-kickers."
                </p>
              </div>
              <div>
                <h4 className="font-bold text-ink mb-3">Solution</h4>
                <p className="text-ink/60 leading-relaxed">
                  Flux Media Creations redesigned their site with distinct, specialized service silos. We replaced their generic forms with a GoHighLevel automated qualification flow. Prospects had to answer three qualifying questions; if qualified, they were automatically routed to a calendar booking page and synced to an Airtable CRM. If unqualified, they were routed to an automated educational email sequence.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-ink mb-3">Outcome</h4>
                <p className="text-ink/60 leading-relaxed">
                  Inbound qualified appointments increased by 55%, the sales team reclaimed their 20 hours a week to focus only on closing high-net-worth deals, and the firm's overall digital revenue increased by 30% within 4 months.
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
              alt="Chicago Business District"
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
                question: "Do you have experience working with specialized clinics or medical branding?",
                answer: "Yes, we have extensive experience architecting authoritative digital identities and patient acquisition systems specifically tailored for healthcare and specialized clinics in the competitive US market.",
              },
              {
                question: "Why is GoHighLevel superior to having separate email, calendar, and CRM software?",
                answer: "GoHighLevel eliminates \"software bloat\" and integration errors. By having your website forms, calendar, SMS, and CRM in one unified platform, the automation is faster, more reliable, and significantly reduces your monthly software expenses.",
              },
              {
                question: "How does Generative Engine Optimization (GEO) specifically help a Chicago business?",
                answer: "As search evolves, executives and patients are increasingly using AI (like ChatGPT) to research services. GEO ensures your website's data is structured so these AI models understand your expertise and recommend you over other local Chicago agencies.",
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
            Stop competing with outdated tools in a modern market.
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Elevate your Chicago business with digital infrastructure that actively generates revenue.
          </p>
          <button
            style={{ background: "white", color: "var(--flux)" }}
            className="inline-flex px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
          >
            Book Your Chicago Systems Audit Today
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
                name: "Do you have experience working with specialized clinics or medical branding?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we have extensive experience architecting authoritative digital identities and patient acquisition systems specifically tailored for healthcare and specialized clinics in the competitive US market.",
                },
              },
              {
                "@type": "Question",
                name: "Why is GoHighLevel superior to having separate email, calendar, and CRM software?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "GoHighLevel eliminates \"software bloat\" and integration errors. By having your website forms, calendar, SMS, and CRM in one unified platform, the automation is faster, more reliable, and significantly reduces your monthly software expenses.",
                },
              },
              {
                "@type": "Question",
                name: "How does Generative Engine Optimization (GEO) specifically help a Chicago business?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "As search evolves, executives and patients are increasingly using AI (like ChatGPT) to research services. GEO ensures your website's data is structured so these AI models understand your expertise and recommend you over other local Chicago agencies.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
