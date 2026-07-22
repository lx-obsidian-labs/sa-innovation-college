export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[1070] focus:rounded-xl focus:bg-[var(--color-primary)] focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-[var(--color-text-inverse)] focus:shadow-lg focus:ring-2 focus:ring-white/30 focus:-translate-y-0.5 transition-all duration-200"
    >
      Skip to main content
    </a>
  );
}
