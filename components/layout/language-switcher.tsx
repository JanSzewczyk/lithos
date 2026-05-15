import * as React from "react";

import { Link } from "~/i18n/navigation";
import type { Locale } from "~/i18n/routing";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  return (
    <div className="flex items-center gap-1 text-[13px] font-medium">
      <Link
        href="/"
        locale="pl"
        className={locale === "pl" ? "text-ink" : "text-ink-muted hover:text-ink transition-colors"}
      >
        PL
      </Link>
      <span className="text-concrete-dark">/</span>
      <Link
        href="/"
        locale="en"
        className={locale === "en" ? "text-ink" : "text-ink-muted hover:text-ink transition-colors"}
      >
        EN
      </Link>
    </div>
  );
}
