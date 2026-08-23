import { safeJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";
import { getSanityPosts, mergePosts } from "@/lib/sanity";
import KnowledgeEcosystem from "@/components/brand/KnowledgeEcosystem";

export const metadata: Metadata = generateMeta({
  absoluteTitle: "Insights | AI Search, Business Intelligence & Healthcare Growth",
  description:
    "Flux insights on AI search, operating and revenue intelligence, healthcare growth, customer progression, CRM automation, and connected service-business systems.",
  path: "/blog",
});

const FEATURED_POST = {
  slug: "healthcare-website-design-clinic-conversions",
  title: "Healthcare Website Design: What Every Clinic Needs to Convert Visitors Into Appointments",
  excerpt:
    "A practical clinic website design guide covering patient journeys, trust signals, local SEO structure, appointment booking, and GoHighLevel CRM automation.",
  date: "2026-05-08",
  readTime: "12 min read",
  category: "Healthcare Growth Systems",
  author: "Gagan Deep",
  cover: "/images/blog/healthcare-website-design-clinic-conversions.png",
  content: [],
};

const WEBSITE_GROWTH_REPORT_POST = {
  slug: "service-business-website-growth-strategy-2026",
  title: "Service Business Website Growth Strategy for 2026",
  excerpt: "How service businesses can connect visibility, trust, conversion, mobile experience, and automation into a website growth system.",
  date: "2026-08-22",
  readTime: "10 min read",
  category: "Business Growth",
  author: "Gagan Deep",
  cover: "/images/reports/service-business-growth-report-og.png",
  content: [],
};

const localPosts = [WEBSITE_GROWTH_REPORT_POST, FEATURED_POST, ...BLOG_POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const INSIGHT_CATEGORIES = [
  { slug: "ai-search", label: "AI Search", matches: ["AI Search", "Local SEO and Search Visibility", "Discovery and Visibility", "Website Development"] },
  { slug: "business-intelligence", label: "Business Intelligence", matches: ["Business Growth", "Business Intelligence", "Growth Systems", "GoHighLevel Automation", "CRM and Automation", "Website + Automation", "Operations and CRM", "Automation Workflows", "Ongoing Support"] },
  { slug: "healthcare-growth", label: "Healthcare Growth", matches: ["Healthcare Growth", "Healthcare Growth Systems", "Healthcare Automation", "Healthcare SEO"] },
];

const INSIGHT_CATEGORY_BY_MATCH = new Map(
  INSIGHT_CATEGORIES.flatMap(item => item.matches.map(match => [match, item] as const)),
);

function insightCategory(category: string) {
  return INSIGHT_CATEGORY_BY_MATCH.get(category) ?? INSIGHT_CATEGORIES[1];
}

const fallbackImages = ["/images/blog/go-high-level.webp", "/images/blog/wordpress-dashboard.png", "/og-image.svg"];

const faqs = [
  ["What is a lead generation website?", "A lead generation website is built to attract the right visitors, explain the offer clearly, capture inquiries, and move prospects toward a call, quote request, booking, or appointment."],
  ["Why connect WordPress with GoHighLevel?", "WordPress gives you control over design, SEO, service pages, content, and website ownership. GoHighLevel manages what happens after a visitor becomes a lead."],
  ["What should a clinic website include?", "A clinic website should include clear service pages, provider information, patient trust signals, appointment CTAs, location details, FAQs, reviews, and a fast follow-up system."],
  ["How does missed-call text-back help service businesses?", "Missed-call text-back sends an automatic SMS when a business misses a call, giving the prospect a fast way to continue the conversation."],
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function postImage(post: { cover?: string }, index = 0) {
  return post.cover || fallbackImages[index % fallbackImages.length];
}

function PostMeta({ post }: { post: { category: string; date: string; readTime: string } }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink/40">
      <span>{insightCategory(post.category).label}</span>
      <span>/</span>
      <span>{formatDate(post.date)}</span>
      <span>/</span>
      <span>{post.readTime}</span>
    </div>
  );
}

const POSTS_PER_PAGE = 6;

function pageHref(page: number, category?: string) {
  const params = new URLSearchParams();
  if (category) params.set("category", category);
  if (page > 1) params.set("page", String(page));
  const query = params.toString();
  return query ? `/blog?${query}` : "/blog";
}

export default async function BlogPage({ searchParams }: { searchParams?: Promise<{ category?: string; page?: string }> }) {
  const query = searchParams ? await searchParams : undefined;
  const allPosts = mergePosts(await getSanityPosts(), localPosts);
  const selected = INSIGHT_CATEGORIES.find(item => item.slug === query?.category);
  const selectedMatches = selected ? new Set(selected.matches) : null;
  const posts = selectedMatches ? allPosts.filter(post => selectedMatches.has(post.category)) : allPosts;
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const requestedPage = Number.parseInt(query?.page ?? "1", 10);
  const currentPage = Number.isFinite(requestedPage) ? Math.min(Math.max(requestedPage, 1), totalPages) : 1;
  const visiblePosts = posts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }} />

      <section className="relative overflow-hidden bg-cream pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="pointer-events-none absolute -right-32 top-12 h-96 w-96 rounded-full bg-pulse opacity-35 blur-3xl" />
        <div className="flux-shell relative">
          <div className="border-t border-ink/15 pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flux">Flux Insights</p>
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_.55fr] lg:items-end">
            <h1 className="max-w-5xl font-display text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[0.9] tracking-[-.07em] text-ink">
              {selected ? `${selected.label}, clearly explained.` : "Ideas for a more intelligent business."}
            </h1>
            <p className="border-t border-ink/15 pt-6 text-lg leading-8 text-ink/60">
              Practical guidance across AI search, operating intelligence, customer progression, automation, and healthcare growth.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="flux-shell">
          <nav aria-label="Insight categories" className="flex flex-wrap items-center gap-3 border-y border-ink/10 py-5">
            <Link href="/blog" className={`flux-button ${!selected ? "flux-button-red" : "flux-button-line"}`}>All Insights</Link>
            {INSIGHT_CATEGORIES.map(category => (
              <Link key={category.slug} href={`/blog?category=${category.slug}`} className={`flux-button ${selected?.slug === category.slug ? "flux-button-red" : "flux-button-line"}`}>
                {category.label}
              </Link>
            ))}
          </nav>

          <div className="mt-12 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flux">Browse the library</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-.04em] text-ink md:text-5xl">
                {selected?.label ?? "Latest insights"}
              </h2>
            </div>
            <p className="text-sm text-ink/45">Page {currentPage} of {totalPages}</p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visiblePosts.map((post, index) => (
              <article key={post.slug} className="group flex min-h-full flex-col overflow-hidden rounded-[2rem] border border-ink/10 bg-cream transition duration-500 hover:-translate-y-2 hover:border-flux/40 hover:shadow-soft">
                <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                    <Image
                      src={postImage(post, index)}
                      alt={post.coverAlt ?? `${post.title} article feature`}
                      fill
                      priority={currentPage === 1 && index < 3}
                      sizes="(min-width: 1280px) 30vw, (min-width: 768px) 48vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    {currentPage === 1 && index === 0 ? (
                      <span className="absolute left-5 top-5 rounded-full bg-flux px-4 py-2 text-xs font-semibold uppercase tracking-[.14em] text-white">Newest</span>
                    ) : null}
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <PostMeta post={post} />
                    <h3 className="mt-5 font-display text-2xl font-semibold leading-[1.05] tracking-[-.035em] text-ink transition-colors group-hover:text-flux md:text-3xl">
                      {post.title}
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-7 text-ink/58">{post.excerpt}</p>
                    <span className="mt-auto pt-7 text-sm font-semibold uppercase tracking-[.12em] text-flux">Read insight →</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <nav aria-label="Insights pagination" className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-ink/10 pt-7">
            {currentPage > 1 ? (
              <Link href={pageHref(currentPage - 1, selected?.slug)} className="flux-button flux-button-line">← Previous</Link>
            ) : <span />}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
                <Link
                  key={page}
                  href={pageHref(page, selected?.slug)}
                  aria-current={page === currentPage ? "page" : undefined}
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold transition-colors ${page === currentPage ? "bg-ink text-white" : "border border-ink/15 text-ink hover:border-flux hover:text-flux"}`}
                >
                  {page}
                </Link>
              ))}
            </div>
            {currentPage < totalPages ? (
              <Link href={pageHref(currentPage + 1, selected?.slug)} className="flux-button flux-button-red">Next →</Link>
            ) : <span />}
          </nav>
        </div>
      </section>

      <section className="bg-pulse-light py-20 md:py-28">
        <div className="flux-shell">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink p-8 text-white md:p-14">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-flux/30 blur-3xl" aria-hidden="true" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.2em] text-flux">Turn insight into action</p>
                <h2 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[.95] tracking-[-.05em] md:text-6xl">
                  See where your operating system is losing opportunities.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
                  Measure discovery, customer progression, revenue visibility, automation, and AI readiness in one structured assessment.
                </p>
              </div>
              <Link href="/business-intelligence-audit" className="flux-button flux-button-red whitespace-nowrap">
                Measure your score →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <KnowledgeEcosystem />
    </main>
  );
}
