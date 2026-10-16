"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { type NavigationCarouselItem } from "./navigation-carousel";

export interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  badge?: string;
  items: NavigationCarouselItem[];
  activeId?: string;
  variant: "main" | "sub";
}

export function NavigationDrawer({
  isOpen,
  onClose,
  title,
  subtitle,
  badge,
  items,
  activeId,
  variant,
}: NavigationDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Fechar com a tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* Backdrop com blur escuro */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Painel lateral deslizante da esquerda (conforme Imagem 2 de referência) */}
      <div
        ref={drawerRef}
        className="relative w-80 max-w-[85vw] h-full bg-[#0d131f] border-r border-slate-800 text-slate-100 shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-250 ease-out"
      >
        {/* Cabeçalho do Drawer */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800/80 bg-[#090d16]/50">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                {variant === "main" ? "Navegação Principal" : "Submenu de Aulas & Tópicos"}
              </span>
              {badge && (
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400">
                  {badge}
                </span>
              )}
            </div>
            <h3 className="text-lg font-bold text-white mt-0.5">{title}</h3>
            {subtitle && (
              <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">{subtitle}</p>
            )}
          </div>

          {/* Botão de Fechar 'X' no canto superior direito (idêntico à Imagem 2) */}
          <button
            type="button"
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fechar menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Lista de Itens do Drawer (Vertical com rolagem) */}
        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5 divide-y divide-slate-800/40">
          <div className="space-y-1">
            {items.map((item) => {
              const isActive = item.id === activeId || item.current;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={onClose}
                  className={`group flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm transition-all ${
                    isActive
                      ? "text-white font-bold bg-white/10 border-l-4 border-amber-400 pl-3"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <div className="flex items-center gap-2.5">
                    {/* Estilo com sublinhado/destaque conforme Imagem 2 */}
                    <span className={isActive ? "underline decoration-amber-400 decoration-2 underline-offset-4" : ""}>
                      {item.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                          isActive
                            ? "bg-amber-400 text-slate-950 font-bold"
                            : "bg-white/10 text-slate-300"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform ${
                        isActive
                          ? "text-amber-400 translate-x-0.5"
                          : "text-slate-500 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Rodapé do Drawer com atalhos rápidos */}
        <div className="p-4 border-t border-slate-800/80 bg-[#090d16]/70 flex items-center justify-between text-xs text-slate-400">
          <span>JS MasterClass • Rodrigo Branas</span>
          <span className="font-mono text-[11px] text-amber-400/80">v2.0</span>
        </div>
      </div>
    </div>
  );
}

