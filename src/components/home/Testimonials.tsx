import SectionHeader from "@/components/ui/SectionHeader";
import Container from "@/components/layout/Container";

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
  "from-[var(--color-accent)] to-amber-600",
  "from-emerald-500 to-teal-600",
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-[var(--color-gray-50)] py-16 md:py-24 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-primary) 1px, transparent 0)`,
          backgroundSize: "30px 30px",
        }}
        aria-hidden
      />

      <Container className="relative z-10">
        <SectionHeader
          eyebrow="Testimonials"
          title="What Our Students Say"
          description="Hear from our graduates about how SA Innovation College transformed their lives."
          className="mb-12"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => {
            const initials = t.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase();

            return (
              <div
                key={t.name}
                className="group relative flex flex-col rounded-xl border border-[var(--color-gray-200)] bg-[var(--color-surface-raised)] p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
              >
                <div className="absolute top-3 right-4 select-none text-6xl font-serif leading-none text-[var(--color-primary)]/10" aria-hidden>
                  &ldquo;
                </div>

                <div className="mb-4 flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5 text-[var(--color-accent)] animate-scaleIn"
                      style={{ animationDelay: `${i * 100}ms` }}
                      aria-hidden
                    >
                      <path fillRule="evenodd" d="M10.868 2.884c-.321-1.011-1.416-1.011-1.736 0l-1.83 5.696-5.778.444c-1.072.082-1.5 1.335-.738 2.092L6.596 14.91l-1.082 5.702c-.219 1.155 1.026 2.039 2.004 1.356L10 17.736l3.482 2.232c.978.683 2.223-.201 2.004-1.356l-1.082-5.702 4.076-3.794c.762-.757.334-2.01-.738-2.092l-5.778-.444-1.83-5.696Z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>

                <blockquote className="relative mb-5 flex-grow text-sm leading-relaxed text-[var(--color-gray-500)] italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 border-t border-[var(--color-gray-100)] pt-4">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${avatarGradients[idx]} text-sm font-bold text-white shadow-sm`}>
                    {initials}
                  </div>
                  <div>
                    <strong className="block text-sm font-bold text-[var(--color-gray-900)]">
                      {t.name}
                    </strong>
                    <span className="text-xs text-[var(--color-gray-400)]">{t.programme}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
