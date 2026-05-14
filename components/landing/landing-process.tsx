import * as React from "react";

const STEPS = [
  {
    n: "01",
    title: "Projekt CAD",
    desc: "Projektujemy w programach 3D, dbając o każdy milimetr koszyczka. Testujemy aerodynamikę i rozmieszczenie wypustek."
  },
  {
    n: "02",
    title: "Druk 3D formy",
    desc: "Drukujemy precyzyjne formy matrycowe. Druk 3D pozwala nam na detale, których nie da się uzyskać przy standardowych odlewach ołowianych."
  },
  {
    n: "03",
    title: "Mieszanka betonu",
    desc: "Przygotowujemy specjalistyczny beton zbrojony mikrowłóknami. Zapewnia on odporność na wodę i uderzenia o kamienie."
  },
  {
    n: "04",
    title: "Suszenie i testy",
    desc: "Gotowe koszyczki dojrzewają, uzyskując pełną twardość i charakterystyczną, matową strukturę kamuflującą je na dnie."
  }
];

export function LandingProcess() {
  return (
    <section className="py-24 pt-8 max-md:py-16 scroll-m-20" id="proces">
      <div className="mx-auto max-w-310 px-7 max-md:px-5">
        <div className="mb-14 grid grid-cols-2 items-end gap-16 max-[820px]:grid-cols-1 max-[820px]:gap-6">
          <div>
            <div className="text-ink-muted text-[13px] font-medium tracking-widest uppercase">Proces produkcji</div>
            <h2
              className="font-display mt-3.5 leading-[1.02] font-medium tracking-[-0.03em]"
              style={{ fontSize: "clamp(36px,4.6vw,64px)", fontVariationSettings: '"wdth" 92' }}
            >
              Jak powstaje <em className="text-moss font-normal italic">Lithos?</em>
            </h2>
          </div>
          <p
            className="text-ink-soft max-w-[44ch] justify-self-end leading-relaxed max-[820px]:justify-self-start"
            style={{ fontSize: "clamp(17px,1.4vw,20px)" }}
          >
            Od pomysłu do rzutu na łowisku. Połączenie inżynierii i&nbsp;tradycyjnych materiałów budowlanych.
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
                  {step.title}
                </h3>
                <p className="text-ink-soft text-[15px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
