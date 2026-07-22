import type { IconName } from "@/components/ui/Icon";

export interface BenefitCard {
  icon: IconName;
  title: string;
  desc: string;
}

export interface SlideData {
  image: string;
  tag: string;
  title: string;
  highlight: string;
  tagline: string;
  description: string;
  cta: { text: string; href: string };
  secondary?: { text: string; href: string };
}

export type CarouselState =
  | "idle"
  | "playing"
  | "paused"
  | "transitioning"
  | "user-controlled";

export type CarouselEvent =
  | { type: "NEXT" }
  | { type: "PREV" }
  | { type: "GO_TO"; index: number }
  | { type: "PAUSE" }
  | { type: "PLAY" }
  | { type: "HOVER_ENTER" }
  | { type: "HOVER_LEAVE" }
  | { type: "FOCUS_ENTER" }
  | { type: "FOCUS_LEAVE" }
  | { type: "VISIBILITY_HIDDEN" }
  | { type: "VISIBILITY_VISIBLE" }
  | { type: "TRANSITION_END" }
  | { type: "REDUCED_MOTION" }
  | { type: "SWIPE"; direction: "left" | "right" };

export interface CarouselContext {
  state: CarouselState;
  current: number;
  total: number;
  direction: "forward" | "backward";
  isTransitioning: boolean;
}

export type CarouselTransition = "crossfade" | "slide" | "instant";
