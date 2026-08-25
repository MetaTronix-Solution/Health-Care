"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Plus,
  Wind,
  Moon,
  Activity,
  Wrench,
  Headphones,
} from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";
import {
  COMPANY,
  workingSectors,
  focusAreas,
  trustHighlights,
  faqItems,
} from "@/src/data/company";

const sectorIcons = [
  Moon,
  Wind,
  Wind,
  Wind,
  Activity,
  Wind,
  Activity,
  Wrench,
  Headphones,
];

export function AboutHero() {
  return (
    <section className="flex min-h-[50vh] flex-col justify-center section-padding-sm">
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="eyebrow mb-4">About Us</p>
            <h1 className="text-page-title max-w-lg text-primary">
              Respiratory Care & Sleep Medicine in Nepal
            </h1>
            <p className="text-body mt-5 max-w-md text-neutral-muted">
              {COMPANY.description}
            </p>
          </div>

          <div className="relative aspect-[16/10] w-full overflow-hidden border border-neutral-line bg-neutral-bg">
            <Image
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=1800&auto=format&fit=crop"
              alt="Medical equipment for respiratory and sleep care"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function AboutOverview() {
  const highlights = [
    { label: "Established", value: String(COMPANY.established) },
    { label: "Focus", value: "Respiratory Care" },
    { label: "Specialization", value: "Sleep Medicine" },
    { label: "Support", value: "Technical & After-Sales" },
  ];

  return (
    <section className="bg-neutral-bg flex min-h-[50vh] flex-col justify-center section-padding-sm">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-14">
          <div>
            <h2 className="text-section-title text-primary">Who We Are</h2>
            <p className="text-body mt-4 text-neutral-muted">
              We are committed to providing reliable medical technologies,
              professional support, and patient-focused solutions for better
              diagnosis and management of sleep-related and respiratory
              conditions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="group rounded-2xl border border-neutral-line bg-tertiary p-4 transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-lg hover:shadow-secondary/10"
              >
                <p className="eyebrow mb-2 transition-colors duration-300 group-hover:text-secondary">
                  {item.label}
                </p>
                <p className="text-card-title text-primary">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function AboutWorkingSectors() {
  return (
    <section className="section-padding-sm">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-section-title text-primary">
            Our Key Working Sectors
          </h2>
          <p className="text-body mt-4 text-neutral-muted">
            Comprehensive solutions across sleep medicine, respiratory care, and
            biomedical equipment — from diagnosis to ongoing support.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workingSectors.map((sector, index) => {
            const Icon = sectorIcons[index] ?? Wind;
            return (
              <div
                key={sector}
                className="flex items-start gap-3 border border-neutral-line bg-tertiary p-5"
              >
                <Icon
                  size={18}
                  className="mt-0.5 shrink-0 text-secondary"
                  aria-hidden
                />
                <p className="text-body-sm font-medium text-primary">
                  {sector}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function AboutExpertiseGrid() {
  return (
    <section className="bg-neutral-bg section-padding-sm">
      <Container>
        <h2 className="text-section-title max-w-md text-primary">
          Our Areas of Expertise
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-10">
          {focusAreas.map((area) => (
            <div key={area.title}>
              <h3 className="text-card-title text-primary">{area.title}</h3>
              <p className="text-body-sm mt-2 max-w-sm text-neutral-muted">
                {area.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function AboutBMCSection() {
  return (
    <section className="section-padding-sm">
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 border border-neutral-line bg-tertiary lg:grid-cols-2 lg:gap-0">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-bg lg:aspect-auto lg:min-h-[360px]">
            <Image
              src="https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?q=80&w=1800&auto=format&fit=crop"
              alt="BMC Medical sleep and respiratory care equipment"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <p className="eyebrow mb-3">Authorized Distributor</p>
            <h2 className="text-section-title text-primary">
              BMC Medical in Nepal
            </h2>
            <p className="text-body mt-4 text-neutral-muted">
              {COMPANY.name} is an{" "}
              <strong className="font-medium text-primary">
                Authorized Distributor of BMC Medical products in Nepal
              </strong>
              , providing BMC&apos;s advanced sleep and respiratory care
              solutions, including the{" "}
              <strong className="font-medium text-primary">
                BMC G3 Series
              </strong>
              .
            </p>
            <p className="text-body mt-4 text-neutral-muted">
              Our goal is to make quality sleep and respiratory care technology
              more accessible in Nepal while providing customers with
              appropriate product guidance, technical assistance, and dependable
              after-sales support.
            </p>
            <div className="mt-6">
              <Button href="/products" icon={<ArrowRight size={15} />}>
                View BMC Products
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function AboutTrust() {
  return (
    <section className="bg-neutral-bg section-padding-sm">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:items-center lg:gap-14">
          <div>
            <h2 className="text-section-title max-w-sm text-primary">
              Our Commitment to Healthcare
            </h2>
            <p className="text-body mt-4 text-neutral-muted">
              At {COMPANY.name}, we believe that access to the right technology,
              combined with professional support, can make a meaningful
              difference in healthcare.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {trustHighlights.map((point) => (
              <li key={point.label} className="flex items-start gap-3">
                <Check
                  size={16}
                  strokeWidth={2.5}
                  className="mt-0.5 shrink-0 text-secondary"
                  aria-hidden
                />
                <div>
                  <span className="text-body-sm font-medium text-primary">
                    {point.label}
                  </span>
                  <p className="text-body-sm mt-0.5 text-neutral-muted">
                    {point.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

type TeamMember = {
  name: string;
  role: string;
  specialization: string;
  imageSrc: string;
};

const team: TeamMember[] = [];

export function AboutTeam() {
  if (team.length === 0) return null;

  return (
    <section className="section-padding-sm">
      <Container>
        <h2 className="text-section-title max-w-md text-primary">
          Meet Our Experts
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name}>
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-primary">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="text-body mt-3 font-semibold text-primary">
                {member.name}
              </h3>
              <p className="text-body-sm text-neutral-muted">{member.role}</p>
              <p className="text-body-sm uppercase tracking-wide text-neutral-muted">
                {member.specialization}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding-sm">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-section-title text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-body mt-4 text-neutral-muted">
            Common questions about our respiratory care, sleep medicine, and
            biomedical equipment services in Nepal.
          </p>
        </div>

        <div className="mt-10 divide-y divide-neutral-line border-y border-neutral-line">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="group py-5">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer list-none items-center justify-between gap-4 text-left text-body font-medium text-primary"
                >
                  <span
                    className={`transition-colors duration-300 ${
                      isOpen ? "text-secondary" : "hover:text-secondary"
                    }`}
                  >
                    {item.question}
                  </span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-neutral-muted transition-transform duration-300 ${
                      isOpen ? "rotate-45 text-secondary" : ""
                    }`}
                    aria-hidden
                  />
                </button>
                {isOpen && (
                  <p className="text-body-sm mt-3 max-w-3xl text-neutral-muted">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function AboutCTA() {
  return (
    <section className="section-padding-sm">
      <Container>
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-14">
          <div>
            <h2 className="text-section-title max-w-md text-primary">
              Quality Products, Reliable Service
            </h2>
            <p className="text-body mt-4 max-w-lg text-neutral-muted">
              We work to provide quality products, reliable service, and trusted
              biomedical solutions to hospitals, clinics, sleep laboratories,
              healthcare professionals, and patients across Nepal.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 lg:mt-0 lg:shrink-0">
            <Button href="/products" icon={<ArrowRight size={15} />}>
              Browse Products
            </Button>
            <Button
              href="/contact"
              variant="outlined"
              icon={<ArrowUpRight size={15} />}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
