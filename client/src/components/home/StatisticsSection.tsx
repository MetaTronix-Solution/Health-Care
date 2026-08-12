import { Container } from "@/src/components/ui/Container";

const stats = [
  { value: "10,000+", label: "Clinical deployments worldwide" },
  { value: "47", label: "Countries served" },
  { value: "24/7", label: "Technical support coverage" },
  { value: "76%", label: "Average diagnostic time reduction" },
];

export function StatisticsSection() {
  return (
    <section className="bg-primary py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-t border-tertiary/20 pt-6">
              <p className="text-3xl sm:text-4xl font-light tracking-tight text-tertiary">
                {stat.value}
              </p>
              <p className="mt-2 text-[12px] leading-relaxed text-tertiary/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
