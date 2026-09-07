"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import Container from "@/components/layout/Container";
import { StaggerReveal } from "@/components/ui/ScrollReveal";
import Icon from "@/components/ui/Icon";

const alumni = [
  {
    name: "Thabo Molefe",
    programme: "Entrepreneurship",
    year: "2022",
    story: "Started a logistics company within 6 months of graduating. Now employs 12 people.",
    initials: "TM",
    gradient: "from-[var(--color-primary)] to-[var(--color-primary-dark)]",
  },
  {
    name: "Refilwe Nkosi",
    programme: "Office Administration",
    year: "2023",
    story: "Promoted to Office Manager at a leading accounting firm within 3 months of completing her qualification.",
    initials: "RN",
    gradient: "from-[var(--saic-navy-700)] to-[var(--saic-navy-950)]",
  },
  {
    name: "Sipho Dlamini",
    programme: "Traffic Officer",
    year: "2021",
    story: "Now serving as a senior traffic officer. Credits the practical training for his quick career progression.",
    initials: "SD",
    gradient: "from-[var(--saic-navy-700)] to-[var(--saic-campaign-crimson)]",
  },
];

export default function AlumniStories() {
  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      <Container>
        <SectionHeader
          eyebrow="Alumni Success"
          title="Where Are They Now?"
          description="Our graduates go on to achieve remarkable things. Here are some of their stories."
          className="mb-12"
        />

        <StaggerReveal className="grid gap-6 md:grid-cols-3">
          {alumni.map((person) => (
            <div
              key={person.name}
              className="group premium-card card-lift relative flex flex-col rounded-2xl border border-[var(--color-border)] glass-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-[var(--color-primary)]/30"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${person.gradient} text-sm font-bold text-white shadow-sm`}>
                  {person.initials}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--color-gray-900)]">{person.name}</h3>
                  <p className="text-xs text-[var(--color-gray-500)]">{person.programme} · {person.year}</p>
                </div>
              </div>
              <p className="flex-1 text-sm leading-relaxed text-[var(--color-gray-600)]">{person.story}</p>
              <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)]">
                  <Icon name="check-badge" size={4} />
                  <span>Verified Graduate</span>
                </div>
              </div>
            </div>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
