import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Terms and Application Information | SA Innovation College",
  description: "Important information about enquiries, applications, programme information and registration at SA Innovation College.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms and Application Information" description="Important information to review before submitting an enquiry or application." />
      <section className="bg-[var(--color-surface)] py-[var(--section-py)]">
        <Container>
          <article className="premium-card mx-auto max-w-3xl rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-lg)] md:p-10">
            <div className="space-y-8 text-[var(--color-text-secondary)] leading-relaxed">
              <section><h2 className="mb-3 text-2xl font-bold text-[var(--color-text-primary)]">Applications and enquiries</h2><p>Submitting an online application or enquiry allows Admissions to review the information provided and contact you about the relevant next steps. It does not by itself guarantee acceptance, registration or employment.</p></section>
              <section><h2 className="mb-3 text-2xl font-bold text-[var(--color-text-primary)]">Programme information</h2><p>Entry requirements, study modes, fees, duration and recognition status can differ by programme and intake. Confirm the current details with Admissions before making payment or registering.</p></section>
              <section><h2 className="mb-3 text-2xl font-bold text-[var(--color-text-primary)]">Fees and registration</h2><p>Tuition, registration, assessment, materials and certification costs may apply depending on the selected programme. Admissions will confirm applicable costs and payment arrangements before registration.</p></section>
              <section><h2 className="mb-3 text-2xl font-bold text-[var(--color-text-primary)]">Programme outcomes</h2><p>Completion of a programme does not guarantee employment. Outcomes depend on the learner’s circumstances, performance, experience, employer requirements and broader job-market conditions.</p></section>
              <section><h2 className="mb-3 text-2xl font-bold text-[var(--color-text-primary)]">Contact us</h2><p>If you need clarification before applying, contact <a className="font-semibold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)]" href="/contact">Admissions</a> before submitting or paying.</p></section>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}