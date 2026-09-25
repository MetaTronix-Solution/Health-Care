"use client";

import { useCallback, useEffect, useState } from "react";
import { BlogExplorer } from "@/src/components/admin/blog/BlogExplorer";
import { Button } from "@/src/components/ui/Button";
import { api } from "@/src/lib/api/client";
import type { Blog } from "@/src/types/blog";

interface BlogListResponse {
  items: Blog[];
  total: number;
}

export default function AdminBlogPage() {
  const [blogs, setBlogs] = useState<Blog[] | null>(null);
  const [error, setError] = useState("");

  const fetchBlogs = useCallback(() => {
    api<BlogListResponse>("/blog/admin?limit=1000")
      .then((data) => setBlogs(data.items))
      .catch(() => setError("Failed to load blog posts"));
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-primary sm:text-3xl">Blog</h1>
          <p className="mt-1 text-sm text-neutral-muted">
            Manage articles published to your site.
          </p>
        </div>

        <Button href="/admin/blog/new">Add Article</Button>
      </div>

      {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

      {blogs === null && !error ? (
        <p className="text-sm text-neutral-muted">Loading...</p>
      ) : (
        <BlogExplorer blogs={blogs ?? []} onBlogDeleted={fetchBlogs} />
      )}
    </div>
  );
}
