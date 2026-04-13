import type { Metadata } from "next";
import { generateMeta } from "@/lib/seo";
import Work from "@/components/sections/Work";
import CTA from "@/components/sections/CTA";
import TextReveal from "@/components/ui/TextReveal";

export const metadata: Metadata = generateMeta({
  title: "Our Work",
  description:
    "Portfolio of WordPress websites and GoHighLevel automation systems built for healthcare clinics, home service businesses, and real estate professionals across the US.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <section className="section pt-40 md:pt-48 pb-20 max-w-[1400px] mx-auto">
        <p className="text-sm uppercase tracking-widest text-ink/30 mb-5">Portfolio</p>
        <TextReveal
          text="Work we're proud of — and results clients remember."
          className="font-display font-semibold text-4xl md:text-6xl max-w-3xl mb-6"
          as="h1"
        />
        <p className="text-base text-ink/50 max-w-xl leading-relaxed">
          These are selected delivery examples from client engagements, including projects executed in company and partner-team environments. Each showcases the same conversion-first build quality and automation depth we bring to new work.
        </p>
      </section>

      <Work />
      <CTA />
    </>
  );
}
