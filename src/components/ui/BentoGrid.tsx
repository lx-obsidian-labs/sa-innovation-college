import { type ReactNode } from "react";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

interface BentoItemProps {
  children: ReactNode;
  className?: string;
  span?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2;
}

export function BentoGrid({ children, className = "" }: BentoGridProps) {
  return (
    <div className={`bento-grid ${className}`}>
      {children}
    </div>
  );
}

export function BentoItem({
  children,
  className = "",
  span = 1,
  rowSpan = 1,
}: BentoItemProps) {
  const spanClass =
    span === 2
      ? "bento-span-2"
      : span === 3
        ? "bento-span-3"
        : span === 4
          ? "bento-span-4"
          : "";
  const rowClass = rowSpan === 2 ? "bento-row-2" : "";

  return (
    <div
      className={`${spanClass} ${rowClass} card-lift rounded-xl overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}
