"use client";

import { useEffect, useState } from "react";
import { ShieldCheck, BedDouble, Headphones, MapPin } from "lucide-react";
import { Container } from "@/src/components/ui/Container";

const features = [
  {
    icon: ShieldCheck,
    title: "Authorized BMC Distributor",
    description: "Trusted. Certified. Reliable.",
  },
  {
    icon: BedDouble,
    title: "Sleep & Respiratory Care",
    description: "Advanced solutions for better care.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description: "Expert support when you need it.",
  },
  {
    icon: MapPin,
    title: "Nepal Based Service",
    description: "Local presence. Faster response.",
  },
];

export function TrustBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative z-10">
      <Container>
        <div
          className="-mt-16 rounded-2xl bg-tertiary p-6 shadow-xl transition-all duration-700 ease-out sm:-mt-14 sm:p-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className="flex items-start gap-3 transition-all duration-500 ease-out"
                style={{
                  transitionDelay: `${150 + index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(12px)",
                }}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-primary">
                    {title}
                  </p>
                  <p className="text-body-sm mt-0.5 text-neutral-muted">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
