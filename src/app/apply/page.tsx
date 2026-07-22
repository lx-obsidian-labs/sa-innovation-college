import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import ApplicationForm from "@/components/ui/ApplicationForm";
import { getWhatsAppUrl, getTelUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Apply Now | SA Innovation College",
  description: "Apply online to study at SA Innovation College. Choose from 50+ accredited courses across engineering, business, IT, and more.",
};

export default function ApplyPage() {
  return (
    <>
      <PageHero
        title="Apply Now"
        description="Start your journey at SA Innovation College. Complete the form below and our admissions team will be in touch."
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 md:p-10 shadow-[var(--shadow-card)]">
                <ApplicationForm />
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 shadow-[var(--shadow-card)]">
                <h3 className="mb-4 text-base font-bold text-[var(--color-text-primary)]">Need Help?</h3>
                <p className="mb-5 text-sm text-[var(--color-text-secondary)]">
                  Our admissions team is ready to assist you with your application.
                </p>
                <div className="space-y-3">
                  <a
                    href={getTelUrl("0800 014 568")}
                    className="flex items-center gap-3 rounded-lg border border-[var(--color-border)] p-3 text-sm transition-all hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5"
                  >
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-[var(--color-primary)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <div>
                      <span className="block font-semibold text-[var(--color-text-primary)]">Call Us</span>
                      <span className="text-[var(--color-text-muted)]">0800 014 568</span>
                    </div>
                  </a>
                  <a
                    href={getWhatsAppUrl("+27727733960")}
                    className="flex items-center gap-3 rounded-lg border border-[var(--color-border)] p-3 text-sm transition-all hover:border-green-500 hover:bg-green-50"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-green-600">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                    <div>
                      <span className="block font-semibold text-[var(--color-text-primary)]">WhatsApp</span>
                      <span className="text-[var(--color-text-muted)]">+27 72 773 3960</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 shadow-[var(--shadow-card)]">
                <h3 className="mb-3 text-base font-bold text-[var(--color-text-primary)]">What Happens Next?</h3>
                <ol className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                  <li className="flex gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-xs font-bold text-[var(--color-primary)]">1</span>
                    We review your application within 2-3 business days
                  </li>
                  <li className="flex gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-xs font-bold text-[var(--color-primary)]">2</span>
                    Our admissions team contacts you to confirm your programme
                  </li>
                  <li className="flex gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-xs font-bold text-[var(--color-primary)]">3</span>
                    You submit required documents and complete registration
                  </li>
                  <li className="flex gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-xs font-bold text-[var(--color-primary)]">4</span>
                    Welcome to SA Innovation College — start your journey!
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
