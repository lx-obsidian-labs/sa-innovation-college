import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "News & Updates | SA Innovation College",
  description:
    "Stay informed with the latest news, programme announcements, student success stories, and industry partnerships from SA Innovation College.",
};

const articles = [
  {
    date: "Jan 15, 2026",
    title: "New Intake Open for 2026",
    excerpt:
      "Applications are now open for our January 2026 intake across all programmes. Apply early to secure your spot.",
    href: "/apply",
    img: "/images/blogs01.jpg",
  },
  {
    date: "Dec 10, 2025",
    title: "Computer Literacy Now Free",
    excerpt:
      "SA Innovation College launches free basic computer literacy programme to empower our community with essential digital skills.",
    href: "/courses/free-computer-literacy",
    img: "/images/SA-INNOVATION-COLLEGE3-scaled.jpg",
  },
  {
    date: "Nov 28, 2025",
    title: "Traffic Officer Programme Update",
    excerpt:
      "Enhanced curriculum and new industry partnerships for our flagship Traffic Officer programme.",
    href: "/courses/traffic-officer-course",
    img: "/images/002.jpg",
  },
  {
    date: "Oct 15, 2025",
    title: "New Partnership with MICT SETA",
    excerpt:
      "SA Innovation College partners with MICT SETA to offer accredited ICT qualifications.",
    href: "/courses",
    img: "/images/SA-INNOVATION-COLLEGE2-scaled.jpg",
  },
  {
    date: "Sep 20, 2025",
    title: "Student Success: From Student to Employer",
    excerpt:
      "Read how one SA Innovation graduate went from learner to business owner.",
    href: "/students",
    img: "/images/001.jpg",
  },
  {
    date: "Aug 5, 2025",
    title: "Campus Expansion Announcement",
    excerpt:
      "SA Innovation College announces facility upgrades and expanded classroom capacity.",
    href: "/contact",
    img: "/images/hero-horizontal.jpg",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News & Updates"
        description="Stay informed with the latest from SA Innovation College"
      />

      <section className="py-[var(--section-py)] bg-gradient-to-b from-white to-[var(--color-gray-50)] relative overflow-hidden">
        <div className="floating-blob" style={{ width: 400, height: 400, top: "-10%", right: "-5%", opacity: 0.04 }} aria-hidden />
        <div className="floating-blob" style={{ width: 300, height: 300, bottom: "10%", left: "-8%", opacity: 0.03, animationDelay: "3s" }} aria-hidden />
        <Container>
          <SectionHeader
            eyebrow="Latest News"
            title="What's Happening at SA Innovation College"
            description="Stay up to date with programme launches, partnerships, student achievements, and college announcements."
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <div
                key={article.title}
                className="group relative flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)] overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.img}
                    alt={article.title}
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 inline-flex items-center rounded-md bg-[var(--color-primary)] px-3 py-1.5 text-xs font-semibold text-white shadow-md">
                    {article.date}
                  </div>
                </div>
                <div className="flex flex-col p-5 flex-1">
                  <h3 className="mb-2 text-lg font-bold text-[var(--color-text-primary)] leading-snug transition-colors duration-200 group-hover:text-[var(--color-primary)]">
                    {article.title}
                  </h3>
                  <p className="mb-4 flex-grow text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {article.excerpt}
                  </p>
                  <a
                    href={article.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)] transition-all duration-200 group-hover:gap-2.5"
                  >
                    Read More
                    <Icon name="arrow-right" size={4} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-sm text-[var(--color-text-secondary)]">
            <span className="rounded-lg border border-[var(--color-border)] bg-[var(--color-primary)] px-3 py-1.5 font-semibold text-white shadow-sm">
              1
            </span>
            <span className="px-3 py-1.5">Page 1 of 1</span>
          </div>
        </Container>
      </section>
    </>
  );
}
