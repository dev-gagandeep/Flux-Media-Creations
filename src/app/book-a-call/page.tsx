import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: "Book a Call",
  description: "This booking page has moved. Contact Flux Media Creations to start your project.",
  path: "/book-a-call",
  noIndex: true,
});

export default function BookACallRedirectPage() {
  redirect("/contact");
}
