export interface CoercionItem {
  expression: string;
  result: string;
}

export interface CoercionCardProps {
  title: string;
  items: CoercionItem[];
  variant?: "rose" | "emerald";
  className?: string;
}

export function CoercionCard({
  title,
  items,
  variant = "rose",
  className = "",
}: CoercionCardProps) {
  const titleColor = variant === "rose" ? "text-rose-500" : "text-emerald-500";
  const resultColor = variant === "rose" ? "text-blue-400" : "text-blue-400";

  return (
    <div className={`rounded-xl border border-[var(--border-subtle)] bg-[var(--muted)]/40 p-4 font-mono text-xs sm:text-sm space-y-2 ${className}`}>
      <div className={`font-semibold font-sans uppercase text-[11px] tracking-wider ${titleColor}`}>
        {title}
      </div>
      {items.map((item, idx) => (
        <div key={`${item.expression}-${idx}`} className="text-[var(--foreground)]">
          <span className="text-purple-400">{item.expression}</span> ==={" "}
          <span className={resultColor}>{item.result}</span>
        </div>
      ))}
    </div>
  );
}

