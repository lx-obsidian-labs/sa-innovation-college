"use client";

import { useCallback, useRef, useEffect } from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import HeroSlide from "./HeroSlide";
import HeroBenefitCards from "./HeroBenefitCards";
import CarouselControls from "./CarouselControls";
import CarouselPagination from "./CarouselPagination";
import { useHeroCarousel } from "./use-hero-carousel";
import type { SlideData, BenefitCard } from "./hero-carousel.types";
import { getWhatsAppUrl } from "@/lib/utils";

const slides: SlideData[] = [
  {
    image: "/images/SA-INNOVATION-COLLEGE-2-scaled.webp",
    tag: "Applications Open for 2026",
    title: "Your Future in Education",
    highlight: "Starts Here",
    tagline: "Through Knowledge, We Grow Towards Excellence",
    description: "Empowering learners with knowledge, skills, and innovation to unlock career opportunities.",
    cta: { text: "Explore Courses", href: "/courses" },
    secondary: { text: "Talk to Us", href: getWhatsAppUrl("+27727733960") },
  },
  {
    image: "/images/SA-INNOVATION-COLLEGE3-scaled.jpg",
    tag: "30+ Accredited Programmes",
    title: "Industry-Aligned",
    highlight: "Qualifications",
    tagline: "SETA & QCTO Accredited",
    description: "Industry-aligned programmes designed with experts to ensure you graduate job-ready.",
    cta: { text: "View Programmes", href: "/courses" },
    secondary: { text: "Contact Us", href: "/contact" },
  },
  {
    image: "/images/SA-INNOVATION-COLLEGE2-scaled.jpg",
    tag: "No Matric? No Problem",
    title: "Education for",
    highlight: "Everyone",
    tagline: "Accessible Learning Opportunities",
    description: "Education accessible to all — no matric required for select programmes.",
    cta: { text: "Apply Now", href: "/apply" },
    secondary: { text: "Chat on WhatsApp", href: getWhatsAppUrl("+27727733960") },
  },
];

const benefitCards: BenefitCard[] = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-2.672-3.493 2.02-2.02a2.25 2.25 0 0 1 3.182 0l.707.707a2.25 2.25 0 0 1 0 3.182l-2.02 2.02m-2.02 2.02-1.59 1.59a2.25 2.25 0 0 1-3.182 0l-.707-.707a2.25 2.25 0 0 1 0-3.182l1.59-1.59m6.364-6.364L21 12l-5.636 5.636m-5.364-5.364L3 12l5.636 5.636" />
      </svg>
    ),
    title: "Accredited Programmes",
    desc: "Formally recognised and industry-endorsed qualifications",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
    title: "Expert Instructors",
    desc: "Learn from qualified professionals with real-world experience",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Flexible Learning",
    desc: "Full-time, part-time, and online study options available",
  },
];

export default function HeroCarousel() {
  const { context, dispatch } = useHeroCarousel(slides.length);
  const sectionRef = useRef<HTMLElement>(null);

  const slide = slides[context.current];

  const handlePrev = useCallback(() => dispatch({ type: "PREV" }), [dispatch]);
  const handleNext = useCallback(() => dispatch({ type: "NEXT" }), [dispatch]);
  const handleGoTo = useCallback((index: number) => dispatch({ type: "GO_TO", index }), [dispatch]);
  const handleTogglePause = useCallback(() => {
    dispatch(context.state === "paused" ? { type: "PLAY" } : { type: "PAUSE" });
  }, [dispatch, context.state]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") { e.preventDefault(); dispatch({ type: "PREV" }); }
      if (e.key === "ArrowRight") { e.preventDefault(); dispatch({ type: "NEXT" }); }
    };

    el.addEventListener("keydown", handleKey);
    return () => el.removeEventListener("keydown", handleKey);
  }, [dispatch]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[70vh] lg:min-h-[75vh] flex items-center overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured slides"
      tabIndex={0}
      onMouseEnter={() => dispatch({ type: "HOVER_ENTER" })}
      onMouseLeave={() => dispatch({ type: "HOVER_LEAVE" })}
      onFocus={() => dispatch({ type: "FOCUS_ENTER" })}
      onBlur={() => dispatch({ type: "FOCUS_LEAVE" })}
    >
      {slides.map((s, idx) => (
        <HeroSlide key={idx} slide={s} index={idx} current={context.current} />
      ))}

      <Container className="relative z-10 w-full">
        <div className="mx-auto max-w-4xl text-center pt-12 lg:pt-0">
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)] backdrop-blur-sm"
            key={`tag-${context.current}`}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            </span>
            {slide.tag}
          </div>

          <h1
            className="mb-2 text-[var(--fs-4xl)] font-extrabold leading-[1.05] tracking-tight text-white"
            key={`title-${context.current}`}
          >
            <span className="animate-fadeInUp" style={{ animationDelay: "0.1s", display: "inline-block" }}>
              {slide.title}
            </span>
            <br />
            <span className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] bg-clip-text text-transparent animate-fadeInUp" style={{ animationDelay: "0.2s", display: "inline-block" }}>
              {slide.highlight}
            </span>
          </h1>

          <p className="mb-2 text-lg font-medium text-[var(--color-accent)]/90 animate-fadeInUp" style={{ animationDelay: "0.25s" }} key={`tagline-${context.current}`}>
            {slide.tagline}
          </p>

          <p className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-white/80 animate-fadeInUp" style={{ animationDelay: "0.3s" }} key={`desc-${context.current}`}>
            {slide.description}
          </p>

          <div className="flex animate-fadeInUp flex-wrap justify-center gap-4 mb-8" style={{ animationDelay: "0.4s" }} key={`cta-${context.current}`}>
            <Button variant="accent" size="lg" href={slide.cta.href} className="shadow-lg shadow-[var(--color-accent)]/25">
              {slide.cta.text}
            </Button>
            {slide.secondary && (
              <Button
                variant="secondary"
                size="lg"
                href={slide.secondary.href}
                className="!border-white/40 !text-white hover:!bg-white/10"
              >
                {slide.secondary.text}
              </Button>
            )}
          </div>

          <HeroBenefitCards cards={benefitCards} />
        </div>
      </Container>

      <CarouselPagination
        total={slides.length}
        current={context.current}
        onGoTo={handleGoTo}
      />

      <CarouselControls
        total={slides.length}
        isPaused={context.state === "paused"}
        onPrev={handlePrev}
        onNext={handleNext}
        onTogglePause={handleTogglePause}
      />
    </section>
  );
}
