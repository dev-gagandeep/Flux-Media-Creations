import type { Metadata } from "next";
import { generateMeta, schemaHomeAgency, schemaHomeFaq, schemaHomePage, schemaHomeReviews } from "@/lib/seo";
import { TOOLS } from "@/lib/constants";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import WhyFlux from "@/components/sections/WhyFlux";
import Industries from "@/components/sections/Industries";
import Numbers from "@/components/sections/Numbers";
import Process from "@/components/sections/Process";
import FAQSection from "@/components/sections/FAQSection";
import CTA from "@/components/sections/CTA";
import Marquee from "@/components/ui/Marquee";

export const metadata: Metadata = generateMeta({
  absoluteTitle: "WordPress GoHighLevel Agency for Service Businesses",
  description:
    "Flux builds WordPress websites, GoHighLevel CRM automation, missed-call recovery, and booking systems for clinics and service businesses.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaHomePage) }}
      />
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
      <Pricing />
      <WhyFlux />
      <Industries />
      <Numbers />
      <Process />
      <FAQSection />
      <CTA />
    </>
  );
}
