import * as React from "react";

import { type Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";

import { env } from "~/data/env/server";
import { Locale, routing } from "~/i18n/routing";

import "../globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  variable: "--font-bricolage",
  display: "swap"
});

function getBaseUrl(): string {
  if (env.VERCEL_URL) {
    return env.VERCEL_URL.startsWith("http") ? env.VERCEL_URL : `https://${env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const baseUrl = getBaseUrl();
  const pageUrl = locale === routing.defaultLocale ? baseUrl : `${baseUrl}/${locale}`;
  const ogLocale = locale === "pl" ? "pl_PL" : "en_US";
  const alternateOgLocale = locale === "pl" ? "en_US" : "pl_PL";

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t("title"),
      template: `%s | Lithos 3D`
    },
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: "Lithos 3D" }],
    creator: "Lithos 3D",
    publisher: "Lithos 3D",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      alternateLocale: [alternateOgLocale],
      url: pageUrl,
      siteName: "Lithos 3D",
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: t("ogImageAlt")
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [{ url: "/opengraph-image", alt: t("ogImageAlt") }]
    },
    alternates: {
      canonical: pageUrl,
      languages: Object.fromEntries(
        routing.locales.map((l) => [
          l === "pl" ? "pl-PL" : "en-US",
          l === routing.defaultLocale ? baseUrl : `${baseUrl}/${l}`
        ])
      )
    }
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={bricolage.variable}>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
