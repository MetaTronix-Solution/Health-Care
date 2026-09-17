"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";

interface ShareButtonProps {
  title: string;
  url: string;
}

export function ShareButton({ title, url }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const canNativeShare =
      typeof navigator !== "undefined" && !!navigator.share;

    if (canNativeShare) {
      try {
        await navigator.share({ title, url });
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          console.error("Share failed:", err);
        }
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy to clipboard failed:", err);
    }
  };

  return (
    <button
      type="button"
      aria-label={copied ? "Link copied" : "Share this article"}
      onClick={handleShare}
      className="flex h-9 w-9 items-center justify-center border border-neutral-line text-primary transition-colors hover:bg-neutral-bg"
    >
      {copied ? <Check size={15} /> : <Share2 size={15} />}
    </button>
  );
}
