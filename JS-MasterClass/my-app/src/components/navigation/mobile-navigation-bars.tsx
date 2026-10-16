"use client";

import React, { useState } from "react";
import { type NavigationSection, SITE_MAP } from "@/config/navigation";
import { NavigationDrawer } from "./navigation-drawer";
import { type NavigationCarouselItem } from "./navigation-carousel";

export interface MobileNavigationBarsProps {
  activeSection: NavigationSection;
  activeSubItemId?: string;
  mainDrawerOpen: boolean;
  setMainDrawerOpen: (open: boolean) => void;
}

export function MobileNavigationBars({
  activeSection,
  activeSubItemId,
  mainDrawerOpen,
  setMainDrawerOpen,
}: MobileNavigationBarsProps) {
  const [subDrawerOpen, setSubDrawerOpen] = useState(false);

  // Itens para o Main Navigation Drawer
  const mainDrawerItems: NavigationCarouselItem[] = SITE_MAP.map((section) => ({
    id: section.id,
    label: section.label,
    href: section.href,
    badge: section.badge,
    description: section.description,
    current: section.id === activeSection.id,
  }));

  // Itens para o Sub Navigation Drawer (Aulas / Subtópicos)
  const subDrawerItems: NavigationCarouselItem[] = (activeSection.subItems || []).map(
    (item) => ({
      id: item.id,
      label: item.label,
      href: item.href,
      badge: item.badge,
      description: item.description,
      current: item.id === activeSubItemId,
    })
  );

  const currentSubItem = activeSection.subItems?.find(
    (item) => item.id === activeSubItemId
  );

  return (
    <>
      {/* Barra de Subnavegação Mobile (Abaixo do Header) */}
      <div className="md:hidden w-full bg-[#0c1424] dark:bg-[#070b14] border-b border-slate-800 text-slate-100 px-4 py-2 flex items-center justify-between gap-3 shadow-sm">
        {/* Título da seção e aula/subpágina atual */}
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0 animate-pulse" />
          <div className="flex items-baseline gap-1.5 overflow-hidden text-xs">
            <span className="font-bold text-amber-400 flex-shrink-0 uppercase tracking-wider text-[11px]">
              {activeSection.label}:
            </span>
            <span className="truncate text-slate-200 font-medium">
              {currentSubItem ? currentSubItem.label : activeSection.label}
            </span>
          </div>
        </div>

        {/* Botão de Disparo do SubNavigationDrawer (Conforme o botão circular da Imagem 2) */}
        <button
          type="button"
          onClick={() => setSubDrawerOpen(true)}
          className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-amber-400 hover:bg-slate-700 hover:text-white border border-slate-700 shadow-md transition-all cursor-pointer"
          aria-label="Abrir submenu de tópicos e aulas"
          aria-expanded={subDrawerOpen}
        >
          {/* Ícone de lista/submenu idêntico à Imagem 2 */}
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="14" y1="12" y2="12" />
            <line x1="4" x2="18" y1="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* 1. Main Navigation Drawer (Mobile) */}
      <NavigationDrawer
        isOpen={mainDrawerOpen}
        onClose={() => setMainDrawerOpen(false)}
        title="JS MasterClass"
        subtitle="Navegação Geral do Portal"
        badge="Menu"
        items={mainDrawerItems}
        activeId={activeSection.id}
        variant="main"
      />

      {/* 2. Sub Navigation Drawer (Mobile) - idêntico à Imagem 2 com as aulas e tópicos */}
      <NavigationDrawer
        isOpen={subDrawerOpen}
        onClose={() => setSubDrawerOpen(false)}
        title={activeSection.label}
        subtitle={`${subDrawerItems.length} tópicos disponíveis`}
        badge="Submenu"
        items={subDrawerItems}
        activeId={activeSubItemId}
        variant="sub"
      />
    </>
  );
}

