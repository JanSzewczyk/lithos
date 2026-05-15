import * as React from "react";

import { useTranslations } from "next-intl";

export function LandingProcess() {
  const t = useTranslations("process");

  const STEPS = [
    { n: "01", titleKey: "step0title" as const, descKey: "step0desc" as const },
    { n: "02", titleKey: "step1title" as const, descKey: "step1desc" as const },
    { n: "03", titleKey: "step2title" as const, descKey: "step2desc" as const },
    { n: "04", titleKey: "step3title" as const, descKey: "step3desc" as const }
  ];

  return (
    <section className="scroll-m-20 py-24 pt-8 max-md:py-16" id="proces">
      <div className="mx-auto max-w-310 px-7 max-md:px-5">
        <div className="mb-14 grid grid-cols-2 items-end gap-16 max-[820px]:grid-cols-1 max-[820px]:gap-6">
          <div>
            <div className="text-ink-muted text-[13px] font-medium tracking-widest uppercase">{t("eyebrow")}</div>
            <h2
              className="font-display mt-3.5 leading-[1.02] font-medium tracking-[-0.03em]"
              style={{ fontSize: "clamp(36px,4.6vw,64px)", fontVariationSettings: '"wdth" 92' }}
            >
              {t("title")} <em className="text-moss font-normal italic">{t("titleAccent")}</em>
            </h2>
          </div>
          <p
            className="text-ink-soft max-w-[44ch] justify-self-end leading-relaxed max-[820px]:justify-self-start"
            style={{ fontSize: "clamp(17px,1.4vw,20px)" }}
          >
            {t("subtitle")}
          </p>
        </div>

        <div className="border-concrete rounded-[48px] border bg-white p-14 max-md:rounded-[36px] max-md:p-6">
          <div className="grid grid-cols-4 max-[980px]:grid-cols-2 max-[560px]:grid-cols-1">
            {STEPS.map((step, i) => (
              <div
                key={step.n}
                className={[
                  "py-2 pr-7",
                  i === 0 ? "pl-0" : "border-concrete-dark border-l border-dashed pl-6",
                  i === 2 ? "max-[980px]:border-l-0 max-[980px]:pl-0" : "",
                  "max-[980px]:py-6"
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className="font-display text-moss text-[13px] font-semibold tracking-widest">{step.n}</div>
                <h3 className="font-display mt-3 mb-2.5 text-[22px] leading-tight font-medium tracking-tight">
                  {t(step.titleKey)}
                </h3>
                <p className="text-ink-soft text-[15px] leading-relaxed">{t(step.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
