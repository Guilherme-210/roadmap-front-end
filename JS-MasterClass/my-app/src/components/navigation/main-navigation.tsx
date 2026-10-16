"use client";

import React from "react";
import { SITE_MAP } from "@/config/navigation";
import { NavigationCarousel } from "./navigation-carousel";

export interface MainNavigationProps {
  activeSectionId: string;
  maxVisible?: number;
  className?: string;
  onItemClick?: () => void;
}

export function MainNavigation({
  activeSectionId,
  maxVisible = 5,
  className = "",
  onItemClick,
}: MainNavigationProps) {
  const carouselItems = SITE_MAP.map((section) => ({
    id: section.id,
    label: section.label,
    href: section.href,
    badge: section.badge,
    description: section.description,
    current: section.id === activeSectionId,
  }));

  return (
    <nav
      className={`hidden md:flex items-center ${className}`}
      aria-label="Navegação Principal do Portal"
    >
      <NavigationCarousel
        items={carouselItems}
        maxVisible={maxVisible}
        activeId={activeSectionId}
        variant="main"
        onItemClick={onItemClick}
      />
    </nav>
  );
}

