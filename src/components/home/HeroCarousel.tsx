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

const slides: SlideData[] = [
  {
    image: "/images/graduate_solid_red.webp",
    tag: "QCTO Accredited TVET & Skills Training Centre",
    title: "Through Knowledge,",
    highlight: "We Grow Towards Excellence",
    tagline: "Est. 2016 · ICDL South Africa Centre",
    description: "Practical, flexible and industry-aligned learning designed for school leavers, working professionals, and employers.",
    cta: { text: "Find Your Course", href: "/courses" },
    secondary: { text: "Apply Online", href: "/apply" },
  },
  {
    image: "/images/graduate_hero_banner.jpg",
    tag: "What We Offer",
    title: "Programmes that",
    highlight: "prepare you for success",
    tagline: "QCTO · ICDL · Skills Development",
    description: "From occupational qualifications to international computer certification, explore courses for today's competitive job market.",
    cta: { text: "Explore Courses", href: "/courses" },
    secondary: { text: "Speak to Admissions", href: getWhatsAppUrl("+27727733960") },
  },
  {
    image: "/images/graduate_portrait_hero.jpg",
    tag: "Flexible Study Options",
    title: "Study your way,",
    highlight: "on your schedule",
    tagline: "Full-Time · Part-Time · Online",
    description: "Choose from Full-Time, Part-Time, Distance/E-Learning, or Saturday & Evening Classes.",
    cta: { text: "Start an Application", href: "/apply" },
    secondary: { text: "Compare Courses", href: "/courses" },
  },
  {
    image: "/images/graduation_hero_banner_1.jpg",
    tag: "Your Future Starts Here",
    title: "Start your journey,",
    highlight: "today",
    tagline: "Join thousands of learners",
    description: "Education is more than a qualification — it's about unlocking potential and creating opportunities. Register now.",
    cta: { text: "Apply Online Now", href: "/apply" },
    secondary: { text: "Contact Admissions", href: "/contact" },
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
      className="relative min-h-[680px] flex items-center overflow-hidden bg-[#B91C1C]"
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
        <HeroSlide key={idx} index={idx} current={context.current} image={s.image} />
      ))}

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-24 flex items-center min-h-[680px]">
        <div className="w-full lg:w-[60%]">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white"
            key={`tag-${context.current}`}
          >
            {slide.tag}
          </div>

          <h1
            className="mb-4 text-white font-extrabold leading-[0.95] tracking-tight text-4xl md:text-5xl lg:text-6xl max-w-[600px]"
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

          <p className="mb-8 max-w-[520px] text-base lg:text-lg leading-relaxed text-white/90 animate-fadeInUp" style={{ animationDelay: "0.25s" }} key={`desc-${context.current}`}>
            {slide.description}
          </p>

          <div className="w-full max-w-[480px] rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-5 mb-8 animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-bold text-white">September 2026 Intake</p>
                <p className="text-xs text-white/70 mt-0.5">Applications closing soon — apply before places fill</p>
              </div>
              <Button variant="apply" size="sm" href="/apply">
                Apply Online
              </Button>
            </div>
          </div>

          <div className="flex animate-fadeInUp flex-wrap gap-4" style={{ animationDelay: "0.4s" }} key={`cta-${context.current}`}>
            <Button variant="primary" size="lg" href={slide.cta.href} className="!bg-white !text-[#B91C1C] shadow-lg shadow-black/20 hover:!bg-white/90">
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
