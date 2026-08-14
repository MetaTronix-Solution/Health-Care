import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Share2 } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { ArticleCard } from "@/src/components/resources/ArticleCard";
import {
  articles,
  getArticleBySlug,
  getRelatedArticles,
} from "@/src/data/articles";
import { formatDate } from "@/src/lib/utils";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/resources/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const related = getRelatedArticles(article.slug, article.category);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.date,
    author: { "@type": "Person", name: article.author },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <section className="border-b border-neutral-line bg-tertiary py-14 lg:py-20">
          <Container>
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.08em]">
                <span className="text-secondary">{article.category}</span>
                <span className="text-neutral-muted">
                  {formatDate(article.date)}
                </span>
              </div>
              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.1] tracking-tight text-primary">
                {article.title}
              </h1>
              <p className="mt-5 text-[13px] text-neutral-muted">
                By {article.author}
              </p>
            </div>
          </Container>
        </section>

        <div className="relative aspect-[16/7] w-full overflow-hidden bg-primary">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <section className="py-14 lg:py-20">
          <Container>
            <div className="mx-auto max-w-3xl">
              <div className="flex flex-col gap-5">
                {article.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-[15px] leading-relaxed text-primary/90"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10 flex items-center gap-3 border-t border-neutral-line pt-6">
                <span className="eyebrow">Share</span>
                <button
                  type="button"
                  aria-label="Share this article"
                  className="flex h-9 w-9 items-center justify-center border border-neutral-line text-primary transition-colors hover:bg-neutral-bg"
                >
                  <Share2 size={15} />
                </button>
              </div>
            </div>
          </Container>
        </section>
      </article>

      {related.length > 0 && (
        <section className="border-t border-neutral-line bg-neutral-bg py-16 lg:py-24">
          <Container>
            <p className="eyebrow mb-8">Related Articles</p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {related.map((relatedArticle) => (
                <ArticleCard
                  key={relatedArticle.slug}
                  article={relatedArticle}
                />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
