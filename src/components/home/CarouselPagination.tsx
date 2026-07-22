"use client";

interface CarouselPaginationProps {
  total: number;
  current: number;
  onGoTo: (index: number) => void;
}

export default function CarouselPagination({ total, current, onGoTo }: CarouselPaginationProps) {
  if (total <= 1) return null;

  return (
    <nav aria-label="Carousel navigation" className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
      {Array.from({ length: total }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => onGoTo(idx)}
          className={`rounded-full transition-all duration-300 ${
            idx === current
              ? "bg-[var(--color-accent)] w-7"
              : "bg-white/40 hover:bg-white/70 w-2"
          }`}
          style={{ height: "8px", minWidth: idx === current ? "1.75rem" : "0.5rem" }}
          aria-label={`Go to slide ${idx + 1} of ${total}`}
          aria-current={idx === current ? "true" : undefined}
        />
      ))}
    </nav>
  );
}
