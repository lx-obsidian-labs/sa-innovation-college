import HeroCarousel from "@/components/home/HeroCarousel";
import Stats from "@/components/home/Stats";
import WhatWeOffer from "@/components/home/WhatWeOffer";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import StudentGallery from "@/components/home/StudentGallery";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import AlumniStories from "@/components/home/AlumniStories";
import AccreditationLogos from "@/components/home/AccreditationLogos";
import ApplicationCTA from "@/components/home/ApplicationCTA";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <Stats />
      <WhatWeOffer />
      <FeaturedCourses />
      <StudentGallery />
      <WhyChooseUs />
      <Testimonials />
      <AlumniStories />
      <AccreditationLogos />
      <ApplicationCTA />
    </>
  );
}
