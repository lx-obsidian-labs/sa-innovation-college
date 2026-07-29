import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import Icon from "@/components/ui/Icon";
import ResourcePdfButton from "@/components/ui/ResourcePdfButton";
import BlankApplicationDownload from "@/components/ui/BlankApplicationDownload";

export const metadata: Metadata = {
  title: "For Students | SA Innovation College",
  description:
    "Find application guidance, student resources, FAQs, study support and information for current and prospective learners at SA Innovation College.",
};

const supportServices = [
  {
    title: "Academic Support",
    description: "Tutoring, study resources, and academic advising to help you excel in your studies.",
    icon: <Icon name="academic-cap" size={8} />,
  },
  {
    title: "Career Services",
    description: "CV guidance and interview preparation to help you approach your next work or study opportunity with confidence.",
    icon: <Icon name="briefcase" size={8} />,
  },
  {
    title: "Student Wellness",
    description: "Find practical information, learner guidance and contacts to help you stay supported during your studies.",
    icon: <Icon name="heart" size={8} />,
  },
];

const steps = [
  { number: 1, title: "Choose Your Programme", description: "Browse our courses and find your path." },
  { number: 2, title: "Check Requirements", description: "Review entry requirements and prepare documents." },
  { number: 3, title: "Submit Application", description: "Complete the online application form." },
  { number: 4, title: "Registration", description: "Upon acceptance, complete registration and pay fees." },
  { number: 5, title: "Start Learning", description: "Attend orientation and begin your journey." },
];

const downloads = [
  { name: "Student Handbook", filename: "SAIC-Student-Handbook-2026.pdf", description: "A practical guide to learner support, academic expectations, conduct, and key college contacts." },
  { name: "Application Form", filename: "SAIC-FRM-ADM-001-2026.1-Application-Form.pdf", description: "A printer-friendly blank application form for applicants who prefer to submit a hard copy." },
  { name: "Fee Schedule", filename: "SAIC-Fee-Schedule-2026.pdf", description: "Programme fees and payment information. Confirm the current quotation with Admissions before payment." },
  { name: "Course Prospectus", filename: "SAIC-Course-Prospectus-2026.pdf", description: "An overview of available programmes, study options, and the application journey." },
];

const faqs = [
  {
    question: "What documents do I need to apply?",
    answer: "You will need a certified copy of your ID, your latest academic results, and proof of address. Additional documents may be required depending on your chosen programme.",
  },
  {
    question: "Is financial assistance available?",
    answer: "Payment-plan options may be available for selected programmes. Contact Admissions for current fees, payment schedules and eligibility information.",
  },
  {
    question: "Can I study part-time while working?",
    answer: "Study modes differ by programme. Check the individual course page or ask Admissions whether your selected programme is available full-time, part-time, online or blended.",
  },
  {
    question: "What if I don't have matric?",
    answer: "Entry requirements differ by programme. Some programmes may offer alternative entry routes, such as an assessment or relevant experience. Contact Admissions to check your eligibility.",
  },
  {
    question: "How long does registration take?",
    answer: "Most registrations are completed within 2\u20133 business days once all required documents have been submitted and verified.",
  },
];

export default function StudentsPage() {
  return (
    <>
      <PageHero
        title="For Students"
        description="Everything you need to succeed at SA Innovation College"
      />

      <section className="relative py-[var(--section-py)] bg-white">
        <div className="absolute inset-0 bg-mesh-gradient-subtle pointer-events-none" aria-hidden />
        <div className="floating-blob" style={{ width: 350, height: 350, top: "-5%", right: "-8%", opacity: 0.04 }} aria-hidden />
        <Container>
          <SectionHeader
            eyebrow="Student Services"
            title="We've Got Your Back"
            description="Comprehensive support services designed to help you thrive academically, professionally, and personally."
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {supportServices.map((service) => (
              <div
                key={service.title}
                className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)]"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:shadow-md">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-[var(--color-text-primary)]">{service.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative bg-[var(--color-surface)] py-[var(--section-py)]">
        <div className="absolute inset-0 bg-dot-grid-primary pointer-events-none" aria-hidden />
        <Container className="relative z-10">
          <SectionHeader
            eyebrow="How to Apply"
            title="Your Path to Enrolment"
            description="Follow these simple steps to begin your studies at SA Innovation College."
            className="mb-12"
          />
          <div className="mx-auto max-w-3xl">
            {steps.map((step) => (
              <div key={step.number} className="relative flex gap-6 pb-12 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-sm font-bold text-white shadow-md">
                    {step.number}
                  </div>
                  {step.number < steps.length && (
                    <div className="mt-2 w-px flex-1 bg-gradient-to-b from-[var(--color-primary)]/40 to-transparent" />
                  )}
                </div>
                <div className="pt-1.5">
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)]">{step.title}</h3>
                  <p className="mt-1 text-[var(--color-text-secondary)]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-[var(--section-py)] bg-white">
        <div className="floating-blob" style={{ width: 300, height: 300, top: "-10%", right: "-5%", opacity: 0.04 }} aria-hidden />
        <Container>
          <SectionHeader
            eyebrow="Learner Resources"
            title="Downloads & Forms"
            description="Access important documents and resources for your studies."
            className="mb-12"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {downloads.map((item) => (
              <div
                key={item.name}
                className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 text-center shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)]"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:shadow-md">
                  <Icon name="download" size={8} />
                </div>
                <h3 className="mb-1 text-sm font-bold text-[var(--color-text-primary)]">{item.name}</h3>
                <p className="mb-2 text-xs text-[var(--color-text-muted)]">Version 2026.1 · Published 01 Jan 2026</p>
                {item.name === "Application Form" ? <BlankApplicationDownload /> : <ResourcePdfButton name={item.name} filename={item.filename} version="1.0" description={item.description} />}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[var(--color-surface)] py-[var(--section-py)]">
        <div className="absolute inset-0 bg-mesh-gradient-subtle pointer-events-none" aria-hidden />
        <Container>
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Find answers to common questions from prospective and current students."
            className="mb-12"
          />
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] shadow-[var(--shadow-card)] open:shadow-[var(--shadow-md)] transition-all duration-200 open:border-[var(--color-primary)]/20"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-base font-semibold text-[var(--color-text-primary)] transition-colors duration-200 hover:text-[var(--color-primary)] rounded-xl">
                  {faq.question}
                  <Icon name="chevron-down" size={5} className="shrink-0 text-[var(--color-text-muted)] transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="border-t border-[var(--color-border)] px-5 pb-5 pt-3">
                  <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-dark)] to-[#0B1F3F] py-16 md:py-24">
        <div className="absolute top-0 left-1/3 h-64 w-64 rounded-full bg-[var(--color-accent)]/10 blur-3xl animate-float" aria-hidden />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-[var(--color-primary-light)]/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} aria-hidden />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} aria-hidden />
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-[var(--fs-3xl)] font-extrabold text-white">Ready to Begin Your Journey?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
              Apply today and take the first step toward a brighter future at SA Innovation College.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="accent" size="lg" href="/apply" className="shadow-lg shadow-[var(--color-accent)]/25">
                Apply Now
              </Button>
              <Button variant="secondary" size="lg" href="https://wa.me/27727733960" className="!border-white/40 !text-white hover:!bg-white/10">
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
