import type { SlideData } from "./hero-carousel.types";

interface HeroSlideProps {
  slide: SlideData;
  index: number;
  current: number;
}

export default function HeroSlide({ slide, index, current }: HeroSlideProps) {
  const isActive = index === current;

  return (
    <div
      className="absolute inset-0 transition-all duration-1000 ease-in-out"
      style={{
        opacity: isActive ? 1 : 0,
        transform: `scale(${isActive ? 1 : 1.08})`,
        zIndex: isActive ? 1 : 0,
        filter: isActive ? "none" : "blur(4px)",
      }}
      role="group"
      aria-roledescription="slide"
      aria-label={`Slide ${index + 1}`}
      aria-hidden={!isActive}
    >
      <img
        src={slide.image}
        alt=""
        className="h-full w-full object-cover"
        loading={index === 0 ? "eager" : "lazy"}
        fetchPriority={index === 0 ? "high" : "auto"}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--saic-navy-950)]/90 via-[var(--saic-navy-900)]/80 to-[var(--saic-navy-700)]/85" />
    </div>
  );
}
