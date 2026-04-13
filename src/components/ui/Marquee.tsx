interface MarqueeProps {
  items: string[];
  accent?: string;
  dark?: boolean;
}

export default function Marquee({ items, accent = "var(--flux)", dark = false }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div
      className={`overflow-hidden py-5 border-y ${dark ? "border-cream/10 bg-ink" : "border-ink/8 bg-cream"}`}
    >
      <div className="flex marquee-track whitespace-nowrap select-none">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-5 text-sm font-medium uppercase tracking-widest mr-10 ${
              dark ? "text-cream/30" : "text-ink/30"
            }`}
          >
            {item}
            <span style={{ color: accent, fontSize: 10 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
