import Image from "next/image";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
  image?: string;
  imageAlt?: string;
  badge?: string;
  badgeVariant?: "primary" | "accent" | "success" | "warning" | "error";
}

const PADDING_CLASSES = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const BADGE_CLASSES = {
  primary: "bg-[var(--color-primary)] text-white",
  accent: "bg-[var(--color-accent)] text-[var(--color-gray-900)]",
  success: "bg-[var(--color-success)] text-white",
  warning: "bg-[var(--color-warning)] text-white",
  error: "bg-[var(--color-error)] text-white",
};

export default function Card({
  children,
  className,
  padding = "md",
  hover = false,
  image,
  imageAlt = "",
  badge,
  badgeVariant = "primary",
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-raised)] shadow-[var(--shadow-card)] relative overflow-hidden",
        hover && "transition-shadow duration-200 hover:shadow-[var(--shadow-card-hover)]",
        className
      )}
    >
      {image && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image src={image} alt={imageAlt} fill className="object-cover" />
        </div>
      )}
      {badge && (
        <span
          className={cn(
            "absolute top-3 right-3 z-10 text-xs font-semibold uppercase px-2.5 py-0.5 rounded-full",
            BADGE_CLASSES[badgeVariant]
          )}
        >
          {badge}
        </span>
      )}
      <div className={PADDING_CLASSES[padding]}>{children}</div>
    </div>
  );
}
