import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import ApplicationForm from "@/components/ui/ApplicationForm";
import DownloadPdfButton from "@/components/ui/DownloadPdfButton";
import { PrintableApplyForm } from "@/components/ui/PrintableForm";
import { getWhatsAppUrl, getTelUrl } from "@/lib/utils";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Apply Now | SA Innovation College",
  description: "Apply online to study at SA Innovation College. Choose from 50+ accredited courses across engineering, business, IT, and more.",
};

const steps = [
  { step: "01", title: "Application Review", desc: "We review your application within 2-3 business days" },
  { step: "02", title: "Admissions Contact", desc: "Our team contacts you to confirm your programme" },
  { step: "03", title: "Document Submission", desc: "Submit required documents & complete registration" },
  { step: "04", title: "Welcome Aboard", desc: "Start your journey at SA Innovation College!" },
];

export default function ApplyPage() {
  return (
    <>
      <PageHero
        title="Apply Now"
        description="Take the first step toward your future \u2014 complete your online application today."
      />

      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[var(--color-gray-50)] relative overflow-hidden">
        <div className="bg-mesh-gradient-subtle absolute inset-0 pointer-events-none" aria-hidden />
        <div className="floating-blob" style={{ width: 350, height: 350, top: "5%", right: "-8%", opacity: 0.04 }} aria-hidden />
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 md:p-10 shadow-[var(--shadow-lg)]">
              <div className="mb-8 text-center">
                <span className="mb-3 inline-block rounded-full bg-[var(--color-primary)]/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">
                  Begin Your Journey
                </span>
                <h2 className="mb-2 text-[var(--fs-3xl)] font-extrabold text-[var(--color-text-primary)]">
                  Online Application Form
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Complete your application in a few easy steps.
                </p>
                <DownloadPdfButton targetId="apply-form-section" label="Download Blank Form (PDF)" />
              </div>

              <div id="apply-form-section">
                <ApplicationForm />
                <PrintableApplyForm />
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <a
                href={getTelUrl("0800 014 568")}
                className="group flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4 transition-all duration-200 hover:border-[var(--color-primary)]/30 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="icon-hover-scale flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-all duration-200 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                  <Icon name="phone" size={5} />
                </div>
                <div>
                  <span className="text-xs font-medium text-[var(--color-text-muted)]">Call Us</span>
                  <p className="text-sm font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors">0800 014 568</p>
                </div>
              </a>

              <a
                href={getWhatsAppUrl("+27727733960")}
                className="group flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4 transition-all duration-200 hover:border-emerald-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="icon-hover-scale flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 transition-all duration-200 group-hover:bg-emerald-500 group-hover:text-white">
                  <Icon name="whatsapp" size={5} />
                </div>
                <div>
                  <span className="text-xs font-medium text-[var(--color-text-muted)]">WhatsApp</span>
                  <p className="text-sm font-semibold text-[var(--color-text-primary)] group-hover:text-emerald-600 transition-colors">+27 72 773 3960</p>
                </div>
              </a>

              <a
                href="mailto:info@sainnovationcollege.co.za"
                className="group flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4 transition-all duration-200 hover:border-[var(--color-primary)]/30 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="icon-hover-scale flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-all duration-200 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                  <Icon name="envelope" size={5} />
                </div>
                <div>
                  <span className="text-xs font-medium text-[var(--color-text-muted)]">Email Us</span>
                  <p className="text-sm font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors">info@sainnovationcollege.co.za</p>
                </div>
              </a>
            </div>

            <div className="mt-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 md:p-8 shadow-[var(--shadow-card)]">
              <h3 className="mb-6 text-center text-[var(--fs-xl)] font-bold text-[var(--color-text-primary)]">
                What Happens After You Apply
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {steps.map((item) => (
                  <div key={item.step} className="text-center group">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-sm font-bold text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                      {item.step}
                    </div>
                    <h4 className="mb-1 text-sm font-bold text-[var(--color-text-primary)]">{item.title}</h4>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 text-center text-xs text-[var(--color-text-muted)]">
              Applications processed Mon\u2013Fri, 08:00\u201317:00. We respond within 2\u20133 business days.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
