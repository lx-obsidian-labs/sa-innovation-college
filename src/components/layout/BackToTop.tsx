"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/Icon";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      setVisible(scrollTop > 500);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const circumference = 2 * Math.PI * 20;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 left-6 z-[var(--z-fixed)] flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)]/90 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-[var(--color-primary)] hover:shadow-xl hover:-translate-y-1 hover:scale-105 active:scale-95 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 48 48" aria-hidden>
        <circle cx="24" cy="24" r="20" fill="none" stroke="white" strokeWidth="2" opacity="0.15" />
        <circle
          ref={circleRef}
          cx="24" cy="24" r="20" fill="none" stroke="white" strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-[stroke-dashoffset] duration-200 ease-out"
          opacity="0.6"
        />
      </svg>
      <Icon name="arrow-up" size={5} className="relative z-10" />
    </button>
  );
}
