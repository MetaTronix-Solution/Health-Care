"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { articleCategories } from "@/src/data/articles";
import type { Article } from "@/src/types/article";

export default function NewArticlePage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    category: articleCategories[0] as Article["category"],
    author: "",
    date: new Date().toISOString().slice(0, 10),
    image: "",
    excerpt: "",
    content: "",
  });
  const [isSaving, setIsSaving] = useState(false);

  function slugify(title: string) {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsSaving(true);

    const newArticle: Article = {
      slug: slugify(form.title),
      title: form.title,
      category: form.category,
      date: form.date,
      author: form.author,
      excerpt: form.excerpt,
      image: form.image,
      content: form.content
        .split("\n\n")
        .map((p) => p.trim())
        .filter(Boolean),
    };

    // TODO: replace with your actual create-article API call
    console.log("Creating article:", newArticle);

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
        Add Article
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
              placeholder="Article title"
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
                placeholder="Author name"
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
                placeholder="https://..."
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
              placeholder="Short summary shown in article previews"
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
              placeholder="Separate paragraphs with a blank line"
            />
          </Field>
        </div>

        <div className="mt-8 flex justify-end gap-3">
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
            {isSaving ? "Publishing..." : "Publish Article"}
          </button>
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
