import type { BenefitCard } from "./hero-carousel.types";

interface HeroBenefitCardsProps {
  cards: BenefitCard[];
}

export default function HeroBenefitCards({ cards }: HeroBenefitCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: "0.5s" }}>
      {cards.map((card) => (
        <div
          key={card.title}
          className="glass rounded-xl p-3 flex items-center gap-3"
        >
          <div className="shrink-0 w-9 h-9 rounded-lg bg-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)]">
            {card.icon}
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-white">{card.title}</p>
            <p className="text-xs text-white/70 leading-tight">{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
