"use client";

import { useRef, useEffect, useState, Children, type ReactNode, isValidElement } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  once?: boolean;
  distance?: number;
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 700,
  once = true,
  distance = 2,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const d = distance * 0.25;
  const hidden = direction === "up" ? `translate-y-${d} opacity-0` :
    direction === "down" ? `-translate-y-${d} opacity-0` :
    direction === "left" ? `translate-x-${d} opacity-0` :
    `-translate-x-${d} opacity-0`;

  const style: React.CSSProperties = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  };

  if (direction === "up") style.transform = visible ? "translateY(0)" : `translateY(${distance}rem)`;
  else if (direction === "down") style.transform = visible ? "translateY(0)" : `translateY(-${distance}rem)`;
  else if (direction === "left") style.transform = visible ? "translateX(0)" : `translateX(${distance}rem)`;
  else if (direction === "right") style.transform = visible ? "translateX(0)" : `translateX(-${distance}rem)`;

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out will-change-transform",
        visible ? "opacity-100" : "opacity-0",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  once?: boolean;
}

export function StaggerReveal({
  children,
  className,
  staggerDelay = 120,
  direction = "up",
  duration = 600,
  once = true,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const getTransform = (i: number): React.CSSProperties => {
    const base: React.CSSProperties = {
      transitionDuration: `${duration}ms`,
      transitionDelay: visible ? `${staggerDelay * i}ms` : "0ms",
      transitionProperty: "opacity, transform",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    };
    if (direction === "up") {
      base.transform = visible ? "translateY(0)" : "translateY(1.5rem)";
    } else if (direction === "down") {
      base.transform = visible ? "translateY(0)" : "translateY(-1.5rem)";
    } else if (direction === "left") {
      base.transform = visible ? "translateX(0)" : "translateX(1.5rem)";
    } else {
      base.transform = visible ? "translateX(0)" : "translateX(-1.5rem)";
    }
    base.opacity = visible ? 1 : 0;
    return base;
  };

  return (
    <div ref={ref} className={cn("", className)}>
      <div className="contents">
        {Children.map(children, (child, i) => {
          if (!isValidElement(child)) return child;
          return (
            <div style={getTransform(i)}>
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
}
