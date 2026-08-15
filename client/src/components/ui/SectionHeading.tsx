import { cn } from "@/src/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="text-section-title text-primary">{title}</h2>
      {description && (
        <p className="text-body mt-4 max-w-xl text-neutral-muted">
          {description}
        </p>
      )}
    </div>
  );
}
