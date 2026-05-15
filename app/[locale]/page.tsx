import * as React from "react";

import dynamic from "next/dynamic";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { env } from "~/data/env/server";
import { routing } from "~/i18n/routing";
import { LandingAnatomy, LandingFeatures, LandingHero, LandingMission, LandingProcess } from "~/components/landing";
import { LandingFooter } from "~/components/layout/landing-footer";
import { LandingNav } from "~/components/layout/landing-nav";

const LandingSignup = dynamic(() => import("~/components/landing/landing-signup").then((m) => m.LandingSignup));

async function buildJsonLd(locale: string) {
  const t = await getTranslations({ locale, namespace: "metadata" });

  const baseUrl = env.VERCEL_URL
    ? env.VERCEL_URL.startsWith("http")
      ? env.VERCEL_URL
      : `https://${env.VERCEL_URL}`
    : "http://localhost:3000";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "Lithos 3D",
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/icon`
        },
        description: t("description"),
        foundingDate: "2024",
        areaServed: "PL",
        knowsLanguage: ["pl", "en"]
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Lithos 3D",
        publisher: { "@id": `${baseUrl}/#organization` },
        inLanguage: routing.locales,
        potentialAction: {
          "@type": "ReadAction",
          target: baseUrl
        }
      },
      {
        "@type": "Product",
        "@id": `${baseUrl}/#product`,
        name: "Lithos Method Feeder",
        brand: { "@id": `${baseUrl}/#organization` },
        description: t("description"),
        image: `${baseUrl}/opengraph-image`,
        material: "Zbrojony beton",
        manufacturer: { "@id": `${baseUrl}/#organization` },
        audience: {
          "@type": "Audience",
          audienceType: "Anglers, Fishing enthusiasts"
        },
        additionalProperty: [
          { "@type": "PropertyValue", name: "Lead content", value: "0%" },
          { "@type": "PropertyValue", name: "Production method", value: "3D printed molds" },
          { "@type": "PropertyValue", name: "Origin", value: "Poland" }
        ]
      }
    ]
  };
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const jsonLd = await buildJsonLd(locale);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="bg-cement min-h-screen">
        <LandingNav />
        <LandingHero />
        <LandingAnatomy />
        <LandingMission />
        <LandingProcess />
        <LandingFeatures />
        <LandingSignup />
      </main>
      <LandingFooter />
    </>
  );
}
