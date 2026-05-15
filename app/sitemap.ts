import { type MetadataRoute } from "next";

import { env } from "~/data/env/server";
import { routing } from "~/i18n/routing";

function getBaseUrl(): string {
  if (env.VERCEL_URL) {
    return env.VERCEL_URL.startsWith("http") ? env.VERCEL_URL : `https://${env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();

  return routing.locales.map((locale) => ({
    url: locale === routing.defaultLocale ? `${baseUrl}/` : `${baseUrl}/${locale}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: locale === routing.defaultLocale ? 1.0 : 0.9,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [
          l === "pl" ? "pl-PL" : "en-US",
          l === routing.defaultLocale ? `${baseUrl}/` : `${baseUrl}/${l}`
        ])
      )
    }
  }));
}
