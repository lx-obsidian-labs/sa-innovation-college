import SectionHeader from "@/components/ui/SectionHeader";
import Container from "@/components/layout/Container";
import { StaggerReveal } from "@/components/ui/ScrollReveal";
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
  "from-[var(--color-accent)] to-amber-600",
  "from-emerald-500 to-teal-600",
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-[var(--color-gray-50)] py-16 md:py-24 overflow-hidden">
      <div className="bg-mesh-gradient absolute inset-0" aria-hidden />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-primary) 1px, transparent 0)`,
          backgroundSize: "30px 30px",
        }}
        aria-hidden
      />
      <div className="floating-blob" style={{ width: 350, height: 350, top: "10%", left: "-5%", opacity: 0.05 }} aria-hidden />
      <div className="floating-blob" style={{ width: 250, height: 250, bottom: "5%", right: "-3%", opacity: 0.04, animationDelay: "3s" }} aria-hidden />

      <Container className="relative z-10">
        <SectionHeader
          eyebrow="Testimonials"
          title="What Our Students Say"
          description="Hear from our graduates about how SA Innovation College transformed their lives."
          className="mb-12"
        />

        <StaggerReveal className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => {
            const initials = t.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase();

            return (
              <div
                key={t.name}
                className="group relative flex flex-col rounded-xl border border-[var(--color-gray-200)] bg-[var(--color-surface-raised)] p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)]"
              >
                <div className="absolute top-3 right-4 select-none text-6xl font-serif leading-none text-[var(--color-primary)]/10" aria-hidden>
                  &ldquo;
                </div>

                <div className="mb-4 flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Icon key={i} name="star-solid" size={5} className="text-[var(--color-accent)]" />
                  ))}
                </div>

                <blockquote className="relative mb-5 flex-grow text-sm leading-relaxed text-[var(--color-gray-500)] italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 border-t border-[var(--color-gray-100)] pt-4">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${avatarGradients[idx]} text-sm font-bold text-white shadow-sm ring-2 ring-white`}>
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
        </StaggerReveal>
      </Container>
    </section>
  );
}
