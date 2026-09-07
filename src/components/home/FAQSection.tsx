"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";

const faqs = [
  {
    question: "What are the entry requirements?",
    answer: "Entry requirements vary by programme. Some programmes require a National Senior Certificate (matric), while others accept adult learners with relevant experience. Contact Admissions on 0800 014 568 to check your eligibility for a specific course.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, flexible payment plans are available for selected programmes. Contact our Admissions team to discuss options that work for your budget. We also accept EFT, debit order and credit card payments.",
  },
  {
    question: "Are your qualifications recognised?",
    answer: "SA Innovation College is a QCTO Accredited TVET & Skills Training Centre. Our qualifications are nationally recognised and include QCTO Occupational Qualifications, ICDL International Certifications and SETA-accredited programmes.",
  },
  {
    question: "Can I study while working?",
    answer: "Absolutely. We offer Full-Time, Part-Time, Distance/E-Learning, and Saturday & Evening Classes designed to fit around your work schedule. Many of our students are working professionals.",
  },
  {
    question: "Do you help with job placement?",
    answer: "We provide career services including CV guidance, interview preparation and workplace-readiness training. While we don't guarantee employment, our career-focused programmes are designed to make you workplace-ready from day one.",
  },
  {
    question: "What documents do I need to apply?",
    answer: "You will need a certified copy of your ID, your latest academic results and proof of address. Additional documents may be required depending on your chosen programme. Apply online and Admissions will guide you.",
  },
  {
    question: "Where is the campus located?",
    answer: "Our campus is located at 147 Burger Avenue, 1st Floor, Barclays Centre, Lyttelton Manor, Centurion, 0157. We are easily accessible by car and public transport.",
  },
  {
    question: "How long does registration take?",
    answer: "Most registrations are completed within 2–3 business days once all required documents have been submitted and verified. Apply online to get started today.",
  },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`rounded-2xl border transition-all duration-300 ${isOpen ? "border-[var(--color-primary)]/30 bg-white shadow-[var(--shadow-md)] shadow-[var(--color-primary)]/5" : "border-[var(--color-border)] bg-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lg)] hover:border-[var(--color-primary)]/15"}`}>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
        aria-expanded={isOpen}
      >
        <span className={`text-base font-semibold transition-colors duration-200 ${isOpen ? "text-[var(--color-primary)]" : "text-[var(--color-text-primary)] hover:text-[var(--color-primary)]"}`}>
          {faq.question}
        </span>
        <Icon
          name="chevron-down"
          size={5}
          className={`shrink-0 text-[var(--color-text-muted)] transition-transform duration-300 ${isOpen ? "rotate-180 text-[var(--color-primary)]" : ""}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="border-t border-[var(--color-border)] px-5 pb-5 pt-3">
          <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((faq, idx) => (
        <FAQItem
          key={faq.question}
          faq={faq}
          isOpen={openIndex === idx}
          onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
        />
      ))}
    </div>
  );
}
