import { cn } from '@/lib/utils';
import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'primary' | 'accent';
  size?: 'xs' | 'sm' | 'md';
  dot?: boolean;
}

const badgeVariants: Record<string, string> = {
  default: 'bg-[var(--color-gray-100)] text-[var(--color-gray-700)]',
  primary: 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]',
  accent: 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]',
  success: 'bg-green-100 text-green-700',
  warning: 'bg-yellow-100 text-yellow-700',
  danger: 'bg-red-100 text-red-700',
  info: 'bg-blue-100 text-blue-700',
};

const sizeVariants: Record<string, string> = {
  xs: 'px-2 py-0.5 text-xs',
  sm: 'px-2.5 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
};

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({
    className,
    variant = 'default',
    size = 'sm',
    dot = false,
    children,
    ...props
  }, ref) => (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center gap-1.5 font-semibold rounded-full whitespace-nowrap',
        badgeVariants[variant],
        sizeVariants[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-current" />
      )}
      {children}
    </span>
  )
);

Badge.displayName = 'Badge';

export default Badge;
