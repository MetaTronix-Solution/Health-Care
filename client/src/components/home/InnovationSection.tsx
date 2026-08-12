import Image from "next/image";

export function InnovationSection() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden bg-primary">
      <Image
        src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1800&auto=format&fit=crop"
        alt="Surgeon performing a precision procedure with a digital display in the background"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/45" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-16">
        <div className="max-w-md bg-primary/70 p-6 backdrop-blur-sm">
          <p className="eyebrow mb-3 text-tertiary/70">Initiative_002</p>
          <h2 className="text-2xl sm:text-3xl font-medium uppercase tracking-tight text-tertiary">
            Precision When It Matters
          </h2>
        </div>
      </div>
    </section>
  );
}
