import type { Metadata } from "next";
import { generateMeta, schemaHomePage } from "@/lib/seo";
import { TOOLS } from "@/lib/constants";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Industries from "@/components/sections/Industries";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";
import Marquee from "@/components/ui/Marquee";

export const metadata: Metadata = generateMeta();

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaHomePage) }}
      />
      <Hero />
      <Marquee items={TOOLS} />
      <Services />
      <Work />
      <Industries />
      <Process />
      <CTA />
    </>
  );
}
