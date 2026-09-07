import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Blog | SA Innovation College",
  description:
    "Educational insights, career guidance, industry trends, and professional development resources from SA Innovation College.",
};

const categories = [
  {
    title: "Career Guidance",
    description: "Explore career pathways, industry opportunities, and practical advice to help you achieve your professional goals.",
    icon: <Icon name="briefcase" size={6} />,
  },
  {
    title: "Education & Skills Development",
    description: "Stay informed about accredited qualifications, occupational programmes, skills development, and the latest developments in the South African education sector.",
    icon: <Icon name="academic-cap" size={6} />,
  },
  {
    title: "Industry Insights",
    description: "Discover emerging industries, in-demand skills, workplace trends, and employer expectations shaping the future of work.",
    icon: <Icon name="trending-up" size={6} />,
  },
  {
    title: "Student Success Stories",
    description: "Read inspiring stories from our learners and graduates as they share their educational journeys, achievements, and career milestones.",
    icon: <Icon name="user-group" size={6} />,
  },
  {
    title: "Events & Announcements",
    description: "Keep up to date with upcoming intakes, open days, webinars, workshops, graduation ceremonies, and important college announcements.",
    icon: <Icon name="calendar" size={6} />,
  },
  {
    title: "Learning Tips & Resources",
    description: "Access practical study strategies, productivity techniques, digital learning tips, and resources designed to support your academic success.",
    icon: <Icon name="light-bulb" size={6} />,
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        description="Insights, Career Advice & Industry News"
        image="/images/saic-graduate-hero-alternative-v3.png"
        imageAlt="SA Innovation College students learning"
      />

      <section className="py-[var(--section-py)] bg-white relative overflow-hidden">
        <div className="floating-blob" style={{ width: 350, height: 350, top: "-10%", right: "-5%", opacity: 0.04 }} aria-hidden />
        <Container>
          <SectionHeader
            eyebrow="Blog"
            title="Insights, Career Advice & Industry News"
            description="Welcome to the SA Innovation College Blog — your trusted source for educational insights, career guidance, industry trends, and professional development resources."
            className="mb-12"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)] hover:border-[var(--color-primary)]/20"
              >
                <div className="icon-hover-scale mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:shadow-md group-hover:shadow-[var(--color-primary)]/20">
                  {cat.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-[var(--color-text-primary)]">{cat.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{cat.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-[var(--section-py)] relative overflow-hidden">
        <div className="bg-dot-grid-primary absolute inset-0" aria-hidden />
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-[var(--fs-2xl)] font-bold text-[var(--color-primary)]">Stay Connected</h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed text-[var(--fs-md)] mb-6">
              Knowledge is the foundation of success. Follow our blog for regular updates, expert insights, and practical advice that will help you stay competitive in today&apos;s rapidly changing world.
            </p>
            <p className="text-[var(--color-accent)] font-semibold text-lg mb-8">
              Learn. Grow. Innovate. Succeed.
            </p>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-dark)] to-[#0B1F3F] py-16 md:py-24">
        <div className="absolute top-0 left-1/3 h-64 w-64 rounded-full bg-[var(--color-accent)]/10 blur-3xl animate-float" aria-hidden />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-[var(--color-primary-light)]/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} aria-hidden />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} aria-hidden />
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-[var(--fs-3xl)] font-extrabold text-white">Ready to Start Your Journey?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
              Take the first step toward a brighter future. Contact us today to learn more about our programmes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="accent" size="lg" href="/apply" className="shadow-lg shadow-[var(--color-accent)]/25">
                Apply Now
              </Button>
              <Button variant="secondary" size="lg" href="/courses" className="!border-white/30 !text-white hover:!bg-white/10">
                Browse Courses
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
