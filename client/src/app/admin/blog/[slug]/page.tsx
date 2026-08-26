"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { articleCategories, getArticleBySlug } from "@/src/data/articles";
import type { Article } from "@/src/types/article";

export default function EditArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const router = useRouter();
  const { slug } = use(params);
  const existing = getArticleBySlug(slug);

  if (!existing) {
    notFound();
  }

  // Reassign so TypeScript locks in the non-undefined type for use below,
  // including inside handleSubmit's closure.
  const article = existing;

  const [form, setForm] = useState({
    title: article.title,
    category: article.category,
    author: article.author,
    date: article.date,
    image: article.image,
    excerpt: article.excerpt,
    content: article.content.join("\n\n"),
  });
  const [isSaving, setIsSaving] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsSaving(true);

    const updatedArticle: Article = {
      slug: article.slug,
      title: form.title,
      category: form.category as Article["category"],
      date: form.date,
      author: form.author,
      excerpt: form.excerpt,
      image: form.image,
      content: form.content
        .split("\n\n")
        .map((p) => p.trim())
        .filter(Boolean),
    };

    // TODO: replace with your actual update-article API call
    console.log("Updating article:", updatedArticle);

    setIsSaving(false);
    router.push("/admin/blog");
  }

  return (
    <div className="rounded-lg bg-neutral-bg p-6 sm:p-8">
      <Link
        href="/admin/blog"
        className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-neutral-muted hover:text-primary"
      >
        <ArrowLeft aria-hidden className="h-4 w-4" />
        Back to Blog
      </Link>

      <h1 className="mb-6 text-2xl font-bold text-primary sm:text-3xl">
        Edit Article
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl rounded-lg border border-neutral-line bg-white p-6 sm:p-8"
      >
        <div className="grid gap-6">
          <Field label="Title" htmlFor="title">
            <input
              id="title"
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="admin-input"
            />
          </Field>

          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Category" htmlFor="category">
              <select
                id="category"
                value={form.category}
                onChange={(e) =>
                  setForm({
                    ...form,
                    category: e.target.value as Article["category"],
                  })
                }
                className="admin-input"
              >
                {articleCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Author" htmlFor="author">
              <input
                id="author"
                required
                value={form.author}
                onChange={(e) => setForm({ ...form, author: e.target.value })}
                className="admin-input"
              />
            </Field>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Date" htmlFor="date">
              <input
                id="date"
                type="date"
                required
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="admin-input"
              />
            </Field>

            <Field label="Cover image URL" htmlFor="image">
              <input
                id="image"
                type="url"
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
                className="admin-input"
              />
            </Field>
          </div>

          <Field label="Excerpt" htmlFor="excerpt">
            <textarea
              id="excerpt"
              required
              rows={2}
              value={form.excerpt}
              onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
              className="admin-input resize-none"
            />
          </Field>

          <Field label="Content" htmlFor="content">
            <textarea
              id="content"
              required
              rows={10}
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              className="admin-input resize-none font-mono text-sm"
            />
          </Field>
        </div>

        <div className="mt-8 flex justify-between gap-3">
          <button
            type="button"
            onClick={() => {
              // TODO: replace with your actual delete-article API call
              console.log("Deleting article:", article.slug);
              router.push("/admin/blog");
            }}
            className="rounded-md border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50"
          >
            Delete Article
          </button>

          <div className="flex gap-3">
            <Link
              href="/admin/blog"
              className="rounded-md border border-neutral-line px-4 py-2.5 text-sm font-medium text-primary hover:bg-neutral-bg"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={isSaving}
              className="rounded-md bg-secondary px-4 py-2.5 text-sm font-semibold text-white hover:bg-secondary/90 disabled:opacity-60"
            >
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-primary"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
