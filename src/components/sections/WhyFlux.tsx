const blocks = [
  {
    icon: "⏱",
    title: "One team. No handoffs.",
    body: "Gagan Deep builds every WordPress website and configures every GoHighLevel system we deliver. You speak to the same person from your discovery call to your launch day walkthrough. There is no account manager passing notes between you and a developer in another time zone.",
  },
  {
    icon: "⚡",
    title: "Built to convert, not just look good.",
    body: "A website that gets compliments but does not generate leads is an expense, not an investment. Every page we build has a clear purpose, a specific call to action, and a path that moves the visitor toward booking or contacting you.",
  },
  {
    icon: "🛡",
    title: "Real results in healthcare and home services.",
    body: "We have built sites for pain management clinics in New Jersey, local service businesses that rank on Google Maps, and GoHighLevel systems that recover missed calls automatically. We know what works in these industries because we have delivered it.",
  },
];

export default function WhyFlux() {
  return (
    <section className="section max-w-[1400px] mx-auto">
      <div className="mb-12">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">Why businesses choose us</p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl max-w-3xl leading-tight" style={{ letterSpacing: "-0.03em" }}>
          You do not need another agency that disappears after launch.
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
