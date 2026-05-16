import * as React from "react";

import Image from "next/image";
import { useTranslations } from "next-intl";

export function LandingAnatomy() {
  const t = useTranslations("anatomy");

  return (
    <section className="cv-auto border-concrete border-t border-b bg-white py-24 max-md:py-16" id="anatomia">
      <div className="mx-auto max-w-310 px-7 max-md:px-5">
        <div className="mb-16 text-center">
          <div className="text-ink-muted text-[13px] font-medium tracking-widest uppercase">{t("eyebrow")}</div>
          <h2
            className="font-display text-ink mt-3.5 leading-[1.02] font-medium tracking-[-0.03em]"
            style={{ fontSize: "clamp(36px,4.6vw,64px)", fontVariationSettings: '"wdth" 92' }}
          >
            {t("title")} <span className="text-moss font-normal italic">{t("titleAccent")}</span>
          </h2>
          <p
            className="text-ink-soft mx-auto mt-4.5 max-w-[58ch] leading-relaxed"
            style={{ fontSize: "clamp(17px,1.4vw,20px)" }}
          >
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-[1fr_1.15fr_1fr] items-center gap-11 max-[980px]:grid-cols-1 max-[980px]:gap-9">
          <div className="flex flex-col gap-10 max-[980px]:hidden">
            <div className="text-right">
              <h3 className="font-display text-ink text-[19px] leading-tight font-medium tracking-[-0.02em]">
                {t("ecoconcreteTitle")}
              </h3>
              <p className="text-ink-muted mt-2 text-[15px] leading-relaxed">{t("ecoconcrete")}</p>
            </div>
            <div className="text-right">
              <h3 className="font-display text-ink text-[19px] leading-tight font-medium tracking-[-0.02em]">
                {t("noGlareTitle")}
              </h3>
              <p className="text-ink-muted mt-2 text-[15px] leading-relaxed">{t("noGlare")}</p>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-[3rem] opacity-[0.92] transition-opacity duration-500 hover:opacity-100"
            style={{
              aspectRatio: "4/5",
              boxShadow: "inset 0 0 60px rgba(44,48,51,0.12),0 40px 80px -30px rgba(44,48,51,0.22)"
            }}
          >
            <Image
              src="/img/feeder-construction.png"
              fill
              alt="Przekrój koszyczka Lithos — widoczna konstrukcja z zbrojonego betonu, otwory i skrzydła trzymające zanętę"
              sizes="(max-width: 980px) 100vw, 38vw"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "3rem",
                boxShadow: "0 50px 80px -30px rgba(44,48,51,0.32)"
              }}
            />
            <div
              className="absolute right-0 bottom-0 left-0 px-8 pt-10 pb-8 text-center"
              style={{ background: "linear-gradient(to top,rgba(0,0,0,0.52),transparent)" }}
            >
              <p className="font-display text-[22px] leading-tight font-medium tracking-[-0.02em] text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.4)]">
                {t("overlayTitle")}
              </p>
              <p className="mt-2 text-[11px] tracking-[0.14em] text-white/70 uppercase">{t("overlaySub")}</p>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <h3 className="font-display text-ink text-[19px] leading-tight font-medium tracking-[-0.02em]">
                {t("wingsTitle")}
              </h3>
              <p className="text-ink-muted mt-2 text-[15px] leading-relaxed">{t("wings")}</p>
            </div>
            <div>
              <h3 className="font-display text-ink text-[19px] leading-tight font-medium tracking-[-0.02em]">
                {t("aeroTitle")}
              </h3>
              <p className="text-ink-muted mt-2 text-[15px] leading-relaxed">{t("aero")}</p>
            </div>
            <div className="hidden max-[980px]:block">
              <h3 className="font-display text-ink text-[19px] leading-tight font-medium tracking-[-0.02em]">
                {t("ecoconcreteTitle")}
              </h3>
              <p className="text-ink-muted mt-2 text-[15px] leading-relaxed">{t("ecoconcrete")}</p>
            </div>
            <div className="hidden max-[980px]:block">
              <h3 className="font-display text-ink text-[19px] leading-tight font-medium tracking-[-0.02em]">
                {t("noGlareTitle")}
              </h3>
              <p className="text-ink-muted mt-2 text-[15px] leading-relaxed">{t("noGlare")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
