import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Events | SA Innovation College",
  description:
    "Connect, learn, and grow at SA Innovation College events — career expos, open days, workshops, graduation ceremonies, and more.",
};

const eventTypes = [
  {
    title: "Open Days",
    description: "Visit our campuses and training centres to explore accredited qualifications, meet academic advisors, tour facilities, learn about admission requirements and funding, and receive one-on-one career guidance.",
    icon: <Icon name="academic-cap" size={6} />,
  },
  {
    title: "Career Information Sessions",
    description: "Unsure which career path is right for you? Our sessions help prospective learners understand different career pathways, explore high-demand industries, compare qualifications, and make informed education and career decisions.",
    icon: <Icon name="briefcase" size={6} />,
  },
  {
    title: "Skills Development Workshops",
    description: "Enhance your professional skills through practical workshops covering digital and computer skills, leadership and management, communication, entrepreneurship, AI in the workplace, customer service, and career readiness.",
    icon: <Icon name="light-bulb" size={6} />,
  },
  {
    title: "Industry Seminars & Guest Speakers",
    description: "Gain valuable insights from experienced professionals, employers, entrepreneurs, and industry experts on emerging trends, future careers, workplace innovation, technology, and leadership development.",
    icon: <Icon name="user-group" size={6} />,
  },
  {
    title: "Employer Networking Events",
    description: "Strong partnerships create stronger careers. Our networking events connect employers seeking skilled graduates, workplace partners offering experiential learning, and opportunities for graduate recruitment and mentorship.",
    icon: <Icon name="building-library" size={6} />,
  },
  {
    title: "Student Orientation Programmes",
    description: "Every new learner begins with a strong foundation. Orientation introduces students to college policies, learning platforms, student support services, assessment requirements, digital learning tools, and campus life.",
    icon: <Icon name="check-badge" size={6} />,
  },
  {
    title: "Graduation Ceremonies",
    description: "Celebrate the achievements of our graduates as they complete nationally recognised qualifications. Graduation events recognise academic excellence, learner achievement, industry partnerships, and community impact.",
    icon: <Icon name="star" size={6} />,
  },
  {
    title: "Community Outreach Initiatives",
    description: "As part of our commitment to social responsibility, we host career guidance at schools, skills awareness campaigns, digital literacy programmes, youth empowerment projects, and entrepreneurship support initiatives.",
    icon: <Icon name="globe-alt" size={6} />,
  },
];

const benefits = [
  "Discover career and study opportunities",
  "Learn directly from industry experts",
  "Develop practical and professional skills",
  "Build valuable professional networks",
  "Connect with potential employers and workplace partners",
  "Stay informed about industry and education trends",
  "Explore emerging technologies and innovation",
  "Enhance your employability and career readiness",
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Events"
        description="Connect. Learn. Grow. Succeed."
        image="/images/saic-graduate-hero-alternative-v3.png"
        imageAlt="SA Innovation College event"
      />

      <section className="py-[var(--section-py)] bg-white relative overflow-hidden">
        <div className="floating-blob" style={{ width: 350, height: 350, top: "-10%", right: "-5%", opacity: 0.04 }} aria-hidden />
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="text-[var(--color-text-secondary)] leading-relaxed text-[var(--fs-md)]">
              At SA Innovation College, learning extends beyond the classroom. Our events are designed to connect prospective students, current learners, graduates, employers, industry professionals, government stakeholders, and community partners through engaging educational and professional experiences.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {eventTypes.map((event) => (
              <div
                key={event.title}
                className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)] hover:border-[var(--color-primary)]/20"
              >
                <div className="icon-hover-scale mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:shadow-md group-hover:shadow-[var(--color-primary)]/20">
                  {event.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-[var(--color-text-primary)]">{event.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{event.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-[var(--section-py)] relative overflow-hidden">
        <div className="bg-dot-grid-primary absolute inset-0" aria-hidden />
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-[var(--fs-2xl)] font-bold text-[var(--color-primary)] text-center">Why Attend Our Events?</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4 shadow-sm">
                  <Icon name="check-badge" size={4} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  <span className="text-sm text-[var(--color-text-secondary)]">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-dark)] to-[#0B1F3F] py-16 md:py-24">
        <div className="absolute top-0 left-1/3 h-64 w-64 rounded-full bg-[var(--color-accent)]/10 blur-3xl animate-float" aria-hidden />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-[var(--color-primary-light)]/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} aria-hidden />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} aria-hidden />
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-[var(--fs-3xl)] font-extrabold text-white">Never Miss an Event</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
              New opportunities are created every day. Whether you&apos;re a prospective student, current learner, graduate, employer, or community member, there&apos;s always an opportunity to learn, connect, and grow with SA Innovation College.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="accent" size="lg" href="/contact" className="shadow-lg shadow-[var(--color-accent)]/25">
                Contact Us
              </Button>
              <Button variant="secondary" size="lg" href="/apply" className="!border-white/30 !text-white hover:!bg-white/10">
                Apply Now
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
