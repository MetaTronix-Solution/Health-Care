import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ShareButton } from "@/src/components/resources/ShareButton";
import { Container } from "@/src/components/ui/Container";
import { BreadcrumbJsonLd } from "@/src/components/seo/BreadcrumbJsonLd";
import { ArticleJsonLd } from "@/src/components/seo/ArticleJsonLd";
import { apiPublic } from "@/src/lib/api/public";
import type { Blog } from "@/src/types/blog";
import { formatDate } from "@/src/lib/utils";
import { createArticleMetadata } from "@/src/lib/seo/pages";

async function getArticle(slug: string): Promise<Blog | null> {
  try {
    return await apiPublic<Blog>(`/blog/${slug}`);
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return createArticleMetadata(article);
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: article.title },
  ];

  return (
    <>
      <ArticleJsonLd
        title={article.title}
        description={article.excerpt}
        image={article.image}
        datePublished={article.publishedAt ?? article.createdAt}
        author={article.author}
        slug={article.slug}
      />
      <BreadcrumbJsonLd items={breadcrumbs} />

      <article>
        <section className="border-b border-neutral-line bg-tertiary py-14 lg:py-20">
          <Container>
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.08em]">
                <span className="text-secondary">{article.category}</span>
                <span className="text-neutral-muted">
                  {formatDate(article.publishedAt ?? article.createdAt)}
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

        <div className="relative w-full overflow-hidden bg-primary">
          {/* Blurred backdrop fills the space */}
          <div
            aria-hidden
            className="absolute inset-0 scale-110 bg-cover bg-center opacity-60 blur-2xl"
            style={{ backgroundImage: `url(${article.image})` }}
          />

          {/* Sharp image, forced to 80% width, centered on top */}
          <div className="relative mx-auto flex max-h-[70vh] w-full items-center justify-center py-8">
            <Image
              src={article.image}
              alt={article.title}
              width={1600}
              height={900}
              priority
              sizes="80vw"
              className="h-auto max-h-[70vh] w-[80%] object-contain"
            />
          </div>
        </div>

        <section className="py-14 lg:py-20">
          <Container>
            <div className="mx-auto max-w-3xl">
              <div className="whitespace-pre-wrap text-[15px] leading-relaxed text-primary/90">
                {article.content}
              </div>

              <div className="mt-10 flex items-center gap-3 border-t border-neutral-line pt-6">
                <span className="eyebrow">Share</span>
                <ShareButton
                  title={article.title}
                  url={`https://yourdomain.com/resources/${article.slug}`}
                />
              </div>
            </div>
          </Container>
        </section>
      </article>
    </>
  );
}
