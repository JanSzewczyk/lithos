import * as React from "react";

import { ArrowRightIcon } from "lucide-react";

export function LandingHero() {
  return (
    <section className="relative overflow-hidden pt-[60px] pb-[120px]" id="top">
      <div
        className="pointer-events-none absolute -top-[120px] -right-[200px] -z-10 h-[600px] w-[600px] blur-[40px]"
        style={{ background: "radial-gradient(closest-side,rgba(126,161,128,0.18),transparent 70%)" }}
      />

      <div className="mx-auto max-w-[1240px] px-7 max-md:px-5">
        <div className="grid grid-cols-[1.05fr_0.95fr] items-center gap-16 max-[1020px]:grid-cols-1 max-[1020px]:gap-12">
          <div>
            <span className="bg-accent-soft text-moss inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[13px] font-medium">
              <span className="bg-accent h-2 w-2 rounded-full shadow-[0_0_0_4px_rgba(126,161,128,0.18)]" />
              100% bezpieczne dla środowiska
            </span>

            <h1
              className="font-display text-ink mt-6 leading-[0.98] font-medium tracking-[-0.035em]"
              style={{
                fontSize: "clamp(44px,6.4vw,92px)",
                fontVariationSettings: '"wdth" 92'
              }}
            >
              Naturalnie na&nbsp;dnie. <br />
              Z&nbsp;
              <em className="text-moss font-normal italic" style={{ fontVariationSettings: '"wdth" 88' }}>
                betonu
              </em>{" "}
              i&nbsp;pasji.
            </h1>

            <p
              className="text-ink-soft mt-7 max-w-[56ch] leading-relaxed"
              style={{ fontSize: "clamp(17px,1.4vw,20px)" }}
            >
              Tworzymy innowacyjne koszyczki Method Feeder. Łączymy precyzję druku 3D z naturalnymi właściwościami
              zbrojonego betonu. Dla Twojej skuteczności i czystości naszych wód.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#zapisy" className="btn-primary-tw">
                Chcę przetestować <ArrowRightIcon width={16} height={16} />
              </a>
              <a href="#proces" className="btn-secondary-tw">
                Poznaj proces produkcji
              </a>
            </div>

            <div className="border-concrete mt-12 flex gap-9 border-t pt-8">
              <div>
                <div className="font-display text-ink text-[30px] leading-none font-medium tracking-tight">0%</div>
                <div className="text-ink-muted mt-2 max-w-[22ch] text-[13px] leading-snug">
                  ołowiu w&nbsp;składzie&nbsp;koszyczka
                </div>
              </div>
              <div>
                <div className="font-display text-ink text-[30px] leading-none font-medium tracking-tight">3D</div>
                <div className="text-ink-muted mt-2 max-w-[22ch] text-[13px] leading-snug">
                  drukowane formy matrycowe
                </div>
              </div>
              <div>
                <div className="font-display text-ink text-[30px] leading-none font-medium tracking-tight">PL</div>
                <div className="text-ink-muted mt-2 max-w-[22ch] text-[13px] leading-snug">
                  w&nbsp;100% projektowane i&nbsp;produkowane
                </div>
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
              Zero ołowiu
            </div>
            <div className="float-label fl-2">
              <span className="dot" style={{ background: "#9B8B6E" }} />
              Tekstura kamienia
            </div>
            <div className="float-label fl-3">
              <span className="dot" style={{ background: "#5F8463" }} />
              Neutralne pH
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
