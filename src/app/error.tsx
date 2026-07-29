"use client";

import Container from "@/components/layout/Container";
import Icon from "@/components/ui/Icon";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-[var(--color-gray-50)]">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-50 shadow-inner">
            <Icon name="exclamation-triangle" size={12} className="text-red-500" />
          </div>
          <h1 className="mb-3 text-[var(--fs-3xl)] font-bold text-[var(--color-text-primary)]">
            Something went wrong
          </h1>
          <p className="mb-8 text-[var(--color-text-secondary)]">
            An unexpected error occurred. Please try again or contact us for assistance.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--color-primary-dark)] hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Icon name="arrow-path" size={4} />
              Try Again
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-text-primary)] transition-all hover:bg-[var(--color-gray-50)]"
            >
              Go Home
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
