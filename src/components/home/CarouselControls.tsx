"use client";

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
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-200 opacity-0 lg:opacity-100 focus-visible:opacity-100"
        aria-label="Previous slide"
        style={{ minWidth: "44px", minHeight: "44px" }}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={onNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-200 opacity-0 lg:opacity-100 focus-visible:opacity-100"
        aria-label="Next slide"
        style={{ minWidth: "44px", minHeight: "44px" }}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <button
        onClick={onTogglePause}
        className="absolute bottom-6 right-6 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-200 opacity-0 lg:opacity-100 focus-visible:opacity-100"
        aria-label={isPaused ? "Play carousel" : "Pause carousel"}
        style={{ minWidth: "44px", minHeight: "44px" }}
      >
        {isPaused ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
          </svg>
        )}
      </button>
    </>
  );
}
