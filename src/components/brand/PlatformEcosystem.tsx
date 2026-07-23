import Image from "next/image";

type Logo = {
  name: string;
  src: string;
  wide?: boolean;
};

const logo = (name: string, src: string, wide = false): Logo => ({ name, src, wide });

const groups = {
  ai: {
    title: "AI intelligence",
    logos: [
      logo("OpenAI", "/images/ecosystem/openai.webp"),
      logo("Claude", "/images/ecosystem/claude.png"),
      logo("Google Gemini", "/images/ecosystem/gemini.png", true),
    ],
  },
  automation: {
    title: "Automation infrastructure",
    logos: [
      logo("Make", "/images/ecosystem/make.png"),
      logo("Zapier", "/images/ecosystem/zapier.png", true),
      logo("HighLevel", "/images/ecosystem/highlevel.png", true),
    ],
  },
  business: {
    title: "Business systems",
    logos: [
      logo("HubSpot", "/images/ecosystem/hubspot.png", true),
      logo("Pipedrive", "/images/ecosystem/pipedrive.webp", true),
      logo("Salesforce", "/images/ecosystem/salesforce.webp"),
      logo("Zoho CRM", "/images/ecosystem/zoho.png", true),
    ],
  },
  data: {
    title: "Data intelligence",
    logos: [
      logo("Airtable", "/images/ecosystem/airtable.svg", true),
      logo("Google Analytics", "/images/ecosystem/google-analytics.png", true),
      logo("Microsoft Clarity", "/images/ecosystem/microsoft-clarity.webp", true),
      logo("Google Search Console", "/images/ecosystem/google-search-console.jpg", true),
    ],
  },
  search: {
    title: "Search intelligence",
    logos: [
      logo("Google", "/images/ecosystem/google.webp", true),
      logo("Microsoft Bing", "/images/ecosystem/bing.png"),
      logo("Semrush", "/images/ecosystem/semrush.png", true),
      logo("Screaming Frog", "/images/ecosystem/screaming-frog.svg", true),
    ],
  },
  web: {
    title: "Web experience",
    logos: [
      logo("WordPress", "/images/ecosystem/wordpress.webp"),
      logo("Elementor", "/images/ecosystem/elementor.jpeg"),
      logo("WooCommerce", "/images/ecosystem/woocommerce.webp"),
      logo("Shopify", "/images/ecosystem/shopify.webp", true),
      logo("React", "/images/ecosystem/react.webp"),
      logo("Next.js", "/images/ecosystem/nextjs.svg", true),
      logo("Figma", "/images/ecosystem/figma.png", true),
    ],
  },
};

type Variant = "full" | "intelligence" | "industry" | "web";

const variantGroups: Record<Variant, Array<keyof typeof groups>> = {
  full: ["ai", "automation", "business", "data", "search"],
  intelligence: ["ai", "automation", "data", "search"],
  industry: ["automation", "business", "data"],
  web: ["web", "automation", "search"],
};

function LogoTile({ item }: { item: Logo }) {
  return (
    <div
      title={item.name}
      className={`group relative flex h-20 items-center justify-center overflow-hidden rounded-2xl border border-ink/10 bg-white px-4 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-flux/35 hover:shadow-[0_16px_40px_rgba(6,7,10,.08)] ${item.wide ? "col-span-2 sm:col-span-1" : ""}`}
    >
      <Image
        src={item.src}
        alt={item.name}
        width={220}
        height={90}
        className="h-10 max-w-[145px] object-contain transition-transform duration-300 group-hover:scale-105"
        sizes="160px"
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
  const selected = variantGroups[variant].map((key) => groups[key]);

  return (
    <section className={`bg-cream py-20 md:py-28 ${className}`}>
      <div className="flux-shell">
        <div className="grid gap-8 border-t border-ink/15 pt-5 lg:grid-cols-[.33fr_.67fr]">
          <div>
            <p className="flux-kicker text-flux">Powered by connected platforms</p>
            <h2 className="mt-6 max-w-lg font-display text-[clamp(2.3rem,3.8vw,4rem)] font-medium leading-[1] tracking-[-.055em]">
              The right systems, connected around the customer.
            </h2>
          </div>
          <div className={`grid gap-4 ${selected.length > 3 ? "md:grid-cols-2" : "lg:grid-cols-3"}`}>
            {selected.map((group) => (
              <article key={group.title} className="rounded-[1.75rem] border border-ink/10 bg-white/45 p-4 md:p-5">
                <p className="mb-4 text-xs font-bold uppercase tracking-[.14em] text-ink/45">{group.title}</p>
                <div className="grid grid-cols-2 gap-2.5">
                  {group.logos.map((item) => <LogoTile key={item.name} item={item} />)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
