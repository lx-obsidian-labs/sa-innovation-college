"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function RouteProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    bar.style.width = "20%";
    bar.style.opacity = "1";
    const t1 = setTimeout(() => {
      bar.style.width = "70%";
    }, 200);
    const t2 = setTimeout(() => {
      bar.style.width = "100%";
      bar.style.opacity = "0";
    }, 500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [pathname]);

  return (
    <div
      className="fixed top-0 left-0 z-[99999] h-[3px] w-0 bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-primary-light)] to-[var(--color-primary)] transition-all duration-[500ms] ease-out"
      ref={barRef}
      aria-hidden
    />
  );
}

export function ReadingProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
          bar.style.width = `${progress}%`;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-[3px] left-0 z-[99998] h-[2px] w-full bg-[var(--color-gray-200)]/50" aria-hidden>
      <div
        ref={barRef}
        className="h-full bg-gradient-to-r from-[var(--color-primary)]/30 to-[var(--color-primary)]/10 transition-all duration-100 ease-out"
        style={{ width: "0%" }}
      />
    </div>
  );
}
