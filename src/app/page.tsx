import HeroCarousel from "@/components/home/HeroCarousel";
import WhatWeOffer from "@/components/home/WhatWeOffer";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import StudentGallery from "@/components/home/StudentGallery";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import AccreditationLogos from "@/components/home/AccreditationLogos";
import ApplicationCTA from "@/components/home/ApplicationCTA";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <WhatWeOffer />
      <FeaturedCourses />
      <StudentGallery />
      <WhyChooseUs />
      <Testimonials />
      <AccreditationLogos />
      <ApplicationCTA />
    </>
  );
}
