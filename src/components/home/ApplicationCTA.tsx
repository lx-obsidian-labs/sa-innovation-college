import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import { getWhatsAppUrl, getTelUrl } from "@/lib/utils";

const phone = "0800 014 568";
const whatsapp = "+27727733960";

const steps = [
  {
    number: "01",
    title: "Choose Your Course",
    desc: "Browse our 30+ accredited programmes and find the one that fits your goals.",
  },
  {
    number: "02",
    title: "Submit Your Application",
    desc: "Complete our online application form with your details and qualifications.",
  },
  {
    number: "03",
    title: "Get Reviewed",
    desc: "Our admissions team reviews your application and contacts you within 48 hours.",
  },
  {
    number: "04",
    title: "Enrol & Start Learning",
    desc: "Accept your offer, complete registration, and begin your academic journey.",
  },
];

export default function ApplicationCTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-dark)] to-[#0B1F3F] py-16 md:py-28"
    >
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[var(--color-accent)]/10 blur-3xl animate-float" aria-hidden />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[var(--color-accent)]/5 blur-3xl animate-float" style={{ animationDelay: "2s" }} aria-hidden />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/40 to-transparent" aria-hidden />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-accent)] mb-4">
            Take the Next Step
          </span>
          <h2 className="mb-5 text-[var(--fs-4xl)] font-extrabold text-white leading-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="mx-auto max-w-xl text-lg text-white/70 leading-relaxed mb-10">
            Join thousands of South African students building their future at SA Innovation College.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="accent" size="lg" href="/apply" className="shadow-lg shadow-[var(--color-accent)]/25">
              Apply Now — It&apos;s Free
            </Button>
            <Button variant="secondary" size="lg" href="/courses" className="!border-white/40 !text-white hover:!bg-white/10">
              View Courses
            </Button>
            <Button variant="secondary" size="lg" href="/contact" className="!border-white/40 !text-white hover:!bg-white/10">
              Contact Us
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <a
              href={getTelUrl(phone)}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm text-white/80 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:text-white hover:border-white/40"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              Call: {phone}
            </a>
            <a
              href={getWhatsAppUrl(whatsapp)}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm text-white/80 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:text-white hover:border-white/40"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
              </svg>
              WhatsApp: {whatsapp}
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-4xl border-t border-white/10 pt-14">
          <h3 className="text-center text-white font-semibold text-lg mb-8">How It Works</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] font-bold text-lg">
                  {step.number}
                </div>
                <h4 className="text-white font-semibold text-sm mb-1">{step.title}</h4>
                <p className="text-white/60 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
