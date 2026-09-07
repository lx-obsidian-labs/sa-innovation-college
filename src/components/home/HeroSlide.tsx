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
      {/* Mobile: full bleed image — face visible via object-position top */}
      <Image
        src={image}
        alt="SA Innovation College graduate in red academic gown"
        fill
        priority={index === 0}
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "50% 15%" }}
      />
      {/* Gradient overlay — dark left for text, transparent right to show face */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--saic-campaign-crimson)] via-[var(--saic-campaign-crimson)]/60 to-transparent" />

      {/* Desktop: right half shows the image with face visible */}
      <div className="absolute right-0 top-0 h-full w-1/2 max-lg:hidden">
        <Image
          src={image}
          alt="SA Innovation College graduate in red academic gown"
          fill
          priority={index === 0}
          sizes="50vw"
          className="object-cover"
          style={{ objectPosition: "50% 15%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--saic-campaign-crimson)] to-transparent opacity-30" />
      </div>
    </div>
  );
}
