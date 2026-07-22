"use client";

interface CarouselPaginationProps {
  total: number;
  current: number;
  onGoTo: (index: number) => void;
}

export default function CarouselPagination({ total, current, onGoTo }: CarouselPaginationProps) {
  if (total <= 1) return null;

  return (
    <nav aria-label="Carousel navigation" className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
      {Array.from({ length: total }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => onGoTo(idx)}
          className={`rounded-full transition-all duration-300 ${
            idx === current ? "w-8 bg-[var(--color-accent)]" : "w-2 bg-white/40 hover:bg-white/60"
          }`}
          style={{ height: "8px", minWidth: idx === current ? "2rem" : "0.5rem" }}
          aria-label={`Go to slide ${idx + 1} of ${total}`}
          aria-current={idx === current ? "true" : undefined}
        />
      ))}
    </nav>
  );
}
