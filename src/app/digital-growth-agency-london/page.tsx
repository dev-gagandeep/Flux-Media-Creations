import { Metadata } from "next";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "Premium Web Development & GoHighLevel Agency in London | Flux Media",
  description: "Scale your London B2B or healthcare firm with Flux Media Creations. We deliver elite WordPress development, GEO-driven SEO, and automated GoHighLevel CRM pipelines across London and UK.",
  path: "/digital-growth-agency-london",
});

export default function LondonPage() {
  return (
    <main className="bg-white">
      <section className="relative h-screen flex items-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1488747279002-c8523379faaa?w=1600&h=900&fit=crop" alt="London Skyline" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent"></div>
        <div className="relative container mx-auto px-4 flex justify-end">
          <div className="max-w-2xl">
            <div className="inline-block mb-6 text-sm font-medium text-flux bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-2">London, UK</div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">Strategic Digital Infrastructure for London's Leading Agencies & Service Firms</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">In the hyper-competitive London market, your digital presence must exude authority and generate qualified leads. We engineer WordPress architectures coupled with sophisticated GoHighLevel automation systems.</p>
            <button style={{ background: "var(--flux)", color: "white" }} className="inline-flex px-8 py-4 rounded-full font-semibold hover:opacity-90 transition text-lg">
              Claim Your London Growth Strategy
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-lg text-ink/70 leading-relaxed">London is the world's leading global financial hub and centre for business services. From Canary Wharf to Harley Street to tech startups in East London, the competitive environment is relentless. Businesses here require digital infrastructure that establishes immediate credibility and automates complex lead qualification.</p>
        </div>
      </section>

      <section className="section bg-ink/2 rounded-3xl">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Services for London's Market</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Premium Web Architecture (WordPress/Elementor)", description: "Building authoritative, lightning-fast websites that immediately communicate premium positioning to discerning London decision-makers." },
              { title: "Complex B2B CRM & Sales Automation", description: "GoHighLevel configured for long sales cycles, multi-stakeholder decisions, and complex lead qualification flows." },
              { title: "Enterprise Data Syncing (Airtable)", description: "Centralizing lead generation across departments with real-time dashboards enabling management visibility and team coordination." },
              { title: "AI-Driven SEO & Global Positioning", description: "Entity-based optimization ensuring recognition as the definitive authority while maintaining local UK presence in Google and AI search." },
            ].map((service, idx) => (
              <div key={idx} className="rounded-2xl border border-ink/10 bg-white p-8 hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-ink/60 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Flux for London</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Mastery of Premium UK Market", description: "Understand the psychology of London buyers who demand excellence, compliance, and sophisticated digital experiences." },
              { title: "Global Positioning Expertise", description: "Build authority across UK while maintaining international appeal for multinational clients and overseas partnerships." },
              { title: "Compliance & Data Security", description: "UK GDPR, data protection, and FCA compliance baked into our architecture from ground up." },
              { title: "Enterprise-Grade Execution", description: "Handle multi-million-pound contracts, complex workflows, and demanding stakeholder expectations." },
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-ink/10 bg-white p-8">
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-ink/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-flux/5 to-transparent rounded-3xl">
        <div className="container mx-auto px-4 max-w-3xl">
          <h3 className="text-3xl font-bold mb-6">London's Digital Excellence Standard</h3>
          <p className="text-ink/70 leading-relaxed mb-6">London businesses competing at global level cannot afford digital mediocrity. Herein lies your opportunity: clients demand premium positioning combined with operational efficiency. Our systems deliver both—authoritative design coupled with automated lead management.</p>
          <p className="text-ink/70 leading-relaxed">In a city where every competitor is sophisticinated and well-capitalized, automation becomes your strategic advantage.\</p>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our London Success Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "London Market Analysis", desc: "Competitive landscape + positioning" },
              { step: "2", title: "Premium Design Architecture", desc: "Elementor + authority positioning" },
              { step: "3", title: "GoHighLevel Advanced Configuration", desc: "Complex pipelines + compliance" },
              { step: "4", title: "Data Infrastructure", desc: "Airtable + security compliance" },
              { step: "5", title: "Authority & Dominance Launch", desc: "GEO/SEO for UK + global reach" },
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

      <section className="section bg-ink/2 rounded-3xl">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Results: B2B Consulting Firm</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-3 text-flux">Problem</h4>
              <p className="text-ink/70">High-value consultancy generating decent traffic but inefficient lead qualification. Sales team spending excessive time on unqualified prospects. International expansion hindered by slow response times.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3 text-flux">Solution</h4>
              <p className="text-ink/70">Rebuilt with premium positioning and GoHighLevel qualification system. Prospects routed based on service interest, budget indication, and timeline. Multi-step nurture sequences deployed automatically.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3 text-flux">Outcome</h4>
              <p className="text-ink/70"><strong>Inbound qualified leads doubled in 90 days</strong> | <strong>Sales velocity improved 40%</strong> | <strong>International expansion accelerated</strong>.</p>
            </div>
          </div>
        </div>
      </section>

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
                  { feature: "UK Compliance", generic: "⚠️", freelance: "❌", flux: "✅" },
                  { feature: "Complex Lead Flows", generic: "❌", freelance: "❌", flux: "✅" },
                  { feature: "International Scaling", generic: "⚠️", freelance: "❌", flux: "✅" },
                  { feature: "Enterprise Support", generic: "❌", freelance: "❌", flux: "✅" },
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

      <section className="section bg-gradient-to-br from-ink to-ink/90 text-white rounded-3xl">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What London Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Charlotte Wells", title: "Management Consulting, Canary Wharf", quote: "Qualified leads doubled within 90 days. Sales team can finally focus on high-value negotiations." },
              { name: "Dr. James Hartley", title: "Medical Innovation Agency, Harley Street", quote: "The premium positioning works perfectly. Clients see us as industry leaders from first page load." },
              { name: "Sophie Chen", title: "Tech Services Firm, East London", quote: "Automation handles everything. We're growing faster than we ever could with manual processes." },
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

      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { question: "Are you compliant with UK GDPR and data protection regulations?", answer: "Absolutely. Our architecture incorporates UK GDPR, ICO requirements, and data protection best practices from ground up." },
              { question: "Can you scale our system as we grow internationally?", answer: "Yes. We build architecture designed for multi-region expansion with local compliance in each target market." },
              { question: "Do you provide ongoing support and optimization?", answer: "Yes. Our clients receive ongoing optimization, compliance updates, and performance monitoring as standard." },
            ].map((faq, idx) => (
              <div key={idx} className="rounded-2xl border border-ink/10 bg-white p-8">
                <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                <p className="text-ink/60 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--flux)" }} className="section text-white text-center rounded-3xl">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Establish unquestionable authority in the London market.</h2>
          <p className="text-lg mb-8 text-white/90">Build digital infrastructure that attracts premium clients and scales internationally.</p>
          <button style={{ background: "white", color: "var(--flux)" }} className="inline-flex px-8 py-4 rounded-full font-semibold hover:opacity-90 transition text-lg">
            Book Your London Strategy Consultation
          </button>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "Are you compliant with UK GDPR?", acceptedAnswer: { "@type": "Answer", text: "Yes, our architecture incorporates UK GDPR, ICO requirements, and data protection best practices." } }, { "@type": "Question", name: "Can you scale internationally?", acceptedAnswer: { "@type": "Answer", text: "Yes. We build architecture designed for multi-region expansion with local compliance in each market." } }, { "@type": "Question", name: "Do you provide ongoing support?", acceptedAnswer: { "@type": "Answer", text: "Yes, our clients receive ongoing optimization, compliance updates, and performance monitoring." } }] }) }} />
    </main>
  );
}
