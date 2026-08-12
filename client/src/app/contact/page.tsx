import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { ContactForm } from "@/src/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach the MedTech Pro team for product demos, technical support, or clinical inquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <p className="eyebrow mb-4">01 // Inquiry</p>
        <h1 className="max-w-2xl text-4xl sm:text-6xl font-light leading-[1.05] tracking-tight text-primary uppercase">
          Let&apos;s talk healthcare.
        </h1>

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col gap-10 border-t border-neutral-line pt-8 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
            <div>
              <p className="eyebrow mb-3">Global Headquarters</p>
              <address className="text-[14px] not-italic leading-relaxed text-primary">
                100 Precision Way
                <br />
                Suite 400
                <br />
                Boston, MA 02110
                <br />
                United States
              </address>
            </div>

            <div>
              <p className="eyebrow mb-3">Direct Inquiries</p>
              <dl className="space-y-1 text-[14px] text-primary">
                <div className="flex gap-3">
                  <dt className="text-neutral-muted">Tel:</dt>
                  <dd>+1 (800) 555-0199</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="text-neutral-muted">Fax:</dt>
                  <dd>+1 (800) 555-0198</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="text-neutral-muted">Mail:</dt>
                  <dd>contact@medtechpro.com</dd>
                </div>
              </dl>
            </div>

            <div>
              <p className="eyebrow mb-3">Support Hours</p>
              <p className="text-[14px] text-primary">
                Mon–Fri // 08:00 – 18:00 EST
              </p>
              <p className="text-[14px] text-primary">
                Emergency Support: 24/7
              </p>
            </div>
          </div>

          <ContactForm />
        </div>

        <div className="mt-16">
          <div className="mb-4 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-primary">
            <MapPin size={14} className="text-secondary" />
            Contact Our Clinical Team
          </div>
          <div className="flex aspect-[16/7] w-full items-center justify-center border border-neutral-line bg-neutral-bg">
            <p className="text-[13px] text-neutral-muted">
              Interactive campus map available on request.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
