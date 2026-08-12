import { ShieldCheck, Lock, Globe2, Clock3 } from "lucide-react";
import { Container } from "@/src/components/ui/Container";

const items = [
  { label: "FDA Cleared", icon: ShieldCheck },
  { label: "HIPAA Compliant", icon: Lock },
  { label: "Global Reach", icon: Globe2 },
  { label: "24/7 Support", icon: Clock3 },
];

export function TrustBar() {
  return (
    <section className="shrink-0 border-y border-neutral-line bg-tertiary">
      <Container className="grid grid-cols-2 gap-5 py-5 sm:grid-cols-4 sm:py-6">
        {items.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center gap-2.5 text-[12px] font-medium text-primary/80"
          >
            <Icon size={15} className="shrink-0 text-secondary" aria-hidden />

            <span>{label}</span>
          </div>
        ))}
      </Container>
    </section>
  );
}
