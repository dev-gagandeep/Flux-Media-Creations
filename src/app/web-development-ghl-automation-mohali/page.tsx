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
      {/* Hero Section - Full Width with Overlay */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&h=900&fit=crop"
          alt="Mohali Tech Corridor"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent"></div>
        <div className="relative container mx-auto px-4 flex justify-end">
          <div className="max-w-2xl">
            <div className="inline-block mb-6 text-sm font-medium text-flux bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-2">
              Mohali, Punjab
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
              Transforming Mohali's Startups with Automated Digital Infrastructure
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              From Phase 8 to QuarkCity, we build high-converting enterprise-grade websites and deploy sophisticated GoHighLevel CRM systems that turn local innovation into global revenue.
            </p>
            <button style={{ background: "var(--flux)", color: "white" }} className="inline-flex px-8 py-4 rounded-full font-semibold hover:opacity-90 transition text-lg">
              Claim Your Mohali Digital Growth Audit
            </button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-lg text-ink/70 leading-relaxed">
            Mohali is rapidly solidifying its position as the technological heartbeat of Northern India. With a massive influx of IT outsourcing firms, digital agencies, and innovative startups, relying on a basic, static website is no longer viable. Your digital presence must act as a 24/7 automated sales engineer.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-ink/2 rounded-3xl">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Services for Mohali's Tech Ecosystem</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "High-Performance Web Development", description: "WordPress & Elementor sites with clean code structure, mobile-first indexing, and rapid load times." },
              { title: "GoHighLevel CRM & Automation", description: "Automated client lifecycle management with SMS greetings, calendar scheduling, and email nurture sequences." },
              { title: "Operational Database Syncing", description: "Airtable integration creating a centralized, real-time view of all business operations." },
              { title: "Generative Engine Optimization (GEO)", description: "Entity-based NLP strategies ensuring international clients cite you as the authority." },
            ].map((service, idx) => (
              <div key={idx} className="rounded-2xl border border-ink/10 bg-white p-8 hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-ink/60 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Flux for Mohali</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Deep Mohali Tech Ecosystem Understanding", description: "Tailored digital architectures for local manufacturing vs international tech clients." },
              { title: "No-Code / Low-Code Agility", description: "Deliver highly customized, scalable solutions in a fraction of traditional hard-coding time." },
              { title: "Conversion-First Methodology", description: "Every pixel and CTA dictated by user psychology and proven CRO principles." },
              { title: "Transparent ROI Tracking", description: "Advanced analytics and dashboards tracking exact cost-per-lead and operational hours saved." },
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-ink/10 bg-white p-8">
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-ink/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Relevance */}
      <section className="section bg-gradient-to-br from-flux/5 to-transparent rounded-3xl">
        <div className="container mx-auto px-4 max-w-3xl">
          <h3 className="text-3xl font-bold mb-6">Mohali Tech Corridor Expertise</h3>
          <p className="text-ink/70 leading-relaxed mb-6">
            In Mohali's fast-paced business sectors, speed to lead is the ultimate currency. International clients expect immediate, professional communication. If your website loads slowly or lead response takes 12 hours, that contract goes to Bangalore or Pune.
          </p>
          <p className="text-ink/70 leading-relaxed">
            We provide the digital polish of a Silicon Valley agency combined with the aggressive lead-capture mechanisms required to win in the global outsourcing market.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Mohali Success Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Market Blueprinting", desc: "Competitor & SEO analysis" },
              { step: "2", title: "UI/UX Architecture", desc: "Elementor design + branding" },
              { step: "3", title: "Pipeline Engineering", desc: "GoHighLevel setup" },
              { step: "4", title: "Airtable Integration", desc: "Database + webhooks" },
              { step: "5", title: "GEO Domination", desc: "Launch & SEO push" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full border-3 border-flux bg-white flex items-center justify-center font-bold text-2xl text-flux mx-auto mb-4">{item.step}</div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-ink/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section bg-ink/2 rounded-3xl">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Results: IT Staff Augmentation Firm</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-3 text-flux">Problem</h4>
              <p className="text-ink/70">Losing 40% of inbound international leads. Generic contact form created 24-hour average response time—too slow for US/UK clients.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3 text-flux">Solution</h4>
              <p className="text-ink/70">Conversion-optimized WordPress site with targeted landing pages plus GoHighLevel "Speed-to-Lead" system sending instant personalized booking links via email and WhatsApp.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3 text-flux">Outcome</h4>
              <p className="text-ink/70"><strong>Response time: 24 hours → 60 seconds</strong> | <strong>International contract win rate up 28% in 90 days</strong> | <strong>15 hours/week reclaimed</strong> from manual follow-ups.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How Flux Compares</h2>
          <div className="overflow-x-auto rounded-2xl border border-ink/10">
            <table className="w-full">
              <thead className="bg-ink text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Feature</th>
                  <th className="px-6 py-4 text-center font-bold">Generic Agencies</th>
                  <th className="px-6 py-4 text-center font-bold">Freelancers</th>
                  <th className="px-6 py-4 text-center font-bold">Flux Media</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/10">
                {[
                  { feature: "CRM Automation", generic: "❌", freelance: "❌", flux: "✅" },
                  { feature: "Lead Qualification", generic: "❌", freelance: "❌", flux: "✅" },
                  { feature: "Data Integration", generic: "⚠️", freelance: "❌", flux: "✅" },
                  { feature: "Response Time", generic: "Hours", freelance: "Hours", flux: "Seconds" },
                  { feature: "Ongoing Support", generic: "❌", freelance: "❌", flux: "✅" },
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-ink/2"}>
                    <td className="px-6 py-4 font-semibold text-ink">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-ink/60">{row.generic}</td>
                    <td className="px-6 py-4 text-center text-ink/60">{row.freelance}</td>
                    <td className="px-6 py-4 text-center font-bold text-flux">{row.flux}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-gradient-to-br from-ink to-ink/90 text-white rounded-3xl">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What Mohali Founders Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Sharma", title: "IT Staffing Firm, Phase 8", quote: "Lead response time dropped from 24 hours to 60 seconds. International contracts up 28% in 90 days." },
              { name: "Priya Kapoor", title: "Tech Startup, Aerocity", quote: "Sales team recovered 15 hours/week. We're now focusing on closing instead of chasing." },
              { name: "Arun Verma", title: "Service Firm, QuarkCity", quote: "Automation feels like hiring 5 more team members. The cost savings are real." },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
                <p className="text-lg mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-white/70">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { question: "Do you serve QuarkCity and IT Park firms?", answer: "Yes, we specialize in high-end web architecture and automation for IT firms across all major Mohali business parks." },
              { question: "How does GoHighLevel benefit Mohali agencies?", answer: "It eliminates fragmented tools. Your website builder, email, calendar, SMS, and CRM all in one unified platform." },
              { question: "Can you target both local and international clients?", answer: "Absolutely. We use advanced silo structures creating distinct pathways: one for local Mohali SEO, another for high-ticket international conversion." },
            ].map((faq, idx) => (
              <div key={idx} className="rounded-2xl border border-ink/10 bg-white p-8">
                <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                <p className="text-ink/60 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: "var(--flux)" }} className="section text-white text-center rounded-3xl">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Your competitors are upgrading to automated systems.</h2>
          <p className="text-lg mb-8 text-white/90">Don't get left behind in the tech corridor. Build a digital engine that scales your business.</p>
          <button style={{ background: "white", color: "var(--flux)" }} className="inline-flex px-8 py-4 rounded-full font-semibold hover:opacity-90 transition text-lg">
            Book Your Mohali Strategy Session Today
          </button>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "Do you serve QuarkCity and IT Park firms?", acceptedAnswer: { "@type": "Answer", text: "Yes, we specialize in high-end web architecture and automation for IT firms across all major Mohali business parks." } }, { "@type": "Question", name: "How does GoHighLevel benefit Mohali agencies?", acceptedAnswer: { "@type": "Answer", text: "It eliminates fragmented tools. Your website builder, email, calendar, SMS, and CRM all in one unified platform." } }, { "@type": "Question", name: "Can you target both local and international clients?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. We use advanced silo structures creating distinct pathways: one for local Mohali SEO, another for high-ticket international conversion." } }] }) }} />
    </main>
  );
}
