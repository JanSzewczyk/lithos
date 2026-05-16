import * as React from "react";

import { CheckIcon } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function LandingFeatures() {
  const t = useTranslations("features");

  const CHECKS = ["check0", "check1", "check2", "check3"] as const;

  return (
    <section className="cv-auto scroll-m-20 py-24 pt-8 max-md:py-16" id="cechy">
      <div className="mx-auto max-w-310 px-7 max-md:px-5">
        <div className="bg-ink relative overflow-hidden rounded-[48px] px-16 py-[88px] text-white max-md:rounded-[36px] max-md:px-7 max-md:py-14">
          <div
            className="pointer-events-none absolute -top-45 -right-[200px] h-[600px] w-[600px]"
            style={{
              background: "radial-gradient(circle,rgba(126,161,128,0.22),transparent 65%)"
            }}
          />

          <div className="relative grid grid-cols-[1.05fr_0.95fr] items-center gap-16 max-[900px]:grid-cols-1 max-[900px]:gap-10">
            <div>
              <div className="bg-accent mb-5.5 h-1 w-14 rounded-full" />
              <h2
                className="font-display leading-[1.02] font-medium tracking-[-0.03em] text-white"
                style={{ fontSize: "clamp(36px,4.6vw,64px)", fontVariationSettings: '"wdth" 92' }}
              >
                {t("title")}
                <br />
                <span className="font-normal text-[#C5DBC8] italic">{t("titleAccent")}</span>
              </h2>
              <p
                className="mt-[22px] max-w-[56ch] leading-relaxed text-white/70"
                style={{ fontSize: "clamp(17px,1.4vw,20px)" }}
              >
                {t("body")}
              </p>

              <ul className="mt-8 flex list-none flex-col gap-4.5 p-0">
                {CHECKS.map((key) => (
                  <li
                    key={key}
                    className="flex gap-4 rounded-[20px] border border-white/8 bg-white/[0.04] p-[18px_22px] transition-colors hover:bg-white/[0.07]"
                  >
                    <div
                      className="bg-accent text-ink grid size-6.5 shrink-0 place-items-center rounded-full"
                      aria-hidden="true"
                    >
                      <CheckIcon width={14} height={14} aria-hidden="true" />
                    </div>
                    <p className="text-base leading-normal text-white/88">{t(key)}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-square" aria-hidden="true">
              <Image
                src="/img/feeder-presentation.png"
                fill
                alt=""
                sizes="(max-width: 900px) 100vw, 45vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "3rem",
                  boxShadow: "0 50px 80px -30px rgba(44,48,51,0.32)"
                }}
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
