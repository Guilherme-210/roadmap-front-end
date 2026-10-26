import type { NextConfig } from "next";
import { APP_ROUTES } from "./src/shared/constants/app-routes";

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
        source: APP_ROUTES.legacy.javaScriptBoolean.path,
        destination: APP_ROUTES.public.javaScript.masterclass.lessons.boolean.path,
        permanent: true,
      },
      {
        source: APP_ROUTES.legacy.javaScriptLessons.path,
        destination: `${APP_ROUTES.public.javaScript.masterclass.path}/:slug*`,
        permanent: true,
      },
      {
        source: APP_ROUTES.legacy.javaScript.path,
        destination: APP_ROUTES.public.javaScript.path,
        permanent: true,
      },
      {
        source: APP_ROUTES.legacy.documentation.path,
        destination: APP_ROUTES.public.documentation.path,
        permanent: true,
      },
    ];
  },
  experimental: {
    agentFeedback: true,
    agentUpgrade: "security",
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
