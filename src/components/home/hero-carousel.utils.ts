import type { SlideData } from "./hero-carousel.types";

export function clampIndex(index: number, total: number): number {
  if (total === 0) return 0;
  return ((index % total) + total) % total;
}

export function getNextIndex(current: number, total: number, direction: "forward" | "backward"): number {
  return direction === "forward" ? clampIndex(current + 1, total) : clampIndex(current - 1, total);
}

export function validateSlides(slides: SlideData[]): SlideData[] {
  return slides.filter((s) => s.title?.trim() && s.image?.trim());
}

export function getSlideLabel(current: number, total: number): string {
  return `Slide ${current + 1} of ${total}`;
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
