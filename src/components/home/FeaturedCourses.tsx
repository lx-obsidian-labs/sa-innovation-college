import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import Container from "@/components/layout/Container";

const courses = [
  {
    title: "Traffic Officer Course",
    nqf: "NQF Level 5",
    duration: "18 months",
    mode: "Full-time",
    category: "Law Enforcement",
    description:
      "National Certificate in Tactical Road Traffic Operations. Gain specialised skills in traffic control, law enforcement, and road safety to serve with professionalism and confidence.",
    href: "/courses/traffic-officer-course",
    popular: true,
    free: false,
    new: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: "FREE Computer Literacy",
    nqf: "NQF Level 1",
    duration: "12 weeks",
    mode: "Part-time",
    category: "Computer & Digital Skills",
    description:
      "Boost your digital skills at no cost. Learn essential computer operations, internet navigation, and basic productivity tools to thrive in the modern workplace.",
    href: "/courses/free-computer-literacy",
    popular: false,
    free: true,
    new: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
  {
    title: "National Diploma: Policing NQF 6",
    nqf: "NQF Level 6",
    duration: "24 months",
    mode: "Full-time / Part-time",
    category: "Policing",
    description:
      "Comprehensive policing qualification covering criminal law, forensic investigation, community safety, and police management. Prepare for a meaningful career in law enforcement.",
    href: "/courses/national-diploma-policing",
    popular: false,
    free: false,
    new: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286z" />
      </svg>
    ),
  },
  {
    title: "Business Management N4-N6",
    nqf: "NQF Level 4",
    duration: "18 months",
    mode: "Full-time / Part-time",
    category: "Management & Entrepreneurship",
    description:
      "Develop core business acumen across management, finance, marketing, and human resources. Build the skills to lead teams and drive organisational success.",
    href: "/courses/business-management-n4-n6",
    popular: false,
    free: false,
    new: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: "CompTIA A+ (PC Engineering)",
    nqf: "NQF Level 5",
    duration: "16 weeks",
    mode: "Online / Part-time",
    category: "Computer & Digital Skills",
    description:
      "Industry-recognised certification in PC hardware, networking, and troubleshooting. Gain the foundational IT skills employers demand in today's digital economy.",
    href: "/courses/comptia-a-plus",
    popular: true,
    free: false,
    new: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
  {
    title: "Table Service Course",
    nqf: "NQF Level 3",
    duration: "8 weeks",
    mode: "Full-time",
    category: "Hospitality",
    description:
      "Professional serving skills and dining etiquette. Master the art of table service, customer relations, and restaurant operations for a career in hospitality.",
    href: "/courses/table-service-course",
    popular: false,
    free: false,
    new: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
];

const categoryTheme: Record<string, { bg: string; iconBg: string; border: string; accent: string }> = {
  "Law Enforcement": { bg: "from-red-50 to-red-50/30", iconBg: "bg-red-100 text-red-600", border: "border-red-200/50", accent: "bg-red-500" },
  "Computer & Digital Skills": { bg: "from-purple-50 to-purple-50/30", iconBg: "bg-purple-100 text-purple-600", border: "border-purple-200/50", accent: "bg-purple-500" },
  "Hospitality": { bg: "from-orange-50 to-orange-50/30", iconBg: "bg-orange-100 text-orange-600", border: "border-orange-200/50", accent: "bg-orange-500" },
  "Policing": { bg: "from-blue-50 to-blue-50/30", iconBg: "bg-blue-100 text-blue-600", border: "border-blue-200/50", accent: "bg-blue-500" },
  "Management & Entrepreneurship": { bg: "from-amber-50 to-amber-50/30", iconBg: "bg-amber-100 text-amber-600", border: "border-amber-200/50", accent: "bg-amber-500" },
};

export default function FeaturedCourses() {
  return (
    <section id="courses" className="relative py-16 md:py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[var(--color-primary)]/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[var(--color-accent)]/[0.03] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-[var(--color-gray-200)] to-transparent" />
      </div>

      <Container>
        <SectionHeader
          eyebrow="Our Programmes"
          title="Find Your Path to Success"
          description="Choose from 30+ accredited programmes designed with industry experts to launch your career."
          className="mb-12"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const theme = categoryTheme[course.category];
            return (
              <div
                key={course.title}
                className="group relative flex flex-col rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
              >
                <div className="relative flex items-start gap-4 p-5 pb-4">
                  <div className={`shrink-0 w-12 h-12 rounded-xl ${theme?.iconBg || "bg-gray-100 text-gray-600"} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
                    {course.icon}
                  </div>

                  <div className="min-w-0 flex-1 pt-0.5">
                    <div className="flex flex-wrap items-center gap-1.5 mb-1">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-gray-400)]">
                        {course.category}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[var(--color-gray-900)] leading-snug transition-colors duration-200 group-hover:text-[var(--color-primary)]">
                      {course.title}
                    </h3>
                  </div>

                  <div className="shrink-0 flex flex-col gap-1">
                    {course.free && (
                      <span className="inline-flex items-center rounded-md bg-emerald-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                        FREE
                      </span>
                    )}
                    {course.popular && (
                      <span className="inline-flex items-center rounded-md bg-[var(--color-accent)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--color-gray-900)]">
                        Popular
                      </span>
                    )}
                    {course.new && !course.popular && (
                      <span className="inline-flex items-center rounded-md bg-[var(--color-primary)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                        New
                      </span>
                    )}
                  </div>
                </div>

                <div className="px-5 pb-3">
                  <p className="text-sm leading-relaxed text-[var(--color-gray-500)] line-clamp-2">
                    {course.description}
                  </p>
                </div>

                <div className="px-5 pb-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 rounded-lg bg-[var(--color-gray-50)] border border-[var(--color-gray-200)] px-2.5 py-1 text-xs font-medium text-[var(--color-gray-600)]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      {course.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-lg bg-[var(--color-gray-50)] border border-[var(--color-gray-200)] px-2.5 py-1 text-xs font-medium text-[var(--color-gray-600)]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                      </svg>
                      {course.nqf}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-lg bg-[var(--color-gray-50)] border border-[var(--color-gray-200)] px-2.5 py-1 text-xs font-medium text-[var(--color-gray-600)]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                      {course.mode}
                    </span>
                  </div>
                </div>

                <div className="mt-auto border-t border-[var(--color-gray-100)]">
                  <a
                    href={course.href}
                    className="flex items-center justify-between px-5 py-3 text-sm font-semibold text-[var(--color-primary)] transition-all duration-200 group/link hover:bg-[var(--color-gray-50)]"
                  >
                    <span>View Course Details</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button variant="accent" size="lg" href="/courses" className="shadow-lg shadow-[var(--color-accent)]/20">
            View All Courses &rarr;
          </Button>
        </div>
      </Container>
    </section>
  );
}
