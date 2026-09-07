import { type ReactNode } from "react";

interface GradientMeshProps {
  children: ReactNode;
  variant?: "vibrant" | "hero" | "subtle";
  className?: string;
  as?: "div" | "section";
}

export default function GradientMesh({
  children,
  variant = "vibrant",
  className = "",
  as: Tag = "div",
}: GradientMeshProps) {
  const bgClass =
    variant === "hero"
      ? "bg-mesh-gradient-hero"
      : variant === "subtle"
        ? "bg-mesh-gradient-subtle"
        : "bg-mesh-gradient-vibrant";

  return <Tag className={`${bgClass} ${className}`}>{children}</Tag>;
}
