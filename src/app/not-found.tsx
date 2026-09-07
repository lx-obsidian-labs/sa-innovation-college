import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center bg-[var(--color-canvas)]">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <div className="mb-6 text-[80px] font-black leading-none text-[var(--color-primary)]/10">
            404
          </div>
          <h1 className="mb-3 text-3xl font-extrabold text-[var(--color-text-primary)]">
            Page Not Found
          </h1>
          <p className="mb-8 text-[var(--color-text-secondary)] leading-relaxed">
            The page you are looking for does not exist or has been moved.
            Let&apos;s get you back on track.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg" href="/">
              Back to Home
            </Button>
            <Button variant="secondary" size="lg" href="/courses">
              Browse Courses
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/apply" className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] font-medium transition-colors">
              Apply Online
            </Link>
            <Link href="/contact" className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] font-medium transition-colors">
              Contact Us
            </Link>
            <Link href="/students" className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] font-medium transition-colors">
              Student Resources
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
