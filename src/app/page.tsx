import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import Partners from "@/components/home/Partners";
import NewsPreview from "@/components/home/NewsPreview";
import CTASection from "@/components/home/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollReveal><StatsBar /></ScrollReveal>
      <ScrollReveal delay={100}><FeaturedCourses /></ScrollReveal>
      <ScrollReveal delay={100}><WhyChooseUs /></ScrollReveal>
      <ScrollReveal delay={100}><Testimonials /></ScrollReveal>
      <ScrollReveal delay={100}><Partners /></ScrollReveal>
      <ScrollReveal delay={100}><NewsPreview /></ScrollReveal>
      <ScrollReveal delay={100}><CTASection /></ScrollReveal>
    </>
  );
}
