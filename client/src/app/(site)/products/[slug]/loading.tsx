import { Container } from "@/src/components/ui/Container";

export default function Loading() {
  return (
    <section className="py-14 lg:py-20">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="aspect-[4/3] w-full animate-pulse bg-neutral-bg" />
        <div className="space-y-4">
          <div className="h-3 w-32 animate-pulse bg-neutral-bg" />
          <div className="h-10 w-3/4 animate-pulse bg-neutral-bg" />
          <div className="h-4 w-full animate-pulse bg-neutral-bg" />
          <div className="h-4 w-2/3 animate-pulse bg-neutral-bg" />
        </div>
      </Container>
    </section>
  );
}
