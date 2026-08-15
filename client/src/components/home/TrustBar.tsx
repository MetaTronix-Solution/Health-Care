import { ShieldCheck, Wind, Headphones, MapPin } from "lucide-react";
import { Container } from "@/src/components/ui/Container";

const items = [
  { label: "Authorized BMC Distributor", icon: ShieldCheck },
  { label: "Sleep & Respiratory Care", icon: Wind },
  { label: "Technical Support", icon: Headphones },
  { label: "Nepal-Based Service", icon: MapPin },
];

export function TrustBar() {
  return (
    <section className="shrink-0 border-y border-neutral-line bg-tertiary">
      <Container className="grid grid-cols-2 gap-4 py-4 sm:grid-cols-4 sm:gap-5 sm:py-5">
        {items.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center gap-2 text-[11px] font-medium text-primary/80 sm:text-[12px]"
          >
            <Icon size={15} className="shrink-0 text-secondary" aria-hidden />
            <span>{label}</span>
          </div>
        ))}
      </Container>
    </section>
  );
}
