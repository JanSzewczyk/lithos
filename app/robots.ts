import { type MetadataRoute } from "next";

import { env } from "~/data/env/server";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${env.VERCEL_URL}/sitemap.xml`
  };
}
