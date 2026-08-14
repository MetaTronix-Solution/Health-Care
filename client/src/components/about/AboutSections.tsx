import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";

export function AboutHero() {
  return (
    <section className="min-h-[420px] py-16 lg:py-20">
      <Container>
        <div className="grid h-full grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow mb-4">About Us</p>
            <h1 className="max-w-lg text-4xl sm:text-5xl font-light leading-[1.1] tracking-tight text-primary">
              Engineering Healthcare Through Technology
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-neutral-muted">
              MedTech Pro develops medical technology built on engineering rigor
              and clinical understanding — designed to perform in real
              healthcare environments.
            </p>
          </div>

          <div className="relative aspect-[16/10] w-full overflow-hidden bg-primary">
            <Image
              src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1800&auto=format&fit=crop"
              alt="Surgeon reviewing a 3D anatomical display during a procedure"
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
  return (
    <section className="bg-tertiary py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.35fr_0.65fr] lg:gap-16">
          <h2 className="text-3xl sm:text-4xl font-light leading-[1.15] tracking-tight text-primary">
            Who We Are
          </h2>

          <div className="max-w-2xl space-y-4 text-[15px] leading-relaxed text-neutral-muted">
            <p>
              MedTech Pro is a medical technology company founded by surgeons
              and systems engineers, built on the belief that healthcare
              technology should be engineered around how care is actually
              delivered — not around what is technically possible in isolation.
            </p>
            <p>
              We design and build medical equipment, diagnostic systems, and
              clinical integration tools, working directly with healthcare
              organizations to fit technology into existing clinical workflows
              rather than forcing workflows to adapt to technology.
            </p>
            <p>
              Our involvement doesn&apos;t end at deployment. We provide ongoing
              technical and clinical support so the systems we build continue to
              perform throughout their operational life.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

const expertiseAreas = [
  {
    title: "Medical Equipment",
    body: "Devices engineered for reliable clinical performance.",
  },
  {
    title: "Diagnostic Systems",
    body: "Precision tools for accurate, timely diagnosis.",
  },
  {
    title: "Clinical Integration",
    body: "Technology that fits into real hospital workflows.",
  },
  {
    title: "Technical Support",
    body: "Ongoing support throughout the system lifecycle.",
  },
];

export function AboutExpertiseGrid() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <h2 className="max-w-md text-3xl sm:text-4xl font-light leading-[1.15] tracking-tight text-primary">
          Our Areas of Expertise
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {expertiseAreas.map((area) => (
            <div key={area.title}>
              <h3 className="text-[16px] font-semibold text-primary">
                {area.title}
              </h3>
              <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-neutral-muted">
                {area.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const trustPoints = [
  "Engineering Expertise",
  "Clinical Understanding",
  "Reliable Support",
  "Long-Term Partnership",
];

export function AboutTrust() {
  return (
    <section className="bg-tertiary py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16 lg:items-center">
          <h2 className="max-w-sm text-3xl sm:text-4xl font-light leading-[1.15] tracking-tight text-primary">
            Why Healthcare Teams Trust MedTech Pro
          </h2>

          <ul className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <Check
                  size={16}
                  strokeWidth={2.5}
                  className="mt-0.5 shrink-0 text-primary"
                />
                <span className="text-[15px] font-medium text-primary">
                  {point}
                </span>
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

// TODO: Replace with real team members (name, title, specialization,
// and a real photo path). This section renders nothing until populated —
// do not fill this with placeholder or invented people.
const team: TeamMember[] = [];

export function AboutTeam() {
  if (team.length === 0) return null;

  return (
    <section className="py-16 lg:py-20">
      <Container>
        <h2 className="max-w-md text-3xl sm:text-4xl font-light leading-[1.15] tracking-tight text-primary">
          Meet Our Experts
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
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
              <h3 className="mt-4 text-[15px] font-semibold text-primary">
                {member.name}
              </h3>
              <p className="mt-0.5 text-[13px] text-neutral-muted">
                {member.role}
              </p>
              <p className="mt-0.5 text-[12px] uppercase tracking-[0.04em] text-neutral-muted">
                {member.specialization}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function AboutImageStory() {
  return (
    <section className="relative py-16 lg:py-20">
      <Container>
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-primary lg:aspect-[21/9]">
          <Image
            src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=1800&auto=format&fit=crop"
            alt="Clinical environment with medical technology in use"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
          <p className="absolute bottom-6 left-6 max-w-md text-xl sm:text-2xl font-light leading-snug tracking-tight text-white lg:bottom-10 lg:left-10">
            Technology designed around real clinical environments.
          </p>
        </div>
      </Container>
    </section>
  );
}

export function AboutCTA() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-16">
          <div>
            <h2 className="max-w-md text-3xl sm:text-4xl font-light leading-[1.15] tracking-tight text-primary">
              Let&apos;s Move Healthcare Forward
            </h2>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 lg:mt-0 lg:shrink-0">
            <Button href="/solutions" icon={<ArrowRight size={15} />}>
              Explore Solutions
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
