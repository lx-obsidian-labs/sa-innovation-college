"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import type { CarouselState, CarouselContext, CarouselEvent } from "./hero-carousel.types";
import { clampIndex, prefersReducedMotion } from "./hero-carousel.utils";

const AUTOPLAY_INTERVAL = 7000;
const TRANSITION_DURATION = 600;

function reducer(state: CarouselContext, event: CarouselEvent): CarouselContext {
  const { current, total } = state;
  const next = (dir: "forward" | "backward") => ({
    ...state,
    current: dir === "forward" ? clampIndex(current + 1, total) : clampIndex(current - 1, total),
    direction: dir,
    isTransitioning: true,
  });

  switch (event.type) {
    case "NEXT":
      if (state.isTransitioning) return state;
      return next("forward");

    case "PREV":
      if (state.isTransitioning) return state;
      return next("backward");

    case "GO_TO":
      if (state.isTransitioning || event.index === current) return state;
      return {
        ...state,
        current: event.index,
        direction: event.index > current ? "forward" : "backward",
        isTransitioning: true,
      };

    case "PAUSE":
    case "HOVER_ENTER":
    case "FOCUS_ENTER":
      return { ...state, state: "paused" as CarouselState };

    case "PLAY":
    case "HOVER_LEAVE":
    case "FOCUS_LEAVE":
      return total > 1 ? { ...state, state: "playing" as CarouselState } : state;

    case "VISIBILITY_HIDDEN":
      return { ...state, state: "paused" as CarouselState };

    case "VISIBILITY_VISIBLE":
      return total > 1 ? { ...state, state: "playing" as CarouselState } : state;

    case "TRANSITION_END":
      return { ...state, isTransitioning: false };

    case "REDUCED_MOTION":
      return { ...state, state: "user-controlled" as CarouselState };

    case "SWIPE":
      if (state.isTransitioning) return state;
      return event.direction === "left" ? next("forward") : next("backward");

    default:
      return state;
  }
}

export function useHeroCarousel(totalSlides: number) {
  const [context, setContext] = useState<CarouselContext>({
    state: "playing",
    current: 0,
    total: totalSlides,
    direction: "forward",
    isTransitioning: false,
  });

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = prefersReducedMotion();
    if (reducedMotion.current && totalSlides > 1) {
      setContext((prev) => ({ ...prev, state: "user-controlled" }));
    }

    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => {
      reducedMotion.current = e.matches;
      setContext((prev) =>
        e.matches ? { ...prev, state: "user-controlled" } : { ...prev, state: "playing" }
      );
    };
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [totalSlides]);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    clearTimer();
    if (context.state === "playing" && totalSlides > 1 && !reducedMotion.current) {
      timerRef.current = setInterval(() => {
        setContext((prev) => reducer(prev, { type: "NEXT" }));
      }, AUTOPLAY_INTERVAL);
    }
    return clearTimer;
  }, [context.state, totalSlides, clearTimer]);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        setContext((prev) => reducer(prev, { type: "VISIBILITY_HIDDEN" }));
      } else {
        setContext((prev) => reducer(prev, { type: "VISIBILITY_VISIBLE" }));
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  useEffect(() => {
    if (context.isTransitioning) {
      const timeout = setTimeout(() => {
        setContext((prev) => reducer(prev, { type: "TRANSITION_END" }));
      }, TRANSITION_DURATION);
      return () => clearTimeout(timeout);
    }
  }, [context.isTransitioning]);

  const dispatch = useCallback((event: CarouselEvent) => {
    setContext((prev) => reducer(prev, event));
  }, []);

  return { context, dispatch };
}
