import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

export function getWhatsAppUrl(phone: string, message?: string): string {
  const cleaned = phone.replace(/[^\d+]/g, "");
  const text = message ? encodeURIComponent(message) : "Hi SA Innovation College, I'd like to learn more.";
  return `https://wa.me/${cleaned.replace("+", "")}?text=${text}`;
}

export function getTelUrl(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
