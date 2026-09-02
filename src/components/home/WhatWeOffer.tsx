import SectionHeader from "@/components/ui/SectionHeader";
import Container from "@/components/layout/Container";
import { StaggerReveal } from "@/components/ui/ScrollReveal";
import Icon from "@/components/ui/Icon";

const offerings = [
  {
    title: "QCTO Occupational Qualifications",
    description: "Nationally recognised qualifications designed for specific occupations and industries.",
    icon: <Icon name="check-badge" size={6} />,
  },
  {
    title: "TVET & Skills Development",
    description: "Comprehensive TVET programmes and skills training for school leavers and adults.",
    icon: <Icon name="academic-cap" size={6} />,
  },
  {
    title: "ICDL International Computer Certification",
    description: "Globally recognised digital skills certification through our official ICDL South Africa Centre.",
    icon: <Icon name="globe-alt" size={6} />,
  },
  {
    title: "Skills Programmes & Short Courses",
    description: "Focused, industry-relevant short courses to build specific competencies quickly.",
    icon: <Icon name="briefcase" size={6} />,
  },
  {
    title: "Recognition of Prior Learning (RPL)",
    description: "Get credit for skills and experience you already have through our RPL assessment process.",
    icon: <Icon name="star-solid" size={6} />,
  },
  {
    title: "Corporate & Workplace Training",
    description: "Tailored training solutions for employers and organisations investing in their workforce.",
    icon: <Icon name="user-group" size={6} />,
  },
  {
    title: "Workplace-Based Learning",
    description: "Practical, on-the-job training that prepares learners for real workplace environments.",
    icon: <Icon name="building-library" size={6} />,
  },
  {
    title: "Digital Skills & Computer Literacy",
    description: "Essential digital competencies for the modern economy, including free computer literacy courses.",
    icon: <Icon name="display" size={6} />,
  },
];

const iconColors = [
  "var(--saic-navy-700)",
  "var(--saic-campaign-crimson)",
];

export default function WhatWeOffer() {
  return (
    <section id="what-we-offer" className="relative bg-white py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-[var(--color-primary)]/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-[var(--color-accent)]/[0.02] rounded-full blur-3xl" />
      </div>

      <Container>
        <SectionHeader
          eyebrow="What We Offer"
          title="Programmes designed for your success"
          description="From occupational qualifications to digital skills, we provide industry-aligned learning for school leavers, working professionals, and employers."
          className="mb-12"
        />

        <StaggerReveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((item, idx) => (
            <div
              key={item.title}
              className="group premium-card relative flex flex-col rounded-xl border border-[var(--color-border)] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--color-primary)]"
            >
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                style={{ backgroundColor: iconColors[idx % iconColors.length] }}
              >
                {item.icon}
              </div>

              <h3 className="mb-2 text-base font-bold text-[var(--color-gray-900)] leading-snug">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-gray-500)]">
                {item.description}
              </p>
            </div>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
