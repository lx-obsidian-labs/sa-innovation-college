import SectionHeader from "@/components/ui/SectionHeader";
import Container from "@/components/layout/Container";
import { StaggerReveal } from "@/components/ui/ScrollReveal";
import Icon from "@/components/ui/Icon";

const features = [
  {
    title: "Established in 2016",
    description:
      "A proven record of educational excellence, empowering individuals through quality education and occupational training.",
    icon: <Icon name="check-badge" size={7} />,
  },
  {
    title: "QCTO Accredited",
    description:
      "Quality-assured occupational and skills programmes that meet national standards as a QCTO Accredited TVET & Skills Training Centre.",
    icon: <Icon name="academic-cap" size={7} />,
  },
  {
    title: "ICDL International Certification",
    description:
      "Official ICDL South Africa Centre offering globally recognised computer certifications and digital skills.",
    icon: <Icon name="globe-alt" size={7} />,
  },
  {
    title: "Flexible Study Options",
    description:
      "Full-Time, Part-Time, Distance/E-Learning, and Saturday & Evening Classes designed around your life.",
    icon: <Icon name="clock" size={7} />,
  },
  {
    title: "Industry-Experienced Facilitators",
    description:
      "Learn from facilitators and assessors with real workplace experience and industry knowledge.",
    icon: <Icon name="briefcase" size={7} />,
  },
  {
    title: "Career-Focused Training",
    description:
      "Qualifications aligned with employer needs that combine knowledge, technology and innovation for today's competitive job market.",
    icon: <Icon name="academic-cap" size={7} />,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative bg-[var(--color-surface)] py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" aria-hidden />
      <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-primary)]/5 rounded-full blur-3xl" aria-hidden />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[var(--color-accent)]/5 rounded-full blur-3xl" aria-hidden />

      <Container>
        <SectionHeader
          eyebrow="Why SA Innovation"
          title="A clearer way to take your next step"
          description="Build relevant knowledge with practical programmes, flexible options and guidance designed to help you make an informed decision."
          className="mb-12"
        />

        <StaggerReveal className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group premium-card relative flex flex-col items-center text-center rounded-xl border border-[var(--color-gray-200)] bg-[var(--color-surface-raised)] p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)]"
            >
              <div className="icon-hover-scale mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:shadow-lg group-hover:scale-105">
                {feature.icon}
              </div>

              <h3 className="mb-2 text-lg font-bold text-[var(--color-gray-900)]">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-gray-500)]">
                {feature.description}
              </p>

              <div
                className="mt-6 h-1 w-12 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] opacity-0 transition-all duration-300 group-hover:w-16 group-hover:opacity-100"
                aria-hidden
              />
            </div>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
