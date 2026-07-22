import Link from "next/link";
import Container from "@/components/layout/Container";
import Icon from "@/components/ui/Icon";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-b from-white to-[var(--color-gray-50)]">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.03]" aria-hidden />
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[var(--color-gray-100)] shadow-inner">
            <Icon name="exclamation-circle" size={12} className="text-[var(--color-gray-400)]" />
          </div>
          <h1 className="mb-2 text-[var(--fs-5xl)] font-extrabold text-[var(--color-primary)]">404</h1>
          <h2 className="mb-3 text-[var(--fs-2xl)] font-bold text-[var(--color-text-primary)]">
            Page Not Found
          </h2>
          <p className="mb-8 text-lg text-[var(--color-text-secondary)]">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--color-primary-dark)] hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Icon name="arrow-left" size={4} />
              Go Home
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-text-primary)] transition-all hover:bg-[var(--color-gray-50)] hover:-translate-y-0.5 hover:shadow-md"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
