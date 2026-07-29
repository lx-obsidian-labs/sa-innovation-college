import Button from "@/components/ui/Button";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { getWhatsAppUrl, getTelUrl } from "@/lib/utils";
import Icon from "@/components/ui/Icon";

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
      className="relative overflow-hidden bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-dark)] to-[#0B1F3F] py-16 md:py-24"
    >
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[var(--color-accent)]/10 blur-3xl animate-float" aria-hidden />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[var(--color-accent)]/5 blur-3xl animate-float" style={{ animationDelay: "2s" }} aria-hidden />
      <div
        className="absolute inset-0 opacity-[0.04]"
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
              Apply Now &mdash; It&apos;s Free
            </Button>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg border-2 border-white/40 text-white bg-transparent hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
            >
              View Courses
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg border-2 border-white/40 text-white bg-transparent hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <a
              href={getTelUrl(phone)}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm text-white/80 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:text-white hover:border-white/40 hover:-translate-y-0.5"
            >
              <Icon name="phone" size={4} />
              Call: {phone}
            </a>
            <a
              href={getWhatsAppUrl(whatsapp)}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm text-white/80 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:text-white hover:border-white/40 hover:-translate-y-0.5"
            >
              <Icon name="chat-bubble-left-right" size={4} />
              WhatsApp: {whatsapp}
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-4xl border-t border-white/10 pt-14">
          <h3 className="text-center text-white font-semibold text-lg mb-10">How It Works</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="text-center group">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] font-bold text-lg transition-all duration-300 group-hover:bg-[var(--color-accent)] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[var(--color-accent)]/30">
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
