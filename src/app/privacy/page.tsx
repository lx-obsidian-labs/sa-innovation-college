import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Privacy Notice | SA Innovation College",
  description: "How SA Innovation College uses information submitted through this website and its application forms.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Notice" description="How we handle information shared with SA Innovation College." />
      <section className="bg-[var(--color-surface)] py-[var(--section-py)]">
        <Container>
          <article className="premium-card mx-auto max-w-3xl rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-lg)] md:p-10">
            <p className="mb-8 text-sm text-[var(--color-text-muted)]">Last updated: 29 July 2026</p>
            <div className="space-y-8 text-[var(--color-text-secondary)] leading-relaxed">
              <section><h2 className="mb-3 text-2xl font-bold text-[var(--color-text-primary)]">Information we collect</h2><p>When you contact us or apply online, we may collect information such as your name, contact details, programme interests, education history and other information you choose to provide.</p></section>
              <section><h2 className="mb-3 text-2xl font-bold text-[var(--color-text-primary)]">How we use it</h2><p>We use submitted information to respond to enquiries, review applications, provide programme and admissions guidance, and communicate about the next steps you request.</p></section>
              <section><h2 className="mb-3 text-2xl font-bold text-[var(--color-text-primary)]">Storage and sharing</h2><p>We take reasonable steps to protect submitted information and limit access to people or service providers who need it to support admissions and communications. We do not sell personal information.</p></section>
              <section><h2 className="mb-3 text-2xl font-bold text-[var(--color-text-primary)]">Your choices</h2><p>You may ask us to clarify how your information is used or request that we update or stop using it where applicable. Contact Admissions at <a className="font-semibold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)]" href="mailto:info@sainnovationcollege.co.za">info@sainnovationcollege.co.za</a>.</p></section>
              <section><h2 className="mb-3 text-2xl font-bold text-[var(--color-text-primary)]">Questions</h2><p>For privacy questions, please contact us on <a className="font-semibold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)]" href="tel:0800014568">0800 014 568</a> or visit our <a className="font-semibold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)]" href="/contact">Contact page</a>.</p></section>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}