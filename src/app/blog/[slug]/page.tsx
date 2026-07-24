import { safeJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, SERVICES, SITE, type BlogPost } from "@/lib/constants";
import { BLOG_DETAILS } from "@/lib/blog-detail";
import { generateMeta } from "@/lib/seo";
import { getSanityPost, getSanityPosts, mergePosts } from "@/lib/sanity";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type TocItem = {
  id: string;
  label: string;
  level: 2 | 3;
};

type ParsedBlock =
  | {
      type: "section";
      id: string;
      title: string;
      body: string;
      level: 2 | 3;
    }
  | {
      type: "paragraph";
      body: string;
    };

const INTERNAL_PAGE_LINKS: Record<string, string> = {
  Services: "/services",
  Industries: "/industries",
  Process: "/process",
  Contact: "/contact",
  Blog: "/blog",
  "Healthcare Website & CRM Solutions": "/healthcare-website-crm",
  "healthcare website and CRM system": "/healthcare-website-crm",
  "healthcare website and CRM automation system": "/healthcare-website-crm",
  "healthcare website design guide": "/blog/healthcare-website-design-clinic-conversions",
  "healthcare website design for clinic conversions": "/blog/healthcare-website-design-clinic-conversions",
  "GoHighLevel for clinics": "/blog/gohighlevel-for-clinics-patient-leads",
  "GoHighLevel missed call text-back guide": "/blog/how-to-set-up-gohighlevel-missed-call-text-back",
  "missed-call text back workflow": "/blog/how-to-set-up-gohighlevel-missed-call-text-back",
  "clinic appointment booking automation system": "/services/clinic-appointment-booking-automation",
  "WordPress Website Build": "/services/wordpress-website-build",
  "GoHighLevel Automation": "/services/gohighlevel-automation",
  "Full Growth System": "/services/full-growth-system",
  "Search Visibility Engine": "/services/search-visibility-engine",
  "New Jersey local SEO": "/local-seo-new-jersey",
  "Google Business Profile optimization": "/local-seo-new-jersey/gbp-optimization-new-jersey",
  "Google Business Profile setup": "/local-seo-new-jersey/google-business-profile-setup-new-jersey",
  "Google Business Profile setup for New Jersey": "/local-seo-new-jersey/google-business-profile-setup-new-jersey",
  "GoHighLevel automation": "/services/gohighlevel-automation",
  "AI Discovery": "/ai-discovery",
  "Operating Intelligence": "/operating-intelligence",
  "Business Intelligence Audit": "/business-intelligence-audit",
  "Healthcare Operating Intelligence": "/industries/healthcare",
  "Patient Revenue System": "/patient-revenue-system",
  "Review Automation for New Jersey Businesses": "/blog/review-automation-new-jersey",
};

const BLOG_INLINE_IMAGES: Record<
  string,
  Array<{ src: string; alt: string; caption: string; insertAfter: number }>
> = {
  "wordpress-ghl-growth-system-us-businesses": [
    {
      src: "/images/blog/wordpress-dashboard.png",
      alt: "WordPress dashboard view showing theme and website management options for business site operations.",
      caption: "WordPress dashboard setup for website structure and publishing workflow.",
      insertAfter: 9,
    },
    {
      src: "/images/blog/go-high-level.webp",
      alt: "GoHighLevel CRM dashboard used for lead tracking, automation workflows, and follow-up sequences.",
      caption: "GoHighLevel automation layer used for instant lead response and pipeline management.",
      insertAfter: 24,
    },
  ],
  "how-to-set-up-gohighlevel-missed-call-text-back": [
    {
      src: "/images/blog/go-high-level.webp",
      alt: "GoHighLevel automation dashboard showing conversations, workflows, and lead management tools.",
      caption: "A missed call text-back workflow belongs inside a wider lead-response system, not as a disconnected one-off automation.",
      insertAfter: 12,
    },
  ],
};

const HEALTHCARE_CTA_POSTS = new Set([
  "appointment-booking-automation-for-clinics",
  "gohighlevel-for-clinics-patient-leads",
  "wordpress-ghl-growth-system-us-businesses",
  "how-to-set-up-gohighlevel-missed-call-text-back",
]);

const AI_VISIBILITY_CTA_POSTS = new Set([
  "ai-search-visibility-guide-service-businesses",
]);

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function splitSectionTitle(input: string) {
  const [title, ...rest] = input.split(". ");
  return {
    title: title.trim(),
    body: rest.join(". ").trim(),
  };
}

function parseBlogContent(post: BlogPost) {
  const toc: TocItem[] = [];
  const blocks: ParsedBlock[] = post.content.map((paragraph) => {
    const h2Match = paragraph.match(/^##\s+(.+)$/);
    if (h2Match) {
      const title = h2Match[1].trim();
      const id = slugify(title);
      toc.push({ id, label: title, level: 2 });
      return { type: "section", id, title, body: "", level: 2 };
    }

    const h3Match = paragraph.match(/^###\s+(.+)$/);
    if (h3Match) {
      const title = h3Match[1].trim();
      const id = slugify(title);
      toc.push({ id, label: title, level: 3 });
      return { type: "section", id, title, body: "", level: 3 };
    }

    const partMatch = paragraph.match(/^Part\s+\d+:\s*(.+)$/i);
    if (partMatch) {
      const { title, body } = splitSectionTitle(partMatch[1]);
      const id = slugify(title);
      toc.push({ id, label: title, level: 2 });
      return { type: "section", id, title, body, level: 2 };
    }

    return { type: "paragraph", body: paragraph };
  });

  if (post.faq?.length) {
    toc.push({ id: "faqs", label: "FAQs", level: 2 });
  }

  return { blocks, toc };
}

function renderParagraphWithLinks(paragraph: string, key: string) {
  const chunks = paragraph.split(/\[([^\]]+)\]/g);

  const inline = chunks.map((chunk, chunkIndex) => {
        if (chunkIndex % 2 === 1) {
          const href = INTERNAL_PAGE_LINKS[chunk];
          if (href) {
            return (
              <Link key={`${key}-link-${chunkIndex}`} href={href} className="text-flux hover:underline">
                {chunk}
              </Link>
            );
          }
        }

        const strongParts = chunk.split(/\*\*([^*]+)\*\*/g);
        return (
          <span key={`${key}-text-${chunkIndex}`}>
            {strongParts.map((part, partIndex) =>
              partIndex % 2 === 1 ? <strong key={partIndex} className="font-semibold text-ink">{part}</strong> : part,
            )}
          </span>
        );
      });

  const numbered = paragraph.match(/^(\d+)\.\s+(.+)$/);
  if (numbered) {
    return (
      <div key={key} className="grid grid-cols-[2.5rem_1fr] gap-4 rounded-2xl border border-ink/10 bg-white p-5">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-flux text-sm font-semibold text-white">{numbered[1]}</span>
        <div>{renderParagraphWithLinks(numbered[2], `${key}-numbered`)}</div>
      </div>
    );
  }

  return <p key={key}>{inline}</p>;
}

export async function generateStaticParams() {
  const posts = mergePosts(await getSanityPosts(), BLOG_POSTS);
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = (await getSanityPost(slug)) ?? BLOG_POSTS.find((item) => item.slug === slug);

  if (!post) {
    return generateMeta({
      title: "Blog",
      path: "/blog",
    });
  }

  return generateMeta({
    absoluteTitle: post.metaTitle,
    title: post.title,
    description: post.metaDescription ?? post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.cover,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const allPosts = mergePosts(await getSanityPosts(), BLOG_POSTS);
  const post = allPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const { blocks, toc } = parseBlogContent(post);
  const detail = BLOG_DETAILS[post.slug];
  const inlineImages = BLOG_INLINE_IMAGES[post.slug] ?? [];
  const showHealthcareCta = HEALTHCARE_CTA_POSTS.has(post.slug);
  const showAiVisibilityCta = AI_VISIBILITY_CTA_POSTS.has(post.slug);
  const recentPosts = allPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const sidebarPosts = recentPosts.length > 0 ? recentPosts : allPosts.slice(0, 3);
  const categoryCounts = allPosts.reduce<Record<string, number>>((acc, item) => {
    acc[item.category] = (acc[item.category] ?? 0) + 1;
    return acc;
  }, {});
  const faqSchema = post.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;
  const howToSchema =
    detail?.schemaType === "HowTo" && detail.howTo
      ? {
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: post.title,
          description: post.metaDescription ?? post.excerpt,
          author: {
            "@type": "Person",
            name: "Gagan Deep",
            url: `${SITE.url}/about`,
            jobTitle: "Founder, Flux Media Creations",
            worksFor: {
              "@type": "Organization",
              name: SITE.name,
              url: SITE.url,
            },
          },
          publisher: {
            "@type": "Organization",
            name: SITE.name,
            url: SITE.url,
          },
          datePublished: post.date,
          dateModified: post.date,
          image: `${SITE.url}${post.cover}`,
          step: detail.howTo.steps.map((step, index) => ({
            "@type": "HowToStep",
            name: step.name,
            text: step.text,
            position: index + 1,
          })),
          tool: detail.howTo.tools?.map((tool) => ({
            "@type": "HowToTool",
            name: tool,
          })),
          totalTime: detail.howTo.totalTime,
        }
      : null;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription ?? post.excerpt,
    image: `${SITE.url}${post.cover}`,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
    author: {
      "@type": "Person",
      name: "Gagan Deep",
      url: `${SITE.url}/about`,
      sameAs: ["https://www.linkedin.com/in/gagan-deep-1609341b7"],
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/og-image.svg`,
      },
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE.url}/blog/${post.slug}` },
    ],
  };
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#localbusiness`,
    name: SITE.name,
    url: SITE.url,
    image: `${SITE.url}/og-image.svg`,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Garhshankar",
      addressRegion: "Punjab",
      addressCountry: "IN",
    },
    areaServed: ["United States", "Canada", "United Kingdom", "India"],
    parentOrganization: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
    },
  };
  const middleIndex = Math.floor(blocks.length / 2);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(localBusinessSchema) }} />
      {howToSchema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(howToSchema) }} /> : null}
      {faqSchema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }} /> : null}

      <article className="section pt-32 max-w-[1320px] mx-auto">
        <Link href="/blog" className="text-sm text-ink/45 hover:text-flux transition-colors">
          ← Back to blog
        </Link>

        <div className="max-w-4xl mt-8 mb-12">
          <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">{post.category}</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold mb-6" style={{ letterSpacing: "-0.03em" }}>
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-ink/40 border-y border-ink/10 py-4">
            <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span>By {post.author}</span>
          </div>
        </div>

        <figure className="mb-12 overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-soft">
          <div className="relative aspect-[16/9] bg-cream">
            <Image
              src={post.cover}
              alt={`${post.title} feature image`}
              fill
              priority
              sizes="(min-width: 1320px) 1320px, 100vw"
              className="object-cover"
            />
          </div>
        </figure>

        <div className="mx-auto max-w-4xl space-y-6 text-base leading-8 text-ink/75">
            {blocks.map((block, index) => (
              <div key={block.type === "section" ? block.id : `paragraph-${block.body.slice(0, 80)}`} className="space-y-6">
                {block.type === "section" ? (
                  <section id={block.id} className="scroll-mt-32 space-y-5">
                    {block.level === 2 ? (
                      <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink" style={{ letterSpacing: "-0.02em" }}>
                        {block.title}
                      </h2>
                    ) : (
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-ink" style={{ letterSpacing: "-0.02em" }}>
                        {block.title}
                      </h3>
                    )}
                    {block.body ? renderParagraphWithLinks(block.body, `section-${index}`) : null}
                  </section>
                ) : (
                  renderParagraphWithLinks(block.body, `paragraph-${index}`)
                )}

                {inlineImages
                  .filter((image) => image.insertAfter === index)
                  .map((image) => (
                    <figure key={`${image.src}-${image.insertAfter}`} className="overflow-hidden rounded-lg border border-ink/10 bg-white">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1400}
                        height={900}
                        className="w-full h-auto"
                      />
                      <figcaption className="px-4 py-3 text-sm text-ink/55">{image.caption}</figcaption>
                    </figure>
                  ))}

                {index === middleIndex ? (
                  <section className="relative my-10 overflow-hidden rounded-[2rem] bg-ink p-7 text-white md:p-10">
                    <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-flux/30 blur-3xl" aria-hidden="true" />
                    <div className="relative">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flux">
                        {showHealthcareCta ? "For healthcare clinics" : showAiVisibilityCta ? "AI visibility assessment" : "Turn insight into action"}
                      </p>
                      <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight md:text-4xl">
                        {showHealthcareCta
                          ? "Connect the clinic website, CRM, booking, and follow-up."
                          : showAiVisibilityCta
                            ? "Find out what AI systems understand—and miss—about your business."
                            : "See where your growth system is losing opportunities."}
                      </h2>
                      <p className="mt-5 max-w-2xl text-base leading-8 text-white/65">
                        {showHealthcareCta
                          ? "Explore the clinic-specific system for appointment conversion, reminders, missed-call recovery, and patient follow-up."
                          : showAiVisibilityCta
                            ? "The Business Intelligence Audit reviews discovery, reputation, content structure, customer journey, and AI readiness."
                            : "Measure discovery, customer progression, revenue visibility, automation, and AI readiness in one structured assessment."}
                      </p>
                      <Link
                        href={showHealthcareCta ? "/healthcare-website-crm" : "/business-intelligence-audit"}
                        className="mt-7 inline-flex rounded-full bg-flux px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-1"
                      >
                        {showHealthcareCta ? "View the healthcare system →" : "Start your assessment →"}
                      </Link>
                    </div>
                  </section>
                ) : null}
              </div>
            ))}

            {post.faq?.length ? (
              <section id="faqs" className="scroll-mt-32 pt-4">
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-6" style={{ letterSpacing: "-0.02em" }}>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {post.faq.map((item) => (
                    <div key={item.question} className="rounded-lg border border-ink/10 bg-white px-5 py-4">
                      <h3 className="font-medium text-ink mb-2">{item.question}</h3>
                      <p className="text-sm leading-7 text-ink/65">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {post.authorBio ? (
              <section className="rounded-lg border border-ink/10 bg-white p-6">
                <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">About the Author</p>
                <p className="text-sm leading-7 text-ink/68 mb-4">{post.authorBio.body}</p>
                {post.authorBio.links?.length ? (
                  <div className="flex flex-wrap gap-3">
                    {post.authorBio.links.map((link) => (
                      <Link key={link.href} href={link.href} className="text-sm font-medium text-flux hover:underline">
                        {link.label} →
                      </Link>
                    ))}
                  </div>
                ) : null}
              </section>
            ) : null}

            {post.relatedPosts?.length ? (
              <section className="rounded-lg border border-ink/10 bg-white p-6">
                <p className="text-xs uppercase tracking-widest text-ink/35 mb-4">Related Posts</p>
                <ul className="space-y-3 text-sm leading-7 text-ink/68">
                  {post.relatedPosts.map((item) => (
                    <li key={item.label}>
                      {item.href ? (
                        <Link href={item.href} className="text-flux hover:underline">
                          {item.label}
                        </Link>
                      ) : (
                        <span>{item.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
        </div>

        <section className="mt-16 border-t border-ink/10 pt-10">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-flux">Continue exploring</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-.04em] text-ink md:text-4xl">Article resources</h2>
            </div>
            <Link href="/blog" className="text-sm font-semibold text-flux hover:underline">View all insights →</Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {toc.length ? (
              <section className="rounded-2xl border border-ink/10 bg-white p-5">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-ink/40">Table of contents</p>
                <nav aria-label="Table of contents" className="mt-4">
                  <ul className="space-y-2.5 text-sm text-ink/65">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`} className={`block transition-colors hover:text-flux ${item.level === 3 ? "pl-3 text-[13px]" : ""}`}>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </section>
            ) : null}

            <section className="rounded-2xl border border-ink/10 bg-white p-5">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-ink/40">Recent posts</p>
              <div className="mt-4 space-y-4">
                {sidebarPosts.map((item) => (
                  <article key={item.slug} className="border-b border-ink/10 pb-4 last:border-0 last:pb-0">
                    <Link href={`/blog/${item.slug}`} className="text-sm font-medium leading-6 text-ink transition-colors hover:text-flux">{item.title}</Link>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-ink/10 bg-white p-5">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-ink/40">Services we offer</p>
              <div className="mt-3 space-y-1">
                {SERVICES.slice(0, 6).map((service) => (
                  <Link key={service.slug} href={service.href} className="flex items-center justify-between rounded-lg px-2 py-2 text-sm text-ink/70 transition-colors hover:bg-ink/5 hover:text-flux">
                    <span>{service.title}</span><span aria-hidden="true">›</span>
                  </Link>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-ink/10 bg-white p-5">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-ink/40">Categories</p>
              <div className="mt-4 space-y-3">
                {Object.entries(categoryCounts).map(([category, count]) => (
                  <div key={category} className="flex items-center justify-between text-sm text-ink/70">
                    <span>{category}</span>
                    <span className="rounded-full bg-flux/10 px-2 py-0.5 text-xs font-medium text-flux">{count}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </article>
    </>
  );
}
