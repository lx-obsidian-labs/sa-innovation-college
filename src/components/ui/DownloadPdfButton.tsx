"use client";

import Icon from "@/components/ui/Icon";

interface DownloadPdfButtonProps {
  targetId: string;
  label?: string;
  className?: string;
}

export default function DownloadPdfButton({ targetId, label = "Download PDF", className = "" }: DownloadPdfButtonProps) {
  const handleDownload = () => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const original = document.title;
    document.title = document.querySelector("h1")?.textContent?.trim() || "SA Innovation College";
    window.print();
    document.title = original;
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      className={`no-print inline-flex items-center gap-2 rounded-xl border-2 border-[var(--color-primary)]/20 px-5 py-2.5 text-sm font-bold text-[var(--color-primary)] transition-all hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 hover:-translate-y-0.5 hover:shadow-md ${className}`}
    >
      <Icon name="arrow-down-tray" size={4} />
      {label}
    </button>
  );
}
