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
  },
];

const categoryColors: Record<string, string> = {
  "Law Enforcement": "bg-red-100 text-red-700",
  "Computer & Digital Skills": "bg-purple-100 text-purple-700",
  "Hospitality": "bg-orange-100 text-orange-700",
  "Business & Administration": "bg-emerald-100 text-emerald-700",
  "Management & Entrepreneurship": "bg-amber-100 text-amber-700",
  "Policing": "bg-blue-100 text-blue-700",
};

const categoryGradients: Record<string, string> = {
  "Law Enforcement": "from-red-500 to-red-400",
  "Computer & Digital Skills": "from-purple-500 to-purple-400",
  "Hospitality": "from-orange-500 to-orange-400",
  "Business & Administration": "from-emerald-500 to-emerald-400",
  "Management & Entrepreneurship": "from-amber-500 to-amber-400",
  "Policing": "from-blue-500 to-blue-400",
};

export default function FeaturedCourses() {
  return (
    <section id="courses" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-primary) 1px, transparent 0)`, backgroundSize: "30px 30px" }} aria-hidden />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl" aria-hidden />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[var(--color-accent)]/5 rounded-full blur-3xl" aria-hidden />

      <Container>
        <SectionHeader
          eyebrow="Our Programmes"
          title="Find Your Path to Success"
          description="Choose from 30+ accredited programmes designed with industry experts to launch your career."
          className="mb-12"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="group relative flex flex-col rounded-2xl border border-[var(--color-gray-200)] bg-[var(--color-surface-raised)] shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
            >
              <div className={`h-1 w-full bg-gradient-to-r ${categoryGradients[course.category] || "from-gray-400 to-gray-300"}`} />

              <div className="relative flex flex-1 flex-col p-5 pt-12">
                <span
                  className={`absolute top-3 left-3 inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                    categoryColors[course.category] || "bg-gray-100 text-gray-600"
                  }`}
                >
                  {course.category}
                </span>

                {course.free && (
                  <span className="absolute top-3 right-3 z-10 inline-flex items-center rounded-full bg-emerald-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                    FREE
                  </span>
                )}
                {course.popular && (
                  <span className="absolute top-3 right-3 z-10 inline-flex items-center rounded-full bg-[var(--color-accent)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--color-gray-900)] shadow-md">
                    Popular
                  </span>
                )}
                {course.new && !course.popular && (
                  <span className="absolute top-3 right-3 z-10 inline-flex items-center rounded-full bg-[var(--color-accent)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--color-gray-900)] shadow-md">
                    New
                  </span>
                )}

                <h3 className="mb-3 text-lg font-bold text-[var(--color-gray-900)] leading-snug transition-colors duration-200 group-hover:text-[var(--color-primary)]">
                  {course.title}
                </h3>

                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-md bg-[var(--color-primary)]/10 px-2.5 py-1 text-xs font-medium text-[var(--color-primary)]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3.5 w-3.5" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    {course.duration} &middot; {course.mode}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-[var(--color-accent)]/10 px-2.5 py-1 text-xs font-medium text-[var(--color-gray-700)]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3.5 w-3.5" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                    </svg>
                    {course.nqf}
                  </span>
                </div>

                <p className="mb-4 flex-grow text-sm leading-relaxed text-[var(--color-gray-500)] line-clamp-2">
                  {course.description}
                </p>

                <a
                  href={course.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)] transition-all duration-200 group-hover:gap-3"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 transition-all duration-200 group-hover:translate-x-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
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
