"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import Icon from "@/components/ui/Icon";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const subject = encodeURIComponent("Newsletter Signup — SA Innovation College");
    const body = encodeURIComponent(
      `Hi SA Innovation College team,\n\nI would like to subscribe to your newsletter.\n\nEmail: ${email}\n\nThank you!`
    );
    window.location.href = `mailto:info@sainnovationcollege.co.za?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section className="py-[var(--section-py)] relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-gradient-subtle opacity-40" aria-hidden />
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 px-4 py-1.5 text-sm font-semibold text-[var(--color-primary)] mb-6">
            <Icon name="envelope" size={4} />
            Stay Updated
          </div>
          <h2 className="text-[var(--fs-2xl)] font-extrabold text-[var(--color-text-primary)] mb-3">
            Get the Latest News & Updates
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-8 max-w-lg mx-auto">
            Be the first to know about new courses, application deadlines, events, and student success stories.
          </p>

          {submitted ? (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-6 text-green-800">
              <Icon name="check-badge" size={6} className="mx-auto mb-2 text-green-600" />
              <p className="font-semibold">Thank you for subscribing!</p>
              <p className="text-sm mt-1">We&apos;ll keep you posted with the latest updates.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 rounded-xl border border-[var(--color-gray-200)] bg-white px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-gray-400)] transition-all duration-200 focus:border-[var(--color-primary)] focus:outline-none focus:ring-3 focus:ring-[var(--color-primary)]/10"
              />
              <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] px-6 py-3 text-sm font-bold text-white shadow-md shadow-[var(--color-primary)]/20 transition-all duration-200 hover:shadow-lg hover:shadow-[var(--color-primary)]/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-[var(--color-gray-500)]">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </Container>
    </section>
  );
}
