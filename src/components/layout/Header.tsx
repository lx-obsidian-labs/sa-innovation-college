"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { cn, getWhatsAppUrl, getTelUrl } from "@/lib/utils";

const NAV_ITEMS = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Courses", url: "/courses" },
  { title: "For Students", url: "/students" },
  { title: "News", url: "/news" },
  { title: "Contact", url: "/contact" },
];

const COURSE_CATEGORIES = [
  { title: "Business & Administration", slug: "business-administration" },
  { title: "Computer Skills", slug: "computer-skills" },
  { title: "Education & Training", slug: "education-training" },
  { title: "Health & Safety", slug: "health-safety" },
  { title: "Hospitality", slug: "hospitality" },
  { title: "Entrepreneurship", slug: "entrepreneurship" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") { setIsOpen(false); toggleRef.current?.focus(); }
      if (e.key === "Tab" && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  const isActive = (url: string) => {
    if (url === "/") return pathname === "/";
    return pathname.startsWith(url);
  };

  return (
    <>
      {/* Top bar — phone, whatsapp */}
      <div className="hidden lg:block bg-[var(--color-primary-dark)] text-[var(--color-text-inverse)] text-[var(--fs-xs)]">
        <Container className="flex items-center justify-between h-10">
          <div className="flex items-center gap-6">
            <a href={getTelUrl("0800 014 568")} className="flex items-center gap-1.5 hover:text-[var(--color-accent)] transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0800 014 568
            </a>
            <a href={getWhatsAppUrl("+27727733960")} className="flex items-center gap-1.5 hover:text-[var(--color-accent)] transition-colors" target="_blank" rel="noopener noreferrer">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
          <span className="text-[var(--color-gray-400)]">Mon–Fri: 08:00–17:00</span>
        </Container>
      </div>

      {/* Main header */}
      <header
        className={cn(
          "sticky top-0 z-[var(--z-sticky)] transition-all duration-300",
          scrolled
            ? "bg-white/80 backdrop-blur-lg shadow-lg"
            : "bg-white shadow-sm"
        )}
      >
        <Container className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/images/SA-INNOVATION-COLLEGE.webp"
              alt="SA Innovation College"
              width={160}
              height={48}
              className="h-10 lg:h-12 w-auto"
              loading="eager"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_ITEMS.map(item => (
              <div key={item.url} className="relative group">
                <Link
                  href={item.url}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                    isActive(item.url)
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-gray-50)]"
                  )}
                >
                  {item.title}
                  {isActive(item.url) && (
                    <span className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[var(--color-primary)] rounded-full" />
                  )}
                </Link>
                {/* Courses dropdown */}
                {item.title === "Courses" && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 min-w-[220px]">
                      {COURSE_CATEGORIES.map(cat => (
                        <Link
                          key={cat.slug}
                          href={`/courses#${cat.slug}`}
                          className="block px-4 py-2.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-gray-50)] rounded-lg transition-colors"
                        >
                          {cat.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA + Search */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              type="button"
              className="w-10 h-10 flex items-center justify-center rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-gray-50)] transition-colors"
              aria-label="Search courses"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-[var(--color-text-inverse)] bg-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button — animated hamburger */}
          <button
            ref={toggleRef}
            type="button"
            className="lg:hidden inline-flex flex-col items-center justify-center w-11 h-11 rounded-lg hover:bg-[var(--color-gray-100)] transition-colors gap-[5px]"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={cn(
                "block w-5 h-[2px] bg-[var(--color-text-primary)] rounded-full transition-all duration-300 origin-center",
                isOpen ? "rotate-45 translate-y-[7px]" : ""
              )}
            />
            <span
              className={cn(
                "block w-5 h-[2px] bg-[var(--color-text-primary)] rounded-full transition-all duration-300",
                isOpen ? "opacity-0 scale-x-0" : ""
              )}
            />
            <span
              className={cn(
                "block w-5 h-[2px] bg-[var(--color-text-primary)] rounded-full transition-all duration-300 origin-center",
                isOpen ? "-rotate-45 -translate-y-[7px]" : ""
              )}
            />
          </button>
        </Container>

        {/* Mobile nav overlay */}
        <div
          className={cn(
            "fixed inset-0 top-16 z-[var(--z-modal-backdrop)] bg-[rgba(15,23,42,0.5)] lg:hidden transition-opacity duration-300",
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile nav panel */}
        <div
          ref={menuRef}
          id="mobile-menu"
          className={cn(
            "fixed top-16 right-0 bottom-0 w-80 max-w-[85vw] z-[var(--z-modal)] bg-[var(--color-white)] shadow-xl transform transition-all duration-300 ease-in-out lg:hidden overflow-y-auto",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="p-6 space-y-1" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item, i) => (
              <Link
                key={item.url}
                href={item.url}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300",
                  isActive(item.url)
                    ? "text-[var(--color-primary)] bg-[var(--color-primary)]/5 border-l-2 border-[var(--color-primary)]"
                    : "text-[var(--color-text-primary)] hover:bg-[var(--color-gray-50)]",
                  isOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4"
                )}
                style={{ transitionDelay: isOpen ? `${i * 60}ms` : "0ms" }}
              >
                {item.title}
              </Link>
            ))}
            <div className="pt-4 border-t border-[var(--color-border)] mt-4 space-y-3">
              <Link
                href="/apply"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-5 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--color-text-inverse)] bg-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                Apply Now
              </Link>
              <a
                href={getWhatsAppUrl("+27727733960")}
                className="block w-full text-center px-5 py-3 text-sm font-semibold text-[var(--color-primary)] border border-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary)] hover:text-[var(--color-text-inverse)] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}