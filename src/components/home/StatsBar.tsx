import Container from "@/components/layout/Container";

const stats = [
  {
    value: "30+",
    label: "Programmes Offered",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
      </svg>
    ),
  },
  {
    value: "5,000+",
    label: "Students Graduated",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    value: "95%",
    label: "Employment Rate",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    value: "10+",
    label: "Years Experience",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
];

export default function StatsBar() {
  return (
    <section id="stats" className="relative bg-[var(--color-surface)] py-12 md:py-16 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[var(--color-primary)]/5 rounded-full blur-3xl" aria-hidden />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[var(--color-accent)]/5 rounded-full blur-3xl" aria-hidden />
      <Container>
        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4 lg:divide-x lg:divide-[var(--color-gray-200)]">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative flex flex-col items-center rounded-lg border border-[var(--color-gray-200)] bg-[var(--color-surface)] px-4 py-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:z-10 hover:scale-[1.04] hover:border-[var(--color-primary)]/40 hover:shadow-[var(--shadow-lg)]"
            >
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:scale-110">
                {stat.icon}
              </div>

              <span className="animate-fadeInUp text-[var(--fs-3xl)] font-bold text-[var(--color-primary)] leading-none tracking-tight">
                {stat.value}
              </span>

              <span className="mt-2 text-sm text-[var(--color-gray-500)] text-center leading-tight font-medium">
                {stat.label}
              </span>

              <div className="absolute -top-px left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] transition-all duration-300 group-hover:w-3/4" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
