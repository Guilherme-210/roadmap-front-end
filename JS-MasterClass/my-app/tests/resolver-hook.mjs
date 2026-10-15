import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

export async function resolve(specifier, context, nextResolve) {
  // Resolução de alias "@/..."
  if (specifier.startsWith("@/")) {
    const relativeTarget = specifier.slice(2);
    const basePath = path.resolve(process.cwd(), "src", relativeTarget);
    const candidates = [
      basePath + ".ts",
      basePath + ".tsx",
      path.join(basePath, "index.ts"),
      path.join(basePath, "index.tsx"),
      basePath + ".js",
      basePath,
    ];

    for (const candidate of candidates) {
      if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
        return nextResolve(pathToFileURL(candidate).href, context);
      }
    }
  }

  // Resolução de imports relativos sem extensão
  if (specifier.startsWith(".") && !path.extname(specifier)) {
    const parentDir = context.parentURL
      ? path.dirname(fileURLToPath(context.parentURL))
      : process.cwd();

    const candidates = [
      path.resolve(parentDir, specifier + ".ts"),
      path.resolve(parentDir, specifier + ".tsx"),
      path.resolve(parentDir, specifier, "index.ts"),
      path.resolve(parentDir, specifier, "index.tsx"),
      path.resolve(parentDir, specifier + ".js"),
    ];

    for (const candidate of candidates) {
      if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
        return nextResolve(pathToFileURL(candidate).href, context);
      }
    }
  }

  return nextResolve(specifier, context);
}

