import type { Metadata } from "next";
import { generateMeta, schemaHomeAgency, schemaHomeFaq, schemaHomeReviews } from "@/lib/seo";
import { TOOLS } from "@/lib/constants";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import WhyFlux from "@/components/sections/WhyFlux";
import Work from "@/components/sections/Work";
import Industries from "@/components/sections/Industries";
import Numbers from "@/components/sections/Numbers";
import Process from "@/components/sections/Process";
import FAQSection from "@/components/sections/FAQSection";
import CTA from "@/components/sections/CTA";
import Marquee from "@/components/ui/Marquee";

export const metadata: Metadata = generateMeta({
  title: "WordPress & GoHighLevel Agency for Healthcare and Service Businesses | Flux Media Creations",
  description:
    "Flux Media Creations builds conversion-first WordPress websites and GoHighLevel automation for US healthcare clinics, home service businesses, and real estate teams. PageSpeed 90+. Launched in 14 days.",
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
      <TrustBar />
      <Marquee items={TOOLS} />
      <Services />
      <WhyFlux />
      <Work />
      <Industries />
      <Numbers />
      <Process />
      <FAQSection />
      <CTA />
    </>
  );
}
