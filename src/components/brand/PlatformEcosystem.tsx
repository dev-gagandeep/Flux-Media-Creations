import Image from "next/image";

type Logo = {
  name: string;
  src: string;
  wide?: boolean;
};

const logo = (name: string, src: string, wide = false): Logo => ({ name, src, wide });

const logoSets = {
  full: [
    logo("OpenAI", "/images/ecosystem/openai.webp"),
    logo("Google Gemini", "/images/ecosystem/gemini.png", true),
    logo("Make", "/images/ecosystem/make.png"),
    logo("Zapier", "/images/ecosystem/zapier.png", true),
    logo("HubSpot", "/images/ecosystem/hubspot.png", true),
    logo("Airtable", "/images/ecosystem/airtable.svg", true),
    logo("Microsoft Clarity", "/images/ecosystem/microsoft-clarity.webp", true),
    logo("Google", "/images/ecosystem/google.webp", true),
  ],
  intelligence: [
    logo("OpenAI", "/images/ecosystem/openai.webp"),
    logo("Google Gemini", "/images/ecosystem/gemini.png", true),
    logo("Claude", "/images/ecosystem/claude.png"),
    logo("Airtable", "/images/ecosystem/airtable.svg", true),
    logo("Microsoft Clarity", "/images/ecosystem/microsoft-clarity.webp", true),
    logo("Google Analytics", "/images/ecosystem/google-analytics.png", true),
  ],
  industry: [
    logo("HighLevel", "/images/ecosystem/highlevel.png", true),
    logo("HubSpot", "/images/ecosystem/hubspot.png", true),
    logo("Zapier", "/images/ecosystem/zapier.png", true),
    logo("Make", "/images/ecosystem/make.png"),
    logo("Google Analytics", "/images/ecosystem/google-analytics.png", true),
    logo("Airtable", "/images/ecosystem/airtable.svg", true),
  ],
  web: [
    logo("WordPress", "/images/ecosystem/wordpress.webp"),
    logo("Elementor", "/images/ecosystem/elementor.jpeg"),
    logo("Shopify", "/images/ecosystem/shopify.webp", true),
    logo("React", "/images/ecosystem/react.webp"),
    logo("Next.js", "/images/ecosystem/nextjs.svg", true),
    logo("Figma", "/images/ecosystem/figma.png", true),
  ],
};

type Variant = keyof typeof logoSets;

function LogoItem({ item }: { item: Logo }) {
  return (
    <div
      title={item.name}
      className="group flex h-20 w-[205px] shrink-0 items-center justify-center rounded-2xl border border-ink/10 bg-white px-6 shadow-[0_8px_24px_rgba(6,7,10,.035)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-flux/35 hover:shadow-[0_14px_34px_rgba(6,7,10,.08)]"
    >
      <Image
        src={item.src}
        alt={item.name}
        width={220}
        height={80}
        className={`max-h-11 object-contain transition-transform duration-300 group-hover:scale-105 ${item.wide ? "w-[154px]" : "w-12"}`}
        sizes="154px"
      />
    </div>
  );
}

export default function PlatformEcosystem({
  variant = "full",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const items = logoSets[variant];

  return (
    <section className={`overflow-hidden border-y border-ink/10 bg-cream py-5 md:py-6 ${className}`}>
      <div className="flux-shell grid items-center gap-4 md:grid-cols-[auto_1fr] md:gap-8">
        <p className="flux-kicker whitespace-nowrap text-flux">Connected platforms</p>
        <div className="relative min-w-0 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="marquee-track flex w-max gap-3 py-1">
            {(["first", "second"] as const).map(copy =>
              items.map(item => <LogoItem key={`${copy}-${item.name}`} item={item} />),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
