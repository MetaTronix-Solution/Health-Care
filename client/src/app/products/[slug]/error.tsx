"use client";

import { useEffect } from "react";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[50vh] items-center bg-neutral-bg">
      <Container className="py-20 text-center">
        <p className="eyebrow mb-4">Error_500</p>
        <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-primary">
          Something went wrong loading this product.
        </h1>
        <div className="mt-8 flex justify-center">
          <Button onClick={reset}>Try Again</Button>
        </div>
      </Container>
    </section>
  );
}
