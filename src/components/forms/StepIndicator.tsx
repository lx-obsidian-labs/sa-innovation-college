import { cn } from '@/lib/utils';

export interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  steps?: string[];
  onStepClick?: (step: number) => void;
}

export function StepIndicator({
  currentStep,
  totalSteps,
  steps,
  onStepClick,
}: StepIndicatorProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNum = index + 1;
          const isCompleted = stepNum < currentStep;
          const isCurrent = stepNum === currentStep;

          return (
            <div key={stepNum} className="flex items-center flex-1">
              {/* Step Circle */}
              <button
                onClick={() => onStepClick?.(stepNum)}
                disabled={stepNum > currentStep}
                className={cn(
                  'relative flex h-10 w-10 items-center justify-center rounded-full font-semibold transition-all duration-300',
                  'disabled:cursor-default',
                  isCompleted
                    ? 'bg-green-500 text-white shadow-lg'
                    : isCurrent
                      ? 'bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white shadow-lg shadow-[var(--color-primary)]/30'
                      : 'bg-[var(--color-gray-200)] text-[var(--color-text-muted)]'
                )}
              >
                {isCompleted ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span>{stepNum}</span>
                )}
              </button>

              {/* Step Label */}
              {steps && (
                <div className="ml-2 hidden sm:block">
                  <p className={cn(
                    'text-xs font-medium leading-tight max-w-[60px]',
                    isCurrent
                      ? 'text-[var(--color-primary)]'
                      : isCompleted
                        ? 'text-green-600'
                        : 'text-[var(--color-text-muted)]'
                  )}>
                    {steps[index]}
                  </p>
                </div>
              )}

              {/* Connector Line */}
              {index < totalSteps - 1 && (
                <div className={cn(
                  'flex-1 h-1 mx-2 sm:mx-4 transition-all duration-500',
                  stepNum < currentStep
                    ? 'bg-green-500'
                    : stepNum === currentStep
                      ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-gray-200)]'
                      : 'bg-[var(--color-gray-200)]'
                )} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
