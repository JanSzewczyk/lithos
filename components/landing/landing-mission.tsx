import * as React from "react";

import { DropletIcon, CpuIcon, MapIcon } from "lucide-react";

const PILLARS = [
  {
    icon: <DropletIcon width={22} height={22} />,
    title: "Czysta woda",
    text: "Nasz beton ma neutralne pH i nie wydziela żadnych toksycznych substancji. Jest bezpieczny dla ryb i ekosystemu."
  },
  {
    icon: <CpuIcon width={22} height={22} />,
    title: "Nowa technologia",
    text: "Wykorzystujemy nowoczesny druk 3D, aby tworzyć formy idealne aerodynamicznie i świetnie trzymające zanętę."
  },
  {
    icon: <MapIcon width={22} height={22} />,
    title: "Lokalnie",
    text: "Cały proces projektowania i produkcji odbywa się w Polsce. Wspierasz lokalną innowację rzemieślniczą."
  }
];

export function LandingMission() {
  return (
    <section className="py-24 max-md:py-16 scroll-m-20" id="misja">
      <div className="mx-auto max-w-310 px-7 max-md:px-5">
        <div className="mb-14 grid grid-cols-2 items-end gap-16 max-[820px]:grid-cols-1 max-[820px]:gap-6">
          <div>
            <div className="text-ink-muted text-[13px] font-medium tracking-widest uppercase">Nasza misja</div>
            <h2
              className="font-display mt-3.5 leading-[1.02] font-medium tracking-[-0.03em]"
              style={{ fontSize: "clamp(36px,4.6vw,64px)", fontVariationSettings: '"wdth" 92' }}
            >
              Dlaczego zrezygnowaliśmy z&nbsp;
              <em className="text-moss font-normal italic">ołowiu?</em>
            </h2>
          </div>
          <p
            className="text-ink-soft max-w-[44ch] justify-self-end leading-relaxed max-[820px]:justify-self-start"
            style={{ fontSize: "clamp(17px,1.4vw,20px)" }}
          >
            Wędkarstwo to obcowanie z naturą, a jednak od lat zatruwamy ją tysiącami ton ołowiu rocznie. Każdy zerwany
            zestaw to toksyczny ślad na dnie jeziora, który zostaje tam na setki lat. Postanowiliśmy to zmienić, nie
            idąc na kompromisy w&nbsp;kwestii skuteczności.
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
              <h3 className="font-display text-[22px] leading-tight font-medium tracking-tight">{pillar.title}</h3>
              <p className="text-ink-soft text-base leading-relaxed">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
