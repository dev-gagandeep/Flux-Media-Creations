import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
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
};

function renderParagraphWithLinks(paragraph: string, paragraphIndex: number) {
  const chunks = paragraph.split(/\[([^\]]+)\]/g);

  return (
    <p key={`p-${paragraphIndex}`}>
      {chunks.map((chunk, chunkIndex) => {
        if (chunkIndex % 2 === 1) {
          const href = INTERNAL_PAGE_LINKS[chunk];
          if (href) {
            return (
              <Link key={`l-${paragraphIndex}-${chunkIndex}`} href={href} className="text-flux hover:underline">
                {chunk}
              </Link>
            );
          }
        }

        return <span key={`t-${paragraphIndex}-${chunkIndex}`}>{chunk}</span>;
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
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.cover,
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = BLOG_POSTS.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  const inlineImages = BLOG_INLINE_IMAGES[post.slug] ?? [];

  return (
    <article className="section pt-32 max-w-[900px] mx-auto">
      <Link href="/blog" className="text-sm text-ink/45 hover:text-flux transition-colors">
        ← Back to blog
      </Link>

      <p className="text-xs uppercase tracking-widest text-ink/35 mt-8 mb-4">{post.category}</p>
      <h1 className="font-display text-4xl md:text-6xl font-semibold mb-6" style={{ letterSpacing: "-0.03em" }}>
        {post.title}
      </h1>

      <div className="flex flex-wrap items-center gap-4 text-sm text-ink/40 border-y border-ink/10 py-4 mb-10">
        <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
        <span>•</span>
        <span>{post.readTime}</span>
        <span>•</span>
        <span>By {post.author}</span>
      </div>

      <div className="space-y-6 text-base leading-8 text-ink/75">
        {post.content.map((paragraph, index) => (
          <div key={`block-${index}`} className="space-y-6">
            {renderParagraphWithLinks(paragraph, index)}

            {inlineImages
              .filter((image) => image.insertAfter === index)
              .map((image) => (
                <figure key={`${image.src}-${index}`} className="rounded-2xl overflow-hidden border border-ink/10 bg-white">
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
      </div>
    </article>
  );
}
