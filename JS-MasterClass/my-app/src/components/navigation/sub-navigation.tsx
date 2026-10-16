"use client";

import React from "react";
import { type NavigationSection } from "@/config/navigation";
import { NavigationCarousel } from "./navigation-carousel";

export interface SubNavigationProps {
  activeSection: NavigationSection;
  activeSubItemId?: string;
  maxVisible?: number;
  className?: string;
  onItemClick?: () => void;
}

export function SubNavigation({
  activeSection,
  activeSubItemId,
  maxVisible = 7,
  className = "",
  onItemClick,
}: SubNavigationProps) {
  const subItems = activeSection.subItems || [];

  if (subItems.length === 0) {
    return null;
  }

  const carouselItems = subItems.map((item) => ({
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 h-11">
        {/* Etiqueta de contexto da seção ativa (ex: Cursos & Aulas / JavaScript MasterClass) */}
        <div className="flex-shrink-0 flex items-center gap-2 pr-3 border-r border-slate-800">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            {activeSection.label}
          </span>
        </div>

        {/* Carrossel de Subitens com limite visível e setas (< e >) mantendo a quantidade */}
        <div className="flex-1 flex justify-start overflow-hidden">
          <NavigationCarousel
            items={carouselItems}
            maxVisible={maxVisible}
            activeId={activeSubItemId}
            variant="sub"
            onItemClick={onItemClick}
          />
        </div>

        {/* Quantidade total de tópicos / aulas */}
        <div className="flex-shrink-0 pl-3 border-l border-slate-800 hidden lg:flex items-center gap-1.5 text-xs text-slate-400 font-mono">
          <span>{subItems.length}</span>
          <span className="text-[10px] uppercase text-slate-500">tópicos</span>
        </div>
      </div>
    </div>
  );
}

