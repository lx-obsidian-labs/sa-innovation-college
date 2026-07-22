import Container from "@/components/layout/Container";

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export default function PageHero({ title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] pt-24 pb-12 md:pt-32 md:pb-16">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />
      <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-[var(--color-accent)]/10 blur-3xl" aria-hidden />
      <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-[var(--color-primary-light)]/10 blur-3xl" aria-hidden />

      <Container className="relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-6 flex items-center gap-2 text-sm text-white/60" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-2">
                {i > 0 && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3 w-3" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                )}
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-white/80" aria-current="page">{crumb.label}</span>
                ) : (
                  <a href={crumb.href} className="transition-colors hover:text-white">{crumb.label}</a>
                )}
              </span>
            ))}
          </nav>
        )}

        <h1 className="text-[var(--fs-4xl)] font-extrabold leading-[1.1] tracking-tight text-white">
          {title}
        </h1>

        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
