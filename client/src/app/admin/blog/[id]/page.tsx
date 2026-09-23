"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogCategories, type Blog, type BlogCategory } from "@/src/types/blog";
import { api } from "@/src/lib/api/client";
import { ApiError } from "@/src/lib/api/errors";

export default function EditBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const { id } = use(params);

  const [existing, setExisting] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [form, setForm] = useState({
    title: "",
    category: blogCategories[0] as BlogCategory,
    author: "",
    excerpt: "",
    content: "",
    isPublished: true,
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState("");

  useEffect(() => {
    api<Blog>(`/blog/admin/${id}`)
      .then((blog) => {
        setExisting(blog);
        setImagePreview(blog.image);
        setForm({
          title: blog.title,
          category: blog.category,
          author: blog.author,
          excerpt: blog.excerpt,
          content: blog.content,
          isPublished: blog.isPublished,
        });
      })
      .catch((err) => {
        setLoadError(
          err instanceof ApiError ? err.message : "Failed to load blog post",
        );
      })
      .finally(() => setLoading(false));
  }, [id]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSaveError("");
    setIsSaving(true);

    try {
      const fd = new FormData();
      fd.append("title", form.title);
      fd.append("category", form.category);
      fd.append("author", form.author);
      fd.append("excerpt", form.excerpt);
      fd.append("content", form.content);
      fd.append("isPublished", String(form.isPublished));
      if (imageFile) fd.append("image", imageFile);

      await api(`/blog/${id}`, { method: "PATCH", body: fd });

      router.push("/admin/blog");
    } catch (err) {
      setSaveError(
        err instanceof ApiError ? err.message : "Failed to update blog post",
      );
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDelete() {
    if (!confirm("Delete this blog post? This can't be undone.")) return;

    try {
      await api(`/blog/${id}`, { method: "DELETE" });
      router.push("/admin/blog");
    } catch (err) {
      setSaveError(
        err instanceof ApiError ? err.message : "Failed to delete blog post",
      );
    }
  }

  if (loading) {
    return <div className="p-8 text-sm text-neutral-muted">Loading...</div>;
  }

  if (loadError || !existing) {
    return (
      <div className="p-8 text-sm text-red-600">
        {loadError || "Blog post not found"}
      </div>
    );
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
        Edit Blog Post
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
                  setForm({ ...form, category: e.target.value as BlogCategory })
                }
                className="admin-input"
              >
                {blogCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Author" htmlFor="author">
              <input
                id="author"
                value={form.author}
                onChange={(e) => setForm({ ...form, author: e.target.value })}
                className="admin-input"
              />
            </Field>
          </div>

          <Field label="Cover image" htmlFor="image">
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0] ?? null;
                setImageFile(file);
                setImagePreview(
                  file ? URL.createObjectURL(file) : existing.image,
                );
              }}
              className="hidden"
            />

            <div className="flex items-center gap-3 rounded-md border border-neutral-line p-2">
              <img
                src={imagePreview}
                alt="Cover preview"
                className="h-14 w-14 shrink-0 rounded-md border border-neutral-line object-cover"
              />
              <span className="flex-1 truncate text-sm text-primary">
                {imageFile?.name ?? "Current image"}
              </span>
              <label
                htmlFor="image"
                className="cursor-pointer rounded-md border border-neutral-line bg-white px-3 py-1.5 text-xs font-medium text-primary hover:bg-neutral-bg"
              >
                Change
              </label>
            </div>
          </Field>

          <Field label="Excerpt" htmlFor="excerpt">
            <textarea
              id="excerpt"
              required
              rows={2}
              maxLength={500}
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

          <label
            htmlFor="isPublished"
            className="flex items-center gap-3 text-sm font-medium text-primary"
          >
            <input
              id="isPublished"
              type="checkbox"
              checked={form.isPublished}
              onChange={(e) =>
                setForm({ ...form, isPublished: e.target.checked })
              }
              className="h-4 w-4 rounded border-neutral-line"
            />
            Published
          </label>
        </div>

        {saveError && <p className="mt-4 text-sm text-red-600">{saveError}</p>}

        <div className="mt-8 flex justify-between gap-3">
          <button
            type="button"
            onClick={handleDelete}
            className="rounded-md border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50"
          >
            Delete Blog Post
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
