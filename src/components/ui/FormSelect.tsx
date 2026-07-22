import { cn } from '@/lib/utils';
import React from 'react';

export interface FormSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  placeholder?: string;
}

const FormSelect = React.forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ label, error, hint, required, options, placeholder, className, ...props }, ref) => (
    <div className="w-full">
      {label && (
        <label
          htmlFor={props.id}
          className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            'w-full px-4 py-3 pr-10 rounded-lg border transition-all duration-200',
            'bg-[var(--color-white)] text-[var(--color-text-primary)]',
            'outline-none focus:ring-2 appearance-none',
            error
              ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
              : 'border-[var(--color-border)] focus:border-[var(--color-border-focus)] focus:ring-[var(--color-primary)]/20',
            className
          )}
          {...props}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <svg
          className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)] pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
      {error && (
        <p className="mt-1.5 text-xs font-medium text-red-500">{error}</p>
      )}
      {hint && !error && (
        <p className="mt-1.5 text-xs text-[var(--color-text-muted)]">{hint}</p>
      )}
    </div>
  )
);

FormSelect.displayName = 'FormSelect';

export default FormSelect;
