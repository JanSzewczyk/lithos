import * as React from "react";

import { LayersIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export function LandingFooter() {
  const t = useTranslations("footer");

  return (
    <footer aria-label={t("footerAriaLabel")} className="border-concrete mt-20 border-t py-14">
      <div className="mx-auto max-w-[1240px] px-7 max-md:px-5">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <a
            href="#top"
            className="font-display text-ink flex items-center gap-3 text-[22px] font-semibold tracking-tight no-underline"
          >
            <span className="bg-ink grid h-[38px] w-[38px] place-items-center rounded-[14px] text-white shadow-[0_4px_14px_-4px_rgba(44,48,51,0.35)]">
              <LayersIcon width={20} height={20} aria-hidden="true" />
            </span>
            Lithos
          </a>
          <div className="text-ink-muted max-w-[36ch] text-sm">{t("tagline")}</div>
          <div className="text-ink-muted text-[13px]">
            © {new Date().getFullYear()} Lithos. {t("rights")}
          </div>
        </div>
      </div>
    </footer>
  );
}
