import { BrandIcon } from "@/components/brand-icon";

export interface PreviewStat {
  value: string;
  label: string;
}

export interface HeroPreviewCardProps {
  title: string;
  subtitle: string;
  status: string;
  codeComment: string;
  codeSnippet: string;
  codeExplanation: string;
  stats: PreviewStat[];
  className?: string;
}

export function HeroPreviewCard({
  title,
  subtitle,
  status,
  codeComment,
  codeSnippet,
  codeExplanation,
  stats,
  className = "",
}: HeroPreviewCardProps) {
  return (
    <div className={`relative w-full max-w-md rounded-2xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-8 shadow-2xl backdrop-blur-sm transition-transform hover:-translate-y-1 duration-300 ${className}`}>
      {/* Efeito sutil de brilho no topo do card */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="flex items-center justify-between pb-6 border-b border-[var(--border-subtle)]">
        <div className="flex items-center gap-3">
          <BrandIcon size={44} />
          <div>
            <h3 className="text-base font-bold text-[var(--foreground)]">{title}</h3>
            <p className="text-xs text-[var(--text-muted)]">{subtitle}</p>
          </div>
        </div>
        <span className="rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-500">
          {status}
        </span>
      </div>

      <div className="mt-6 space-y-4">
        <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--muted)]/50 p-4">
          <div className="text-xs font-mono text-[var(--text-muted)] mb-1">{codeComment}</div>
          <code className="text-xs sm:text-sm font-mono text-amber-500 block">
            {codeSnippet}
          </code>
          <p className="text-xs text-[var(--text-muted)] mt-2">
            {codeExplanation}
          </p>
        </div>

        {stats.length > 0 && (
          <div className="grid grid-cols-2 gap-3 pt-2">
            {stats.map((stat, idx) => (
              <div key={`${stat.label}-${idx}`} className="rounded-lg border border-[var(--border-subtle)] p-3 text-center">
                <div className="text-xl font-bold text-amber-500">{stat.value}</div>
                <div className="text-[11px] text-[var(--text-muted)] mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

