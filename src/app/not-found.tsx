import Link from "next/link";
import Container from "@/components/layout/Container";
import Icon from "@/components/ui/Icon";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-b from-white to-[var(--color-gray-50)]">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.03]" aria-hidden />
      <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-primary)]/5 rounded-full blur-3xl" aria-hidden />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[var(--color-accent)]/5 rounded-full blur-3xl" aria-hidden />
      <Container>
        <div className="mx-auto max-w-xl text-center relative z-10">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 shadow-inner">
            <Icon name="exclamation-circle" size={12} className="text-[var(--color-primary)]" />
          </div>
          <h1 className="mb-2 text-[var(--fs-5xl)] font-extrabold gradient-text">404</h1>
          <h2 className="mb-3 text-[var(--fs-2xl)] font-bold text-[var(--color-text-primary)]">
            Page Not Found
          </h2>
          <p className="mb-8 text-lg text-[var(--color-text-secondary)]">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--color-primary-dark)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--color-primary)]/20 active:scale-[0.98] btn-shine"
            >
              <Icon name="arrow-left" size={4} />
              Go Home
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-text-primary)] transition-all duration-300 hover:bg-[var(--color-gray-50)] hover:-translate-y-0.5 hover:shadow-md hover:border-[var(--color-primary)]/30"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
