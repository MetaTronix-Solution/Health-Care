import { Container } from "@/src/components/ui/Container";
import { COMPANY } from "@/src/data/company";

const stats = [
  { value: String(COMPANY.established), label: "Established in Nepal" },
  { value: "BMC", label: "Authorized distributor" },
  { value: "CPAP", label: "Sleep & respiratory solutions" },
  { value: "24/7", label: "After-sales support commitment" },
];

export function StatisticsSection() {
  return (
    <section className="bg-primary section-padding">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-10">
          {stats.map((stat) => (
            <div key={stat.label} className="border-t border-tertiary/20 pt-5">
              <p className="text-2xl font-light tracking-tight text-tertiary sm:text-3xl">
                {stat.value}
              </p>
              <p className="text-body-sm mt-2 text-tertiary/65">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
