import type { Metadata } from "next";
import { generateMeta, schemaHomeAgency, schemaHomeFaq, schemaHomeReviews } from "@/lib/seo";
import { TOOLS } from "@/lib/constants";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Industries from "@/components/sections/Industries";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";
import Marquee from "@/components/ui/Marquee";

export const metadata: Metadata = generateMeta({
  title: "WordPress & GoHighLevel Agency for Healthcare and Home Service Businesses",
  description:
    "We build conversion-first WordPress websites and GoHighLevel automations for US clinics and service businesses. PageSpeed 90+, done in 14 days.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaHomeAgency) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaHomeFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaHomeReviews) }}
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
