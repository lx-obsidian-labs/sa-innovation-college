import Link from "next/link";
import Container from "./Container";
import { getWhatsAppUrl, getTelUrl } from "@/lib/utils";
import Icon from "@/components/ui/Icon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-gray-900)] text-[var(--color-gray-300)]">
      <div className="border-b border-[var(--color-gray-800)]">
        <Container className="py-10 lg:py-12">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-[var(--color-white)] font-semibold text-lg mb-2">Stay Updated</h3>
            <p className="text-sm text-[var(--color-gray-400)] mb-6">
              Subscribe to our newsletter for course updates and news.
            </p>
            <form action="#" className="flex max-w-md mx-auto shadow-sm rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[var(--color-accent)]/30 focus-within:ring-offset-2 focus-within:ring-offset-[var(--color-gray-900)] transition-all">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 text-sm text-[var(--color-text-primary)] bg-[var(--color-white)] outline-none placeholder:text-[var(--color-gray-400)]"
              />
              <button
                type="submit"
                className="px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-[var(--color-text-inverse)] bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] hover:from-[var(--color-accent-dark)] hover:to-[var(--color-accent-dark)] transition-all duration-200 shrink-0 btn-shine"
              >
                Subscribe
              </button>
            </form>
          </div>
        </Container>
      </div>

      <div className="py-12 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-lg flex items-center justify-center shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-0.5">
                  <span className="text-[var(--color-text-inverse)] font-bold text-lg">SA</span>
                </div>
                <div>
                  <div className="font-bold text-[var(--color-white)] text-sm leading-tight">SA Innovation</div>
                  <div className="text-[var(--color-gray-400)] text-xs leading-tight">College</div>
                </div>
              </Link>
              <p className="text-sm leading-relaxed mb-4">
                Empowering South African youth with globally recognised skills in digital technology, creative design, and business innovation.
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
                    className="w-10 h-10 rounded-full bg-[var(--color-gray-800)] flex items-center justify-center hover:bg-[var(--color-accent)] hover:-translate-y-0.5 transition-all duration-200 group"
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <Icon name={social.icon} size={4} className="text-[var(--color-gray-400)] group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[var(--color-white)] font-semibold text-sm uppercase tracking-wider mb-4 relative inline-block">
                Quick Links
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-transparent rounded-full" />
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
                    <Link href={link.url} className="text-sm hover:text-[var(--color-accent)] transition-colors hover:translate-x-0.5 inline-block">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="text-[var(--color-white)] font-semibold text-sm uppercase tracking-wider mt-8 mb-4 relative inline-block">
                Applications
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-transparent rounded-full" />
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
              <h3 className="text-[var(--color-white)] font-semibold text-sm uppercase tracking-wider mb-4 relative inline-block">
                Programmes
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-transparent rounded-full" />
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
                    <Link href="/courses" className="text-sm hover:text-[var(--color-accent)] transition-colors hover:translate-x-0.5 inline-block">
                      {prog}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[var(--color-white)] font-semibold text-sm uppercase tracking-wider mb-4 relative inline-block">
                Contact Us
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-transparent rounded-full" />
              </h3>
              <ul className="space-y-3.5 mt-5">
                <li>
                  <a href={getTelUrl("0800 014 568")} className="flex items-start gap-3 text-sm hover:text-[var(--color-accent)] transition-colors group">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-gray-800)] text-[var(--color-gray-400)] group-hover:bg-[var(--color-accent)]/20 group-hover:text-[var(--color-accent)] transition-all duration-200">
                      <Icon name="phone" size={4} />
                    </span>
                    <span>0800 014 568 (Toll Free)</span>
                  </a>
                </li>
                <li>
                  <a href={getWhatsAppUrl("+27727733960")} className="flex items-start gap-3 text-sm hover:text-[var(--color-accent)] transition-colors group" target="_blank" rel="noopener noreferrer">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-gray-800)] text-[var(--color-gray-400)] group-hover:bg-[var(--color-accent)]/20 group-hover:text-[var(--color-accent)] transition-all duration-200">
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

      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gray-700)] to-transparent" />
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5">
          <p className="text-xs text-[var(--color-gray-500)]">
            &copy; {currentYear} SA Innovation College. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-[var(--color-gray-500)]">
            <Link href="/contact" className="hover:text-[var(--color-gray-300)] transition-colors">Contact Us</Link>
            <Link href="/about" className="hover:text-[var(--color-gray-300)] transition-colors">About</Link>
            <Link href="/apply" className="hover:text-[var(--color-gray-300)] transition-colors">Apply</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
