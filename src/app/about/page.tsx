import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "About Us | SA Innovation College",
  description:
    "Learn how SA Innovation College supports learners through practical programmes, accessible guidance and career-focused skills development in Centurion, Gauteng.",
};

const values = [
  {
    title: "Excellence",
    description: "We pursue the highest standards in education and service delivery.",
    icon: <Icon name="star" size={8} />,
  },
  {
    title: "Innovation",
    description: "We embrace modern technology and creative approaches to learning.",
    icon: <Icon name="light-bulb" size={8} />,
  },
  {
    title: "Accessibility",
    description: "We make quality education available to all, regardless of background.",
    icon: <Icon name="globe-alt" size={8} />,
  },
  {
    title: "Integrity",
    description: "We operate with honesty, transparency, and accountability.",
    icon: <Icon name="check-badge" size={8} />,
  },
];

const teamMembers = [
  { name: "Dr. Sarah Mokoena", role: "Principal & CEO", initials: "SM", img: null },
  { name: "Mr. Thabo Ndlovu", role: "Academic Dean", initials: "TN", img: null },
  { name: "Ms. Lisa van der Merwe", role: "Head of Student Affairs", initials: "LV", img: null },
  { name: "Mr. James Daniels", role: "Programme Director", initials: "JD", img: null },
];

const stats = [
  { label: "Years", value: "10+" },
  { label: "Students", value: "5,000+" },
  { label: "Programmes", value: "30+" },
  { label: "Success Rate", value: "95%" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About SA Innovation College"
        description="Through Knowledge, We Grow Towards Excellence"
        image="/images/saic-graduate-hero-alternative-v3.png"
        imageAlt="SA Innovation College graduate in academic regalia"
      />

      <section className="py-[var(--section-py)] bg-white relative overflow-hidden">
        <div className="floating-blob" style={{ width: 350, height: 350, top: "-10%", right: "-5%", opacity: 0.04 }} aria-hidden />
        <div className="floating-blob" style={{ width: 250, height: 250, bottom: "10%", left: "-8%", opacity: 0.03, animationDelay: "4s" }} aria-hidden />
        <Container>
          <div className="grid gap-12 md:grid-cols-2 items-center relative z-10">
            <div>
              <h2 className="mb-4 text-[var(--fs-2xl)] font-bold text-[var(--color-primary)]">Our Mission</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-[var(--fs-md)]">
                To make practical, quality education more accessible by helping learners build relevant knowledge, workplace skills and confidence for their next step.
              </p>
              <h2 className="mt-10 mb-4 text-[var(--fs-2xl)] font-bold text-[var(--color-primary)]">Our Vision</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-[var(--fs-md)]">
                To become a trusted South African skills college known for clear guidance, practical learning and meaningful support for learners and communities.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/sa-innovation-graduation.webp"
                alt="SA Innovation College graduation ceremony"
                className="w-full h-auto rounded-2xl shadow-[var(--shadow-lg)]"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[var(--color-accent)]/20 rounded-full blur-2xl" aria-hidden />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-[var(--color-primary)]/20 rounded-full blur-2xl" aria-hidden />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-[var(--section-py)] relative overflow-hidden">
        <div className="bg-mesh-gradient-subtle absolute inset-0" aria-hidden />
        <div className="floating-blob" style={{ width: 300, height: 300, top: "20%", right: "-5%", opacity: 0.05 }} aria-hidden />
        <Container className="relative z-10">
          <SectionHeader
            title="Our Story"
            description="How SA Innovation College began and where we are today."
            className="mb-12"
          />
          <p className="mx-auto max-w-3xl text-center text-[var(--color-text-secondary)] leading-relaxed text-[var(--fs-md)]">
            SA Innovation College was founded with a clear purpose &mdash; to bridge the skills gap in South Africa by providing accessible, career-focused education. Located in Centurion, Gauteng, we serve a diverse community of learners from across the province and beyond. Our programmes are designed in collaboration with industry experts to ensure our graduates are workplace-ready from day one.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="group relative rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 text-center shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/[0.02] to-transparent pointer-events-none" aria-hidden />
                <div className="text-[var(--fs-3xl)] font-extrabold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">{stat.value}</div>
                <div className="mt-1 text-sm font-medium uppercase tracking-wider text-[var(--color-text-secondary)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-[var(--section-py)] bg-white">
        <Container>
          <SectionHeader
            eyebrow="What We Stand For"
            title="Our Values"
            description="The principles that guide everything we do."
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)]"
              >
                <div className="icon-hover-scale mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:shadow-md">
                  {value.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-[var(--color-text-primary)]">{value.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-[var(--section-py)] relative overflow-hidden">
        <div className="bg-dot-grid-primary absolute inset-0" aria-hidden />
        <div className="floating-blob" style={{ width: 400, height: 400, top: "-15%", left: "-10%", opacity: 0.04 }} aria-hidden />
        <Container className="relative z-10">
          <SectionHeader
            eyebrow="Meet Our Team"
            title="Leadership & Faculty"
            description="Our dedicated team of educators and professionals is committed to your success."
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 text-center shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)]"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-xl font-bold text-white shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                  {member.initials}
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)]">{member.name}</h3>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{member.role}</p>
              </div>
            ))}
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
            <Button variant="accent" size="lg" href="/contact" className="shadow-lg shadow-[var(--color-accent)]/25">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
