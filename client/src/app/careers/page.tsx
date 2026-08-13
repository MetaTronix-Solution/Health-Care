import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join MedTech Pro's team of surgeons, engineers, and clinical specialists building the next generation of medical technology.",
  alternates: { canonical: "/careers" },
};

const openRoles = [
  {
    title: "Senior Biomedical Engineer",
    location: "Boston, MA",
    department: "Engineering",
  },
  {
    title: "Clinical Applications Specialist",
    location: "Berlin, Germany",
    department: "Clinical",
  },
  {
    title: "Field Service Engineer",
    location: "Singapore",
    department: "Services",
  },
  {
    title: "Regulatory Affairs Manager",
    location: "Boston, MA",
    department: "Regulatory",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="border-b border-neutral-line bg-neutral-bg">
        <Container className="py-16 lg:py-20">
          <p className="eyebrow mb-4">Join the Team</p>
          <h1 className="max-w-2xl text-4xl sm:text-5xl font-light leading-[1.1] tracking-tight text-primary">
            Build the technology that healthcare depends on.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-neutral-muted">
            MedTech Pro teams span surgery, systems engineering, and regulatory
            affairs — all working from the same premise: precision engineering
            saves time clinicians can spend with patients.
          </p>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <p className="eyebrow mb-8">Open Roles</p>
          <div className="divide-y divide-neutral-line border-y border-neutral-line">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h2 className="text-[15px] font-semibold text-primary">
                    {role.title}
                  </h2>
                  <p className="mt-1 text-[13px] text-neutral-muted">
                    {role.department} · {role.location}
                  </p>
                </div>
                <Button
                  href="/contact"
                  variant="outlined"
                  icon={<ArrowRight size={15} />}
                >
                  Apply
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
