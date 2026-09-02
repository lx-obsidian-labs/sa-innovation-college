import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import Container from "@/components/layout/Container";
import { StaggerReveal } from "@/components/ui/ScrollReveal";
import Icon from "@/components/ui/Icon";
import Image from "next/image";

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
    gradient: "from-[var(--saic-campaign-crimson-dark)]/85 via-[var(--saic-campaign-crimson)]/55 to-transparent",
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
    gradient: "from-[var(--saic-navy-950)]/85 via-[var(--saic-navy-900)]/55 to-transparent",
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
    gradient: "from-[var(--saic-navy-950)]/85 via-[var(--saic-navy-700)]/55 to-transparent",
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
    gradient: "from-[var(--saic-navy-900)]/85 via-[var(--saic-campaign-crimson-dark)]/55 to-transparent",
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
    gradient: "from-[var(--saic-navy-950)]/85 via-[var(--saic-navy-900)]/55 to-transparent",
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
    gradient: "from-[var(--saic-campaign-crimson-dark)]/85 via-[var(--saic-campaign-crimson)]/55 to-transparent",
  },
];

const categoryThemes: Record<string, { badge: string; tag: string; accent: string }> = {
  "Law Enforcement": { badge: "bg-[var(--saic-navy-900)]", tag: "bg-[var(--saic-gold-100)] text-[var(--saic-navy-950)]", accent: "text-[var(--saic-navy-700)]" },
  "Computer & Digital Skills": { badge: "bg-[var(--saic-navy-700)]", tag: "bg-[var(--saic-gold-100)] text-[var(--saic-navy-950)]", accent: "text-[var(--saic-navy-700)]" },
  "Hospitality": { badge: "bg-[var(--saic-campaign-crimson)]", tag: "bg-[var(--saic-gold-100)] text-[var(--saic-campaign-crimson-dark)]", accent: "text-[var(--saic-campaign-crimson-dark)]" },
  "Policing": { badge: "bg-[var(--saic-navy-900)]", tag: "bg-[var(--saic-gold-100)] text-[var(--saic-navy-950)]", accent: "text-[var(--saic-navy-700)]" },
  "Management & Entrepreneurship": { badge: "bg-[var(--saic-green-700)]", tag: "bg-[var(--saic-green-100)] text-[var(--saic-green-700)]", accent: "text-[var(--saic-green-700)]" },
};

export default function FeaturedCourses() {
  return (
    <section id="courses" className="relative py-20 md:py-28 overflow-hidden bg-[var(--color-gray-50)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[var(--color-primary)]/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[var(--color-accent)]/[0.02] rounded-full blur-3xl" />
      </div>

      <Container>
        <SectionHeader
          eyebrow="Explore your options"
          title="Find a course that fits your goals"
          description="Compare course content, duration and study options before you choose your next step. Recognition and entry requirements vary by programme."
          className="mb-12"
        />

        <StaggerReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const theme = categoryThemes[course.category];
            return (
              <a
                key={course.title}
                href={course.href}
                className="group premium-card relative flex flex-col rounded-2xl border border-[var(--color-border)] bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl overflow-hidden hover-border-glow before:absolute before:inset-0 before:rounded-2xl before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 before:pointer-events-none before:bg-gradient-to-br before:from-[var(--color-primary)]/[0.04] before:to-transparent"
              >
                <div className="relative h-48 overflow-hidden bg-[var(--color-gray-200)]">
                  <Image
                    src={course.image}
                    alt={`${course.title} programme`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${course.gradient}`} />

                  <span className={`absolute top-3 left-3 inline-flex items-center rounded-md ${theme?.badge || "bg-gray-500"} px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg`}>
                    {course.category}
                  </span>

                  <div className="absolute top-3 right-3 flex flex-col gap-1.5">
                    {course.free && (
                      <span className="inline-flex items-center rounded-md bg-[var(--saic-green-700)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
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
          <Button variant="premium" size="lg" href="/courses" className="shadow-lg shadow-[var(--color-primary)]/20 btn-shine">
            View All Courses
          </Button>
        </div>
      </Container>
    </section>
  );
}
