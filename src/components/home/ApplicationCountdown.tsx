"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const FALLBACK_DEADLINE = "2026-09-01T23:59:59+02:00";

function getRemaining(deadline: string) {
  const distance = Math.max(0, new Date(deadline).getTime() - Date.now());
  return {
    days: Math.floor(distance / 86_400_000),
    hours: Math.floor((distance / 3_600_000) % 24),
    minutes: Math.floor((distance / 60_000) % 60),
    seconds: Math.floor((distance / 1_000) % 60),
    ended: distance === 0,
  };
}

export default function ApplicationCountdown() {
  const deadline = process.env.NEXT_PUBLIC_APPLICATION_DEADLINE || FALLBACK_DEADLINE;
  const [remaining, setRemaining] = useState(() => getRemaining(deadline));

  useEffect(() => {
    const update = () => setRemaining(getRemaining(deadline));
    update();
    const timer = window.setInterval(update, 1_000);
    return () => window.clearInterval(timer);
  }, [deadline]);

  const units = [
    [remaining.days, "Days"],
    [remaining.hours, "Hours"],
    [remaining.minutes, "Minutes"],
    [remaining.seconds, "Seconds"],
  ] as const;

  return (
    <div className="mx-auto mb-7 max-w-xl rounded-2xl border border-[var(--color-accent)]/35 bg-[var(--saic-navy-950)]/75 px-4 py-3 text-left shadow-lg backdrop-blur-sm" aria-live="polite">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">September 2026 intake</p>
          <p className="mt-1 text-sm font-medium text-white/85">Applications close soon. Secure your place today.</p>
        </div>
        <Link href="/apply" className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[var(--color-primary)] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[var(--color-primary-dark)] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-2">
          Apply before close
        </Link>
      </div>
      <div className="mt-3 flex gap-2" aria-label={remaining.ended ? "Applications are currently closed" : "Time remaining before applications close"}>
        {remaining.ended ? <span className="text-sm font-semibold text-white">Applications are currently closed. Contact Admissions for the next intake.</span> : units.map(([value, label]) => (
          <div key={label} className="min-w-0 flex-1 rounded-lg bg-white/10 px-2 py-1.5 text-center">
            <span className="block text-lg font-extrabold leading-none text-white tabular-nums">{String(value).padStart(2, "0")}</span>
            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-wide text-white/65">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}