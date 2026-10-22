import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'",
          },
          { key: "Referrer-Policy", value: "no-referrer" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
          { key: "Origin-Agent-Cluster", value: "?1" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), serial=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/aulas/java-script/boolean",
        destination: "/java-script/cursos/java-script-masterclass/boolean",
        permanent: true,
      },
      {
        source: "/aulas/java-script/java-script-masterclass/:slug*",
        destination: "/java-script/cursos/java-script-masterclass/:slug*",
        permanent: true,
      },
      {
        source: "/aulas/java-script",
        destination: "/java-script",
        permanent: true,
      },
      {
        source: "/javascript",
        destination: "/documentacao",
        permanent: true,
      },
    ];
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
