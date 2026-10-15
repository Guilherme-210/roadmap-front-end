import React from "react";

export type FeatureCardVariant = "default" | "amber" | "rose" | "emerald";

export interface FeatureCardItem {
  title: string;
  description: string | React.ReactNode;
  icon?: "zap" | "shield" | "stop" | "alert" | "check" | string;
  variant?: FeatureCardVariant;
}

export interface FeatureCardProps {
  card: FeatureCardItem;
  className?: string;
}

function renderCardIcon(icon?: string, variant: FeatureCardVariant = "default") {
  if (!icon) return null;

  switch (icon) {
    case "zap":
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "shield":
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      );
    case "stop":
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      );
    case "alert":
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      );
    case "check":
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      );
    default:
      return null;
  }
}

export function FeatureCard({ card, className = "" }: FeatureCardProps) {
  const variant = card.variant || (card.icon === "alert" ? "rose" : card.icon === "check" ? "emerald" : "amber");

  let containerClasses = "rounded-xl border p-4 sm:p-5 space-y-2 transition-all";
  let titleColorClass = "text-amber-500";

  switch (variant) {
    case "rose":
      containerClasses += " border-rose-500/30 bg-rose-500/5";
      titleColorClass = "text-rose-400";
      break;
    case "emerald":
      containerClasses += " border-emerald-500/30 bg-emerald-500/5";
      titleColorClass = "text-emerald-400";
      break;
    case "amber":
      containerClasses += " border-[var(--border-subtle)] bg-[var(--card-bg)]";
      titleColorClass = "text-amber-500";
      break;
    case "default":
    default:
      containerClasses += " border-[var(--border-subtle)] bg-[var(--card-bg)]";
      titleColorClass = "text-[var(--foreground)] font-bold";
      break;
  }

  return (
    <div className={`${containerClasses} ${className}`}>
      <div className={`flex items-center gap-2 font-semibold text-sm ${titleColorClass}`}>
        {renderCardIcon(card.icon, variant)}
        <span>{card.title}</span>
      </div>
      <div className="text-xs text-[var(--text-muted)] leading-relaxed">
        {card.description}
      </div>
    </div>
  );
}

export interface FeatureCardsGridProps {
  cards: FeatureCardItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function FeatureCardsGrid({
  cards,
  columns = 3,
  className = "",
}: FeatureCardsGridProps) {
  const gridColsClass =
    columns === 2
      ? "grid-cols-1 md:grid-cols-2"
      : columns === 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : "grid-cols-1 md:grid-cols-3";

  return (
    <div className={`grid ${gridColsClass} gap-4 ${className}`}>
      {cards.map((card, idx) => (
        <FeatureCard key={`${card.title}-${idx}`} card={card} />
      ))}
    </div>
  );
}

