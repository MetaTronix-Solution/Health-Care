import type { Metadata } from "next";
import { Plus } from "lucide-react";

import { PageHeader } from "@/src/components/ui/PageHeader";
import { Button } from "@/src/components/ui/Button";
import { BlogExplorer } from "@/src/components/admin/blog/BlogExplorer";
import { articles } from "@/src/data/articles";
import { createAdminMetadata } from "@/src/lib/seo/metadata";

export const metadata: Metadata = createAdminMetadata("Blog Management");

export default function BlogPage() {
  return (
    <div className="admin-page">
      <PageHeader
        title="Blog Management"
        description="Manage and publish clinical insights, product updates, and company news."
        actions={
          <Button
            href="/admin/blog/new"
            icon={<Plus aria-hidden className="h-4 w-4" />}
          >
            Add Article
          </Button>
        }
      />

      <BlogExplorer articles={articles} />
    </div>
  );
}
