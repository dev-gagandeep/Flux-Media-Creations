const faqs = [
  {
    q: "Do you only work with US businesses?",
    a: "Our main focus is US service businesses, but we also work with clients in Canada and the United Kingdom. All work is delivered in English and we communicate via email, WhatsApp, and video call. Time zone differences have never been a problem on any project we have delivered.",
  },
  {
    q: "How long does a project take?",
    a: "A WordPress-only site takes 7 to 10 business days. A full WordPress plus GoHighLevel growth system takes 14 to 21 days. We set clear milestones at the start of every project so you always know exactly where things stand.",
  },
  {
    q: "Do I need my own GoHighLevel account?",
    a: "Yes. GoHighLevel's Starter plan is $97 per month and you own the account directly. We set up everything inside your account and hand it over fully configured. We can also point you toward a reseller option that reduces your monthly cost.",
  },
  {
    q: "Can you work with my existing website?",
    a: "Yes. We can audit your current site, rebuild it from scratch while preserving your content and SEO history, or add specific components like a booking system or lead capture form to what already exists.",
  },
  {
    q: "What makes you different from other WordPress agencies?",
    a: "Most agencies build a website and move on. We build the website, connect the CRM, configure the automations, and deliver a system that generates and follows up with leads automatically. We also specialize in specific industries, so we understand your customers and compliance requirements better than a generalist agency does.",
  },
  {
    q: "What do I need to provide to get started?",
    a: "Domain access, any existing brand assets, a brief about your services and target clients, and access to any tools you are already using. We handle the rest, including copywriting direction, design, development, and automation setup.",
  },
];

export default function FAQSection() {
  return (
    <section className="section max-w-[1400px] mx-auto">
      <div className="mb-12">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">Common questions</p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl max-w-3xl leading-tight" style={{ letterSpacing: "-0.03em" }}>
          Frequently asked questions before we build.
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {faqs.map((faq) => (
          <div key={faq.q} className="rounded-3xl border border-ink/8 bg-white p-6">
            <p className="font-medium text-base mb-3">{faq.q}</p>
            <p className="text-sm text-ink/55 leading-7">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
