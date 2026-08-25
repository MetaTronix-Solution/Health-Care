import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/src/lib/utils";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea ref={ref} className={cn("admin-textarea", className)} {...props} />
    );
  },
);

Textarea.displayName = "Textarea";
