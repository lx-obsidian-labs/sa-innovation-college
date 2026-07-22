import Container from "@/components/layout/Container";

export default function CoursesLoading() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="animate-pulse space-y-8">
          <div className="h-4 bg-[var(--color-gray-200)] rounded w-24" />
          <div className="h-10 bg-[var(--color-gray-200)] rounded-lg w-72" />
          <div className="h-5 bg-[var(--color-gray-200)] rounded w-96" />
          <div className="flex gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-8 bg-[var(--color-gray-200)] rounded-full w-28" />
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-2xl bg-white shadow-sm overflow-hidden">
                <div className="h-44 bg-[var(--color-gray-200)]" />
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-[var(--color-gray-200)] rounded w-3/4" />
                  <div className="h-3 bg-[var(--color-gray-200)] rounded w-full" />
                  <div className="h-3 bg-[var(--color-gray-200)] rounded w-2/3" />
                  <div className="flex gap-2">
                    <div className="h-6 bg-[var(--color-gray-200)] rounded w-16" />
                    <div className="h-6 bg-[var(--color-gray-200)] rounded w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
