"use client";

import Icon from "@/components/ui/Icon";

interface CarouselControlsProps {
  total: number;
  isPaused: boolean;
  onPrev: () => void;
  onNext: () => void;
  onTogglePause: () => void;
}

export default function CarouselControls({
  total,
  isPaused,
  onPrev,
  onNext,
  onTogglePause,
}: CarouselControlsProps) {
  if (total <= 1) return null;

  return (
    <>
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-[var(--saic-campaign-crimson-dark)]/80 backdrop-blur-md text-white hover:bg-[var(--saic-campaign-crimson-dark)] hover:scale-105 transition-all duration-200 opacity-0 lg:opacity-100 focus-visible:opacity-100"
        aria-label="Previous slide"
        style={{ minWidth: "44px", minHeight: "44px" }}
      >
        <Icon name="chevron-left" size={5} strokeWidth={2.5} />
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-[var(--saic-campaign-crimson-dark)]/80 backdrop-blur-md text-white hover:bg-[var(--saic-campaign-crimson-dark)] hover:scale-105 transition-all duration-200 opacity-0 lg:opacity-100 focus-visible:opacity-100"
        aria-label="Next slide"
        style={{ minWidth: "44px", minHeight: "44px" }}
      >
        <Icon name="chevron-right" size={5} strokeWidth={2.5} />
      </button>

      <button
        onClick={onTogglePause}
        className="absolute bottom-24 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/25 transition-all duration-200 opacity-0 lg:opacity-100 focus-visible:opacity-100"
        aria-label={isPaused ? "Play carousel" : "Pause carousel"}
        style={{ minWidth: "44px", minHeight: "44px" }}
      >
        {isPaused ? (
          <Icon name="play" size={4} />
        ) : (
          <Icon name="pause" size={4} />
        )}
      </button>
    </>
  );
}
