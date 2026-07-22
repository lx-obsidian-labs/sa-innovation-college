import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-ZA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

export function truncate(str: string, max: number): string {
  if (str.length <= max) return str;
  return str.slice(0, max).replace(/\s+\S*$/, "") + "...";
}

export function slugToTitle(slug: string): string {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());
}

export function getWhatsAppUrl(phone: string, message?: string): string {
  const cleaned = phone.replace(/[^\d+]/g, "");
  const text = message ? encodeURIComponent(message) : "Hi SA Innovation College, I'd like to learn more.";
  return `https://wa.me/${cleaned.replace("+", "")}?text=${text}`;
}

export function getTelUrl(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
