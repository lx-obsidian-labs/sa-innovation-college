import HeroCarousel from "@/components/home/HeroCarousel";
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
      <FeaturedCourses />
      <StudentGallery />
      <WhyChooseUs />
      <Testimonials />
      <AccreditationLogos />
      <ApplicationCTA />
    </>
  );
}
