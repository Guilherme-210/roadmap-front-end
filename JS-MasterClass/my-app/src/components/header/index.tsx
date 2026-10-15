"use client";

import { useState } from "react";
import Link from "next/link";
import { BrandLogo } from "../brand-logo";
import { ThemeToggle } from "../theme-toggle/index";
import { HEADER_NAV_LINKS } from "@/config/navigation";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border-subtle)] bg-[var(--header-bg)] backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <div className="flex items-center gap-6">
          <BrandLogo />
        </div>

        {/* Desktop Navigation Links - Controlados por variáveis globais */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2"
          aria-label="Navegação Principal"
        >
          {HEADER_NAV_LINKS.map((item) => {
            const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);
            const isDropdownOpen = activeDropdown === item.id;

            if (hasDropdown) {
              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveDropdown(isDropdownOpen ? null : item.id)
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-[var(--nav-link-color)] hover:text-[var(--nav-link-hover)] rounded-md transition-colors cursor-pointer"
                    aria-expanded={isDropdownOpen}
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180 text-amber-500" : "text-muted-foreground"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute left-0 top-full pt-1 w-64 animate-in fade-in-0 zoom-in-95 duration-150">
                      <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-2 shadow-xl backdrop-blur-lg">
                        {item.dropdown?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-[var(--muted)]"
                          >
                            <div className="font-medium text-[var(--foreground)]">
                              {subItem.label}
                            </div>
                            {subItem.description && (
                              <p className="text-xs text-[var(--text-muted)] line-clamp-1 mt-0.5">
                                {subItem.description}
                              </p>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.id}
                href={item.href}
                className="relative inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-[var(--nav-link-color)] hover:text-[var(--nav-link-hover)] rounded-md transition-colors"
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-amber-500">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle & Mobile Menu Trigger (SEM LOGIN / SEM ZAP) */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-[var(--border-subtle)] bg-[var(--card-bg)] text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors cursor-pointer"
            aria-label="Abrir menu de navegação"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
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
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--border-subtle)] bg-[var(--card-bg)] px-4 py-4 space-y-2 animate-in slide-in-from-top-2">
          {HEADER_NAV_LINKS.map((item) => (
            <div key={item.id} className="space-y-1">
              <Link
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-xs font-semibold text-amber-500">
                    {item.badge}
                  </span>
                )}
              </Link>
              {item.dropdown && (
                <div className="pl-4 space-y-1 border-l-2 border-[var(--border-subtle)] ml-3">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-md px-3 py-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

