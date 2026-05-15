import { type MetadataRoute } from "next";

import { env } from "~/data/env/server";
import { routing } from "~/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    url: `${env.VERCEL_URL}${locale === routing.defaultLocale ? "/" : `/${locale}`}`,
    lastModified: new Date().toISOString(),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${env.VERCEL_URL}${l === routing.defaultLocale ? "/" : `/${l}`}`])
      )
    }
  }));
}
