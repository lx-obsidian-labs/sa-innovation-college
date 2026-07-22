import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import ApplicationForm from "@/components/ui/ApplicationForm";
import { getWhatsAppUrl, getTelUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Apply Now | SA Innovation College",
  description: "Apply online to study at SA Innovation College. Choose from 50+ accredited courses across engineering, business, IT, and more.",
};

export default function ApplyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-dark)] to-[#0B1F3F] py-20 md:py-28">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-[var(--color-accent)]/10 blur-3xl" aria-hidden />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-[var(--color-primary-light)]/10 blur-3xl" aria-hidden />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} aria-hidden />
        <Container className="relative z-10 text-center">
          <div className="mb-4 inline-flex animate-fadeInUp items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            </span>
            Begin Your Journey
          </div>
          <h1 className="mb-4 animate-fadeInUp text-[var(--fs-4xl)] font-extrabold leading-[1.05] tracking-tight text-white" style={{ animationDelay: "0.1s" }}>
            Apply Now
          </h1>
          <p className="mx-auto max-w-2xl animate-fadeInUp text-lg leading-relaxed text-white/80" style={{ animationDelay: "0.2s" }}>
            Start your journey at SA Innovation College. Complete the form below and our admissions team will be in touch.
          </p>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 md:p-10 shadow-[var(--shadow-card)]">
                <ApplicationForm />
              </div>
            </div>

            <div className="space-y-6">
              {/* Contact cards */}
              <div className="rounded-xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-primary)]/[0.03] to-transparent p-6 shadow-[var(--shadow-card)]">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.055.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293c.271-.363.734-.527 1.173-.417l4.423 1.106c.501.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-[var(--color-text-primary)]">Need Help?</h3>
                </div>
                <p className="mb-5 text-sm text-[var(--color-text-secondary)]">
                  Our admissions team is ready to assist you with your application. Reach out via phone or WhatsApp.
                </p>
                <div className="space-y-3">
                  <a
                    href={getTelUrl("0800 014 568")}
                    className="flex items-center gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-white)] p-3 text-sm transition-all hover:border-[var(--color-primary)] hover:shadow-sm"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block font-semibold text-[var(--color-text-primary)]">Call Us</span>
                      <span className="text-[var(--color-text-muted)]">0800 014 568</span>
                    </div>
                  </a>
                  <a
                    href={getWhatsAppUrl("+27727733960")}
                    className="flex items-center gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-white)] p-3 text-sm transition-all hover:border-green-500 hover:shadow-sm"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50 text-green-600">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block font-semibold text-[var(--color-text-primary)]">WhatsApp</span>
                      <span className="text-[var(--color-text-muted)]">+27 72 773 3960</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Process */}
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 shadow-[var(--shadow-card)]">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-[var(--color-text-primary)]">What Happens Next?</h3>
                </div>
                <div className="space-y-0">
                  {[
                    { step: "01", title: "Application Review", desc: "We review your application within 2-3 business days" },
                    { step: "02", title: "Admissions Contact", desc: "Our team contacts you to confirm your programme" },
                    { step: "03", title: "Document Submission", desc: "You submit required documents and complete registration" },
                    { step: "04", title: "Welcome Aboard", desc: "Start your journey at SA Innovation College!" },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 border-b border-[var(--color-border)] py-4 last:border-0 last:pb-0">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-xs font-bold text-white">
                        {item.step}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[var(--color-text-primary)]">{item.title}</p>
                        <p className="text-xs text-[var(--color-text-muted)]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="rounded-xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-accent)]/[0.05] to-transparent p-6 shadow-[var(--shadow-card)]">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-[var(--color-text-primary)]">Office Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-[var(--color-text-muted)]">Mon-Thu</span><span className="font-medium text-[var(--color-text-primary)]">08:00 - 17:00</span></div>
                  <div className="flex justify-between"><span className="text-[var(--color-text-muted)]">Friday</span><span className="font-medium text-[var(--color-text-primary)]">08:00 - 16:00</span></div>
                  <div className="flex justify-between"><span className="text-[var(--color-text-muted)]">Sat-Sun</span><span className="font-medium text-[var(--color-text-primary)]">Closed</span></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
