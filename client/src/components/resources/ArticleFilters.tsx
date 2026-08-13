"use client";

import { useMemo, useState } from "react";
import { cn } from "@/src/lib/utils";
import { articleCategories } from "@/src/data/articles";
import type { Article } from "@/src/types/article";
import { ArticleCard } from "@/src/components/resources/ArticleCard";

export function ArticleFilters({ articles }: { articles: Article[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered = useMemo(() => {
    if (activeCategory === "all") return articles;
    return articles.filter((article) => article.category === activeCategory);
  }, [articles, activeCategory]);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter articles by category"
        className="flex flex-wrap gap-2 border-b border-neutral-line pb-8"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeCategory === "all"}
          onClick={() => setActiveCategory("all")}
          className={cn(
            "px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] transition-colors",
            activeCategory === "all"
              ? "bg-primary text-tertiary"
              : "bg-neutral-bg text-primary hover:bg-[#e9edf0]",
          )}
        >
          All Articles
        </button>
        {articleCategories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] transition-colors",
              activeCategory === category
                ? "bg-primary text-tertiary"
                : "bg-neutral-bg text-primary hover:bg-[#e9edf0]",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
