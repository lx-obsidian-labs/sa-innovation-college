"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const FALLBACK_DEADLINE = "2026-09-01T23:59:59+02:00";

function formatDeadline(deadline: string) {
  const date = new Date(deadline);
  if (Number.isNaN(date.getTime())) return "the published closing date";
  return new Intl.DateTimeFormat("en-ZA", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Africa/Johannesburg",
  }).format(date);
}

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
  const deadlineLabel = formatDeadline(deadline);

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
    <div className="mx-auto mb-7 max-w-xl rounded-2xl border border-white/20 bg-black/15 px-5 py-5 text-left shadow-[0_12px_32px_rgba(80,0,18,0.25)] backdrop-blur-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-white">Applications close soon</p>
          <p className="mt-1 text-sm font-medium text-white">September 2026 intake · Apply before places fill</p>
          <p className="mt-1 text-xs text-white/75">Closing: {deadlineLabel} (South Africa)</p>
        </div>
        <Link href="/apply" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--saic-gold-400)] via-[var(--saic-gold-500)] to-[var(--saic-gold-600)] px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-[var(--saic-navy-950)] shadow-lg shadow-[var(--saic-gold-500)]/30 transition-all duration-300 hover:shadow-[var(--saic-gold-500)]/50 hover:-translate-y-0.5 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-2 btn-shine">
          Apply Online
        </Link>
      </div>
      <div className="mt-4" role="timer" aria-label={remaining.ended ? "Applications are currently closed" : `Time remaining until applications close on ${deadlineLabel}`}>
          {remaining.ended ? <p className="rounded-xl bg-[var(--saic-campaign-crimson-dark)] px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-[var(--saic-campaign-crimson-dark)]/20">Applications are currently closed. Contact Admissions for the next intake.</p> : <div className="flex gap-2.5">
          {units.map(([value, label]) => (
          <div key={label} className="min-w-0 flex-1 rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent px-2 py-2.5 text-center shadow-[0_5px_10px_rgba(0,0,0,0.2)] backdrop-blur-sm">
            <span className="block text-2xl font-black leading-none text-white tabular-nums sm:text-3xl">{String(value).padStart(2, "0")}</span>
            <span className="mt-1 block text-[10px] font-extrabold uppercase tracking-wide text-white/85">{label}</span>
          </div>
          ))}
        </div>}
      </div>
    </div>
  );
}