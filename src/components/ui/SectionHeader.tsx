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
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", align === "left" && "text-left", className)}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-accent)] mb-4 relative">
          <span className="relative inline-flex items-center gap-2.5">
            <span className="h-px w-6 bg-[var(--color-accent)]/40" />
            {eyebrow}
          </span>
        </span>
      )}
      <h2 className="font-bold text-[var(--color-text-primary)] leading-[1.15] mb-4">{title}</h2>
      {description && (
        <p className="text-[var(--color-text-secondary)] text-[var(--fs-md)] leading-relaxed max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  );
}
