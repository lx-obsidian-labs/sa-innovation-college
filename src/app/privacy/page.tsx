import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "SA Innovation College privacy policy governing the collection, use and disclosure of personal information in compliance with POPIA.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="How we collect, use and protect your personal information"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy", href: "/privacy" },
        ]}
      />

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl prose prose-gray prose-headings:font-bold prose-headings:text-[var(--color-text-primary)] prose-p:text-[var(--color-text-secondary)] prose-p:leading-relaxed">
            <p className="text-sm text-[var(--color-text-muted)]">Last updated: September 2026</p>

            <h2>1. Introduction</h2>
            <p>
              SA Innovation College (Pty) Ltd (&quot;SAIC&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;) is committed to protecting the privacy and personal information of our students, prospective students, website visitors and stakeholders. This Privacy Policy explains how we collect, use, disclose and safeguard your information in accordance with the Protection of Personal Information Act (POPIA), Act 4 of 2013.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect the following categories of personal information:</p>
            <ul>
              <li><strong>Identity information:</strong> Full name, date of birth, ID number, nationality</li>
              <li><strong>Contact information:</strong> Email address, telephone number, physical address</li>
              <li><strong>Academic information:</strong> Educational background, qualifications, academic records</li>
              <li><strong>Financial information:</strong> Payment details, bursary or financial aid information</li>
              <li><strong>Employment information:</strong> Current employer, job title, work experience</li>
              <li><strong>Website usage data:</strong> IP address, browser type, pages visited, cookies</li>
            </ul>

            <h2>3. How We Collect Information</h2>
            <p>We collect personal information when you:</p>
            <ul>
              <li>Submit an application or enrolment form</li>
              <li>Contact us via phone, email, WhatsApp or our website</li>
              <li>Visit our campus or attend an event</li>
              <li>Use our website or online learning platforms</li>
              <li>Participate in surveys or provide feedback</li>
            </ul>

            <h2>4. How We Use Your Information</h2>
            <p>We use your personal information to:</p>
            <ul>
              <li>Process applications and registrations</li>
              <li>Provide educational services and student support</li>
              <li>Communicate about courses, fees and important dates</li>
              <li>Comply with regulatory and accreditation requirements</li>
              <li>Improve our services and website experience</li>
              <li>Send marketing communications (with your consent)</li>
            </ul>

            <h2>5. Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share your information with:
            </p>
            <ul>
              <li>SETAs and QCTO for accreditation and reporting purposes</li>
              <li>Third-party service providers who assist in our operations</li>
              <li>Government authorities when required by law</li>
              <li>Employers or potential employers (with your explicit consent)</li>
            </ul>

            <h2>6. Data Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure or destruction. These measures include encryption, access controls and regular security assessments.
            </p>

            <h2>7. Your Rights</h2>
            <p>Under POPIA, you have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction or deletion of your information</li>
              <li>Object to the processing of your information</li>
              <li>Lodge a complaint with the Information Regulator</li>
              <li>Withdraw consent for marketing communications</li>
            </ul>

            <h2>8. Cookies</h2>
            <p>
              Our website uses cookies to improve your browsing experience, analyse website traffic and personalise content. You can control cookie preferences through your browser settings. Essential cookies required for the website to function cannot be disabled.
            </p>

            <h2>9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>

            <h2>10. Children&apos;s Privacy</h2>
            <p>
              We do not knowingly collect personal information from children under 18 without parental or guardian consent. If you believe we have collected information from a minor without proper consent, please contact us immediately.
            </p>

            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>

            <h2>12. Contact Us</h2>
            <p>
              For questions about this Privacy Policy or to exercise your rights, please contact our Information Officer:
            </p>
            <ul>
              <li><strong>Email:</strong> info@sainnovationcollege.co.za</li>
              <li><strong>Phone:</strong> 0800 014 568</li>
              <li><strong>Address:</strong> 147 Burger Avenue, 1st Floor, Barclays Centre, Lyttelton Manor, Centurion, 0157</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-dark)] to-[#0B1F3F] py-16 md:py-24">
        <div className="absolute top-0 left-1/3 h-64 w-64 rounded-full bg-[var(--color-accent)]/10 blur-3xl animate-float" aria-hidden />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-[var(--color-primary-light)]/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} aria-hidden />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} aria-hidden />
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-[var(--fs-3xl)] font-extrabold text-white">Questions About Your Privacy?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
              Contact our Information Officer for any questions about this privacy policy or to exercise your rights.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="accent" size="lg" href="/contact" className="shadow-lg shadow-[var(--color-accent)]/25">
                Contact Us
              </Button>
              <Button variant="secondary" size="lg" href="/terms" className="!border-white/30 !text-white hover:!bg-white/10">
                Terms &amp; Conditions
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
