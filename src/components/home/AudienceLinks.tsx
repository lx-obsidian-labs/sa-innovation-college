import Link from "next/link";
import Container from "@/components/layout/Container";
import Icon from "@/components/ui/Icon";

const audiences = [
  {
    title: "I am a School Leaver",
    description: "Explore courses, entry requirements and how to apply for your first qualification.",
    icon: "academic-cap" as const,
    href: "/courses",
    color: "from-blue-500 to-blue-600",
    bgLight: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    title: "I am a Working Professional",
    description: "Upskill with part-time, online or evening classes while you work.",
    icon: "briefcase" as const,
    href: "/courses",
    color: "from-purple-500 to-purple-600",
    bgLight: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    title: "I am a Parent",
    description: "Find the right programme for your child. View fees, accommodation and student support.",
    icon: "heart" as const,
    href: "/students",
    color: "from-rose-500 to-rose-600",
    bgLight: "bg-rose-50",
    textColor: "text-rose-600",
  },
  {
    title: "I am an Employer",
    description: "BEE learnerships, skills programmes and workforce development for your team.",
    icon: "building-library" as const,
    href: "/contact",
    color: "from-emerald-500 to-emerald-600",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-600",
  },
];

export default function AudienceLinks() {
  return (
    <section className="relative bg-white py-16 md:py-20 overflow-hidden">
      <Container>
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-primary)] mb-2">
            Who are you?
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--color-text-primary)]">
            Find what matters to you
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a) => (
            <Link
              key={a.title}
              href={a.href}
              className="group relative flex flex-col items-center text-center rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-[var(--color-primary)]/30 card-glow"
            >
              <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${a.bgLight} transition-all duration-300 group-hover:scale-110 group-hover:shadow-md`}>
                <Icon name={a.icon} size={6} className={a.textColor} />
              </div>
              <h3 className="mb-2 text-sm font-bold text-[var(--color-gray-900)]">{a.title}</h3>
              <p className="text-xs leading-relaxed text-[var(--color-gray-500)]">{a.description}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-primary)] transition-all duration-200 group-hover:gap-2">
                Explore
                <Icon name="arrow-right" size={3} />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
