import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import ApplicationForm from "@/components/ui/ApplicationForm";
import { PrintableApplyForm } from "@/components/ui/PrintableForm";
import { getWhatsAppUrl, getTelUrl } from "@/lib/utils";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Apply Now | SA Innovation College",
  description: "Start your online application and get Admissions guidance about programmes, requirements, fees and registration.",
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
        title="Start your application"
        description="Tell us about your goals, choose a programme and get guidance from Admissions on the next step."
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[var(--color-gray-50)] to-[var(--saic-gold-100)]/30 py-20 md:py-28">
        <div className="bg-mesh-gradient-subtle absolute inset-0 pointer-events-none" aria-hidden />
        <div className="floating-blob" style={{ width: 350, height: 350, top: "5%", right: "-8%", opacity: 0.04 }} aria-hidden />
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="premium-card rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-xl)] md:p-10">
              <div className="mb-8 text-center">
                <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-accent)]" aria-hidden />
                  Begin your journey
                </span>
                <h2 className="mb-2 text-[var(--fs-3xl)] font-extrabold text-[var(--color-text-primary)]">
                  Apply online in a few clear steps
                </h2>
                <p className="text-[var(--color-text-secondary)]">
                  Review your details before submitting. Admissions will contact you about requirements, fees and registration.
                </p>
              </div>

              <div className="mb-8 grid gap-3 border-y border-[var(--color-border)] py-4 text-center sm:grid-cols-3 sm:text-left">
                <div className="flex items-center justify-center gap-2 sm:justify-start">
                  <Icon name="clock" size={4} className="text-[var(--color-accent-dark)]" />
                  <span className="text-xs font-semibold text-[var(--color-text-secondary)]">Save your progress</span>
                </div>
                <div className="flex items-center justify-center gap-2 sm:justify-start">
                  <Icon name="check-badge" size={4} className="text-[var(--color-accent-dark)]" />
                  <span className="text-xs font-semibold text-[var(--color-text-secondary)]">Review before sending</span>
                </div>
                <div className="flex items-center justify-center gap-2 sm:justify-start">
                  <Icon name="chat-bubble-left-right" size={4} className="text-[var(--color-accent-dark)]" />
                  <span className="text-xs font-semibold text-[var(--color-text-secondary)]">Admissions guidance</span>
                </div>
              </div>

              <div id="apply-form-section">
                <ApplicationForm />
                <PrintableApplyForm />
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <a
                href={getTelUrl("0800 014 568")}
                className="group premium-card flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4 transition-all duration-300 hover:border-[var(--color-primary)]/30 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="icon-hover-scale flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:shadow-md group-hover:shadow-[var(--color-primary)]/15">
                  <Icon name="phone" size={5} />
                </div>
                <div>
                  <span className="text-xs font-medium text-[var(--color-text-muted)]">Call Us</span>
                  <p className="text-sm font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors duration-200">0800 014 568</p>
                </div>
              </a>

              <a
                href={getWhatsAppUrl("+27727733960")}
                className="group premium-card flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4 transition-all duration-300 hover:border-emerald-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="icon-hover-scale flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-md group-hover:shadow-emerald-500/20">
                  <Icon name="whatsapp" size={5} />
                </div>
                <div>
                  <span className="text-xs font-medium text-[var(--color-text-muted)]">WhatsApp</span>
                  <p className="text-sm font-semibold text-[var(--color-text-primary)] group-hover:text-emerald-600 transition-colors duration-200">+27 72 773 3960</p>
                </div>
              </a>

              <a
                href="mailto:info@sainnovationcollege.co.za"
                className="group premium-card flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4 transition-all duration-300 hover:border-[var(--color-primary)]/30 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="icon-hover-scale flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:shadow-md group-hover:shadow-[var(--color-primary)]/15">
                  <Icon name="envelope" size={5} />
                </div>
                <div>
                  <span className="text-xs font-medium text-[var(--color-text-muted)]">Email Us</span>
                  <p className="text-sm font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors duration-200">info@sainnovationcollege.co.za</p>
                </div>
              </a>
            </div>

            <div className="premium-card mt-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 shadow-[var(--shadow-card)] md:p-8">
              <h3 className="mb-6 text-center text-[var(--fs-xl)] font-bold text-[var(--color-text-primary)]">
                What Happens After You Apply
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {steps.map((item) => (
                  <div key={item.step} className="text-center group">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-sm font-bold text-white shadow-md shadow-[var(--color-primary)]/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[var(--color-primary)]/30">
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
