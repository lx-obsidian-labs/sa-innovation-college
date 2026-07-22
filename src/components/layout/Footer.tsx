import Link from "next/link";
import Container from "./Container";
import { getWhatsAppUrl, getTelUrl } from "@/lib/utils";

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
            <form action="#" className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3 text-sm text-[var(--color-text-primary)] bg-[var(--color-white)] rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] placeholder:text-[var(--color-gray-400)]"
              />
              <button
                type="submit"
                className="px-6 py-3 text-sm font-semibold text-[var(--color-text-inverse)] bg-[var(--color-accent)] rounded-r-lg hover:bg-[var(--color-accent-dark)] transition-colors shrink-0"
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
              <Link href="/" className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
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
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[var(--color-gray-800)] flex items-center justify-center hover:bg-[var(--color-accent)] transition-all duration-200 group"
                  aria-label="Follow us on Facebook"
                >
                  <svg className="w-4 h-4 text-[var(--color-gray-400)] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[var(--color-gray-800)] flex items-center justify-center hover:bg-[var(--color-accent)] transition-all duration-200 group"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-4 h-4 text-[var(--color-gray-400)] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[var(--color-gray-800)] flex items-center justify-center hover:bg-[var(--color-accent)] transition-all duration-200 group"
                  aria-label="Follow us on X"
                >
                  <svg className="w-4 h-4 text-[var(--color-gray-400)] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[var(--color-gray-800)] flex items-center justify-center hover:bg-[var(--color-accent)] transition-all duration-200 group"
                  aria-label="Follow us on LinkedIn"
                >
                  <svg className="w-4 h-4 text-[var(--color-gray-400)] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[var(--color-gray-800)] flex items-center justify-center hover:bg-[var(--color-accent)] transition-all duration-200 group"
                  aria-label="Follow us on TikTok"
                >
                  <svg className="w-4 h-4 text-[var(--color-gray-400)] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-[var(--color-white)] font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
              <ul className="space-y-2.5">
                {[
                  { title: "About Us", url: "/about" },
                  { title: "Courses", url: "/courses" },
                  { title: "For Students", url: "/students" },
                  { title: "News & Updates", url: "/news" },
                  { title: "Contact Us", url: "/contact" },
                ].map(link => (
                  <li key={link.url}>
                    <Link href={link.url} className="text-sm hover:text-[var(--color-accent)] transition-colors">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="text-[var(--color-white)] font-semibold text-sm uppercase tracking-wider mt-8 mb-4">Applications</h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/apply" className="text-sm hover:text-[var(--color-accent)] transition-colors">
                    Apply Now
                  </Link>
                </li>
                <li>
                  <a href={getWhatsAppUrl("+27727733960")} className="text-sm hover:text-[var(--color-accent)] transition-colors" target="_blank" rel="noopener noreferrer">
                    WhatsApp Enquiries
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[var(--color-white)] font-semibold text-sm uppercase tracking-wider mb-4">Programmes</h3>
              <ul className="space-y-2.5">
                {[
                  "Office Administration",
                  "Computer Literacy",
                  "Traffic Officer",
                  "Entrepreneurship",
                  "Facilitator Training",
                  "Table Service",
                ].map(prog => (
                  <li key={prog}>
                    <Link href="/courses" className="text-sm hover:text-[var(--color-accent)] transition-colors">
                      {prog}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[var(--color-white)] font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li>
                  <a href={getTelUrl("0800 014 568")} className="flex items-start gap-2 text-sm hover:text-[var(--color-accent)] transition-colors">
                    <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    0800 014 568 (Toll Free)
                  </a>
                </li>
                <li>
                  <a href={getWhatsAppUrl("+27727733960")} className="flex items-start gap-2 text-sm hover:text-[var(--color-accent)] transition-colors" target="_blank" rel="noopener noreferrer">
                    <svg className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    +27 72 773 3960
                  </a>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>147 Burger Avenue, 1st Floor, Barclays Centre, Lyttelton Manor, Centurion, 0157</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
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
            <Link href="/privacy" className="hover:text-[var(--color-gray-300)] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[var(--color-gray-300)] transition-colors">Terms & Conditions</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
