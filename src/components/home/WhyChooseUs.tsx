import SectionHeader from "@/components/ui/SectionHeader";
import Container from "@/components/layout/Container";

const features = [
  {
    title: "Accredited Qualifications",
    description:
      "SETA and QCTO accredited programmes meeting national quality standards.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-2.672-3.493 2.02-2.02a2.25 2.25 0 0 1 3.182 0l.707.707a2.25 2.25 0 0 1 0 3.182l-2.02 2.02m-2.02 2.02-1.59 1.59a2.25 2.25 0 0 1-3.182 0l-.707-.707a2.25 2.25 0 0 1 0-3.182l1.59-1.59m6.364-6.364L21 12l-5.636 5.636m-5.364-5.364L3 12l5.636 5.636" />
      </svg>
    ),
  },
  {
    title: "Flexible Learning Options",
    description:
      "Full-time, part-time, and online learning designed around your life.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: "Practical Skills Focus",
    description:
      "Hands-on training with real projects and workplace simulations.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.5 4.5h-3.75a1.5 1.5 0 0 1-1.5-1.5V6.75m-6 0a4.5 4.5 0 0 1 4.5-4.5h3.75a1.5 1.5 0 0 1 1.5 1.5V6.75M6.75 21h10.5M9 10.5h.008v.008H9V10.5Zm3 0h.008v.008H12V10.5Zm3 0h.008v.008H15V10.5ZM9 16.5h.008v.008H9V16.5Zm3 0h.008v.008H12V16.5Zm3 0h.008v.008H15V16.5Z" />
      </svg>
    ),
  },
  {
    title: "Career Support",
    description:
      "CV workshops, employer connections, and job placement assistance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative bg-[var(--color-surface)] py-16 md:py-24 overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-primary)]/5 rounded-full blur-3xl" aria-hidden />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[var(--color-accent)]/5 rounded-full blur-3xl" aria-hidden />

      <Container>
        <SectionHeader
          eyebrow="Why SA Innovation"
          title="Why Choose SA Innovation"
          description="We are committed to providing accessible, high-quality education that prepares students for real-world success."
          className="mb-12"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative flex items-start gap-5 rounded-xl border border-[var(--color-gray-200)] border-l-4 border-l-[var(--color-primary)] bg-[var(--color-surface-raised)] p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)] hover:border-l-[var(--color-accent)]"
            >
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-all duration-300 group-hover:bg-[var(--color-accent)]/10 group-hover:text-[var(--color-accent)] group-hover:scale-110">
                {feature.icon}
              </div>

              <div className="flex-1">
                <h3 className="mb-1.5 text-lg font-bold text-[var(--color-gray-900)]">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-gray-500)]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
