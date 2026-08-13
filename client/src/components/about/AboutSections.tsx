import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";

export function AboutHero() {
  return (
    <section className="border-b border-neutral-line bg-tertiary py-16 lg:py-20">
      <Container>
        <p className="eyebrow mb-4">SEC_001 // Our Story</p>
        <h1 className="max-w-2xl text-4xl sm:text-5xl font-light leading-[1.1] tracking-tight text-primary">
          Precision engineered. Clinically proven. Human focused.
        </h1>

        <div className="relative mt-10 aspect-[16/8] w-full overflow-hidden bg-primary">
          <Image
            src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1800&auto=format&fit=crop"
            alt="Surgeon reviewing a 3D anatomical display during a procedure"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <span className="absolute bottom-4 left-4 bg-tertiary/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary">
            IMG_REF: Surgical Suite_04
          </span>
        </div>
      </Container>
    </section>
  );
}

const timeline = [
  {
    number: "01",
    label: "The Beginning",
    meta: "EST. 2014 // Foundation",
    body: [
      "Born from a necessity to bridge the gap between complex biomedical engineering and practical clinical application, MedTech Pro was founded by a collective of surgeons and systems engineers who recognized that true innovation in healthcare required uncompromising precision.",
      "Our initial models were prototypes of rigorous intent — designed not merely to assist, but to elevate the standard of operative care through integrated data visualization and robotic-assisted toolsets.",
    ],
    milestone: {
      label: "Milestone Metric",
      value: "10,000+",
      caption: "Successful clinical deployments in first decade",
    },
  },
];

const expertise = [
  {
    title: "Robotic Integration",
    body: "Seamless hardware-software synthesis for sub-millimeter operative accuracy.",
  },
  {
    title: "Data Visualization",
    body: "Real-time physiological mapping rendered in high-fidelity 3D environments.",
  },
  {
    title: "Workflow Optimization",
    body: "Algorithmic reduction of cognitive load for surgical teams during critical procedures.",
  },
];

export function AboutStory() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        {timeline.map((item) => (
          <div
            key={item.number}
            className="grid grid-cols-1 gap-8 border-t border-neutral-line py-10 lg:grid-cols-[0.3fr_0.7fr_1fr]"
          >
            <span className="text-4xl font-light text-neutral-muted">
              {item.number}
            </span>
            <div>
              <h2 className="text-2xl font-medium tracking-tight text-primary">
                {item.label}
              </h2>
              <p className="eyebrow mt-2">{item.meta}</p>
            </div>
            <div>
              {item.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mb-4 text-[14px] leading-relaxed text-neutral-muted"
                >
                  {paragraph}
                </p>
              ))}
              <div className="mt-2 border border-neutral-line bg-neutral-bg p-5">
                <p className="eyebrow mb-1">{item.milestone.label}</p>
                <p className="text-2xl font-light text-primary">
                  {item.milestone.value}
                </p>
                <p className="mt-1 text-[12px] text-neutral-muted">
                  {item.milestone.caption}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="grid grid-cols-1 gap-8 border-t border-neutral-line py-10 lg:grid-cols-[0.3fr_0.7fr_1fr]">
          <span className="text-4xl font-light text-neutral-muted">02</span>
          <div>
            <h2 className="text-2xl font-medium tracking-tight text-primary">
              The Expertise
            </h2>
            <p className="eyebrow mt-2">Core Competencies</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-[1fr_1fr]">
            <ul className="flex flex-col gap-6">
              {expertise.map((entry) => (
                <li
                  key={entry.title}
                  className="border-t border-neutral-line pt-4 first:border-t-0 first:pt-0"
                >
                  <h3 className="text-[15px] font-semibold text-primary">
                    {entry.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-neutral-muted">
                    {entry.body}
                  </p>
                </li>
              ))}
            </ul>
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-primary">
              <Image
                src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=1200&auto=format&fit=crop"
                alt="Robotic arms performing a precision engineering task"
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 border-t border-neutral-line py-10 lg:grid-cols-[0.3fr_1.7fr]">
          <span className="text-4xl font-light text-neutral-muted">03</span>
          <div className="border border-neutral-line bg-neutral-bg p-8 lg:p-10">
            <p className="eyebrow mb-4">DIR_FWD // 2025</p>
            <p className="text-xl sm:text-2xl font-light leading-snug tracking-tight text-primary">
              To engineer absolute certainty in every clinical outcome.
            </p>
            <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-neutral-muted">
              We believe that medical technology should disappear into the
              workflow, empowering human expertise rather than complicating it.
              Our ongoing mission is to push the boundaries of what is
              technically possible to ensure what is medically necessary is
              always achieved.
            </p>
            <div className="mt-6">
              <Button
                href="/careers"
                variant="outlined"
                icon={<ArrowRight size={15} />}
              >
                View Careers
              </Button>
            </div>
          </div>
        </div>

        <div
          id="locations"
          className="grid grid-cols-1 gap-6 border-t border-neutral-line py-10 sm:grid-cols-3"
        >
          {[
            { city: "Boston, MA", region: "Global Headquarters" },
            { city: "Berlin, Germany", region: "European Operations" },
            { city: "Singapore", region: "APAC Operations" },
          ].map((location) => (
            <div
              key={location.city}
              className="border-t border-neutral-line pt-4"
            >
              <p className="text-[15px] font-semibold text-primary">
                {location.city}
              </p>
              <p className="mt-1 text-[12px] text-neutral-muted">
                {location.region}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
