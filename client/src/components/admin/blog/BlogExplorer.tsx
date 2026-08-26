"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Newspaper } from "lucide-react";
import { BlogFilters } from "@/src/components/admin/blog/BlogFilters";
import { BlogRowActions } from "@/src/components/admin/blog/BlogRowActions";
import { EmptyState } from "@/src/components/ui/EmptyState";
import { Button } from "@/src/components/ui/Button";
import { Card } from "@/src/components/ui/Card";
import type { Article } from "@/src/types/article";

const PAGE_SIZE = 8;

export function BlogExplorer({ articles }: { articles: Article[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);

  const categories = useMemo(
    () =>
      Array.from(new Set(articles.map((article) => article.category))).sort(),
    [articles],
  );

  const filtered = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(search.trim().toLowerCase()) ||
        article.author.toLowerCase().includes(search.trim().toLowerCase());
      const matchesCategory =
        category === "all" || article.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [articles, search, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  return (
    <Card>
      <div className="border-b border-neutral-line p-5">
        <BlogFilters
          search={search}
          category={category}
          categories={categories}
          onSearchChange={(value) => {
            setSearch(value);
            setPage(1);
          }}
          onCategoryChange={(value) => {
            setCategory(value);
            setPage(1);
          }}
        />
      </div>

      {paginated.length === 0 ? (
        <EmptyState
          icon={Newspaper}
          title="No articles found"
          description="Publish your first article to begin building your blog."
          action={<Button href="/admin/blog/new">Add Article</Button>}
        />
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="hairline text-xs text-neutral-muted">
                  <th scope="col" className="px-5 py-3 font-medium">
                    Article
                  </th>
                  <th scope="col" className="px-5 py-3 font-medium">
                    Category
                  </th>
                  <th scope="col" className="px-5 py-3 font-medium">
                    Author
                  </th>
                  <th scope="col" className="px-5 py-3 font-medium">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginated.map((article) => (
                  <tr key={article.slug} className="hairline">
                    <td className="px-5 py-4 font-medium text-primary">
                      <Link
                        href={`/admin/blog/${article.slug}`}
                        className="hover:underline"
                      >
                        {article.title}
                      </Link>
                    </td>
                    <td className="px-5 py-4 text-neutral-muted">
                      {article.category}
                    </td>
                    <td className="px-5 py-4 text-neutral-muted">
                      {article.author}
                    </td>
                    <td className="px-5 py-4 text-neutral-muted">
                      {new Date(article.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </td>
                    <td className="px-5 py-4">
                      <BlogRowActions slug={article.slug} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col items-center justify-between gap-3 border-t border-neutral-line px-5 py-4 sm:flex-row">
            <p className="text-sm text-neutral-muted">
              Showing {(currentPage - 1) * PAGE_SIZE + 1} to{" "}
              {Math.min(currentPage * PAGE_SIZE, filtered.length)} of{" "}
              {filtered.length} entries
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="secondary"
                size="sm"
                disabled={currentPage === 1}
                onClick={() => setPage((value) => Math.max(1, value - 1))}
              >
                Prev
              </Button>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <button
                    key={pageNumber}
                    type="button"
                    aria-current={
                      pageNumber === currentPage ? "page" : undefined
                    }
                    onClick={() => setPage(pageNumber)}
                    className={
                      pageNumber === currentPage
                        ? "flex h-8 w-8 items-center justify-center rounded-md border border-secondary text-sm font-medium text-secondary"
                        : "flex h-8 w-8 items-center justify-center rounded-md border border-neutral-line text-sm font-medium text-neutral-muted hover:bg-neutral-bg"
                    }
                  >
                    {pageNumber}
                  </button>
                ),
              )}
              <Button
                variant="secondary"
                size="sm"
                disabled={currentPage === totalPages}
                onClick={() =>
                  setPage((value) => Math.min(totalPages, value + 1))
                }
              >
                Next
              </Button>
            </div>
          </div>
        </>
      )}
    </Card>
  );
}
