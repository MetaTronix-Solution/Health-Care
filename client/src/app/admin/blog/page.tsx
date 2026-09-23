import { BlogExplorer } from "@/src/components/admin/blog/BlogExplorer";
import { apiServer } from "@/src/lib/api/server";
import type { Blog } from "@/src/types/blog";
import { Button } from "@/src/components/ui/Button";

interface BlogListResponse {
  items: Blog[];
  total: number;
}

export default async function AdminBlogPage() {
  const data = await apiServer<BlogListResponse>("/blog/admin?limit=1000");

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

      <BlogExplorer blogs={data.items} />
    </div>
  );
}
