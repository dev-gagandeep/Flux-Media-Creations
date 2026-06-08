import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  absoluteTitle: "Blog | WordPress, GoHighLevel & Lead Generation Playbooks for Service Businesses",
  description:
    "Practical guides on WordPress website design, GoHighLevel automation, healthcare website SEO, missed-call recovery, appointment booking, and lead generation systems for service businesses.",
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
};

const posts = [FEATURED_POST, ...BLOG_POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
const latestPost = posts[0];
const otherPosts = posts.slice(1);

const fallbackImages = ["/images/blog/go-high-level.webp", "/images/blog/wordpress-dashboard.png", "/og-image.svg"];

const faqs = [
  ["What is a lead generation website?", "A lead generation website is built to attract the right visitors, explain the offer clearly, capture inquiries, and move prospects toward a call, quote request, booking, or appointment."],
  ["Why connect WordPress with GoHighLevel?", "WordPress gives you control over design, SEO, service pages, content, and website ownership. GoHighLevel manages what happens after a visitor becomes a lead."],
  ["What should a clinic website include?", "A clinic website should include clear service pages, provider information, patient trust signals, appointment CTAs, location details, FAQs, reviews, and a fast follow-up system."],
  ["How does missed-call text-back help service businesses?", "Missed-call text-back sends an automatic SMS when a business misses a call, giving the prospect a fast way to continue the conversation."],
];

const categoryCounts = posts.reduce<Record<string, number>>((acc, post) => {
  acc[post.category] = (acc[post.category] || 0) + 1;
  return acc;
}, {});

const categories = Object.entries(categoryCounts).sort(([a], [b]) => a.localeCompare(b));
const sidebarPosts = posts.slice(0, 4);

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
      <span>{post.category}</span>
      <span>/</span>
      <span>{formatDate(post.date)}</span>
      <span>/</span>
      <span>{post.readTime}</span>
    </div>
  );
}

export default function BlogPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="section mx-auto max-w-[1400px] pb-12 pt-36 md:pt-44">
        <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-flux">Blog</p>
        <h1 className="max-w-5xl font-display text-5xl font-semibold leading-[0.95] text-ink md:text-7xl" style={{ letterSpacing: "-0.055em" }}>
          Growth playbooks for websites, automation, and lead generation.
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-ink/60 md:text-xl md:leading-9">
          Premium, practical guides for service businesses that want stronger websites, cleaner local SEO, faster follow-up, and CRM systems that turn more traffic into qualified inquiries.
        </p>
      </section>

      <section className="section-sm pt-0">
        <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
          <div className="space-y-8">
            <article className="overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-soft">
              <Link href={`/blog/${latestPost.slug}`} className="grid min-h-[420px] gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="relative min-h-[260px] bg-ink">
                  <Image
                    src={postImage(latestPost)}
                    alt=""
                    fill
                    priority
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between p-7 md:p-10">
                  <div>
                    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-flux">Latest Article</p>
                    <PostMeta post={latestPost} />
                    <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl" style={{ letterSpacing: "-0.04em" }}>
                      {latestPost.title}
                    </h2>
                    <p className="mt-5 text-base leading-8 text-ink/60">{latestPost.excerpt}</p>
                  </div>
                  <div className="mt-8 inline-flex text-sm font-semibold uppercase tracking-wide text-flux">
                    Read article -&gt;
                  </div>
                </div>
              </Link>
            </article>

            <div>
              <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-flux">More Articles</p>
                  <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl" style={{ letterSpacing: "-0.035em" }}>
                    Field notes for better growth systems.
                  </h2>
                </div>
                <span className="text-sm font-medium text-ink/45">{otherPosts.length} guides</span>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {otherPosts.map((post, index) => (
                  <article key={post.slug} className="group overflow-hidden rounded-3xl border border-ink/10 bg-white transition hover:-translate-y-1 hover:border-flux/50 hover:shadow-soft">
                    <Link href={`/blog/${post.slug}`} className="block">
                      <div className="relative aspect-[16/10] bg-cream">
                        <Image
                          src={postImage(post, index)}
                          alt=""
                          fill
                          sizes="(min-width: 1280px) 24vw, (min-width: 768px) 45vw, 100vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <PostMeta post={post} />
                        <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-ink transition group-hover:text-flux" style={{ letterSpacing: "-0.025em" }}>
                          {post.title}
                        </h3>
                        <p className="mt-4 line-clamp-3 text-sm leading-7 text-ink/58">{post.excerpt}</p>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28">
            <div className="rounded-3xl bg-ink p-6 text-cream">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-flux">Growth Review</p>
              <h2 className="font-display text-3xl font-semibold leading-tight" style={{ letterSpacing: "-0.035em" }}>
                Find the leak between traffic and booked calls.
              </h2>
              <p className="mt-4 text-sm leading-7 text-cream/60">
                Send your website and current setup. We will point out the highest-value fixes across page structure, CRM follow-up, local SEO, and conversion flow.
              </p>
              <Link href="/contact" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-flux px-5 py-4 text-center text-sm font-semibold uppercase tracking-wide text-white transition hover:-translate-y-0.5">
                Request Review
              </Link>
            </div>

            <div className="rounded-3xl border border-ink/10 bg-white p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-flux">Categories</p>
              <div className="space-y-2">
                {categories.map(([category, count]) => (
                  <div key={category} className="flex items-center justify-between rounded-2xl border border-ink/10 px-4 py-3">
                    <span className="text-sm font-medium text-ink/70">{category}</span>
                    <span className="text-xs font-semibold text-ink/35">{count}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-ink/10 bg-white p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-flux">Editor Picks</p>
              <div className="space-y-4">
                {sidebarPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="block border-b border-ink/10 pb-4 last:border-b-0 last:pb-0">
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/35">{post.category}</span>
                    <span className="mt-2 block text-sm font-semibold leading-6 text-ink transition hover:text-flux">{post.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-ink/10 bg-blush p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-flux">Start Here</p>
              <div className="space-y-3">
                {[
                  ["Services", "/services"],
                  ["Local SEO NJ", "/local-seo-new-jersey"],
                  ["GoHighLevel Automation", "/services/gohighlevel-automation"],
                  ["Contact", "/contact"],
                ].map(([label, href]) => (
                  <Link key={href} href={href} className="block rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-ink/65 transition hover:text-flux">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
