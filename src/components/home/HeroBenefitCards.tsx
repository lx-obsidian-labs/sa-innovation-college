import Icon from "@/components/ui/Icon";
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
          className="group rounded-xl p-3.5 flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
        >
          <div className="shrink-0 w-10 h-10 rounded-lg bg-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] transition-all duration-300 group-hover:bg-[var(--color-accent)] group-hover:text-white group-hover:scale-110 transition-transform duration-200">
            <Icon name={card.icon} size={5} />
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-white group-hover:text-[var(--color-accent-light)] transition-colors">{card.title}</p>
            <p className="text-xs text-white/70 leading-tight">{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
