import SectionHeader from "@/components/ui/SectionHeader";
import Container from "@/components/layout/Container";
import { StaggerReveal } from "@/components/ui/ScrollReveal";
import Icon from "@/components/ui/Icon";

const features = [
  {
    title: "Programme information you can check",
    description:
      "Review the recognition and entry details for your chosen programme before you enrol.",
    icon: <Icon name="check-badge" size={7} />,
  },
  {
    title: "Flexible Learning Options",
    description:
      "Full-time, part-time, and online learning designed around your life.",
    icon: <Icon name="clock" size={7} />,
  },
  {
    title: "Practical Skills Focus",
    description:
      "Hands-on training with real projects and workplace simulations.",
    icon: <Icon name="briefcase" size={7} />,
  },
  {
    title: "Career Support",
    description:
      "CV guidance and interview preparation to help you approach your next opportunity with confidence.",
    icon: <Icon name="academic-cap" size={7} />,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative bg-[var(--color-surface)] py-16 md:py-24 overflow-hidden">
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

        <StaggerReveal className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
