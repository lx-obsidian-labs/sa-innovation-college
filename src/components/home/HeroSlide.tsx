import Image from "next/image";

interface HeroSlideProps {
  index: number;
  current: number;
  image: string;
}

export default function HeroSlide({ index, current, image }: HeroSlideProps) {
  const isActive = index === current;

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
      {/* Mobile: full bleed image with Ken Burns zoom */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={image}
          alt="SA Innovation College graduate in red academic gown"
          fill
          priority={index === 0}
          sizes="100vw"
          className={`object-cover ${isActive ? "animate-ken-burns" : "scale-100"}`}
          style={{ objectPosition: "50% 15%" }}
        />
      </div>

      {/* Multi-layer gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--saic-campaign-crimson)] via-[var(--saic-campaign-crimson)]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--saic-campaign-crimson-dark)]/40 via-transparent to-transparent" />

      {/* Desktop: right half with Ken Burns + face visible */}
      <div className="absolute right-0 top-0 h-full w-1/2 max-lg:hidden overflow-hidden">
        <Image
          src={image}
          alt="SA Innovation College graduate in red academic gown"
          fill
          priority={index === 0}
          sizes="50vw"
          className={`object-cover ${isActive ? "animate-ken-burns" : "scale-100"}`}
          style={{ objectPosition: "50% 15%" }}
        />
        {/* Left edge feather */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--saic-campaign-crimson)] via-[var(--saic-campaign-crimson)]/50 to-transparent" />
        {/* Bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--saic-campaign-crimson-dark)]/50 via-transparent to-transparent" />
      </div>
    </div>
  );
}
