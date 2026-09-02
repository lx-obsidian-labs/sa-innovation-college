"use client";

import { useCallback, useRef, useEffect } from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import HeroSlide from "./HeroSlide";
import CarouselControls from "./CarouselControls";
import CarouselPagination from "./CarouselPagination";
import { useHeroCarousel } from "./use-hero-carousel";
import type { SlideData } from "./hero-carousel.types";
import { getWhatsAppUrl } from "@/lib/utils";
import ApplicationCountdown from "./ApplicationCountdown";

const slides: SlideData[] = [
  {
    image: "/images/hero_image-final.webp",
    tag: "QCTO Accredited TVET & Skills Training Centre",
    title: "Through Knowledge,",
    highlight: "We Grow Towards Excellence",
    tagline: "Est. 2016 · ICDL South Africa Centre",
    description: "Practical, flexible and industry-aligned learning designed for school leavers, working professionals, and employers. Your future starts here.",
    cta: { text: "Find Your Course", href: "/courses" },
    secondary: { text: "Apply Online", href: "/apply" },
  },
  {
    image: "/images/SA-INNOVATION-COLLEGE3-scaled.jpg",
    tag: "What We Offer",
    title: "Programmes that",
    highlight: "prepare you for success",
    tagline: "QCTO · ICDL · Skills Development",
    description: "From occupational qualifications to international computer certification, explore courses designed for today's competitive job market.",
    cta: { text: "Explore Courses", href: "/courses" },
    secondary: { text: "Speak to Admissions", href: getWhatsAppUrl("+27727733960") },
  },
  {
    image: "/images/SA-INNOVATION-COLLEGE2-scaled.jpg",
    tag: "Flexible Study Options",
    title: "Study your way,",
    highlight: "on your schedule",
    tagline: "Full-Time · Part-Time · Online",
    description: "Choose from Full-Time, Part-Time, Distance/E-Learning, or Saturday & Evening Classes. Industry-experienced facilitators guide you every step.",
    cta: { text: "Start an Application", href: "/apply" },
    secondary: { text: "Compare Courses", href: "/courses" },
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
      className="relative min-h-[480px] lg:min-h-[560px] flex items-center overflow-hidden bg-[var(--saic-campaign-crimson)]"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured slides"
      tabIndex={0}
      onMouseEnter={() => dispatch({ type: "HOVER_ENTER" })}
      onMouseLeave={() => dispatch({ type: "HOVER_LEAVE" })}
      onFocus={() => dispatch({ type: "FOCUS_ENTER" })}
      onBlur={() => dispatch({ type: "FOCUS_LEAVE" })}
    >
      {slides.map((_, idx) => (
        <HeroSlide key={idx} index={idx} current={context.current} />
      ))}

      <Container className="relative z-10 w-full">
        <div className="mx-auto max-w-5xl rounded-2xl bg-[var(--saic-navy-950)]/20 px-4 py-6 text-center backdrop-blur-[2px] sm:px-8 lg:mr-[35%] lg:max-w-3xl lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/60 bg-black/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-sm backdrop-blur-sm"
            key={`tag-${context.current}`}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            {slide.tag}
          </div>

          <h1
            className="mb-3 text-[var(--fs-4xl)] font-extrabold leading-[1.05] tracking-tight text-white lg:text-[3.5rem]"
            key={`title-${context.current}`}
          >
            <span className="animate-fadeInUp" style={{ animationDelay: "0.1s", display: "inline-block" }}>
              {slide.title}
            </span>
            <br />
            <span className="text-white animate-fadeInUp" style={{ animationDelay: "0.2s", display: "inline-block" }}>
              {slide.highlight}
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/90 animate-fadeInUp" style={{ animationDelay: "0.25s" }} key={`desc-${context.current}`}>
            {slide.description}
          </p>

          <ApplicationCountdown />

          <div className="flex animate-fadeInUp flex-wrap justify-center gap-4 mb-8" style={{ animationDelay: "0.4s" }} key={`cta-${context.current}`}>
            <Button variant="primary" size="lg" href={slide.cta.href} className="!bg-white !text-[var(--saic-campaign-crimson)] shadow-lg shadow-black/20 hover:!bg-white/90">
              {slide.cta.text}
            </Button>
            {slide.secondary && (
              <Button
                variant="secondary"
                size="lg"
                href={slide.secondary.href}
                className="!border-white/70 !bg-white/10 !text-white hover:!bg-white/20"
              >
                {slide.secondary.text}
              </Button>
            )}
          </div>

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
