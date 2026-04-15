import { Metadata } from "next";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "Web Development & AI Automation Agency in Chandigarh | Flux Media Creations",
  description: "Scale your Chandigarh business with premium web development, GoHighLevel automation, and AI-driven growth strategies. Serving Tricity and Punjab tech ecosystem.",
  path: "/web-development-automation-chandigarh",
});

export default function ChandigarhPage() {
  return (
    <main className="bg-white">
      <section className="relative h-screen flex items-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&h=900&fit=crop" alt="Chandigarh Cityscape" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent"></div>
        <div className="relative container mx-auto px-4 flex justify-end">
          <div className="max-w-2xl">
            <div className="inline-block mb-6 text-sm font-medium text-flux bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-2">Chandigarh, India (Tricity)</div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">Advanced Digital Systems for Chandigarh's Growing Tech Ecosystem</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">From Sector 17 to the tech corridor, we build high-converting websites and deploy sophisticated GoHighLevel CRM systems transforming Tricity businesses into digital-first powerhouses.</p>
            <button style={{ background: "var(--flux)", color: "white" }} className="inline-flex px-8 py-4 rounded-full font-semibold hover:opacity-90 transition text-lg">
              Claim Your Chandigarh Growth Advantage
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-lg text-ink/70 leading-relaxed">Chandigarh is rapidly establishing itself as a hub for IT firms, professional services, and innovative startups. The planned city's business landscape is expanding exponentially. In this growing competitive environment, businesses require sophisticated digital infrastructure that captures both local market share and attracts clients from across India and globally.</p>
        </div>
      </section>

      <section className="section bg-ink/2 rounded-3xl">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Services for Chandigarh's Ecosystem</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "High-Performance Web Development", description: "WordPress & Elementor websites optimized for speed, mobile-first indexing, and conversion pathways designed for Chandigarh's internet-savvy market." },
              { title: "GoHighLevel CRM & Lead Automation", description: "Automated client lifecycle management with intelligent routing, SMS/Email sequences, and calendar scheduling eliminating manual follow-ups." },
              { title: "Database & Operations Integration", description: "Airtable integration creating centralized lead management and project tracking visible real-time to your entire team." },
              { title: "AI-Driven SEO & Market Optimization", description: "Entity-based optimization ensuring local dominance in Chandigarh while positioning your brand for Pan-India reach." },
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
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Flux for Chandigarh</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Deep Chandigarh Market Understanding", description: "Expertise serving Chandigarh-specific sectors: IT firms, professional services, real estate, healthcare, and startups." },
              { title: "Pan-India Positioning Strategy", description: "Build local authority while architecting systems for Pan-India reach and international visibility." },
              { title: "Rapid Growth Mentality", description: "Systems designed to scale with your business. Grow from 5 to 50+ employees without rebuilding infrastructure." },
              { title: "Measurable ROI Focus", description: "Track lead costs, conversion rates, and operational hours saved—every metric tied to business impact." },
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
          <h3 className="text-3xl font-bold mb-6">Chandigarh's Market Opportunity</h3>
          <p className="text-ink/70 leading-relaxed mb-6">Chandigarh presents a unique opportunity. The city is growing rapidly but competition for clients remains manageable compared to Delhi, Bangalore, or Mumbai. Businesses that establish strong digital positioning now will dominate their sectors for years to come.</p>
          <p className="text-ink/70 leading-relaxed">Our automated systems position you as the market leader—faster to respond, more professional, and more capable of handling scale than any local competitor.</p>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Chandigarh Success Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Tricity Market Analysis", desc: "Sector-specific strategy + competitor analysis" },
              { step: "2", title: "Brand & Web Architecture", desc: "Elementor design + local + Pan-India positioning" },
              { step: "3", title: "Automation Configuration", desc: "GoHighLevel CRM setup + workflows" },
              { step: "4", title: "Data Infrastructure", desc: "Airtable integration + operational setup" },
              { step: "5", title: "Launch & Growth Scaling", desc: "SEO/GEO execution + market dominance" },
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
          <h2 className="text-3xl font-bold mb-8 text-center">Results: Educational Consultancy</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-3 text-flux">Problem</h4>
              <p className="text-ink/70">Growing consultancy in Sector 34 handling student inquiries manually. No structured follow-up process causing lost leads and inconsistent conversion rates.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3 text-flux">Solution</h4>
              <p className="text-ink/70">Built conversion-optimized site with GoHighLevel inquiry management system. Automated SMS/Email sequences nurturing students through entire decision journey. Airtable tracking all interactions and conversion funnels.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3 text-flux">Outcome</h4>
              <p className="text-ink/70"><strong>Enrollment conversion rate increased 35%</strong> | <strong>Lead follow-up time reduced 80%</strong> | <strong>Team capacity increased without hiring</strong>.</p>
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
                  { feature: "Lead Qualification", generic: "❌", freelance: "❌", flux: "✅" },
                  { feature: "Scaling Capability", generic: "⚠️", freelance: "❌", flux: "✅" },
                  { feature: "Pan-India Reach", generic: "❌", freelance: "❌", flux: "✅" },
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

      <section className="section bg-gradient-to-br from-ink to-ink/90 text-white rounded-3xl">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What Chandigarh Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Vikram Patel", title: "IT Staffing Firm, Sector 17", quote: "Found qualified clients consistently. Our response time is now legendary in our market." },
              { name: "Neha Sharma", title: "Educational Consultancy, Sector 34", quote: "Enrollment rates up 35%. Automation handles everything. We're competing with Delhi-level firms." },
              { name: "Rajesh Kumar", title: "Tech Services, Zirakpur", quote: "Went from struggling startup to professional powerhouse. Our clients see no difference vs big Delhi firms." },
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
              { question: "Can you help us expand beyond Chandigarh to Pan-India?", answer: "Yes. Our systems are architected for Pan-India scaling with location-specific SEO strategies while maintaining unified lead management." },
              { question: "How does automation help growing startups?", answer: "Automation lets small teams compete with larger firms. Handle 10x the leads without proportional hiring—that's our core value proposition." },
              { question: "Do you provide training for our team?", answer: "Yes. We provide comprehensive training on platform usage, best practices, and ongoing optimization workshops." },
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
          <h2 className="text-4xl font-bold mb-6">Your Chandigarh competitors are still using manual processes.</h2>
          <p className="text-lg mb-8 text-white/90">Be the market leader. Build automated digital infrastructure that transforms your business.</p>
          <button style={{ background: "white", color: "var(--flux)" }} className="inline-flex px-8 py-4 rounded-full font-semibold hover:opacity-90 transition text-lg">
            Book Your Chandigarh Growth Strategy
          </button>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "Can you help us expand beyond Chandigarh?", acceptedAnswer: { "@type": "Answer", text: "Yes. Our systems are architected for Pan-India scaling with location-specific SEO while maintaining unified lead management." } }, { "@type": "Question", name: "How does automation help growing startups?", acceptedAnswer: { "@type": "Answer", text: "Automation lets small teams compete with larger firms. Handle 10x leads without proportional hiring." } }, { "@type": "Question", name: "Do you provide team training?", acceptedAnswer: { "@type": "Answer", text: "Yes. We provide comprehensive training on platform usage, best practices, and ongoing optimization workshops." } }] }) }} />
    </main>
  );
}
