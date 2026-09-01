"use client";

import { getWhatsAppUrl, getTelUrl } from "@/lib/utils";
import Icon from "@/components/ui/Icon";

export default function UtilityBar() {
  return (
    <div className="bg-gradient-to-r from-[var(--saic-campaign-crimson-dark)] via-[var(--saic-campaign-crimson)] to-[var(--saic-navy-950)] text-[var(--color-text-inverse)] text-[11px]">
      <div className="mx-auto flex max-w-[var(--container-max)] items-center justify-between px-[var(--container-padding)] h-[36px]">
        <div className="flex items-center gap-4">
          <a
            href={getTelUrl("0800 014 568")}
            className="flex items-center gap-1.5 hover:text-[var(--color-accent)] transition-colors"
          >
            <Icon name="phone" size={3} />
            0800 014 568
          </a>
          <a
            href={getWhatsAppUrl("+27727733960")}
            className="flex items-center gap-1.5 hover:text-[var(--color-accent)] transition-colors hidden sm:flex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="whatsapp" size={3} />
            WhatsApp
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-[var(--color-gray-400)]">Mon &ndash; Fri: 08:00&ndash;17:00</span>
          <a href="/apply" className="flex items-center gap-1.5 hover:text-[var(--color-accent)] transition-colors font-medium">
            <Icon name="arrow-right" size={3} />
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}
