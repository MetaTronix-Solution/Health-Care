"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container } from "@/src/components/ui/Container";
import { COMPANY } from "@/src/data/company";

type Stat = {
  label: string;
  value?: string;
  image?: string;
  alt?: string;
};

const stats: Stat[] = [
  { value: String(COMPANY.established), label: "Established in Nepal" },
  {
    image: "/BMC.png",
    alt: "BMC",
    label: "Authorized distributor",
  },
  { value: "CPAP", label: "Sleep & respiratory solutions" },
  { value: "24/7", label: "After sales support commitment" },
];

export function StatisticsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-primary section-padding">
      <Container>
        <div
          ref={sectionRef}
          className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="transition-all duration-700 ease-out"
              style={{
                transitionDelay: `${index * 120}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(16px)",
              }}
            >
              {stat.image ? (
                <div className="relative h-10 w-24 sm:h-12 sm:w-28">
                  <Image
                    src={stat.image}
                    alt={stat.alt ?? stat.label}
                    fill
                    className="object-contain object-left"
                  />
                </div>
              ) : (
                <p className="text-3xl font-light tracking-tight text-tertiary sm:text-4xl">
                  {stat.value}
                </p>
              )}
              <p className="text-body-sm mt-2.5 uppercase tracking-wide text-tertiary/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
