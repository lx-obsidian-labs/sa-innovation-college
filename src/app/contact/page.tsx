import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import ContactForm from "@/components/ui/ContactForm";
import { getWhatsAppUrl, getTelUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us | SA Innovation College",
  description:
    "Get in touch with SA Innovation College. Call 0800 014 568, WhatsApp +27 72 773 3960, or visit our campus in Centurion.",
};

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Call Us",
    value: "0800 014 568",
    href: getTelUrl("0800 014 568"),
    label: "Toll Free",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    title: "WhatsApp",
    value: "+27 72 773 3960",
    href: getWhatsAppUrl("+27727733960"),
    label: "Chat with us",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Visit Us",
    value: "147 Burger Avenue, 1st Floor, Barclays Centre, Lyttelton Manor, Centurion, 0157",
    href: "https://maps.app.goo.gl/V4LqhhDbZeSUgGN37",
    label: "Open in Google Maps",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Operating Hours",
    value: "Monday – Friday: 08:00–17:00",
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

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact info cards */}
            <div>
              <h2 className="text-[var(--fs-2xl)] font-bold text-[var(--color-text-primary)] mb-2">
                Get in Touch
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-8">
                Have a question about our courses, admissions, or anything else? We&apos;re here to help.
              </p>

              <div className="grid gap-6">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="flex gap-4 p-5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-raised)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center">
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

            {/* Contact form */}
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

      {/* Map section */}
      <section className="pb-16 lg:pb-24">
        <Container>
          <div className="rounded-xl overflow-hidden shadow-[var(--shadow-lg)]">
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
