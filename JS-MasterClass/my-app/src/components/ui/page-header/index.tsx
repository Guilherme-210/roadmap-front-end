import React from "react";

export interface HeaderTag {
  label: string;
  value: string;
  color?: string;
}

export interface HeaderBadge {
  text: string;
  ping?: boolean;
}

export interface PageHeaderProps {
  badge?: string | HeaderBadge;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  tags?: HeaderTag[];
  className?: string;
  children?: React.ReactNode;
}

export function PageHeader({
  badge,
  title,
  description,
  tags,
  className = "",
  children,
}: PageHeaderProps) {
  const badgeConfig: HeaderBadge | null =
    typeof badge === "string"
      ? { text: badge, ping: false }
      : badge || null;

  return (
    <header className={`space-y-4 ${className}`}>
      {badgeConfig && (
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-500">
          {badgeConfig.ping && (
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
          )}
          <span>{badgeConfig.text}</span>
        </div>
      )}

      {typeof title === "string" ? (
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
          {title}
        </h1>
      ) : (
        title
      )}

      {description && (
        <div className="text-sm sm:text-base text-text-muted leading-relaxed max-w-3xl">
          {description}
        </div>
      )}

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
          {tags.map((tag) => {
            const colorClass =
              tag.color === "emerald"
                ? "text-emerald-500"
                : tag.color === "blue"
                ? "text-blue-500"
                : "text-amber-500";

            return (
              <span
                key={`${tag.label}-${tag.value}`}
                className="px-2.5 py-1 rounded-md bg-card text-foreground border border-border-subtle font-medium"
              >
                {tag.label}: <strong className={colorClass}>{tag.value}</strong>
              </span>
            );
          })}
        </div>
      )}

      {children}
    </header>
  );
}

