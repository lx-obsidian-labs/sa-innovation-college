"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface ParallaxWrapperProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export default function ParallaxWrapper({
  children,
  speed = 0.15,
  className = "",
  direction = "up",
}: ParallaxWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = elementCenter - windowHeight / 2;
      setOffset(distanceFromCenter * speed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  const transform =
    direction === "up" || direction === "down"
      ? `translateY(${direction === "up" ? -offset : offset}px)`
      : `translateX(${direction === "left" ? -offset : offset}px)`;

  return (
    <div ref={ref} className={`parallax-container ${className}`}>
      <div className="parallax-layer" style={{ transform }}>
        {children}
      </div>
    </div>
  );
}
