"use client";

import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Icon from "@/components/ui/Icon";

type ButtonVariant = "primary" | "secondary" | "accent" | "ghost" | "outline" | "primary-glow" | "premium";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  onClick?: never;
  type?: never;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-primary)] text-[var(--color-text-inverse)] border border-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] hover:border-[var(--color-primary-dark)] shadow-sm hover:shadow-md hover:shadow-[var(--color-primary)]/15 btn-shine",
  secondary:
    "bg-[var(--color-secondary)] text-[var(--color-text-inverse)] border border-[var(--color-secondary)] hover:bg-[var(--color-secondary-hover)] hover:border-[var(--color-secondary-hover)] hover:shadow-md",
  accent:
    "bg-[var(--color-accent)] text-[var(--color-gray-900)] border border-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] hover:border-[var(--color-accent-dark)] shadow-sm hover:shadow-md hover:shadow-[var(--color-accent)]/20 btn-shine",
  ghost:
    "bg-transparent text-[var(--color-primary)] border border-transparent hover:bg-[var(--color-gray-100)] hover:shadow-sm",
  outline:
    "bg-transparent text-[var(--color-primary)] border border-[var(--color-gray-300)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 hover:shadow-sm",
  "primary-glow":
    "bg-[var(--color-primary)] text-[var(--color-text-inverse)] border border-[var(--color-primary)] shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.4)] hover:shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.6)] hover:bg-[var(--color-primary-dark)] hover:scale-[1.02]",
  premium:
    "bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary-dark)] text-[var(--color-text-inverse)] border-0 bg-[length:200%_200%] animate-border-flow shadow-md hover:shadow-lg hover:shadow-[var(--color-primary)]/20 btn-shine",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-[0.8125rem] gap-1.5",
  md: "px-5 py-2.5 text-sm gap-2",
  lg: "px-6 py-3 text-base gap-2.5",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  href,
  onClick,
  type = "button",
  iconLeft,
  iconRight,
  fullWidth,
  disabled,
  loading,
}: ButtonProps) {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const ripplesRef = useRef<number>(0);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || loading) return;
      const id = ++ripplesRef.current;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setRipples((prev) => [...prev, { id, x, y }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
      onClick?.(e);
    },
    [onClick, disabled, loading]
  );

  const classes = cn(
    "inline-flex items-center justify-center font-semibold uppercase tracking-wide rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap relative overflow-hidden hover:scale-[1.02] active:scale-[0.98]",
    (disabled || loading) && "opacity-60 cursor-not-allowed hover:scale-100 active:scale-100",
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    fullWidth && "w-full",
    className
  );

  const content = (
    <>
      {loading && (
        <Icon name="spinner" size={4} animated="spin" />
      )}
      {!loading && iconLeft && <span className="shrink-0">{iconLeft}</span>}
      {children}
      {!loading && iconRight && <span className="shrink-0">{iconRight}</span>}
    </>
  );

  if (href) {
    if (disabled) {
      return <span className={classes} aria-disabled>{content}</span>;
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={handleClick} className={classes} disabled={disabled || loading}>
      {content}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute pointer-events-none rounded-full bg-white/30 animate-ripple"
          style={{ left: r.x, top: r.y, width: 8, height: 8, transform: "translate(-50%, -50%)" }}
        />
      ))}
    </button>
  );
}
