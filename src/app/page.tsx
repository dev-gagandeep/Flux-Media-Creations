import { safeJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import { generateMeta, schemaHomeFaq, schemaHomePage } from "@/lib/seo";
import HomeV2 from "@/components/home/HomeV2";

export const metadata: Metadata = generateMeta({
  absoluteTitle: "Flux | Operating Intelligence Company for Service Businesses",
  description:
    "Flux builds operating intelligence systems that help service businesses get discovered, capture opportunities, automate customer journeys, and grow in the AI era.",
  socialTitle: "Flux | Build a More Intelligent Business",
  socialDescription: "Connected growth systems combining AI discovery, customer intelligence, automation, and revenue infrastructure for modern service businesses.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(schemaHomePage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(schemaHomeFaq) }}
      />
      <HomeV2 />
    </>
  );
}
