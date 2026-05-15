import * as React from "react";

import { ArrowRightIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export function LandingHero() {
  const t = useTranslations("hero");

  return (
    <section className="relative scroll-mt-19 overflow-hidden pt-15 pb-30" id="top">
      <div
        className="pointer-events-none absolute -top-30 -right-50 -z-10 size-150 blur-2xl"
        style={{ background: "radial-gradient(closest-side,rgba(126,161,128,0.18),transparent 70%)" }}
      />

      <div className="mx-auto max-w-310 px-7 max-md:px-5">
        <div className="grid grid-cols-[1.05fr_0.95fr] items-center gap-16 max-[1020px]:grid-cols-1 max-[1020px]:gap-12">
          <div>
            <span className="bg-accent-soft text-moss inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[13px] font-medium">
              <span className="bg-accent h-2 w-2 rounded-full shadow-[0_0_0_4px_rgba(126,161,128,0.18)]" />
              {t("badge")}
            </span>

            <h1
              className="font-display text-ink mt-6 leading-[0.98] font-medium tracking-[-0.035em]"
              style={{
                fontSize: "clamp(44px,6.4vw,92px)",
                fontVariationSettings: '"wdth" 92'
              }}
            >
              {t("titleLine1")} <br />
              Z&nbsp;
              <em className="text-moss font-normal italic" style={{ fontVariationSettings: '"wdth" 88' }}>
                {t("titleAccentWord")}
              </em>{" "}
              {t("titleLine2suffix")}
            </h1>

            <p
              className="text-ink-soft mt-7 max-w-[56ch] leading-relaxed"
              style={{ fontSize: "clamp(17px,1.4vw,20px)" }}
            >
              {t("subtitle")}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#zapisy" className="btn-primary-tw">
                {t("ctaPrimary")} <ArrowRightIcon width={16} height={16} />
              </a>
              <a href="#proces" className="btn-secondary-tw">
                {t("ctaSecondary")}
              </a>
            </div>

            <div className="border-concrete mt-12 flex gap-9 border-t pt-8">
              <div>
                <div className="font-display text-ink text-[30px] leading-none font-medium tracking-tight">
                  {t("stat0value")}
                </div>
                <div className="text-ink-muted mt-2 max-w-[22ch] text-[13px] leading-snug">{t("stat0label")}</div>
              </div>
              <div>
                <div className="font-display text-ink text-[30px] leading-none font-medium tracking-tight">
                  {t("stat1value")}
                </div>
                <div className="text-ink-muted mt-2 max-w-[22ch] text-[13px] leading-snug">{t("stat1label")}</div>
              </div>
              <div>
                <div className="font-display text-ink text-[30px] leading-none font-medium tracking-tight">
                  {t("stat2value")}
                </div>
                <div className="text-ink-muted mt-2 max-w-[22ch] text-[13px] leading-snug">{t("stat2label")}</div>
              </div>
            </div>
          </div>

          <div className="stone-stage">
            <div className="stone">
              <div className="holes">
                {Array.from({ length: 30 }).map((_, i) => (
                  <span key={i} />
                ))}
              </div>
              <div className="stone-grain" />
            </div>
            <div className="float-label fl-1">
              <span className="dot" />
              {t("label1")}
            </div>
            <div className="float-label fl-2">
              <span className="dot" style={{ background: "#9B8B6E" }} />
              {t("label2")}
            </div>
            <div className="float-label fl-3">
              <span className="dot" style={{ background: "#5F8463" }} />
              {t("label3")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
