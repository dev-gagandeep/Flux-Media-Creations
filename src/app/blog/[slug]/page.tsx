import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, SERVICES, SITE, type BlogPost } from "@/lib/constants";
import { BLOG_DETAILS } from "@/lib/blog-detail";
import { generateMeta } from "@/lib/seo";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
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
  Work: "/work",
  Industries: "/industries",
  Process: "/process",
  Contact: "/contact",
  Blog: "/blog",
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

  return (
    <p key={key}>
      {chunks.map((chunk, chunkIndex) => {
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

        return <span key={`${key}-text-${chunkIndex}`}>{chunk}</span>;
      })}
    </p>
  );
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = BLOG_POSTS.find((item) => item.slug === params.slug);

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

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = BLOG_POSTS.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  const { blocks, toc } = parseBlogContent(post);
  const detail = BLOG_DETAILS[post.slug];
  const inlineImages = BLOG_INLINE_IMAGES[post.slug] ?? [];
  const recentPosts = BLOG_POSTS.filter((item) => item.slug !== post.slug).slice(0, 3);
  const sidebarPosts = recentPosts.length > 0 ? recentPosts : BLOG_POSTS.slice(0, 3);
  const categoryCounts = BLOG_POSTS.reduce<Record<string, number>>((acc, item) => {
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

  return (
    <>
      {howToSchema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} /> : null}
      {faqSchema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /> : null}

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

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <div className="order-2 lg:order-1 space-y-6 text-base leading-8 text-ink/75">
            {blocks.map((block, index) => (
              <div key={`block-${index}`} className="space-y-6">
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
                    <figure key={`${image.src}-${index}`} className="overflow-hidden rounded-lg border border-ink/10 bg-white">
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

          <aside className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-28 space-y-4">
              {toc.length ? (
                <section className="rounded-lg border border-ink/10 bg-white p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-ink mb-4">Table of Contents</p>
                  <nav aria-label="Table of contents">
                    <ul className="space-y-2.5 text-sm text-ink/65">
                      {toc.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className={`block hover:text-flux transition-colors ${item.level === 3 ? "pl-4 text-[13px]" : ""}`}
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </section>
              ) : null}

            <section className="rounded-lg bg-[#1D1738] p-5 text-white">
              <p className="text-lg font-display font-semibold mb-2" style={{ letterSpacing: "-0.02em" }}>
                Ready to Automate?
              </p>
              <p className="text-sm leading-6 text-white/70 mb-4">
                Contact us and we&apos;ll map your complete GHL automation roadmap.
              </p>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-lg bg-[#7C5CFF] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#6d4ff0]"
              >
                Contact Us →
              </Link>
            </section>

            <section className="rounded-lg border border-ink/10 bg-white p-4">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-ink mb-4">Recent Posts</p>
              <div className="space-y-4">
                {sidebarPosts.map((item) => (
                  <article key={item.slug} className="border-b border-ink/8 pb-4 last:border-b-0 last:pb-0">
                    <Link href={`/blog/${item.slug}`} className="text-sm font-medium leading-6 text-ink hover:text-flux transition-colors">
                      {item.title}
                    </Link>
                    <p className="mt-1 text-xs text-ink/40">
                      {new Date(item.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-ink/10 bg-white p-4">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-ink mb-4">Services We Offer</p>
              <div className="space-y-1">
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    href={service.href}
                    className="flex items-center justify-between rounded-md px-2 py-2 text-sm text-ink/70 transition-colors hover:bg-ink/5 hover:text-flux"
                  >
                    <span>{service.title}</span>
                    <span aria-hidden="true">›</span>
                  </Link>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-ink/10 bg-white p-4">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-ink mb-4">Categories</p>
              <div className="space-y-2">
                {Object.entries(categoryCounts).map(([category, count]) => (
                  <div key={category} className="flex items-center justify-between text-sm text-ink/70">
                    <span>{category}</span>
                    <span className="rounded-full bg-[#7C5CFF]/10 px-2 py-0.5 text-xs font-medium text-[#7C5CFF]">
                      {count}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-ink/10 bg-white p-4">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-ink mb-4">Need Help Fast?</p>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-flux hover:underline"
              >
                Chat on WhatsApp
                <span aria-hidden="true">↗</span>
              </a>
            </section>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
