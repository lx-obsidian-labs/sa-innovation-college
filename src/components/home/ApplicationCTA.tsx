import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import { getWhatsAppUrl, getTelUrl } from "@/lib/utils";
import Icon from "@/components/ui/Icon";

const phone = "0800 014 568";
const whatsapp = "+27727733960";

const steps = [
  {
    number: "01",
    title: "Choose Your Course",
    desc: "Compare courses and find a programme that fits your goals.",
  },
  {
    number: "02",
    title: "Submit Your Application",
    desc: "Complete our online form with your details and qualifications.",
  },
  {
    number: "03",
    title: "Get Reviewed",
    desc: "Admissions reviews your details within 2–3 business days.",
  },
  {
    number: "04",
    title: "Enrol & Start Learning",
    desc: "Accept your offer, register, and begin your journey.",
  },
];

export default function ApplicationCTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-gradient-to-br from-[var(--saic-campaign-crimson-dark)] via-[var(--saic-campaign-crimson)] to-[var(--saic-navy-950)] py-20 md:py-28"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-accent)] mb-4">
            Your Future Starts Here
          </span>
          <h2 className="mb-5 text-[var(--fs-3xl)] font-extrabold text-white leading-tight">
            Start Your Future Now
          </h2>
          <p className="mx-auto max-w-xl text-base text-white/70 leading-relaxed mb-10">
            Education is more than a qualification — it's about unlocking potential and creating opportunities. Join thousands of learners who chose SA Innovation College.
          </p>

          <div className="flex flex-col items-center gap-4 mb-10">
            <Button variant="apply" size="xl" href="/apply" className="shadow-xl shadow-[var(--saic-gold-500)]/30 text-base px-10 py-5 min-h-[60px] rounded-xl uppercase tracking-widest font-extrabold hover:shadow-[var(--saic-gold-500)]/50">
              <Icon name="academic-cap" size={5} />
              Apply Online Now
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <a
              href={getTelUrl(phone)}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white hover:border-white/40"
            >
              <Icon name="phone" size={4} />
              {phone}
            </a>
            <a
              href={getWhatsAppUrl(whatsapp)}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white hover:border-white/40"
            >
              <Icon name="chat-bubble-left-right" size={4} />
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-4xl border-t border-white/10 pt-14">
          <h3 className="text-center text-white/90 font-semibold text-base mb-10">How It Works</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 relative">
            {steps.map((step, idx) => (
              <div key={step.number} className="text-center group relative">
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[60%] w-[calc(100%-20%)] h-px bg-white/15" aria-hidden />
                )}
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)] font-bold text-base transition-all duration-300 group-hover:bg-[var(--color-accent)] group-hover:text-[var(--saic-navy-950)]">
                  {step.number}
                </div>
                <h4 className="text-white font-semibold text-sm mb-1">{step.title}</h4>
                <p className="text-white/50 text-xs leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
