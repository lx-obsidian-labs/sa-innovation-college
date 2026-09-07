"use client";

import { useCallback, useRef, useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import HeroSlide from "./HeroSlide";
import CarouselControls from "./CarouselControls";
import CarouselPagination from "./CarouselPagination";
import HeroBenefitCards from "./HeroBenefitCards";
import { useHeroCarousel } from "./use-hero-carousel";
import type { SlideData } from "./hero-carousel.types";
import { getWhatsAppUrl } from "@/lib/utils";

const HERO_IMAGE = "/images/saic-graduate-hero-alternative-v3.png";

const slides: SlideData[] = [
  {
    image: HERO_IMAGE,
    tag: "QCTO Accredited TVET & Skills Training Centre",
    title: "Through Knowledge,",
    highlight: "We Grow Towards Excellence",
    tagline: "Est. 2016 · ICDL South Africa Centre",
    description: "Practical, flexible and industry-aligned learning designed for school leavers, working professionals, and employers.",
    cta: { text: "Find Your Course", href: "/courses" },
    secondary: { text: "Apply Online", href: "/apply" },
  },
  {
    image: HERO_IMAGE,
    tag: "What We Offer",
    title: "Programmes that",
    highlight: "prepare you for success",
    tagline: "QCTO · ICDL · Skills Development",
    description: "From occupational qualifications to international computer certification, explore courses for today's competitive job market.",
    cta: { text: "Explore Courses", href: "/courses" },
    secondary: { text: "Speak to Admissions", href: getWhatsAppUrl("+27727733960") },
  },
  {
    image: HERO_IMAGE,
    tag: "Flexible Study Options",
    title: "Study your way,",
    highlight: "on your schedule",
    tagline: "Full-Time · Part-Time · Online",
    description: "Choose from Full-Time, Part-Time, Distance/E-Learning, or Saturday & Evening Classes.",
    cta: { text: "Start an Application", href: "/apply" },
    secondary: { text: "Compare Courses", href: "/courses" },
  },
  {
    image: HERO_IMAGE,
    tag: "Your Future Starts Here",
    title: "Start your journey,",
    highlight: "today",
    tagline: "Join thousands of learners",
    description: "Education is more than a qualification — it's about unlocking potential and creating opportunities. Register now.",
    cta: { text: "Apply Online Now", href: "/apply" },
    secondary: { text: "Contact Admissions", href: "/contact" },
  },
];

const benefitCards = [
  { icon: "check-badge" as const, title: "QCTO Accredited", desc: "Nationally recognised qualifications" },
  { icon: "globe-alt" as const, title: "ICDL Certified", desc: "International computer certification" },
  { icon: "clock" as const, title: "Flexible Learning", desc: "Study full-time, part-time or online" },
];

function getIntakeLabel(): string {
  const now = new Date();
  const month = now.getMonth();
  const year = now.getFullYear();
  const quarters = [
    { label: "January", months: [0, 1, 2] },
    { label: "April", months: [3, 4, 5] },
    { label: "July", months: [6, 7, 8] },
    { label: "October", months: [9, 10, 11] },
  ];
  const next = quarters.find((q) => q.months.includes(month));
  if (!next) return `${now.toLocaleString("default", { month: "long" })} ${year} Intake`;
  const isCurrentQuarter = next.months.includes(month);
  return isCurrentQuarter
    ? `${next.label} ${year} Intake — Applications Open`
    : `${next.label} ${year} Intake`;
}

export default function HeroCarousel() {
  const { context, dispatch } = useHeroCarousel(slides.length);
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  const slide = slides[context.current];

  const handlePrev = useCallback(() => dispatch({ type: "PREV" }), [dispatch]);
  const handleNext = useCallback(() => dispatch({ type: "NEXT" }), [dispatch]);
  const handleGoTo = useCallback((index: number) => dispatch({ type: "GO_TO", index }), [dispatch]);
  const handleTogglePause = useCallback(() => {
    dispatch(context.state === "paused" ? { type: "PLAY" } : { type: "PAUSE" });
  }, [dispatch, context.state]);

  // Progress bar animation
  useEffect(() => {
    setProgress(0);
    if (context.state !== "playing") {
      if (progressRef.current) cancelAnimationFrame(progressRef.current);
      return;
    }

    startTimeRef.current = performance.now();
    const duration = 7000;

    const tick = (now: number) => {
      const elapsed = now - startTimeRef.current;
      const pct = Math.min(elapsed / duration, 1);
      setProgress(pct);
      if (pct < 1) progressRef.current = requestAnimationFrame(tick);
    };

    progressRef.current = requestAnimationFrame(tick);
    return () => {
      if (progressRef.current) cancelAnimationFrame(progressRef.current);
    };
  }, [context.state, context.current]);

  // Keyboard navigation
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

  // Touch/swipe support
  const touchStart = useRef<number | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      dispatch({ type: "SWIPE", direction: diff > 0 ? "left" : "right" });
    }
    touchStart.current = null;
  }, [dispatch]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[600px] md:min-h-[680px] flex items-center overflow-hidden bg-[var(--saic-campaign-crimson)]"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured slides"
      tabIndex={0}
      onMouseEnter={() => dispatch({ type: "HOVER_ENTER" })}
      onMouseLeave={() => dispatch({ type: "HOVER_LEAVE" })}
      onFocus={() => dispatch({ type: "FOCUS_ENTER" })}
      onBlur={() => dispatch({ type: "FOCUS_LEAVE" })}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((s, idx) => (
        <HeroSlide key={idx} index={idx} current={context.current} image={s.image} />
      ))}

      {/* Progress bar */}
      {context.state === "playing" && (
        <div className="absolute top-0 left-0 right-0 z-30 h-1 bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-[var(--color-accent)] to-white transition-none"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      )}

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20 md:pt-36 md:pb-24 flex items-center min-h-[600px] md:min-h-[680px]">
        <div className="w-full lg:w-[60%]">
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.12em] text-white"
            key={`tag-${context.current}`}
          >
            {slide.tag}
          </div>

          {slide.tagline && (
            <p
              className="mb-2 text-[11px] sm:text-xs font-medium uppercase tracking-[0.15em] text-white/60"
              key={`tagline-${context.current}`}
            >
              {slide.tagline}
            </p>
          )}

          <h1
            className="mb-4 text-white font-extrabold leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-[600px]"
            key={`title-${context.current}`}
          >
            <span className="animate-fadeInUp" style={{ animationDelay: "0.1s", display: "inline-block" }}>
              {slide.title}
            </span>
            <br />
            <span className="animate-fadeInUp" style={{ animationDelay: "0.2s", display: "inline-block" }}>
              {slide.highlight}
            </span>
          </h1>

          <p className="mb-6 sm:mb-8 max-w-[520px] text-sm sm:text-base lg:text-lg leading-relaxed text-white/90 animate-fadeInUp" style={{ animationDelay: "0.25s" }} key={`desc-${context.current}`}>
            {slide.description}
          </p>

          <div className="w-full max-w-[480px] rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-4 sm:p-5 mb-6 sm:mb-8 animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-bold text-white">{getIntakeLabel()}</p>
                <p className="text-xs text-white/70 mt-0.5">Applications closing soon — apply before places fill</p>
              </div>
              <Button variant="apply" size="sm" href="/apply">
                Apply Online
              </Button>
            </div>
          </div>

          <div className="flex animate-fadeInUp flex-wrap gap-3 sm:gap-4" style={{ animationDelay: "0.4s" }} key={`cta-${context.current}`}>
            <Button variant="primary" size="lg" href={slide.cta.href} className="!bg-white !text-[var(--saic-campaign-crimson)] shadow-lg shadow-black/20 hover:!bg-white/90">
              {slide.cta.text}
            </Button>
            {slide.secondary && (
              <Button
                variant="secondary"
                size="lg"
                href={slide.secondary.href}
                className="!border-white/60 !bg-white/10 !text-white hover:!bg-white/20"
              >
                {slide.secondary.text}
              </Button>
            )}
          </div>

          <div className="mt-6 sm:mt-8 hidden sm:block">
            <HeroBenefitCards cards={benefitCards} />
          </div>
        </div>
      </div>

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
