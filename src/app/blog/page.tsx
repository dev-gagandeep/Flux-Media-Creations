import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/constants";
import { generateMeta } from "@/lib/seo";
import TextReveal from "@/components/ui/TextReveal";

export const metadata: Metadata = generateMeta({
  title: "Blog",
  description:
    "Insights on WordPress, GoHighLevel automation, and lead conversion systems for clinics and service businesses.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <section className="section pt-32 max-w-[1100px] mx-auto">
      <p className="text-sm uppercase tracking-widest text-ink/30 mb-5">Blog</p>
      <TextReveal
        text="Practical growth playbooks for websites and automation."
        className="font-display font-semibold text-4xl md:text-6xl max-w-4xl mb-6"
        as="h1"
      />
      <p className="text-base text-ink/50 max-w-2xl leading-relaxed mb-14">
        No fluff, no theory dumps. Just real implementation ideas you can apply to improve response time,
        conversion rates, and follow-up consistency.
      </p>

      <div className="grid gap-6">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.slug}
            className="border border-ink/10 rounded-2xl bg-white p-6 md:p-8 hover:border-ink/25 transition-colors"
          >
            <p className="text-xs uppercase tracking-widest text-ink/35 mb-3">{post.category}</p>
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3" style={{ letterSpacing: "-0.02em" }}>
              <Link href={`/blog/${post.slug}`} className="hover:text-flux transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-ink/60 leading-relaxed mb-5">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-ink/40">
              <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>By {post.author}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
