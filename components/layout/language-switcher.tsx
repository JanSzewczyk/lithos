import * as React from "react";

import { useTranslations } from "next-intl";

import { Link } from "~/i18n/navigation";
import type { Locale } from "~/i18n/routing";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const t = useTranslations("nav");

  return (
    <div className="flex items-center gap-1 text-[13px] font-medium" aria-label={t("languageSwitcherLabel")}>
      <Link
        href="/"
        locale="pl"
        aria-current={locale === "pl" ? "page" : undefined}
        aria-label={t("switchToPolish")}
        className={locale === "pl" ? "text-ink" : "text-ink-muted hover:text-ink transition-colors"}
      >
        PL
      </Link>
      <span className="text-concrete-dark" aria-hidden="true">
        /
      </span>
      <Link
        href="/"
        locale="en"
        aria-current={locale === "en" ? "page" : undefined}
        aria-label={t("switchToEnglish")}
        className={locale === "en" ? "text-ink" : "text-ink-muted hover:text-ink transition-colors"}
      >
        EN
      </Link>
    </div>
  );
}
