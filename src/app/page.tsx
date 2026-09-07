import HeroCarousel from "@/components/home/HeroCarousel";
import Stats from "@/components/home/Stats";
import AudienceLinks from "@/components/home/AudienceLinks";
import WhatWeOffer from "@/components/home/WhatWeOffer";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import StudentGallery from "@/components/home/StudentGallery";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AlumniStories from "@/components/home/AlumniStories";
import ReviewsWidget from "@/components/home/ReviewsWidget";
import FAQSection from "@/components/home/FAQSection";
import AccreditationLogos from "@/components/home/AccreditationLogos";
import ApplicationCTA from "@/components/home/ApplicationCTA";
import NewsletterSignup from "@/components/home/NewsletterSignup";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const faqData = [
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      <HeroCarousel />
      <Stats />
      <AudienceLinks />
      <WhatWeOffer />
      <FeaturedCourses />
      <StudentGallery />
      <WhyChooseUs />
      <ReviewsWidget />
      <AlumniStories />

      <section className="py-[var(--section-py)] bg-[var(--color-gray-50)] relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-mesh-gradient-vibrant opacity-30" aria-hidden />
        <Container className="relative z-10">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Find answers to common questions from prospective and current students."
            className="mb-12"
          />
          <FAQSection />
        </Container>
      </section>

      <AccreditationLogos />
      <NewsletterSignup />
      <ApplicationCTA />
    </>
  );
}
