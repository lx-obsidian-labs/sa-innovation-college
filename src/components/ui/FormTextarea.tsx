import { cn } from '@/lib/utils';
import React from 'react';

export interface FormTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  showCharCount?: boolean;
}

const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ label, error, hint, required, showCharCount, maxLength, className, value, ...props }, ref) => {
    const charCount = typeof value === 'string' ? value.length : 0;

    return (
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
        <textarea
          ref={ref}
          maxLength={maxLength}
          value={value}
          className={cn(
            'w-full px-4 py-3 rounded-lg border transition-all duration-200',
            'bg-[var(--color-white)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)]',
            'outline-none focus:ring-2 resize-none',
            error
              ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
              : 'border-[var(--color-border)] focus:border-[var(--color-border-focus)] focus:ring-[var(--color-primary)]/20',
            className
          )}
          {...props}
        />
        <div className="flex justify-between items-center mt-1.5">
          {hint && !error && (
            <p className="text-xs text-[var(--color-text-muted)]">{hint}</p>
          )}
          {error && (
            <p className="text-xs font-medium text-red-500">{error}</p>
          )}
          {showCharCount && maxLength && (
            <p className={cn(
              'text-xs font-medium',
              charCount > maxLength * 0.9
                ? 'text-orange-600'
                : 'text-[var(--color-text-muted)]'
            )}>
              {charCount}/{maxLength}
            </p>
          )}
        </div>
      </div>
    );
  }
);

FormTextarea.displayName = 'FormTextarea';

export default FormTextarea;
