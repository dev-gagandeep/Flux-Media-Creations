import { Metadata } from "next";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "Elite Web Development & GoHighLevel Agency in Mohali | Flux Media Creations",
  description: "Scale your Mohali IT firm or startup with Flux Media Creations. We engineer blazing-fast Elementor websites, intelligent AI SEO, and automated GoHighLevel CRM workflows tailored for the Punjab tech corridor.",
  path: "/web-development-ghl-automation-mohali",
});

export default function MohaliPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="section pt-10 md:pt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="inline-block mb-4 text-sm font-medium text-ink/60 border border-ink/20 rounded-full px-4 py-2">
                Mohali, Punjab
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Advanced Web Architecture & Business Automation for Mohali's Tech Corridor
              </h1>
              <p className="text-lg text-ink/70 mb-8 leading-relaxed">
                Transforming Mohali's Startups and Agencies with Automated Digital Infrastructure.
              </p>
              <p className="text-base text-ink/60 mb-8 leading-relaxed">
                From Phase 8 Industrial Area to QuarkCity, we build high-converting, enterprise-grade websites and deploy sophisticated GoHighLevel CRM systems. Stop losing leads to slow response times and start turning local innovation into global revenue.
              </p>
              <button
                style={{ background: "var(--flux)", color: "white" }}
                className="inline-flex px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
              >
                Claim Your Mohali Digital Growth Audit
              </button>
            </div>
            <div className="rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=800&fit=crop"
                alt="Mohali Tech Corridor"
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
            Mohali is rapidly solidifying its position as the technological heartbeat of Northern India. With a massive influx of IT outsourcing firms, digital agencies, and innovative startups across Aerocity and the IT Park, relying on a basic, static website is no longer a viable business strategy. Your digital presence must act as a 24/7 automated sales engineer. Flux Media Creations bridges the critical gap between high-end front-end design and back-end operational logic. We don't just build "brochure sites"; we architect robust digital ecosystems that capture inbound traffic, automate tedious follow-ups, and position your brand as an undisputed authority in the highly competitive Punjab tech corridor.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Services for Mohali's Tech Ecosystem</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "High-Performance Web Development (WordPress & Elementor)",
                description: "We engineer visually striking, highly responsive websites tailored for Mohali's tech-savvy market. Our architecture focuses on clean code structure, mobile-first indexing, and rapid load times. We utilize advanced Elementor frameworks to ensure your site is not only beautiful but incredibly easy for your internal team to manage and scale as your company grows.",
              },
              {
                title: "GoHighLevel CRM & Agency Automation",
                description: "Mohali is a hub for B2B services. We configure GoHighLevel to automate your entire client lifecycle. From the moment a prospect fills out a form, our systems trigger automated SMS greetings, schedule calendar appointments without human intervention, and deploy multi-week email nurture sequences to keep your agency top-of-mind.",
              },
              {
                title: "Operational Database Syncing (Airtable)",
                description: "We eliminate data silos and messy spreadsheets. By integrating your front-end lead generation directly into structured Airtable databases, we give your project managers and sales teams a centralized, real-time view of all business operations, ensuring flawless hand-offs and zero lost data.",
              },
              {
                title: "Generative Engine Optimization (GEO) & AI SEO",
                description: "Traditional local SEO is just the baseline. We optimize your brand to dominate \"near me\" searches in Mohali while executing entity-based NLP (Natural Language Processing) strategies. This ensures that when international clients ask AI tools like ChatGPT or Perplexity for the \"best software development partner in Mohali,\" Flux Media Creations ensures your company is the cited authority.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Flux for Mohali</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Deep Understanding of the Mohali Tech Ecosystem",
                description: "We know the difference between pitching to a local manufacturing firm in Phase 9 and an international tech client seeking a Phase 8 outsourcing partner. Our digital architectures are tailored to your specific buyer persona.",
              },
              {
                title: "No-Code / Low-Code Agility",
                description: "We leverage the power of elite platforms like WordPress, Elementor, and Airtable to deliver highly customized, scalable solutions in a fraction of the time it takes traditional hard-coding agencies, giving you a faster time-to-market.",
              },
              {
                title: "Conversion-First Methodology",
                description: "Traffic without action is a vanity metric. Every pixel, form placement, and call-to-action on your site is dictated by user psychology and proven conversion rate optimization (CRO) principles.",
              },
              {
                title: "Transparent ROI Tracking",
                description: "We install advanced analytics and GoHighLevel dashboard reporting so you can track the exact cost-per-lead, lead velocity, and operational hours saved through our automated systems.",
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
            <h3 className="text-2xl font-bold mb-6">Why the Mohali Market Demands Speed</h3>
            <p className="text-ink/70 leading-relaxed mb-6">
              In the fast-paced environment of Mohali's business sectors, speed to lead is the ultimate currency. International clients evaluating Mohali-based firms expect immediate, professional communication. If your website takes 4 seconds to load or your lead response takes 12 hours, that contract is going to a competitor in Bangalore or Pune. Our automated architectures are designed specifically for the ambitious Mohali entrepreneur. We provide the digital polish of a Silicon Valley agency combined with the aggressive lead-capture mechanisms required to win in the global outsourcing market.
            </p>
            <p className="text-sm text-ink/50 font-medium">
              Digital speed is competitive advantage in Mohali.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Mohali Success Process</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: "1",
                title: "Local Market & Competitor Blueprinting",
                description: "We conduct a deep-dive analysis of your direct Mohali competitors and map out a winning URL structure and SEO strategy.",
              },
              {
                step: "2",
                title: "UI/UX Prototyping & Architecture",
                description: "Crafting the visual front-end using Elementor, ensuring the design aligns perfectly with your brand's authority.",
              },
              {
                step: "3",
                title: "GoHighLevel Pipeline Engineering",
                description: "Building the automated logic—configuring calendars, setting up SMS/Email triggers, and mapping out the sales pipeline stages.",
              },
              {
                step: "4",
                title: "Airtable Integration & Stress Testing",
                description: "Connecting all forms via webhooks to your central Airtable database and simulating high-volume traffic to ensure zero breakage.",
              },
              {
                step: "5",
                title: "Deployment & GEO Domination",
                description: "Launching the finalized system and initiating aggressive entity-based SEO campaigns to capture both Google and AI search share.",
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
            <h3 className="text-2xl font-bold mb-6">Mohali Case Study: IT Staff Augmentation Firm</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-ink mb-3">Problem</h4>
                <p className="text-ink/60 leading-relaxed">
                  A growing IT staff augmentation firm based in Phase 8 was losing up to 40% of their inbound international leads. Their generic contact form routed to a general inbox, leading to a 24-hour average response time—far too slow for US and UK clients.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-ink mb-3">Solution</h4>
                <p className="text-ink/60 leading-relaxed">
                  Flux Media Creations completely overhauled their digital presence. We deployed a conversion-optimized WordPress site with targeted landing pages for specific tech stacks. We then integrated a GoHighLevel "Speed-to-Lead" system that instantly sent a personalized calendar booking link via email and WhatsApp the moment a lead was captured, simultaneously updating their Airtable CRM.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-ink mb-3">Outcome</h4>
                <p className="text-ink/60 leading-relaxed">
                  The firm's lead response time dropped from 24 hours to under 60 seconds. Within 90 days, their international contract win rate increased by 28%, and their sales team reclaimed 15 hours a week previously spent on manual follow-ups.
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
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&h=500&fit=crop"
              alt="Mohali IT Park"
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
                question: "Do you provide services to companies located within QuarkCity and the IT Park?",
                answer: "Yes, we specialize in high-end web architecture and automation for IT, tech, and service firms across all major Mohali business parks.",
              },
              {
                question: "How does GoHighLevel benefit a Mohali-based agency?",
                answer: "GoHighLevel replaces fragmented tools. It acts as your website builder, email marketing software, calendar system, and CRM all in one, dramatically lowering your monthly software overhead while automating client acquisition.",
              },
              {
                question: "Can you ensure our site appeals to international clients while ranking locally?",
                answer: "Absolutely. We use advanced silo structures to create distinct pathways on your site: one optimized for local Mohali talent acquisition and local SEO, and another optimized for high-ticket international B2B client conversion.",
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
            Your Mohali competitors are upgrading to automated systems.
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Don't get left behind in the tech corridor. Let's build a digital engine that scales your business effortlessly.
          </p>
          <button
            style={{ background: "white", color: "var(--flux)" }}
            className="inline-flex px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
          >
            Book Your Mohali Strategy Session Today
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
                name: "Do you provide services to companies located within QuarkCity and the IT Park?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we specialize in high-end web architecture and automation for IT, tech, and service firms across all major Mohali business parks.",
                },
              },
              {
                "@type": "Question",
                name: "How does GoHighLevel benefit a Mohali-based agency?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "GoHighLevel replaces fragmented tools. It acts as your website builder, email marketing software, calendar system, and CRM all in one, dramatically lowering your monthly software overhead while automating client acquisition.",
                },
              },
              {
                "@type": "Question",
                name: "Can you ensure our site appeals to international clients while ranking locally?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. We use advanced silo structures to create distinct pathways on your site: one optimized for local Mohali talent acquisition and local SEO, and another optimized for high-ticket international B2B client conversion.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
