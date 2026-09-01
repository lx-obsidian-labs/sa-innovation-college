"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { cn, getWhatsAppUrl } from "@/lib/utils";
import Icon from "@/components/ui/Icon";

const NAV_ITEMS = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Courses", url: "/courses", hasDropdown: true },
  { title: "For Students", url: "/students" },
  { title: "News", url: "/news" },
  { title: "Contact", url: "/contact" },
];

const COURSE_CATEGORIES = [
  { title: "Business & Administration", slug: "Business%20%26%20Admin", icon: "building-library" as const },
  { title: "Computer Skills", slug: "Computer%20%26%20Digital", icon: "display" as const },
  { title: "Education & Training", slug: "Education%20%26%20Training", icon: "academic-cap" as const },
  { title: "Health & Safety", slug: "Health%20%26%20Safety", icon: "shield-health" as const },
  { title: "Hospitality", slug: "Customer%20Service%20%26%20Hospitality", icon: "gift" as const },
  { title: "Entrepreneurship", slug: "Management%20%26%20Entrepreneurship", icon: "briefcase" as const },
  { title: "Policing & Law Enforcement", slug: "Security%20%26%20Legal%20Studies", icon: "shield-check" as const },
];

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

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

  const trapRef = useRef<HTMLElement[]>([]);

  const updateTrapElements = useCallback(() => {
    if (!menuRef.current) return;
    trapRef.current = Array.from(menuRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    updateTrapElements();
    const timer = setTimeout(() => {
      trapRef.current[0]?.focus();
    }, 100);
    return () => clearTimeout(timer);
  }, [isOpen, updateTrapElements]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") { setIsOpen(false); toggleRef.current?.focus(); }
      if (e.key === "Tab" && trapRef.current.length > 0) {
        const first = trapRef.current[0];
        const last = trapRef.current[trapRef.current.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  const handleDropdownKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const links = Array.from(dropdownRef.current?.querySelectorAll<HTMLAnchorElement>("a") || []);
      if (links.length === 0) return;
      const currentIdx = links.indexOf(document.activeElement as HTMLAnchorElement);
      const nextIdx = e.key === "ArrowDown"
        ? (currentIdx + 1) % links.length
        : (currentIdx - 1 + links.length) % links.length;
      links[nextIdx]?.focus();
    }
  };

  const isActive = (url: string) => {
    if (url === "/") return pathname === "/";
    return pathname.startsWith(url);
  };

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-[var(--z-sticky)] transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-black/[0.03]"
          : "bg-white/95 shadow-sm"
      )}
    >
      <Container className="flex items-center justify-between h-14 lg:h-[80px]">
        <Link href="/" className="flex items-center shrink-0 group">
          <div className={cn(
            "rounded-xl overflow-hidden border-2 border-white/80 shadow-sm transition-all duration-300 group-hover:scale-[1.05] group-hover:shadow-lg group-hover:border-[var(--color-accent)]/40",
            scrolled ? "h-[48px] w-[48px]" : "h-[48px] w-[48px] lg:h-[60px] lg:w-[60px]"
          )}>
            <img
              src="/images/logo-sa-innovation.webp"
              alt="SA Innovation College"
              className="h-full w-full object-contain"
              loading="eager"
              width={60}
              height={60}
            />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {NAV_ITEMS.map(item => (
            <div key={item.url} className="relative" ref={item.title === "Courses" ? dropdownRef : undefined}>
              <Link
                href={item.url}
                className={cn(
                  "relative inline-flex items-center px-3 py-2 text-[15px] font-semibold rounded-lg transition-all duration-200",
                  "after:absolute after:bottom-[2px] after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[var(--color-primary)] after:to-[var(--color-accent)] after:rounded-full after:transition-all after:duration-300",
                  "hover:after:w-[60%] hover:text-[var(--color-primary)] hover:bg-[var(--color-gray-50)]",
                  isActive(item.url)
                    ? "text-[var(--color-primary)] after:w-[60%]"
                    : "text-[var(--color-text-secondary)]"
                )}
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.title)}
                onKeyDown={(e) => item.hasDropdown && handleDropdownKeyDown(e)}
                aria-expanded={item.hasDropdown ? activeDropdown === item.title : undefined}
                aria-haspopup={item.hasDropdown ? "true" : undefined}
              >
                {item.title}
                {item.hasDropdown && (
                  <Icon
                    name="chevron-down"
                    size={3}
                    className={cn(
                      "transition-transform duration-200",
                      activeDropdown === item.title && "rotate-180"
                    )}
                  />
                )}
              </Link>

              {item.hasDropdown && (
                <div
                  className={cn(
                    "absolute top-full left-0 pt-3 transition-all duration-200",
                    activeDropdown === item.title ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  )}
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  role="menu"
                  aria-label={`${item.title} submenu`}
                >
                  <div className="bg-white rounded-2xl shadow-xl border border-[var(--color-gray-100)] p-3 min-w-[280px]">
                    <div className="grid grid-cols-1 gap-0.5">
                      {COURSE_CATEGORIES.map(cat => (
                        <Link
                          key={cat.slug}
                          href={`/courses#${cat.slug}`}
                          className="flex items-center gap-3 px-4 py-3 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-gray-50)] rounded-xl transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[var(--color-border-focus)] focus-visible:ring-offset-2"
                          onClick={() => setActiveDropdown(null)}
                          role="menuitem"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-gray-50)] text-[var(--color-gray-400)] transition-all duration-200 group-hover:bg-[var(--color-primary)]/10 group-hover:text-[var(--color-primary)]">
                            <Icon name={cat.icon} size={4} />
                          </span>
                          <span>{cat.title}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 pt-2 border-t border-[var(--color-border)]">
                      <Link
                        href="/courses"
                        className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-[var(--color-primary)] hover:bg-[var(--color-gray-50)] rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-[var(--color-border-focus)]"
                        onClick={() => setActiveDropdown(null)}
                        role="menuitem"
                      >
                        View All Courses
                        <Icon name="arrow-right" size={4} className="icon-hover-slide-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/apply"
              className="btn-shine inline-flex items-center justify-center px-5 py-2 h-[44px] text-sm font-bold uppercase tracking-wide text-[var(--color-text-inverse)] bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary-dark)] bg-[length:200%_200%] animate-border-flow rounded-xl shadow-md shadow-[var(--color-primary)]/15 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--color-primary)]/25 hover:border hover:border-[var(--color-accent)]/40"
            >
              Apply Now
            </Link>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="lg:hidden inline-flex flex-col items-center justify-center w-10 h-10 rounded-lg hover:bg-[var(--color-gray-100)] transition-colors gap-[5px]"
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
          "fixed inset-0 top-14 z-[var(--z-modal-backdrop)] bg-[var(--color-gray-900)]/50 lg:hidden transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <div
        ref={menuRef}
        id="mobile-menu"
        className={cn(
          "fixed top-14 right-0 bottom-0 w-full sm:w-[400px] z-[var(--z-modal)] bg-[var(--color-white)] shadow-xl transform transition-all duration-300 ease-in-out lg:hidden overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <nav className="p-6 space-y-1" aria-label="Mobile navigation">
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={item.url}
              href={item.url}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-4 py-4 text-base font-medium rounded-lg transition-all duration-300 min-h-[48px]",
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
          <div className="pt-6 border-t border-[var(--color-border)] mt-6 space-y-4">
            <Link
              href="/apply"
              onClick={() => setIsOpen(false)}
              className="btn-shine block w-full text-center px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-[var(--color-text-inverse)] bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary-dark)] bg-[length:200%_200%] animate-border-flow rounded-xl shadow-lg shadow-[var(--color-primary)]/15 transition-all duration-200 hover:shadow-xl"
            >
              Apply Now
            </Link>
            <a
              href={getWhatsAppUrl("+27727733960")}
              className="flex items-center justify-center gap-2 w-full px-6 py-3.5 text-sm font-semibold text-[var(--color-primary)] border-2 border-[var(--color-primary)] rounded-xl hover:bg-[var(--color-primary)] hover:text-[var(--color-text-inverse)] transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" size={4} />
              WhatsApp Us
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
