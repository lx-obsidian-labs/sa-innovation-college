"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";

const CONSENT_KEY = "saic-cookie-consent";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[var(--z-fixed)] p-4 sm:p-6">
      <div className="mx-auto max-w-4xl rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-2xl shadow-black/10 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <p className="mb-1 text-sm font-bold text-[var(--color-text-primary)]">
              We value your privacy
            </p>
            <p className="text-xs leading-relaxed text-[var(--color-text-secondary)]">
              We use cookies to enhance your browsing experience, serve personalised content and analyse our traffic. By clicking &quot;Accept&quot;, you consent to our use of cookies. Read our{" "}
              <a href="/privacy" className="font-semibold text-[var(--color-primary)] hover:underline">
                Privacy Policy
              </a>{" "}
              for details.
            </p>
          </div>
          <div className="flex shrink-0 gap-2">
            <button
              onClick={decline}
              className="rounded-xl border border-[var(--color-border)] px-4 py-2 text-xs font-semibold text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-gray-50)]"
            >
              Decline
            </button>
            <Button variant="primary" size="sm" onClick={accept}>
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
