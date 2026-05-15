import * as React from "react";

import { DropletIcon, CpuIcon, MapIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export function LandingMission() {
  const t = useTranslations("mission");

  const PILLARS = [
    {
      icon: <DropletIcon width={22} height={22} />,
      titleKey: "pillar0title" as const,
      textKey: "pillar0text" as const
    },
    { icon: <CpuIcon width={22} height={22} />, titleKey: "pillar1title" as const, textKey: "pillar1text" as const },
    { icon: <MapIcon width={22} height={22} />, titleKey: "pillar2title" as const, textKey: "pillar2text" as const }
  ];

  return (
    <section className="cv-auto scroll-m-20 py-24 max-md:py-16" id="misja">
      <div className="mx-auto max-w-310 px-7 max-md:px-5">
        <div className="mb-14 grid grid-cols-2 items-end gap-16 max-[820px]:grid-cols-1 max-[820px]:gap-6">
          <div>
            <div className="text-ink-muted text-[13px] font-medium tracking-widest uppercase">{t("eyebrow")}</div>
            <h2
              className="font-display mt-3.5 leading-[1.02] font-medium tracking-[-0.03em]"
              style={{ fontSize: "clamp(36px,4.6vw,64px)", fontVariationSettings: '"wdth" 92' }}
            >
              {t("title")}
              <em className="text-moss font-normal italic">{t("titleAccent")}</em>
            </h2>
          </div>
          <p
            className="text-ink-soft max-w-[44ch] justify-self-end leading-relaxed max-[820px]:justify-self-start"
            style={{ fontSize: "clamp(17px,1.4vw,20px)" }}
          >
            {t("body")}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5.5 max-[880px]:grid-cols-1">
          {PILLARS.map((pillar, i) => (
            <div
              key={i}
              className="border-concrete flex min-h-70 flex-col gap-[18px] rounded-[32px] border bg-white p-8 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(44,48,51,0.18)]"
            >
              <div className="bg-accent-soft text-moss grid h-[52px] w-[52px] place-items-center rounded-[18px]">
                {pillar.icon}
              </div>
              <h3 className="font-display text-[22px] leading-tight font-medium tracking-tight">
                {t(pillar.titleKey)}
              </h3>
              <p className="text-ink-soft text-base leading-relaxed">{t(pillar.textKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
