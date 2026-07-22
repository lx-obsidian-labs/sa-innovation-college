import { cn } from "@/lib/utils";

type BadgeVariant = "primary" | "accent" | "success" | "info" | "gray";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  primary: "bg-[var(--color-primary)] text-[var(--color-text-inverse)]",
  accent: "bg-[var(--color-accent)] text-[var(--color-gray-900)]",
  success: "bg-[var(--color-success)] text-white",
  info: "bg-[var(--color-info)] text-white",
  gray: "bg-[var(--color-gray-100)] text-[var(--color-gray-700)]",
};

export default function Badge({ children, variant = "primary", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide",
        VARIANT_CLASSES[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
