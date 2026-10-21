"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { BrandLogo } from "../brand-logo";
import { ThemeToggle } from "../theme-toggle/index";
import { getActiveNavigation } from "@/config/navigation";
import {
  MainNavigation,
  SubNavigation,
  MobileNavigationBars,
} from "../navigation";

export function Header() {
  const pathname = usePathname() || "/";
  const [mainDrawerOpen, setMainDrawerOpen] = useState(false);

  const { activeSection, activeSubItem } = getActiveNavigation(pathname);

  return (
    <header className="sticky top-0 z-40 w-full transition-colors duration-200">
      {/* 1. Barra Superior: Logo + MainNavigation Desktop + ThemeToggle + Mobile Hamburger */}
      <div className="w-full border-b border-border-subtle bg-[var(--header-bg)] backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 gap-4">
          {/* Logo da Marca */}
          <div className="flex-shrink-0 flex items-center">
            <BrandLogo />
          </div>

          {/* MainNavigation Desktop com Limite de Links e Setas */}
          <div className="hidden md:flex flex-1 justify-center max-w-3xl">
            <MainNavigation
              activeSectionId={activeSection.id}
              maxVisible={5}
            />
          </div>

          {/* Ações à Direita: ThemeToggle e Gatilho Mobile do Menu Principal */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle />

            {/* Botão Hambúrguer Mobile (Dispara o Main Navigation Drawer) */}
            <button
              type="button"
              onClick={() => setMainDrawerOpen(true)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-border-subtle bg-card text-foreground hover:bg-muted transition-colors cursor-pointer"
              aria-label="Abrir menu principal"
              aria-expanded={mainDrawerOpen}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 2. SubNavigation Desktop: Barra dedicada com carrossel de subtópicos/aulas e setas */}
      <SubNavigation
        activeSection={activeSection}
        activeSubItemId={activeSubItem?.id}
        maxVisible={7}
      />

      {/* 3. Camada Mobile: Barra de subtópicos e os dois NavigationDrawer (Main e Sub) */}
      <MobileNavigationBars
        activeSection={activeSection}
        activeSubItemId={activeSubItem?.id}
        mainDrawerOpen={mainDrawerOpen}
        setMainDrawerOpen={setMainDrawerOpen}
      />
    </header>
  );
}
