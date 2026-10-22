import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav aria-label="Navegação estrutural" className={`flex flex-wrap items-center gap-2 text-xs text-text-muted ${className}`}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1 || item.current;

        return (
          <div key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 && <span className="text-text-muted/60">/</span>}
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:text-foreground transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-amber-500 font-medium" : "text-text-muted"}>
                {item.label}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}

