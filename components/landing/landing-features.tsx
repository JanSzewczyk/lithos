import * as React from "react";

import { CheckIcon } from "lucide-react";

const CHECKS = [
  "Nienasiąkliwa struktura betonu nie zmienia wagi podczas wędkowania.",
  "Zbrojenie włóknem zapobiega kruszeniu się koszyczka.",
  "Możliwość doboru koloru betonu do rodzaju dna (piasek / muł).",
  'Cena tradycyjnego ołowiu — bez ekologicznego "podatku".'
];

export function LandingFeatures() {
  return (
    <section className="scroll-m-20 py-24 pt-8 max-md:py-16" id="cechy">
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
                Zaprojektowane,
                <br />
                by <em className="font-normal text-[#C5DBC8] italic">znikać.</em>
              </h2>
              <p
                className="mt-[22px] max-w-[56ch] leading-relaxed text-white/70"
                style={{ fontSize: "clamp(17px,1.4vw,20px)" }}
              >
                Ołów błyszczy i&nbsp;odstrasza ostrożne ryby. Beton tworzy naturalną strukturę, która idealnie stapia
                się z&nbsp;dnem jeziora czy rzeki. Ryba widzi tylko Twoją przynętę.
              </p>

              <div className="mt-8 flex flex-col gap-4.5">
                {CHECKS.map((check, i) => (
                  <div
                    key={i}
                    className="flex gap-4 rounded-[20px] border border-white/8 bg-white/[0.04] p-[18px_22px] transition-colors hover:bg-white/[0.07]"
                  >
                    <div className="bg-accent text-ink grid size-6.5 shrink-0 place-items-center rounded-full">
                      <CheckIcon width={14} height={14} />
                    </div>
                    <p className="text-base leading-normal text-white/88">{check}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-square">
              <div className="mini-stone ms1" />
              <div className="mini-stone ms2" />
              <div className="mini-stone ms3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
