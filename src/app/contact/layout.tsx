import type { Metadata } from "next";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "Contact Us",
  description:
    "Contact Flux Media Creations for WordPress websites, GoHighLevel automation, Airtable systems, and CRM follow-up builds.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
