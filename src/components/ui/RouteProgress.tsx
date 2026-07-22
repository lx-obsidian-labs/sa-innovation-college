"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function RouteProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    bar.style.width = "30%";
    bar.style.opacity = "1";
    const timer = setTimeout(() => {
      bar.style.width = "100%";
      bar.style.opacity = "0";
    }, 300);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      className="fixed top-0 left-0 z-[99999] h-[3px] w-0 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary)] transition-all duration-[400ms] ease-out"
      ref={barRef}
      aria-hidden
    />
  );
}
