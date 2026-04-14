const stats = [
  {
    number: "14 days",
    label: "Average WordPress + GoHighLevel project delivery",
    subtext: "From signed contract to live site — not months.",
  },
  {
    number: "90+",
    label: "PageSpeed score on every site we build",
    subtext: "Faster sites rank higher and convert more visitors.",
  },
  {
    number: "100%",
    label: "Projects with post-launch GHL automation active",
    subtext: "Every site we build connects to an automated follow-up system.",
  },
  {
    number: "4+",
    label: "Years building WordPress + GoHighLevel systems",
    subtext: "Exclusively for US healthcare and service businesses.",
  },
];

export default function Numbers() {
  return (
    <section className="section max-w-[1400px] mx-auto">
      <div className="mb-12">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-4">By the numbers</p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl max-w-3xl leading-tight" style={{ letterSpacing: "-0.03em" }}>
          What happens when your website and CRM work together.
        </h2>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
        {stats.map((item) => (
          <div key={item.label} className="rounded-3xl border border-ink/8 bg-white p-6">
            <p className="font-display font-semibold text-4xl md:text-5xl mb-3" style={{ color: "var(--flux)", letterSpacing: "-0.03em" }}>
              {item.number}
            </p>
            <p className="font-medium text-sm md:text-base mb-2">{item.label}</p>
            <p className="text-sm text-ink/50 leading-7">{item.subtext}</p>
          </div>
        ))}
      </div>
    </section>
  );
}