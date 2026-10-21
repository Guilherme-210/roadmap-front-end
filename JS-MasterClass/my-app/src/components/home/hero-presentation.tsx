import Link from "next/link";

export interface HeroAction {
  label: string;
  href: string;
  primary?: boolean;
}

export interface HeroPresentationProps {
  badgeText: string;
  title: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  description: string;
  highlights: string[];
  actions: HeroAction[];
  className?: string;
}

export function HeroPresentation({
  badgeText,
  title,
  description,
  highlights,
  actions,
  className = "",
}: HeroPresentationProps) {
  return (
    <div className={`space-y-6 text-left ${className}`}>
      {/* Badge de status */}
      <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 text-xs font-semibold text-amber-500">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
        </span>
        <span>{badgeText}</span>
      </div>

      {/* Título Principal */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
        {title.prefix}{" "}
        <span className="bg-linear-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
          {title.highlight}
        </span>{" "}
        {title.suffix}
      </h1>

      {/* Subtítulo / Descrição */}
      <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl">
        {description}
      </p>

      {/* Destaques rápidos */}
      {highlights.length > 0 && (
        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-text-muted pt-2">
          {highlights.map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </div>
      )}

      {/* Botões de Ação (CTAs) */}
      {actions.length > 0 && (
        <div className="flex flex-wrap items-center gap-4 pt-4">
          {actions.map((action, index) =>
            action.primary ? (
              <Link
                key={`${action.label}-${index}`}
                href={action.href}
                className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/25 hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{action.label}</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            ) : (
              <Link
                key={`${action.label}-${index}`}
                href={action.href}
                className="inline-flex items-center gap-2 rounded-xl border border-border-subtle bg-card px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-muted hover:border-amber-500/40 transition-all"
              >
                <span>{action.label}</span>
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}

