"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { cn, getWhatsAppUrl } from "@/lib/utils";

const NAV_ITEMS = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Courses", url: "/courses", hasDropdown: true },
  { title: "For Students", url: "/students" },
  { title: "News", url: "/news" },
  { title: "Contact", url: "/contact" },
];

const COURSE_CATEGORIES = [
  { title: "Business & Administration", slug: "business-administration", icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" },
  { title: "Computer Skills", slug: "computer-skills", icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" },
  { title: "Education & Training", slug: "education-training", icon: "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" },
  { title: "Health & Safety", slug: "health-safety", icon: "M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" },
  { title: "Hospitality", slug: "hospitality", icon: "M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" },
  { title: "Entrepreneurship", slug: "entrepreneurship", icon: "M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72" },
  { title: "Policing & Law Enforcement", slug: "policing-law-enforcement", icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Z" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  const isActive = (url: string) => {
    if (url === "/") return pathname === "/";
    return pathname.startsWith(url);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-[var(--z-sticky)] transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-lg"
          : "bg-white shadow-sm"
      )}
    >
      <Container className="flex items-center justify-between h-16 lg:h-20">
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

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {NAV_ITEMS.map(item => (
            <div key={item.url} className="relative group" ref={item.title === "Courses" ? dropdownRef : undefined}>
              <Link
                href={item.url}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                  isActive(item.url)
                    ? "text-[var(--color-primary)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-gray-50)]"
                )}
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.title)}
              >
                {item.title}
                {item.hasDropdown && (
                  <svg className="inline-block w-3 h-3 ml-1 -mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                )}
                {isActive(item.url) && (
                  <span className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[var(--color-primary)] rounded-full" />
                )}
              </Link>

              {item.hasDropdown && (
                <div
                  className={cn(
                    "absolute top-full left-0 pt-2 transition-all duration-200",
                    activeDropdown === item.title ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
                  )}
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-3 min-w-[260px]">
                    <div className="grid grid-cols-1 gap-1">
                      {COURSE_CATEGORIES.map(cat => (
                        <Link
                          key={cat.slug}
                          href={`/courses#${cat.slug}`}
                          className="flex items-center gap-3 px-4 py-3 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-gray-50)] rounded-lg transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <svg className="w-5 h-5 shrink-0 text-[var(--color-gray-400)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d={cat.icon} />
                          </svg>
                          <span>{cat.title}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 pt-2 border-t border-[var(--color-gray-100)]">
                      <Link
                        href="/courses"
                        className="flex items-center justify-center gap-1 px-4 py-2.5 text-sm font-semibold text-[var(--color-primary)] hover:bg-[var(--color-gray-50)] rounded-lg transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        View All Courses
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-[var(--color-text-inverse)] bg-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            Apply Now
          </Link>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="lg:hidden inline-flex flex-col items-center justify-center w-11 h-11 rounded-lg hover:bg-[var(--color-gray-100)] transition-colors gap-[5px]"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <span className={cn("block w-5 h-[2px] bg-[var(--color-text-primary)] rounded-full transition-all duration-300 origin-center", isOpen ? "rotate-45 translate-y-[7px]" : "")} />
          <span className={cn("block w-5 h-[2px] bg-[var(--color-text-primary)] rounded-full transition-all duration-300", isOpen ? "opacity-0 scale-x-0" : "")} />
          <span className={cn("block w-5 h-[2px] bg-[var(--color-text-primary)] rounded-full transition-all duration-300 origin-center", isOpen ? "-rotate-45 -translate-y-[7px]" : "")} />
        </button>
      </Container>

      <div
        className={cn(
          "fixed inset-0 top-16 z-[var(--z-modal-backdrop)] bg-[rgba(15,23,42,0.5)] lg:hidden transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

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
                isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
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
  );
}
