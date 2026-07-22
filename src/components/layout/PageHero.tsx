import Container from "@/components/layout/Container";
import Icon from "@/components/ui/Icon";

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export default function PageHero({ title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-dark)] to-[#0B1F3F] pt-24 pb-14 md:pt-32 md:pb-20">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />
      <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-[var(--color-accent)]/10 blur-3xl animate-float" aria-hidden />
      <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-[var(--color-primary-light)]/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} aria-hidden />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent" aria-hidden />

      <Container className="relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-6 flex items-center gap-2 text-sm text-white/60" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-2">
                {i > 0 && (
                  <Icon name="chevron-right" size={3} />
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
