interface SkeletonProps {
  className?: string;
  variant?: "text" | "circle" | "rect" | "card";
  width?: string;
  height?: string;
  count?: number;
}

export default function Skeleton({
  className = "",
  variant = "rect",
  width,
  height,
  count = 1,
}: SkeletonProps) {
  const baseClass = "skeleton";
  const variantClass =
    variant === "text"
      ? "skeleton-text"
      : variant === "circle"
        ? "skeleton-circle"
        : variant === "card"
          ? "skeleton-card"
          : "";

  return (
    <div className={`flex flex-col gap-2 ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`${baseClass} ${variantClass}`}
          style={{
            width: width || (variant === "circle" ? "3rem" : "100%"),
            height: height || (variant === "circle" ? "3rem" : variant === "text" ? "1em" : "8rem"),
          }}
        />
      ))}
    </div>
  );
}

export function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div className={`skeleton-card space-y-4 ${className}`}>
      <Skeleton variant="rect" height="12rem" />
      <Skeleton variant="text" width="60%" />
      <Skeleton variant="text" count={2} />
      <div className="flex gap-2 pt-2">
        <Skeleton variant="rect" width="5rem" height="2rem" />
        <Skeleton variant="rect" width="5rem" height="2rem" />
      </div>
    </div>
  );
}

export function SkeletonCourseCard() {
  return (
    <div className="skeleton-card space-y-3">
      <Skeleton variant="rect" height="10rem" />
      <Skeleton variant="text" width="40%" height="0.75rem" />
      <Skeleton variant="text" width="80%" />
      <Skeleton variant="text" count={2} />
      <div className="flex justify-between items-center pt-3">
        <Skeleton variant="rect" width="6rem" height="2rem" />
        <Skeleton variant="circle" width="2rem" height="2rem" />
      </div>
    </div>
  );
}
