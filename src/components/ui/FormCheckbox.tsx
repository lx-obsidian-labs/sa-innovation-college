import { cn } from '@/lib/utils';
import React from 'react';

export interface FormCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  description?: string;
}

const FormCheckbox = React.forwardRef<HTMLInputElement, FormCheckboxProps>(
  ({ label, error, description, className, ...props }, ref) => (
    <div className="flex items-start gap-3">
      <div className="relative flex h-5 w-5 shrink-0 mt-0.5">
        <input
          ref={ref}
          type="checkbox"
          className={cn(
            'h-5 w-5 rounded border-2 transition-all',
            'accent-[var(--color-primary)]',
            'cursor-pointer appearance-none',
            error
              ? 'border-red-400 focus:ring-2 focus:ring-red-500/20'
              : 'border-[var(--color-border)] focus:ring-2 focus:ring-[var(--color-primary)]/20',
            'checked:bg-[var(--color-primary)] checked:border-[var(--color-primary)]',
            className
          )}
          {...props}
        />
        <svg
          className="absolute inset-0 w-5 h-5 text-white pointer-events-none opacity-0 checked:opacity-100 transition-opacity"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        {label && (
          <label htmlFor={props.id} className="text-sm font-medium text-[var(--color-text-primary)] cursor-pointer">
            {label}
          </label>
        )}
        {description && (
          <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{description}</p>
        )}
        {error && (
          <p className="text-xs font-medium text-red-500 mt-1">{error}</p>
        )}
      </div>
    </div>
  )
);

FormCheckbox.displayName = 'FormCheckbox';

export default FormCheckbox;
