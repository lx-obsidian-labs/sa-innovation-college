import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "About Us | SA Innovation College",
  description:
    "SA Innovation College is a leading private college in Centurion, Gauteng, committed to accessible, quality education that bridges the skills gap and empowers learners.",
};

const values = [
  {
    title: "Excellence",
    description: "We pursue the highest standards in education and service delivery.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "We embrace modern technology and creative approaches to learning.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: "Accessibility",
    description: "We make quality education available to all, regardless of background.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description: "We operate with honesty, transparency, and accountability.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
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
      />

      <section className="py-[var(--section-py)]">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="mb-4 text-[var(--fs-2xl)] font-bold text-[var(--color-primary)]">Our Mission</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-[var(--fs-md)]">
                To empower learners with knowledge, skills, and innovation to unlock opportunities through accessible, quality education.
              </p>
              <h2 className="mt-10 mb-4 text-[var(--fs-2xl)] font-bold text-[var(--color-primary)]">Our Vision</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-[var(--fs-md)]">
                To be South Africa&apos;s leading college of innovation, producing skilled graduates who drive economic growth and community development.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/sa-innovation-graduation.webp"
                alt="SA Innovation College Graduation"
                className="w-full h-auto rounded-2xl shadow-[var(--shadow-lg)]"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[var(--color-accent)]/20 rounded-full blur-2xl" aria-hidden />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-[var(--color-primary)]/20 rounded-full blur-2xl" aria-hidden />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-[var(--section-py)]">
        <Container>
          <SectionHeader
            title="Our Story"
            description="How SA Innovation College began and where we are today."
            className="mb-12"
          />
          <p className="mx-auto max-w-3xl text-center text-[var(--color-text-secondary)] leading-relaxed text-[var(--fs-md)]">
            SA Innovation College was founded with a clear purpose — to bridge the skills gap in South Africa by providing accessible, career-focused education. Located in Centurion, Gauteng, we serve a diverse community of learners from across the province and beyond. Our programmes are designed in collaboration with industry experts to ensure our graduates are workplace-ready from day one.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 text-center shadow-[var(--shadow-card)]">
                <div className="text-[var(--fs-3xl)] font-extrabold text-[var(--color-primary)]">{stat.value}</div>
                <div className="mt-1 text-sm font-medium uppercase tracking-wider text-[var(--color-text-secondary)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-[var(--section-py)]">
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
                className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-colors duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                  {value.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-[var(--color-text-primary)]">{value.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-[var(--section-py)]">
        <Container>
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
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 text-center shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-primary)] text-xl font-bold text-white">
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
        <div className="absolute top-0 left-1/3 h-64 w-64 rounded-full bg-[var(--color-accent)]/10 blur-3xl" aria-hidden />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-[var(--color-primary-light)]/10 blur-3xl" aria-hidden />
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
