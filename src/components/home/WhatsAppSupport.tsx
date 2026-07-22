"use client";

import { useState } from "react";
import { getWhatsAppUrl } from "@/lib/utils";
import Icon from "@/components/ui/Icon";

export default function WhatsAppSupport() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[var(--z-fixed)] flex flex-col items-end gap-3">
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 w-72 animate-scaleIn origin-bottom-right">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center text-white shrink-0 shadow-md">
              <Icon name="whatsapp" size={5} />
            </div>
            <div>
              <p className="text-sm font-bold text-[var(--color-gray-900)]">SA Innovation</p>
              <p className="text-xs text-[var(--color-gray-500)]">Typically replies instantly</p>
            </div>
          </div>
          <div className="relative mb-3">
            <div className="absolute -left-1 -top-1 w-2 h-2 bg-white border-l border-t border-gray-100 rotate-45" />
            <p className="text-xs text-[var(--color-gray-500)] bg-[var(--color-gray-50)] rounded-xl p-3.5 leading-relaxed">
              Hi there! How can we help you with your educational journey?
            </p>
          </div>
          <a
            href={getWhatsAppUrl("+27727733960")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-sm font-semibold py-3 rounded-xl hover:from-[#128C7E] hover:to-[#128C7E] transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <Icon name="whatsapp" size={4} />
            Start Chat
          </a>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 active:scale-95"
        aria-label={isOpen ? "Close chat" : "Chat on WhatsApp"}
      >
        {isOpen ? (
          <Icon name="x-mark" size={6} />
        ) : (
          <Icon name="whatsapp" size={7} />
        )}
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" aria-hidden />
      </button>
    </div>
  );
}
