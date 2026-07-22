import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "For Students | SA Innovation College",
  description:
    "Student support, application guidance, learner resources, and FAQs for current and prospective students at SA Innovation College.",
};

const supportServices = [
  {
    title: "Academic Support",
    description: "Tutoring, study resources, and academic advising to help you excel in your studies.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
      </svg>
    ),
  },
  {
    title: "Career Services",
    description: "CV workshops, interview preparation, and job placement assistance to launch your career.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
      </svg>
    ),
  },
  {
    title: "Student Wellness",
    description: "Mental health support, professional counseling, and peer networks for your well-being.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
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
  { name: "Student Handbook", filename: "Student-Handbook-2026.pdf" },
  { name: "Application Form", filename: "Application-Form-2026.pdf" },
  { name: "Fee Schedule", filename: "Fee-Schedule-2026.pdf" },
  { name: "Course Prospectus", filename: "Course-Prospectus-2026.pdf" },
];

const faqs = [
  {
    question: "What documents do I need to apply?",
    answer: "You will need a certified copy of your ID, your latest academic results, and proof of address. Additional documents may be required depending on your chosen programme.",
  },
  {
    question: "Is financial assistance available?",
    answer: "Yes, we offer flexible payment plans. Contact our admissions team to discuss options that suit your budget.",
  },
  {
    question: "Can I study part-time while working?",
    answer: "Yes, many of our programmes offer part-time and online learning options designed for working professionals.",
  },
  {
    question: "What if I don't have matric?",
    answer: "Select programmes accept learners based on aptitude assessments and relevant work experience. Speak to our admissions team for guidance.",
  },
  {
    question: "How long does registration take?",
    answer: "Most registrations are completed within 2–3 business days once all required documents have been submitted and verified.",
  },
];

export default function StudentsPage() {
  return (
    <>
      <PageHero
        title="For Students"
        description="Everything you need to succeed at SA Innovation College"
      />

      <section className="py-[var(--section-py)]">
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
                className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-colors duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-[var(--color-text-primary)]">{service.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-[var(--section-py)]">
        <Container>
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
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-white shadow-md">
                    {step.number}
                  </div>
                  {step.number < steps.length && (
                    <div className="mt-2 w-px flex-1 bg-[var(--color-border)]" />
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

      <section className="py-[var(--section-py)]">
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
                className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 text-center shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-colors duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </div>
                <h3 className="mb-1 text-sm font-bold text-[var(--color-text-primary)]">{item.name}</h3>
                <p className="mb-4 text-xs text-[var(--color-text-muted)]">{item.filename}</p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)] transition-all duration-200 group-hover:gap-2.5"
                >
                  Request Document
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-[var(--section-py)]">
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
                className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] shadow-[var(--shadow-card)] open:shadow-[var(--shadow-md)] transition-shadow duration-200"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-base font-semibold text-[var(--color-text-primary)] transition-colors duration-200 hover:text-[var(--color-primary)]">
                  {faq.question}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5 shrink-0 text-[var(--color-text-muted)] transition-transform duration-200 group-open:rotate-180">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
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
        <div className="absolute top-0 left-1/3 h-64 w-64 rounded-full bg-[var(--color-accent)]/10 blur-3xl" aria-hidden />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-[var(--color-primary-light)]/10 blur-3xl" aria-hidden />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} aria-hidden />
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-[var(--fs-3xl)] font-extrabold text-white">Ready to Begin Your Journey?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
              Apply today and take the first step toward a brighter future at SA Innovation College.
            </p>
            <Button variant="accent" size="lg" href="/apply" className="shadow-lg shadow-[var(--color-accent)]/25">
              Apply Now
            </Button>
            <Button variant="secondary" size="lg" href="https://wa.me/27727733960" className="!border-white/40 !text-white hover:!bg-white/10">
              Chat on WhatsApp
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
