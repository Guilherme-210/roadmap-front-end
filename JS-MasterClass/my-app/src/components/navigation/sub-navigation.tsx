"use client";

import React from "react";
import Link from "next/link";
import { type NavigationSection } from "@/config/navigation";
import { NavigationCarousel } from "./navigation-carousel";

export interface SubNavigationProps {
  activeSection: NavigationSection;
  activeSubItemId?: string;
  maxVisible?: number;
  maxVisibleLessons?: number;
  className?: string;
  onItemClick?: () => void;
}

export function SubNavigation({
  activeSection,
  activeSubItemId,
  maxVisible,
  maxVisibleLessons,
  className = "",
  onItemClick,
}: SubNavigationProps) {
  const visibleLimit = maxVisibleLessons ?? maxVisible ?? 5;
  const subItems = activeSection.subItems || [];

  if (subItems.length === 0) {
    return null;
  }

  // Itens fixos que devem SEMPRE permanecer visíveis e fixos à esquerda
  // Para JavaScript: Visão Geral e Grade do Curso
  // Para Documentação: Linguagens e JavaScript
  const fixedItemIds = ["hub-js", "grade-curso", "doc-geral", "doc-js"];
  const fixedItems = subItems.filter((item) => fixedItemIds.includes(item.id));
  const dynamicLessons = subItems.filter((item) => !fixedItemIds.includes(item.id));

  const hasDynamicLessons = dynamicLessons.length > 0;

  const carouselItems = dynamicLessons.map((item) => ({
    id: item.id,
    label: item.label,
    href: item.href,
    badge: item.badge,
    description: item.description,
    current: item.id === activeSubItemId,
  }));

  return (
    <div
      className={`hidden md:block w-full bg-[#0c1424] dark:bg-[#080d18] border-b border-slate-800/80 shadow-md transition-colors ${className}`}
      role="navigation"
      aria-label={`Submenu de ${activeSection.label}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 h-11">
        {/* Etiqueta de contexto da seção ativa (ex: • JAVASCRIPT) */}
        <div className="flex-shrink-0 flex items-center gap-2 pr-3 border-r border-slate-800">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            {activeSection.label}
          </span>
        </div>

        {/* Grupo de Botões FIXOS: Sempre presentes e nunca rolam */}
        {fixedItems.length > 0 && (
          <div className="flex-shrink-0 flex items-center gap-1">
            {fixedItems.map((item) => {
              const isActive = item.id === activeSubItemId;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={onItemClick}
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
        )}

        {/* Divisor vertical separando os itens fixos das aulas dinâmicas */}
        {hasDynamicLessons && fixedItems.length > 0 && (
          <div className="h-5 w-px bg-slate-800 flex-shrink-0" aria-hidden="true" />
        )}

        {/* Carrossel Dinâmico de Aulas/Tópicos com Limite e Setas (< e >) */}
        {hasDynamicLessons && (
          <div className="flex-1 flex justify-start overflow-hidden">
            <NavigationCarousel
              items={carouselItems}
              maxVisible={visibleLimit}
              activeId={activeSubItemId}
              variant="sub"
              onItemClick={onItemClick}
            />
          </div>
        )}

        {/* Contador de Itens da Seção */}
        {hasDynamicLessons && (
          <div className="flex-shrink-0 pl-3 border-l border-slate-800 hidden lg:flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <span>{dynamicLessons.length}</span>
            <span className="text-[10px] uppercase text-slate-500">
              {activeSection.id === "documentacao" ? "tópicos" : "aulas"}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
