import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import ContactForm from "@/components/ui/ContactForm";
import { getWhatsAppUrl, getTelUrl } from "@/lib/utils";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Contact Us | SA Innovation College",
  description:
    "Get in touch with SA Innovation College. Call 0800 014 568, WhatsApp +27 72 773 3960, or visit our campus in Centurion.",
};

const contactInfo = [
  {
    icon: <Icon name="phone" size={6} />,
    title: "Call Us",
    value: "0800 014 568",
    href: getTelUrl("0800 014 568"),
    label: "Toll Free",
  },
  {
    icon: <Icon name="whatsapp" size={6} />,
    title: "WhatsApp",
    value: "+27 72 773 3960",
    href: getWhatsAppUrl("+27727733960"),
    label: "Chat with us",
  },
  {
    icon: <Icon name="map-pin" size={6} />,
    title: "Visit Us",
    value: "147 Burger Avenue, 1st Floor, Barclays Centre, Lyttelton Manor, Centurion, 0157",
    href: "https://maps.app.goo.gl/V4LqhhDbZeSUgGN37",
    label: "Open in Google Maps",
  },
  {
    icon: <Icon name="clock" size={6} />,
    title: "Operating Hours",
    value: "Monday \u2013 Friday: 08:00\u201317:00",
    href: null,
    label: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="We'd love to hear from you. Get in touch with our admissions team."
      />

      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="floating-blob" style={{ width: 400, height: 400, top: "-10%", right: "-5%", opacity: 0.04 }} aria-hidden />
        <div className="floating-blob" style={{ width: 300, height: 300, bottom: "5%", left: "-8%", opacity: 0.03, animationDelay: "3s" }} aria-hidden />
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-[var(--fs-2xl)] font-bold text-[var(--color-text-primary)] mb-2">
                Get in Touch
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-8">
                Have a question about our courses, admissions, or anything else? We&apos;re here to help.
              </p>

              <div className="grid gap-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="group flex gap-4 p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center transition-all duration-200 group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:shadow-md">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-text-primary)]">{info.title}</h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[var(--color-text-secondary)]">{info.value}</p>
                      )}
                      {info.label && (
                        <span className="text-xs text-[var(--color-text-muted)]">{info.label}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-[var(--fs-2xl)] font-bold text-[var(--color-text-primary)] mb-2">
                Send Us a Message
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-8">
                Fill in the form below and we&apos;ll get back to you as soon as possible.
              </p>

              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16 lg:pb-24 bg-white">
        <Container>
          <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-lg)] border border-[var(--color-border)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.5!2d28.1!3d-25.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDU0JzAwLjAiUyAyOMKwMDYnMDAuMCJF!5e0!3m2!1sen!2sza!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SA Innovation College Location"
              className="w-full"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
