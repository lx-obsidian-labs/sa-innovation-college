import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({ eyebrow, title, description, align = "center", className }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", align === "left" && "text-left", className)}>
      {eyebrow && (
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-accent)] mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="font-bold text-[var(--color-text-primary)] mb-4">{title}</h2>
      {description && (
        <p className="text-[var(--color-text-secondary)] text-[var(--fs-md)] leading-relaxed">{description}</p>
      )}
    </div>
  );
}
