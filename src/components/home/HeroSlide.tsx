import Image from "next/image";

interface HeroSlideProps {
  index: number;
  current: number;
  image: string;
}

export default function HeroSlide({ index, current, image }: HeroSlideProps) {
  const isActive = index === current;
  const isPast = index < current;

  return (
    <div
      className="absolute inset-0 transition-opacity duration-700 ease-in-out"
      style={{
        opacity: isActive ? 1 : 0,
        zIndex: isActive ? 1 : 0,
        pointerEvents: isActive ? "auto" : "none",
      }}
      role="group"
      aria-roledescription="slide"
      aria-label={`Slide ${index + 1}`}
      aria-hidden={!isActive}
    >
      {/* Mobile: full bleed image behind text */}
      <Image
        src={image}
        alt="SA Innovation College graduate in red academic gown"
        fill
        priority={index === 0}
        sizes="100vw"
        className="object-cover object-right-top sm:object-right md:object-right"
        style={{ opacity: 0.35 }}
      />
      {/* Dark overlay for text readability on mobile */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--saic-campaign-crimson)] via-[var(--saic-campaign-crimson)]/80 to-transparent sm:from-[var(--saic-campaign-crimson)]/90 sm:to-[var(--saic-campaign-crimson)]/30" />

      {/* Desktop: larger image on right side */}
      <div className="absolute right-0 bottom-0 h-full w-1/2 max-lg:hidden">
        <Image
          src={image}
          alt="SA Innovation College graduate in red academic gown"
          fill
          priority={index === 0}
          sizes="50vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--saic-campaign-crimson)] to-transparent opacity-60" />
      </div>
    </div>
  );
}
