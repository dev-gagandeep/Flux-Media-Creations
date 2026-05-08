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
    <section className="bg-blush/45 px-6 py-24 md:px-10">
      <div className="max-w-[1400px] mx-auto">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-widest text-flux mb-4">By the numbers</p>
        <h2 className="font-display font-semibold text-4xl md:text-6xl max-w-3xl leading-none" style={{ letterSpacing: "0" }}>
          What happens when your website and CRM work together.
        </h2>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
        {stats.map((item) => (
          <div key={item.label} className="rounded-xl border border-ink/8 bg-white p-6">
            <p className="font-display font-semibold text-4xl md:text-5xl mb-3" style={{ color: "var(--flux)", letterSpacing: "0" }}>
              {item.number}
            </p>
            <p className="font-medium text-sm md:text-base mb-2">{item.label}</p>
            <p className="text-sm text-ink/50 leading-7">{item.subtext}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
