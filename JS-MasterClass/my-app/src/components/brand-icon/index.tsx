import React from "react";

interface BrandIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

/**
 * Novo Ícone exclusivo para o JS-MasterClass.
 * Um hexágono geométrico moderno com o símbolo estilizado { JS },
 * integrando brackets de código e gradiente luminoso.
 */
export function BrandIcon({ size = 32, className = "", ...props }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <defs>
        {/* Gradiente principal dourado/âmbar vibrante característico do ecossistema JS */}
        <linearGradient id="js-primary-grad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FACC15" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>

        {/* Gradiente de fundo escuro para o miolo */}
        <linearGradient id="js-inner-bg" x1="12" y1="8" x2="36" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E293B" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0F172A" stopOpacity="0.95" />
        </linearGradient>

        {/* Brilho suave */}
        <filter id="js-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Hexágono externo arredondado com borda em gradiente */}
      <path
        d="M24 3.5L41.32 13.5V33.5L24 43.5L6.68 33.5V13.5L24 3.5Z"
        fill="url(#js-inner-bg)"
        stroke="url(#js-primary-grad)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Detalhe geométrico de circuito / precisão no topo e na base */}
      <circle cx="24" cy="9" r="1.8" fill="#FACC15" />
      <circle cx="24" cy="38" r="1.8" fill="#F59E0B" />

      {/* Símbolo "J" estilizado */}
      <path
        d="M17 18.5V26.5C17 28.5 18.5 29.8 20.8 29.8C22.2 29.8 23.2 29.1 23.7 28.2"
        stroke="url(#js-primary-grad)"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Símbolo "S" estilizado */}
      <path
        d="M32 19.8C31.2 18.7 29.8 18 28 18C25.8 18 24.5 19.3 24.5 20.8C24.5 24 32.5 22.8 32.5 26.8C32.5 28.8 30.8 30 28.2 30C26.1 30 24.7 29.1 24 27.8"
        stroke="url(#js-primary-grad)"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Chaves { } sutis nas laterais representando código limpo */}
      <path
        d="M12.5 19C11.5 20 11.5 22.5 10 23.5C11.5 24.5 11.5 27 12.5 28"
        stroke="#94A3B8"
        strokeOpacity="0.5"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M35.5 19C36.5 20 36.5 22.5 38 23.5C36.5 24.5 36.5 27 35.5 28"
        stroke="#94A3B8"
        strokeOpacity="0.5"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

