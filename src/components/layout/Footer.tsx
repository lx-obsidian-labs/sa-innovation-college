import Link from "next/link";
import Container from "./Container";
import { getWhatsAppUrl, getTelUrl } from "@/lib/utils";
import Icon from "@/components/ui/Icon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[var(--saic-navy-950)] via-[var(--saic-navy-900)] to-[var(--saic-campaign-crimson-dark)] text-[var(--color-gray-300)] [&_a]:text-[var(--color-gray-300)] [&_a:hover]:text-[var(--color-accent)]">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-20" aria-hidden />
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[var(--color-accent)]/5 blur-3xl" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-0.5 animate-gold-shimmer" aria-hidden />
      <div className="relative border-b border-white/10">
        <Container className="py-10 lg:py-12">
          <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] px-5 py-7 text-center shadow-2xl shadow-black/10 backdrop-blur-sm sm:px-8">
            <span className="mb-2 inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">Keep connected</span>
            <h3 className="mb-2 text-lg font-semibold text-[var(--color-white)]">Stay Updated</h3>
            <p className="text-sm text-[var(--color-gray-400)] mb-6">
              Subscribe to our newsletter for course updates and news.
            </p>
            <a href="https://wa.me/27727733960?text=Hi%20Admissions%2C%20please%20send%20me%20course%20and%20application%20updates." target="_blank" rel="noopener noreferrer" className="mx-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-[var(--saic-navy-950)] shadow-lg shadow-[var(--color-accent)]/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[var(--color-accent)]/30 btn-shine">Get updates from Admissions</a>
          </div>
        </Container>
      </div>

      <div className="relative py-14 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="lg:col-span-1">
              <Link href="/" className="group mb-4 flex items-center gap-3">
                <div className="w-[160px] h-[52px] rounded-lg overflow-hidden bg-white/5 shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-0.5">
                  <img
                    src="/images/logo-sa-innovation.webp"
                    alt="SA Innovation College"
                    className="h-full w-full object-contain p-1"
                    width={160}
                    height={52}
                  />
                </div>
              </Link>
              <p className="text-sm leading-relaxed mb-4">
                Helping learners build practical skills for work, business and further study through accessible programmes and learner-focused support.
              </p>
              <div className="flex items-center gap-2.5">
                {[
                  { label: "Facebook", icon: "facebook" as const },
                  { label: "Instagram", icon: "instagram" as const },
                  { label: "X", icon: "twitter" as const },
                  { label: "LinkedIn", icon: "linkedin" as const },
                  { label: "TikTok", icon: "tiktok" as const },
                ].map(social => (
                  <a
                    key={social.label}
                    href="#"
                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/60 hover:bg-[var(--color-accent)] hover:shadow-lg hover:shadow-[var(--color-accent)]/25"
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <Icon name={social.icon} size={4} className="text-[var(--color-gray-400)] transition-colors duration-300 group-hover:text-[var(--saic-navy-950)]" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="relative mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-[var(--color-white)]">
                Quick Links
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 animate-gold-shimmer rounded-full" />
              </h3>
              <ul className="space-y-2.5 mt-5">
                {[
                  { title: "About Us", url: "/about" },
                  { title: "Courses", url: "/courses" },
                  { title: "For Students", url: "/students" },
                  { title: "News & Updates", url: "/news" },
                  { title: "Contact Us", url: "/contact" },
                ].map(link => (
                  <li key={link.url}>
                    <Link href={link.url} className="text-sm hover:text-[var(--color-accent)] transition-all duration-200 hover:translate-x-1 inline-block">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="relative mb-4 mt-8 inline-block text-sm font-semibold uppercase tracking-wider text-[var(--color-white)]">
                Applications
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 animate-gold-shimmer rounded-full" />
              </h3>
              <ul className="space-y-2.5 mt-5">
                <li>
                  <Link href="/apply" className="text-sm hover:text-[var(--color-accent)] transition-colors hover:translate-x-0.5 inline-block">
                    Apply Now
                  </Link>
                </li>
                <li>
                  <a href={getWhatsAppUrl("+27727733960")} className="text-sm hover:text-[var(--color-accent)] transition-colors hover:translate-x-0.5 inline-block" target="_blank" rel="noopener noreferrer">
                    WhatsApp Enquiries
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="relative mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-[var(--color-white)]">
                Programmes
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 animate-gold-shimmer rounded-full" />
              </h3>
              <ul className="space-y-2.5 mt-5">
                {[
                  "Office Administration",
                  "Computer Literacy",
                  "Traffic Officer",
                  "Entrepreneurship",
                  "Facilitator Training",
                  "Table Service",
                ].map(prog => (
                  <li key={prog}>
                    <Link href="/courses" className="text-sm hover:text-[var(--color-accent)] transition-all duration-200 hover:translate-x-1 inline-block">
                      {prog}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="relative mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-[var(--color-white)]">
                Contact Us
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 animate-gold-shimmer rounded-full" />
              </h3>
              <ul className="space-y-3.5 mt-5">
                <li>
                  <a href={getTelUrl("0800 014 568")} className="flex items-start gap-3 text-sm hover:text-[var(--color-accent)] transition-all duration-200 group">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-gray-800)] text-[var(--color-gray-400)] group-hover:bg-[var(--color-accent)]/20 group-hover:text-[var(--color-accent)] transition-all duration-300 group-hover:scale-110">
                      <Icon name="phone" size={4} />
                    </span>
                    <span>0800 014 568 (Toll Free)</span>
                  </a>
                </li>
                <li>
                  <a href={getWhatsAppUrl("+27727733960")} className="flex items-start gap-3 text-sm hover:text-[var(--color-accent)] transition-all duration-200 group" target="_blank" rel="noopener noreferrer">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-gray-800)] text-[var(--color-gray-400)] group-hover:bg-[var(--color-accent)]/20 group-hover:text-[var(--color-accent)] transition-all duration-300 group-hover:scale-110">
                      <Icon name="whatsapp" size={4} />
                    </span>
                    +27 72 773 3960
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-gray-800)] text-[var(--color-gray-400)]">
                    <Icon name="map-pin" size={4} />
                  </span>
                  <span>147 Burger Avenue, 1st Floor, Barclays Centre, Lyttelton Manor, Centurion, 0157</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-gray-800)] text-[var(--color-gray-400)]">
                    <Icon name="clock" size={4} />
                  </span>
                  Mon–Fri: 08:00–17:00
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      <div className="relative border-t border-white/10 bg-gradient-to-r from-black/20 via-black/10 to-black/20">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6">
          <p className="text-xs text-[var(--color-gray-500)]">
            &copy; {currentYear} SA Innovation College. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-[var(--color-gray-500)]">
            <Link href="/contact" className="transition-colors hover:text-[var(--color-accent)]">Contact Us</Link>
            <Link href="/about" className="transition-colors hover:text-[var(--color-accent)]">About</Link>
            <Link href="/apply" className="transition-colors hover:text-[var(--color-accent)]">Apply</Link>
            <Link href="/privacy" className="transition-colors hover:text-[var(--color-accent)]">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-[var(--color-accent)]">Terms</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
