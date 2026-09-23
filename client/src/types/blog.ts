export const blogCategories = [
  "Clinical Insights",
  "Product Updates",
  "Company News",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export interface Blog {
  _id: string;
  title: string;
  slug: string;
  category: BlogCategory;
  image: string;
  imageFileId: string;
  excerpt: string;
  content: string;
  author: string;
  isPublished: boolean;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
}
