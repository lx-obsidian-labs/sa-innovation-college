import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import Container from "@/components/layout/Container";

const newsArticles = [
  {
    date: "Jan 15, 2026",
    title: "New Intake Open for 2026",
    excerpt:
      "Applications are now open for our January 2026 intake across all programmes.",
    href: "/news/2026-intake-applications-open",
  },
  {
    date: "Dec 1, 2025",
    title: "Computer Literacy Now Free",
    excerpt:
      "SA Innovation College launches free basic computer literacy programme to empower our community.",
    href: "/news/free-computer-literacy-launch",
  },
  {
    date: "Nov 10, 2025",
    title: "Traffic Officer Programme Update",
    excerpt:
      "Enhanced curriculum and new partnerships for our flagship Traffic Officer programme.",
    href: "/news/traffic-officer-programme-update",
  },
];

function parseDate(dateStr: string) {
  const parts = dateStr.split(" ");
  return { month: parts[0], day: parts[1].replace(",", "") };
}

export default function NewsPreview() {
  return (
    <section id="news" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-[var(--color-primary)]/5 rounded-full blur-3xl" aria-hidden />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[var(--color-accent)]/5 rounded-full blur-3xl" aria-hidden />
      <Container>
        <SectionHeader
          eyebrow="Latest News & Updates"
          title="Stay Informed"
          description="Read about our latest programmes, student success stories, and industry partnerships."
          className="mb-12"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {newsArticles.map((article) => {
            const { month, day } = parseDate(article.date);
            return (
              <div
                key={article.title}
                className="group relative flex flex-col rounded-xl border border-[var(--color-gray-200)] bg-[var(--color-surface-raised)] shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)] overflow-hidden"
              >
                <div className="relative h-40 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-primary)]/5 flex items-center justify-center overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="h-16 w-16 text-[var(--color-primary)]/15" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                  </svg>
                  <div className="absolute top-3 left-3 flex flex-col items-center rounded-lg bg-white px-2.5 py-1.5 shadow-md">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-gray-400)]">{month}</span>
                    <span className="text-lg font-bold leading-none text-[var(--color-gray-900)]">{day}</span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-2 text-lg font-bold text-[var(--color-gray-900)] leading-snug transition-colors duration-200 group-hover:text-[var(--color-primary)]">
                    {article.title}
                  </h3>

                  <p className="mb-4 flex-grow text-sm leading-relaxed text-[var(--color-gray-500)]">
                    {article.excerpt}
                  </p>

                  <a
                    href={article.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)] transition-all duration-200 group-hover:gap-3"
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 transition-all duration-200 group-hover:translate-x-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button variant="primary" size="lg" href="/news">
            View All News
          </Button>
        </div>
      </Container>
    </section>
  );
}
