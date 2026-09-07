import SectionHeader from "@/components/ui/SectionHeader";
import Container from "@/components/layout/Container";
import { StaggerReveal } from "@/components/ui/ScrollReveal";
import Icon from "@/components/ui/Icon";

const features = [
  {
    title: "Established in 2016",
    description:
      "A proven record of educational excellence, empowering individuals through quality education and occupational training.",
    icon: <Icon name="check-badge" size={6} />,
  },
  {
    title: "QCTO Accredited",
    description:
      "Quality-assured occupational and skills programmes that meet national standards as a QCTO Accredited TVET & Skills Training Centre.",
    icon: <Icon name="academic-cap" size={6} />,
  },
  {
    title: "ICDL International Certification",
    description:
      "Official ICDL South Africa Centre offering globally recognised computer certifications and digital skills.",
    icon: <Icon name="globe-alt" size={6} />,
  },
  {
    title: "Industry-Focused Training",
    description:
      "Programmes aligned with current workplace needs and industry standards. Career-focused training designed to improve employability with practical learning that prepares students for real workplace environments.",
    icon: <Icon name="briefcase" size={6} />,
  },
  {
    title: "Flexible Study Options",
    description:
      "Full-Time, Part-Time, Distance/E-Learning/Online, and Saturday & Evening Classes designed around your life for school leavers, working professionals and adult learners.",
    icon: <Icon name="clock" size={6} />,
  },
  {
    title: "Career-Focused Qualifications",
    description:
      "Qualifications aligned with employer needs that combine knowledge, technology and innovation. Accredited programmes that support career growth, professional development and workplace-ready skills.",
    icon: <Icon name="building-library" size={6} />,
  },
  {
    title: "Industry-Experienced Facilitators",
    description:
      "Learn from facilitators and assessors with real workplace experience and industry knowledge. Training pathways that support employment, entrepreneurship and further studies.",
    icon: <Icon name="user-group" size={6} />,
  },
  {
    title: "Modern Learning Approach",
    description:
      "Learning that combines knowledge, technology and innovation. Digital and technical skills for the modern economy, with continuous curriculum improvement to keep pace with workplace innovation.",
    icon: <Icon name="light-bulb" size={6} />,
  },
  {
    title: "Skills for Growing Sectors",
    description:
      "Programmes that respond to skills shortages in South Africa. Qualifications that prepare learners for opportunities in growing sectors with relevant, future-focused education.",
    icon: <Icon name="trending-up" size={6} />,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative bg-[var(--color-gray-50)] py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-mesh-gradient-vibrant opacity-50" aria-hidden />
      <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-primary)]/5 rounded-full blur-3xl" aria-hidden />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[var(--color-accent)]/5 rounded-full blur-3xl" aria-hidden />

      <Container>
        <SectionHeader
          eyebrow="Why SA Innovation"
          title="Why Choose SA Innovation College?"
          description="Build relevant knowledge with practical programmes, flexible options and guidance designed to help you make an informed decision."
          className="mb-12"
        />

        <StaggerReveal className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group premium-card card-lift relative flex flex-col items-center text-center rounded-xl border border-[var(--color-border)] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--color-primary)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                {feature.icon}
              </div>

              <h3 className="mb-2 text-lg font-bold text-[var(--color-gray-900)]">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-gray-500)]">
                {feature.description}
              </p>
            </div>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
