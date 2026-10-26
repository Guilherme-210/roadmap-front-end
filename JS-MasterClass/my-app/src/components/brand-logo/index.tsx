import Link from "next/link";
import { BrandIcon } from "../brand-icon";
import { SITE_CONFIG } from "@/config/navigation";
import { APP_ROUTES } from "@/shared/constants/app-routes";

interface BrandLogoProps {
  className?: string;
  showTagline?: boolean;
}

export function BrandLogo({ className = "", showTagline = false }: BrandLogoProps) {
  return (
    <Link
      href={APP_ROUTES.public.home.path}
      className={`group inline-flex items-center gap-3 transition-opacity hover:opacity-90 ${className}`}
      aria-label={`${SITE_CONFIG.name} - ${APP_ROUTES.public.home.name}`}
    >
      <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <BrandIcon size={34} />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 font-bold tracking-tight text-foreground text-lg leading-tight">
          <span className="font-extrabold text-foreground">JS</span>
          <span className="text-amber-500 font-semibold">MasterClass</span>
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
        </div>
        {showTagline && (
          <span className="text-[11px] text-muted-foreground hidden sm:inline-block">
            {SITE_CONFIG.tagline}
          </span>
        )}
      </div>
    </Link>
  );
}

