"use client";

import Container from "@/components/layout/Container";
import { StaggerReveal } from "@/components/ui/ScrollReveal";

const stats = [
  { value: "10+", label: "Years of Excellence", description: "Established in 2016" },
  { value: "5,000+", label: "Students Trained", description: "Growing community" },
  { value: "95%", label: "Student Satisfaction", description: "Based on feedback" },
  { value: "12", label: "Accreditations", description: "QCTO, ICDL, SETAs & more" },
];

export default function Stats() {
  return (
    <section className="relative bg-white py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-mesh-gradient-subtle opacity-50 pointer-events-none" aria-hidden />
      <Container className="relative z-10">
        <StaggerReveal className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center group card-lift"
            >
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[var(--color-primary)]/10">
                <span className="text-2xl font-extrabold text-[var(--color-primary)]">{stat.value}</span>
              </div>
              <h3 className="text-sm font-bold text-[var(--color-gray-900)]">{stat.label}</h3>
              <p className="mt-1 text-xs text-[var(--color-gray-500)]">{stat.description}</p>
            </div>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
