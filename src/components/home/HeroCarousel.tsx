"use client";

import { useState, useEffect, useCallback } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import { getWhatsAppUrl } from "@/lib/utils";

const slides = [
  {
    image: "/images/SA-INNOVATION-COLLEGE-2-scaled.webp",
    tag: "Applications Open for 2026",
    title: "Your Future in Education",
    highlight: "Starts Here",
    tagline: "Through Knowledge, We Grow Towards Excellence",
    description:
      "At SA Innovation College, we empower learners with knowledge, skills, and innovation to unlock opportunities. From world-class courses to practical training, we're here to help you build a brighter tomorrow.",
    cta: { text: "Explore Courses", href: "/courses" },
    secondary: { text: "Talk to Us", href: getWhatsAppUrl("+27727733960") },
  },
  {
    image: "/images/SA-INNOVATION-COLLEGE3-scaled.jpg",
    tag: "30+ Accredited Programmes",
    title: "Industry-Aligned",
    highlight: "Qualifications",
    tagline: "SETA & QCTO Accredited",
    description:
      "Our programmes are designed with industry experts to ensure you graduate with the skills employers demand. From law enforcement to digital skills, find your path today.",
    cta: { text: "View Programmes", href: "/courses" },
    secondary: { text: "Contact Us", href: "/contact" },
  },
  {
    image: "/images/SA-INNOVATION-COLLEGE2-scaled.jpg",
    tag: "No Matric? No Problem",
    title: "Education for",
    highlight: "Everyone",
    tagline: "Accessible Learning Opportunities",
    description:
      "We believe education should be accessible to all. Many of our programmes don't require a matric certificate. Start your journey with SA Innovation College today.",
    cta: { text: "Apply Now", href: "/apply" },
    secondary: { text: "Chat on WhatsApp", href: getWhatsAppUrl("+27727733960") },
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className="absolute inset-0 transition-all duration-700 ease-in-out"
          style={{
            opacity: idx === current ? 1 : 0,
            transform: `scale(${idx === current ? 1 : 1.05})`,
            zIndex: idx === current ? 1 : 0,
          }}
        >
          <img
            src={s.image}
            alt=""
            className="h-full w-full object-cover"
            loading={idx === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/95 via-[var(--color-primary-dark)]/95 to-[#0B1F3F]/95" />
        </div>
      ))}

      <div className="absolute left-10 top-20 h-72 w-72 animate-float rounded-full bg-[var(--color-accent)]/15 blur-3xl" aria-hidden />
      <div className="absolute bottom-20 right-10 h-96 w-96 animate-float rounded-full bg-[var(--color-primary-light)]/15 blur-3xl" style={{ animationDelay: "2s" }} aria-hidden />

      <Container className="relative z-10 w-full">
        <div className="mx-auto max-w-4xl text-center">
          <div
            className="mb-6 inline-flex animate-fadeInUp items-center gap-2 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]"
            key={`tag-${current}`}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            </span>
            {slide.tag}
          </div>

          <h1
            className="mb-4 text-[var(--fs-4xl)] font-extrabold leading-[1.05] tracking-tight text-white"
            key={`title-${current}`}
          >
            <span className="animate-fadeInUp" style={{ animationDelay: "0.1s", display: "inline-block" }}>
              {slide.title}
            </span>
            <br />
            <span className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] bg-clip-text text-transparent animate-fadeInUp" style={{ animationDelay: "0.2s", display: "inline-block" }}>
              {slide.highlight}
            </span>
          </h1>

          <p className="mb-4 text-lg font-medium text-[var(--color-accent)]/90 md:text-xl animate-fadeInUp" style={{ animationDelay: "0.25s" }} key={`tagline-${current}`}>
            {slide.tagline}
          </p>

          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg animate-fadeInUp" style={{ animationDelay: "0.3s" }} key={`desc-${current}`}>
            {slide.description}
          </p>

          <div className="flex animate-fadeInUp flex-wrap justify-center gap-4" style={{ animationDelay: "0.4s" }} key={`cta-${current}`}>
            <Button variant="accent" size="lg" href={slide.cta.href} className="shadow-lg shadow-[var(--color-accent)]/25">
              {slide.cta.text}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={slide.secondary.href}
              className="!border-white/40 !text-white hover:!bg-white/10"
            >
              {slide.secondary.text}
            </Button>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-gray-50)] to-transparent z-10" aria-hidden />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === current ? "w-8 bg-[var(--color-accent)]" : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 opacity-0 lg:opacity-100"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 opacity-0 lg:opacity-100"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
