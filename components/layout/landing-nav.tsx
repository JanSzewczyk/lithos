import * as React from "react";

import { LayersIcon, ArrowRightIcon } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

import { LanguageSwitcher } from "~/components/layout/language-switcher";
import type { Locale } from "~/i18n/routing";

export async function LandingNav() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations({ locale, namespace: "nav" });

  return (
    <nav
      aria-label={t("navAriaLabel")}
      className="border-concrete/50 bg-cement/78 sticky top-0 z-30 border-b backdrop-blur-lg"
    >
      <div className="mx-auto flex h-19 max-w-310 items-center justify-between px-7 max-md:px-5">
        <a
          href="#top"
          className="font-display text-ink flex items-center gap-3 text-[22px] font-semibold tracking-tight no-underline"
        >
          <span className="bg-ink grid h-9.5 w-9.5 place-items-center rounded-[14px] text-white shadow-[0_4px_14px_-4px_rgba(44,48,51,0.35),inset_0_0_0_1px_rgba(255,255,255,0.04)]">
            <LayersIcon width={20} height={20} aria-hidden="true" />
          </span>
          Lithos
        </a>

        <div className="flex items-center gap-8">
          <a
            href="#misja"
            className="text-ink-soft hover:text-ink text-[14.5px] font-medium no-underline transition-colors max-[880px]:hidden"
          >
            {t("mission")}
          </a>
          <a
            href="#proces"
            className="text-ink-soft hover:text-ink text-[14.5px] font-medium no-underline transition-colors max-[880px]:hidden"
          >
            {t("process")}
          </a>
          <a
            href="#cechy"
            className="text-ink-soft hover:text-ink text-[14.5px] font-medium no-underline transition-colors max-[880px]:hidden"
          >
            {t("product")}
          </a>
          <LanguageSwitcher locale={locale} />
          <a
            href="#zapisy"
            className="bg-ink inline-flex items-center gap-2.5 rounded-full px-[18px] py-2.5 text-sm font-medium text-white no-underline transition-all hover:bg-[#1B1F22]"
          >
            {t("cta")} <ArrowRightIcon width={14} height={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </nav>
  );
}
