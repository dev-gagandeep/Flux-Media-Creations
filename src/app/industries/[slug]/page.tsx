import { notFound } from "next/navigation";
import StrategicPage from "@/components/strategic/StrategicPage";
import { INDUSTRY_PAGES } from "@/lib/flux2";
import { generateMeta } from "@/lib/seo";

export function generateStaticParams() { return Object.keys(INDUSTRY_PAGES).map((slug) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }) {
  const content = INDUSTRY_PAGES[params.slug];
  if (!content) return generateMeta({ title: "Industries", path: "/industries" });
  return generateMeta({ absoluteTitle: `${content.title} | Flux`, description: content.description, path: content.path });
}
export default function Page({ params }: { params: { slug: string } }) {
  const content = INDUSTRY_PAGES[params.slug];
  if (!content) notFound();
  return <StrategicPage content={content} />;
}
