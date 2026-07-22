import { cn } from '@/lib/utils';
import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  border?: boolean;
  shadow?: 'sm' | 'md' | 'lg' | 'none';
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, border = true, shadow = 'md', ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-xl bg-[var(--color-surface-raised)] overflow-hidden',
        border && 'border border-[var(--color-border)]',
        shadow === 'sm' && 'shadow-[var(--shadow-sm)]',
        shadow === 'md' && 'shadow-[var(--shadow-md)]',
        shadow === 'lg' && 'shadow-[var(--shadow-lg)]',
        hover && 'hover:shadow-[var(--shadow-lg)] hover:border-[var(--color-border-strong)] hover:-translate-y-1 transition-all duration-300 cursor-pointer',
        className
      )}
      {...props}
    />
  )
);

Card.displayName = 'Card';

export default Card;
