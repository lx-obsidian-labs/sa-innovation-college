import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "SA Innovation College terms and conditions governing enrolment, fees, refunds and student conduct.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        description="The terms governing your enrolment and studies at SA Innovation College"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms & Conditions", href: "/terms" },
        ]}
      />

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl prose prose-gray prose-headings:font-bold prose-headings:text-[var(--color-text-primary)] prose-p:text-[var(--color-text-secondary)] prose-p:leading-relaxed">
            <p className="text-sm text-[var(--color-text-muted)]">Last updated: September 2026</p>

            <h2>1. General</h2>
            <p>
              These terms and conditions (&quot;Terms&quot;) govern your enrolment at SA Innovation College (Pty) Ltd (&quot;SAIC&quot;). By submitting an application or registering for a programme, you agree to be bound by these Terms.
            </p>

            <h2>2. Enrolment</h2>
            <ul>
              <li>Enrolment is subject to meeting programme entry requirements and acceptance by SAIC.</li>
              <li>Providing false or misleading information on an application is grounds for immediate dismissal.</li>
              <li>Enrolment is confirmed only upon receipt of completed registration documents and payment of the required fees.</li>
            </ul>

            <h2>3. Fees &amp; Payment</h2>
            <ul>
              <li>All fees are quoted in South African Rand (ZAR) and are subject to annual review.</li>
              <li>Payment must be made according to the agreed payment schedule.</li>
              <li>Failed payments may result in suspension of access to learning materials and assessments.</li>
              <li>Fee estimates provided by the Fee Calculator are indicative only — confirm the final amount with Admissions.</li>
            </ul>

            <h2>4. Refunds</h2>
            <ul>
              <li>Refund requests must be submitted in writing within 5 business days of registration.</li>
              <li>An administrative fee may be deducted from any refund.</li>
              <li>No refund is available after the first 20% of the programme has been attended.</li>
            </ul>

            <h2>5. Academic Policy</h2>
            <ul>
              <li>Students must attend a minimum of 80% of scheduled sessions per module.</li>
              <li>Assessment criteria are determined by the relevant QCTO, SETA or accrediting body.</li>
              <li>Academic dishonesty or plagiarism will result in disciplinary action.</li>
            </ul>

            <h2>6. Student Conduct</h2>
            <ul>
              <li>Students must behave professionally and respectfully at all times.</li>
              <li>Harassment, discrimination or disruption of learning is not tolerated.</li>
              <li>SAIC reserves the right to suspend or dismiss students for misconduct.</li>
            </ul>

            <h2>7. Certificates &amp; Qualifications</h2>
            <ul>
              <li>Certificates are issued only upon successful completion of all programme requirements.</li>
              <li>SAIC does not guarantee employment upon completion of any programme.</li>
              <li>Qualifications are subject to verification by the relevant accrediting body.</li>
            </ul>

            <h2>8. Limitation of Liability</h2>
            <p>
              SAIC shall not be liable for any indirect, incidental or consequential damages arising from your use of our services. Our liability is limited to the fees paid for the specific programme in question.
            </p>

            <h2>9. Changes to Programmes</h2>
            <p>
              SAIC reserves the right to modify programme content, schedules, fees or delivery methods with reasonable notice to enrolled students.
            </p>

            <h2>10. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the Republic of South Africa. Any disputes shall be resolved in the courts of Gauteng.
            </p>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-dark)] to-[#0B1F3F] py-16 md:py-24">
        <div className="absolute top-0 left-1/3 h-64 w-64 rounded-full bg-[var(--color-accent)]/10 blur-3xl animate-float" aria-hidden />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-[var(--color-primary-light)]/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} aria-hidden />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} aria-hidden />
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-[var(--fs-3xl)] font-extrabold text-white">Ready to Enrol?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
              By enrolling at SA Innovation College, you agree to these terms. Contact us if you have any questions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="accent" size="lg" href="/apply" className="shadow-lg shadow-[var(--color-accent)]/25">
                Apply Now
              </Button>
              <Button variant="secondary" size="lg" href="/privacy" className="!border-white/30 !text-white hover:!bg-white/10">
                Privacy Policy
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
