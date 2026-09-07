import HeroCarousel from "@/components/home/HeroCarousel";
import Stats from "@/components/home/Stats";
import AudienceLinks from "@/components/home/AudienceLinks";
import WhatWeOffer from "@/components/home/WhatWeOffer";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import StudentGallery from "@/components/home/StudentGallery";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import AlumniStories from "@/components/home/AlumniStories";
import ReviewsWidget from "@/components/home/ReviewsWidget";
import FAQSection from "@/components/home/FAQSection";
import AccreditationLogos from "@/components/home/AccreditationLogos";
import ApplicationCTA from "@/components/home/ApplicationCTA";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <Stats />
      <AudienceLinks />
      <WhatWeOffer />
      <FeaturedCourses />
      <StudentGallery />
      <WhyChooseUs />
      <Testimonials />
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
      <ApplicationCTA />
    </>
  );
}
