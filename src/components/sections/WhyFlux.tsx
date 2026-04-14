const blocks = [
  {
    icon: "⏱",
    title: "One team. Start to finish.",
    body: "No handoffs. No outsourcing. Gagan Deep personally builds every WordPress site and GoHighLevel system we deliver. You talk to the same person from discovery call to launch day — and after.",
  },
  {
    icon: "⚡",
    title: "Built for lead capture — not just looks.",
    body: "Every site we build has one job: turn visitors into booked appointments or qualified leads. We write conversion-focused copy, place strategic CTAs, and connect your site directly to your CRM follow-up system.",
  },
  {
    icon: "🛡",
    title: "Proven in healthcare and home services.",
    body: "We've built WordPress websites and GoHighLevel systems for pain management clinics, orthopedic practices, vein centers, phone repair shops, and real estate agents. We understand your industry's compliance needs, patient expectations, and lead flow challenges.",
  },
];

export default function WhyFlux() {
  return (
    <section className="section max-w-[1400px] mx-auto">
      <div className="mb-12">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">Why businesses choose us</p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl max-w-3xl leading-tight" style={{ letterSpacing: "-0.03em" }}>
          You don't need another agency that disappears after launch.
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {blocks.map((block) => (
          <div key={block.title} className="rounded-3xl border border-ink/8 bg-white p-7">
            <div className="w-12 h-12 rounded-full bg-blush flex items-center justify-center text-xl mb-5" style={{ color: "var(--flux)" }}>
              {block.icon}
            </div>
            <h3 className="font-display font-semibold text-2xl mb-3" style={{ letterSpacing: "-0.02em" }}>
              {block.title}
            </h3>
            <p className="text-sm text-ink/55 leading-7">{block.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}