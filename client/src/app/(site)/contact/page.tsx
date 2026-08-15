import type { Metadata } from "next";
import { Container } from "@/src/components/ui/Container";
import { ContactForm } from "@/src/components/contact/ContactForm";
import { COMPANY } from "@/src/data/company";

export const metadata: Metadata = {
  title: "Contact",
  description:
    `Reach ${COMPANY.name} for product inquiries, technical support, or sleep and respiratory care guidance in Nepal.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="section-padding-sm">
      <Container>
        <p className="eyebrow mb-4">Contact</p>
        <h1 className="text-page-title max-w-2xl text-primary">
          Get in touch with our team
        </h1>
        <p className="text-body mt-4 max-w-xl text-neutral-muted">
          For product guidance, technical assistance, or after-sales support,
          send us a message and our team will respond as soon as possible.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="flex flex-col gap-8 border-t border-neutral-line pt-8 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
            <div>
              <p className="eyebrow mb-3">Location</p>
              <p className="text-body-sm text-primary">{COMPANY.location}</p>
            </div>

            <div>
              <p className="eyebrow mb-3">Services</p>
              <ul className="text-body-sm space-y-2 text-primary/80">
                <li>Product guidance & consultation</li>
                <li>Medical equipment installation</li>
                <li>Technical support</li>
                <li>After-sales service</li>
              </ul>
            </div>

            <div>
              <p className="eyebrow mb-3">Specialization</p>
              <p className="text-body-sm text-primary/80">
                Sleep medicine, respiratory care, CPAP/BiPAP solutions, and
                biomedical equipment — including authorized BMC Medical products.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
