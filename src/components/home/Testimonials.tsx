"use client";

import { useState, useEffect, useCallback } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import Container from "@/components/layout/Container";
import Icon from "@/components/ui/Icon";

const testimonials = [
  {
    name: "Thabo M.",
    programme: "Entrepreneurship Graduate",
    quote:
      "SA Innovation gave me the skills and confidence to start my own business. The practical approach made all the difference.",
    rating: 5,
  },
  {
    name: "Lerato K.",
    programme: "Computer Literacy Graduate",
    quote:
      "The lecturers truly care about your success. I went from basic computer skills to a full-time office job in 6 months.",
    rating: 5,
  },
  {
    name: "Sipho N.",
    programme: "Traffic Officer Graduate",
    quote:
      "I chose SA Innovation for the Traffic Officer programme and it was the best decision I ever made. Professional, practical, and life-changing.",
    rating: 5,
  },
];

const avatarGradients = [
  "from-[var(--color-primary)] to-[var(--color-primary-dark)]",
  "from-[var(--saic-navy-700)] to-[var(--saic-navy-950)]",
  "from-[var(--saic-navy-700)] to-[var(--saic-campaign-crimson)]",
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((p) => (p + 1) % testimonials.length), []);
  const goTo = useCallback((i: number) => setCurrent(i), []);
  const togglePause = useCallback(() => setPaused((p) => !p), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next, paused]);

  const visible = (i: number) => (i === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0");

  return (
    <section id="testimonials" className="relative bg-white py-20 md:py-28 overflow-hidden">
      <Container className="relative z-10">
        <SectionHeader
          eyebrow="Testimonials"
          title="What Our Students Say"
          description="Hear from our graduates about how SA Innovation College transformed their lives."
          className="mb-12"
        />

        <div className="relative mx-auto max-w-3xl min-h-[320px]">
          {testimonials.map((t, idx) => {
            const initials = t.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase();

            return (
              <div
                key={t.name}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${visible(idx)}`}
                aria-hidden={idx !== current}
              >
                <div className="premium-card relative flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-gray-50)] p-8 md:p-10 shadow-sm text-center items-center">
                  <div className="mb-4 flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Icon key={i} name="star-solid" size={4} className="text-[var(--color-accent)]" />
                    ))}
                  </div>

                  <blockquote className="relative mb-6 text-lg md:text-xl leading-relaxed text-[var(--color-gray-700)] max-w-xl">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${avatarGradients[idx]} text-sm font-bold text-white shadow-sm ring-3 ring-white mb-3`}>
                    {initials}
                  </div>
                  <strong className="block text-sm font-bold text-[var(--color-gray-900)]">{t.name}</strong>
                  <span className="text-xs text-[var(--color-gray-400)]">{t.programme}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={togglePause}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-gray-200)] bg-white text-[var(--color-gray-500)] transition-colors hover:border-[var(--color-gray-300)] hover:text-[var(--color-gray-700)]"
            aria-label={paused ? "Resume autoplay" : "Pause autoplay"}
          >
            <Icon name={paused ? "play" : "pause"} size={4} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${idx === current ? "w-6 bg-[var(--color-primary)]" : "w-2 bg-[var(--color-gray-300)] hover:bg-[var(--color-gray-400)]"}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
