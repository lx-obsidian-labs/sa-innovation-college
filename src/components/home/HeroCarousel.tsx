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
import ApplicationCountdown from "./ApplicationCountdown";

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
    icon: "check-badge",
    title: "Accredited Programmes",
    desc: "Formally recognised and industry-endorsed qualifications",
  },
  {
    icon: "user-group",
    title: "Expert Instructors",
    desc: "Learn from qualified professionals with real-world experience",
  },
  {
    icon: "clock",
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
      className="relative min-h-[65vh] lg:min-h-[75vh] flex items-center overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured slides"
      tabIndex={0}
      onMouseEnter={() => dispatch({ type: "HOVER_ENTER" })}
      onMouseLeave={() => dispatch({ type: "HOVER_LEAVE" })}
      onFocus={() => dispatch({ type: "FOCUS_ENTER" })}
      onBlur={() => dispatch({ type: "FOCUS_LEAVE" })}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-darker)] via-[var(--color-primary-dark)] to-[var(--color-primary)]" />
      <div className="absolute inset-0 bg-noise opacity-50" aria-hidden />
      <div className="floating-blob" style={{ width: 500, height: 500, background: "var(--color-accent)", top: "-15%", right: "-10%", opacity: 0.05, animationDelay: "0s" }} aria-hidden />
      <div className="floating-blob" style={{ width: 400, height: 400, background: "var(--color-primary-light)", bottom: "-20%", left: "-5%", opacity: 0.06, animationDelay: "3s" }} aria-hidden />
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20 animate-float-particle"
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              left: `${5 + (i * 8) % 90}%`,
              top: `${10 + (i * 7) % 80}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${3 + (i % 4)}s`,
            }}
          />
        ))}
      </div>
      {slides.map((s, idx) => (
        <HeroSlide key={idx} slide={s} index={idx} current={context.current} />
      ))}

      <Container className="relative z-10 w-full">
        <div className="mx-auto max-w-4xl text-center pt-16 lg:pt-0">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)] backdrop-blur-sm"
            key={`tag-${context.current}`}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            </span>
            {slide.tag}
          </div>

          <h1
            className="mb-3 text-[var(--fs-4xl)] font-extrabold leading-[1.05] tracking-tight text-white"
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

          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/80 animate-fadeInUp" style={{ animationDelay: "0.3s" }} key={`desc-${context.current}`}>
            {slide.description}
          </p>

          <ApplicationCountdown />

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
