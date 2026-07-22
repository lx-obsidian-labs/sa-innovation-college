import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import Container from "@/components/layout/Container";
import { StaggerReveal } from "@/components/ui/ScrollReveal";
import Icon from "@/components/ui/Icon";

const courses = [
  {
    title: "Traffic Officer Course",
    nqf: "NQF Level 5",
    duration: "18 months",
    mode: "Full-time",
    category: "Law Enforcement",
    description:
      "National Certificate in Tactical Road Traffic Operations. Gain specialised skills in traffic control, law enforcement, and road safety.",
    href: "/courses/traffic-officer-course",
    popular: true,
    free: false,
    new: false,
    image: "/images/hero-horizontal.jpg",
    gradient: "from-red-900/80 via-red-800/60 to-transparent",
  },
  {
    title: "FREE Computer Literacy",
    nqf: "NQF Level 1",
    duration: "12 weeks",
    mode: "Part-time",
    category: "Computer & Digital Skills",
    description:
      "Boost your digital skills at no cost. Learn essential computer operations, internet navigation, and basic productivity tools.",
    href: "/courses/free-computer-literacy",
    popular: false,
    free: true,
    new: false,
    image: "/images/001.jpg",
    gradient: "from-purple-900/80 via-purple-800/60 to-transparent",
  },
  {
    title: "National Diploma: Policing NQF 6",
    nqf: "NQF Level 6",
    duration: "24 months",
    mode: "Full-time / Part-time",
    category: "Policing",
    description:
      "Comprehensive policing qualification covering criminal law, forensic investigation, community safety, and police management.",
    href: "/courses/national-diploma-policing",
    popular: false,
    free: false,
    new: true,
    image: "/images/SA-INNOVATION-COLLEGE3-scaled.jpg",
    gradient: "from-blue-900/80 via-blue-800/60 to-transparent",
  },
  {
    title: "Business Management N4-N6",
    nqf: "NQF Level 4",
    duration: "18 months",
    mode: "Full-time / Part-time",
    category: "Management & Entrepreneurship",
    description:
      "Develop core business acumen across management, finance, marketing, and human resources for organisational success.",
    href: "/courses/business-management-n4-n6",
    popular: false,
    free: false,
    new: false,
    image: "/images/SA-INNOVATION-COLLEGE-2-scaled.webp",
    gradient: "from-amber-900/80 via-amber-800/60 to-transparent",
  },
  {
    title: "CompTIA A+ (PC Engineering)",
    nqf: "NQF Level 5",
    duration: "16 weeks",
    mode: "Online / Part-time",
    category: "Computer & Digital Skills",
    description:
      "Industry-recognised certification in PC hardware, networking, and troubleshooting for today's digital economy.",
    href: "/courses/comptia-a-plus",
    popular: true,
    free: false,
    new: false,
    image: "/images/002.jpg",
    gradient: "from-purple-900/80 via-purple-800/60 to-transparent",
  },
  {
    title: "Table Service Course",
    nqf: "NQF Level 3",
    duration: "8 weeks",
    mode: "Full-time",
    category: "Hospitality",
    description:
      "Professional serving skills and dining etiquette for a career in hospitality.",
    href: "/courses/table-service-course",
    popular: false,
    free: false,
    new: false,
    image: "/images/Intro-Home-page-new.png",
    gradient: "from-orange-900/80 via-orange-800/60 to-transparent",
  },
];

const categoryThemes: Record<string, { badge: string; tag: string; accent: string }> = {
  "Law Enforcement": { badge: "bg-red-500", tag: "bg-red-100 text-red-700", accent: "text-red-600" },
  "Computer & Digital Skills": { badge: "bg-purple-500", tag: "bg-purple-100 text-purple-700", accent: "text-purple-600" },
  "Hospitality": { badge: "bg-orange-500", tag: "bg-orange-100 text-orange-700", accent: "text-orange-600" },
  "Policing": { badge: "bg-blue-500", tag: "bg-blue-100 text-blue-700", accent: "text-blue-600" },
  "Management & Entrepreneurship": { badge: "bg-amber-500", tag: "bg-amber-100 text-amber-700", accent: "text-amber-600" },
};

export default function FeaturedCourses() {
  return (
    <section id="courses" className="relative py-16 md:py-24 overflow-hidden bg-[var(--color-gray-50)]">
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" aria-hidden />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[var(--color-primary)]/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[var(--color-accent)]/[0.03] rounded-full blur-3xl" />
      </div>

      <Container>
        <SectionHeader
          eyebrow="Our Programmes"
          title="Find Your Path to Success"
          description="Choose from 30+ accredited programmes designed with industry experts to launch your career."
          className="mb-12"
        />

        <StaggerReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const theme = categoryThemes[course.category];
            return (
              <a
                key={course.title}
                href={course.href}
                className="group relative flex flex-col rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl overflow-hidden before:absolute before:inset-0 before:rounded-2xl before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 before:pointer-events-none before:bg-gradient-to-br before:from-[var(--color-primary)]/[0.04] before:to-transparent"
                style={{ perspective: "800px" }}
              >
                <div className="relative h-48 overflow-hidden bg-[var(--color-gray-200)]">
                  <img
                    src={course.image}
                    alt=""
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${course.gradient}`} />

                  <span className={`absolute top-3 left-3 inline-flex items-center rounded-md ${theme?.badge || "bg-gray-500"} px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg`}>
                    {course.category}
                  </span>

                  <div className="absolute top-3 right-3 flex flex-col gap-1.5">
                    {course.free && (
                      <span className="inline-flex items-center rounded-md bg-emerald-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                        FREE
                      </span>
                    )}
                    {course.popular && (
                      <span className="inline-flex items-center rounded-md bg-[var(--color-accent)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--color-gray-900)] shadow-lg">
                        Popular
                      </span>
                    )}
                    {course.new && !course.popular && (
                      <span className="inline-flex items-center rounded-md bg-[var(--color-primary)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                        New
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-lg font-bold text-white leading-snug drop-shadow-sm">
                      {course.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm leading-relaxed text-[var(--color-gray-500)] line-clamp-2 mb-4">
                    {course.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="inline-flex items-center gap-1 rounded-lg bg-[var(--color-gray-50)] border border-[var(--color-gray-200)] px-2 py-1 text-[11px] font-medium text-[var(--color-gray-600)]">
                      <Icon name="clock" size={3} />
                      {course.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-lg bg-[var(--color-gray-50)] border border-[var(--color-gray-200)] px-2 py-1 text-[11px] font-medium text-[var(--color-gray-600)]">
                      <Icon name="academic-cap" size={3} />
                      {course.nqf}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-lg bg-[var(--color-gray-50)] border border-[var(--color-gray-200)] px-2 py-1 text-[11px] font-medium text-[var(--color-gray-600)]">
                      <Icon name="user" size={3} />
                      {course.mode}
                    </span>
                  </div>

                  <div className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] group/link">
                    <span>View Course Details</span>
                    <Icon name="arrow-right" size={4} className="transition-transform duration-200 group-hover/link:translate-x-1 icon-hover-slide-right" />
                  </div>
                </div>
              </a>
            );
          })}
        </StaggerReveal>

        <div className="mt-12 text-center">
          <Button variant="accent" size="lg" href="/courses" className="shadow-lg shadow-[var(--color-accent)]/20">
            View All Courses &rarr;
          </Button>
        </div>
      </Container>
    </section>
  );
}
