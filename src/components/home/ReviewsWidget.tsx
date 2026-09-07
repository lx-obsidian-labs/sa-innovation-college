"use client";

import { useState, useEffect, useCallback } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import Container from "@/components/layout/Container";
import Icon from "@/components/ui/Icon";

const reviews = [
  {
    name: "Thabo M.",
    source: "Google",
    rating: 5,
    text: "SA Innovation College gave me the skills to start my own business. The practical training and supportive lecturers made all the difference. Highly recommend!",
    date: "2 weeks ago",
  },
  {
    name: "Lerato K.",
    source: "Google",
    rating: 5,
    text: "From basic computer skills to a full-time office job in 6 months. The lecturers truly care about your success. Amazing experience!",
    date: "1 month ago",
  },
  {
    name: "Sipho N.",
    source: "Google",
    rating: 5,
    text: "Best decision I ever made. The Traffic Officer programme was professional, practical, and life-changing. Thank you SA Innovation!",
    date: "3 weeks ago",
  },
  {
    name: "Amahle D.",
    source: "Google",
    rating: 5,
    text: "Flexible study options that fit around my work schedule. The online learning platform is excellent and the support is always there when you need it.",
    date: "2 months ago",
  },
  {
    name: "Jabulani T.",
    source: "Google",
    rating: 5,
    text: "The Entrepreneurship course gave me everything I needed to launch my catering business. From business planning to financial management, it was all covered.",
    date: "1 month ago",
  },
  {
    name: "Naledi M.",
    source: "Google",
    rating: 5,
    text: "Friendly staff, clean facilities, and courses that actually prepare you for the workplace. I got my qualification and a job within 3 months of graduating.",
    date: "6 weeks ago",
  },
];

export default function ReviewsWidget() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((p) => (p + 1) % reviews.length), []);
  const goTo = useCallback((i: number) => setCurrent(i), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next, paused]);

  const visible = (i: number) => (i === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0");

  return (
    <section className="relative bg-[var(--color-gray-50)] py-20 md:py-28 overflow-hidden">
      <Container>
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Icon key={i} name="star-solid" size={5} className="text-[var(--color-accent)]" />
              ))}
            </div>
            <span className="text-sm font-bold text-[var(--color-text-primary)]">4.8 / 5</span>
            <span className="text-sm text-[var(--color-text-muted)]">on Google</span>
          </div>
          <SectionHeader
            eyebrow="Student Reviews"
            title="What Our Students Say"
            description="Real reviews from real students. See why thousands choose SA Innovation College."
          />
        </div>

        <div className="relative mx-auto max-w-2xl min-h-[280px]">
          {reviews.map((review, idx) => (
            <div
              key={review.name}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${visible(idx)}`}
              aria-hidden={idx !== current}
            >
              <div className="rounded-2xl border border-[var(--color-border)] bg-white p-8 shadow-sm text-center">
                <div className="flex items-center justify-center gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Icon key={i} name="star-solid" size={4} className="text-[var(--color-accent)]" />
                  ))}
                </div>
                <blockquote className="mb-6 text-base leading-relaxed text-[var(--color-gray-700)] max-w-lg mx-auto">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <div className="flex items-center justify-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-xs font-bold text-white">
                    {review.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="text-left">
                    <strong className="block text-sm font-bold text-[var(--color-gray-900)]">{review.name}</strong>
                    <span className="flex items-center gap-1 text-xs text-[var(--color-gray-500)]">
                      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                      Google Review
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={() => setPaused((p) => !p)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-gray-200)] bg-white text-[var(--color-gray-500)] transition-colors hover:border-[var(--color-gray-300)] hover:text-[var(--color-gray-700)]"
            aria-label={paused ? "Resume autoplay" : "Pause autoplay"}
          >
            <Icon name={paused ? "play" : "pause"} size={4} />
          </button>
          <div className="flex gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${idx === current ? "w-6 bg-[var(--color-primary)]" : "w-2 bg-[var(--color-gray-300)] hover:bg-[var(--color-gray-400)]"}`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
