import { COMPANY } from "@/src/data/company";

export function slugify(value: string): string {
  return value
   .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function generateProductSeoDefaults({
  name,
  shortDescription,
}: {
  name: string;
  shortDescription?: string;
}) {
  const trimmedName = name.trim();

  return {
    title: trimmedName
      ? `${trimmedName} | ${COMPANY.name} Nepal`
      : "",
    metaDescription:
      shortDescription?.trim() ||
      (trimmedName
        ? `${trimmedName} from ${COMPANY.name}, authorized BMC Medical distributor in Nepal. Contact us for product guidance and support.`
        : ""),
    slug: slugify(trimmedName),
  };
}
