import Link from "next/link";
import { resolveAppRoute } from "@/shared/constants/app-routes";

export interface NavigationLink {
  label: string;
  href: string;
}

export interface LessonNavigationProps {
  previous?: NavigationLink;
  next?: NavigationLink;
  className?: string;
}

export function LessonNavigation({
  previous,
  next,
  className = "",
}: LessonNavigationProps) {
  if (!previous && !next) return null;

  return (
    <nav
      aria-label="Navegação entre lições"
      className={`pt-8 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4 ${className}`}
    >
      {previous ? (
        <Link
          href={resolveAppRoute(previous.href)}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>{previous.label}</span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={resolveAppRoute(next.href)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border-subtle text-xs sm:text-sm font-semibold text-foreground hover:bg-muted transition-colors"
        >
          <span>{next.label}</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}

