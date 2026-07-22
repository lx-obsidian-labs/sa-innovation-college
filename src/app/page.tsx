import HeroCarousel from "@/components/home/HeroCarousel";
import StatsBar from "@/components/home/StatsBar";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import StudentGallery from "@/components/home/StudentGallery";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import AccreditationLogos from "@/components/home/AccreditationLogos";
import NewsPreview from "@/components/home/NewsPreview";
import ApplicationCTA from "@/components/home/ApplicationCTA";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <ScrollReveal><StatsBar /></ScrollReveal>
      <ScrollReveal delay={100}><FeaturedCourses /></ScrollReveal>
      <ScrollReveal delay={100}><StudentGallery /></ScrollReveal>
      <ScrollReveal delay={100}><WhyChooseUs /></ScrollReveal>
      <ScrollReveal delay={100}><Testimonials /></ScrollReveal>
      <ScrollReveal delay={100}><AccreditationLogos /></ScrollReveal>
      <ScrollReveal delay={100}><NewsPreview /></ScrollReveal>
      <ScrollReveal delay={100}><ApplicationCTA /></ScrollReveal>
    </>
  );
}
