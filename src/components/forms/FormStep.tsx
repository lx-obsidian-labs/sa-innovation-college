import { cn } from '@/lib/utils';
import React from 'react';

export interface FormStepProps {
  step: number;
  totalSteps: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
  onNext?: () => void;
  onPrev?: () => void;
  nextLabel?: string;
  prevLabel?: string;
  loading?: boolean;
  children: React.ReactNode;
}

export function FormStep({
  step,
  totalSteps,
  title,
  description,
  icon,
  onNext,
  onPrev,
  nextLabel = 'Next Step',
  prevLabel = 'Back',
  loading = false,
  children,
}: FormStepProps) {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Step Header */}
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white shadow-lg">
          {icon || (
            <span className="text-lg font-bold">{step}</span>
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
            {title}
          </h3>
          <p className="text-sm text-[var(--color-text-muted)] mt-1">{description}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-[var(--color-gray-200)] h-1.5 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] transition-all duration-500"
          style={{ width: `${(step / totalSteps) * 100}%` }}
        />
      </div>

      {/* Step Content */}
      <div className="space-y-6">{children}</div>

      {/* Navigation */}
      {(onNext || onPrev) && (
        <div className="flex gap-3 pt-6 border-t border-[var(--color-border)]">
          {onPrev && (
            <button
              type="button"
              onClick={onPrev}
              disabled={loading}
              className={cn(
                'inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wide rounded-lg',
                'border border-[var(--color-border)] text-[var(--color-text-primary)]',
                'hover:bg-[var(--color-surface-alt)] transition-all',
                'disabled:opacity-60 disabled:cursor-not-allowed'
              )}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              {prevLabel}
            </button>
          )}
          {onNext && (
            <button
              type="button"
              onClick={onNext}
              disabled={loading}
              className={cn(
                'flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wide rounded-lg',
                'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white',
                'hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all',
                'disabled:opacity-60 disabled:cursor-not-allowed'
              )}
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  {nextLabel}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </>
              )}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
