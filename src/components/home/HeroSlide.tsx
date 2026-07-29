interface HeroSlideProps {
  index: number;
  current: number;
}

export default function HeroSlide({ index, current }: HeroSlideProps) {
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
      <div className="absolute inset-0 bg-[var(--saic-campaign-crimson)]" />
      <img
        src="/images/hero-student.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-[-5%] z-[1] hidden h-[92%] w-auto max-w-[58%] object-contain object-bottom sm:block lg:right-[3%] lg:h-[98%]"
      />
    </div>
  );
}
