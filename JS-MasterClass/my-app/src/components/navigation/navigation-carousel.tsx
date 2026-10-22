"use client";

import React, { useState } from "react";
import Link from "next/link";

export interface NavigationCarouselItem {
  id: string;
  label: string;
  href: string;
  badge?: string;
  description?: string;
  current?: boolean;
}

export interface NavigationCarouselProps {
  items: NavigationCarouselItem[];
  maxVisible?: number;
  activeId?: string;
  variant: "main" | "sub";
  className?: string;
  onItemClick?: (item: NavigationCarouselItem) => void;
}

export function NavigationCarousel({
  items,
  maxVisible = 6,
  activeId,
  variant,
  className = "",
  onItemClick,
}: NavigationCarouselProps) {
  const total = items.length;
  const isPaginable = total > maxVisible;

  // Gerenciamento idiomático de índice sem useEffect (evita cascading renders no React 19)
  const [prevActiveId, setPrevActiveId] = useState(activeId);
  const [manualIndex, setManualIndex] = useState<number | null>(null);

  if (activeId !== prevActiveId) {
    setPrevActiveId(activeId);
    setManualIndex(null);
  }

  // Encontrar o índice ativo na lista
  const activeIndex = items.findIndex(
    (item) => item.id === activeId || item.current || false
  );

  // Cálculo automático do índice inicial para garantir que o item ativo esteja visível
  let computedStartIndex = 0;
  if (activeIndex !== -1 && isPaginable) {
    computedStartIndex = Math.min(
      Math.max(0, activeIndex - Math.floor(maxVisible / 2)),
      total - maxVisible
    );
  }

  const effectiveStartIndex =
    manualIndex !== null
      ? Math.min(Math.max(0, manualIndex), Math.max(0, total - maxVisible))
      : computedStartIndex;

  const canPrev = effectiveStartIndex > 0;
  const canNext = effectiveStartIndex + maxVisible < total;

  const handlePrev = () => {
    setManualIndex(Math.max(0, effectiveStartIndex - 1));
  };

  const handleNext = () => {
    setManualIndex(Math.min(total - maxVisible, effectiveStartIndex + 1));
  };

  // Fatiar exatamente maxVisible itens mantendo a quantidade configurada
  const visibleItems = isPaginable
    ? items.slice(effectiveStartIndex, effectiveStartIndex + maxVisible)
    : items;

  return (
    <div
      className={`relative flex items-center gap-1 ${className}`}
      role="region"
      aria-label={
        variant === "main" ? "Carrossel de Navegação Principal" : "Carrossel de Subnavegação"
      }
    >
      {/* Botão Seta Esquerda (<) */}
      {isPaginable && (
        <button
          type="button"
          onClick={handlePrev}
          disabled={!canPrev}
          aria-label="Ver itens anteriores"
          className={`flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-md transition-all cursor-pointer ${
            variant === "main"
              ? canPrev
                ? "bg-muted text-foreground hover:bg-amber-500/20 hover:text-amber-500"
                : "opacity-25 text-text-muted cursor-not-allowed"
              : canPrev
              ? "bg-white/10 text-white hover:bg-white/20 hover:text-amber-300"
              : "opacity-25 text-slate-400 cursor-not-allowed"
          }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Janela de Itens Visíveis (Mantendo a quantidade configurada) */}
      <div className="flex items-center gap-1 overflow-hidden py-1">
        {visibleItems.map((item) => {
          const isActive = item.id === activeId || item.current;

          if (variant === "main") {
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => onItemClick?.(item)}
                className={`relative flex-shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold transition-all whitespace-nowrap rounded-t-md ${
                  isActive
                    ? "bg-amber-500 text-slate-950 font-bold shadow-sm"
                    : "text-[var(--nav-link-color)] hover:text-[var(--nav-link-hover)] hover:bg-muted/60"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                      isActive
                        ? "bg-slate-950/20 text-slate-950"
                        : "bg-amber-500/15 text-amber-500"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          }

          // Variante SubNavigation (Barra sólida com sublinhado no ativo - conforme Imagem 1)
          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => onItemClick?.(item)}
              className={`relative flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                isActive
                  ? "text-amber-400 font-bold border-b-2 border-amber-400"
                  : "text-slate-300 hover:text-white hover:bg-white/5 rounded-md"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="rounded px-1.5 py-0.2 text-[9px] font-semibold bg-white/10 text-slate-300">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Botão Seta Direita (>) */}
      {isPaginable && (
        <button
          type="button"
          onClick={handleNext}
          disabled={!canNext}
          aria-label="Ver próximos itens"
          className={`flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-md transition-all cursor-pointer ${
            variant === "main"
              ? canNext
                ? "bg-muted text-foreground hover:bg-amber-500/20 hover:text-amber-500"
                : "opacity-25 text-text-muted cursor-not-allowed"
              : canNext
              ? "bg-white/10 text-white hover:bg-white/20 hover:text-amber-300"
              : "opacity-25 text-slate-400 cursor-not-allowed"
          }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Indicador de Paginação discreto quando há mais itens */}
      {isPaginable && (
        <span className="hidden xl:inline-block ml-1 text-[10px] font-mono text-text-muted opacity-70">
          {effectiveStartIndex + 1}-{Math.min(effectiveStartIndex + maxVisible, total)}/{total}
        </span>
      )}
    </div>
  );
}

