import * as React from "react";

export function LandingAnatomy() {
  return (
    <section className="border-concrete border-t border-b bg-white py-24 max-md:py-16" id="anatomia">
      <div className="mx-auto max-w-[1240px] px-7 max-md:px-5">
        <div className="mb-16 text-center">
          <div className="text-ink-muted text-[13px] font-medium tracking-widest uppercase">Produkt</div>
          <h2
            className="font-display text-ink mt-3.5 leading-[1.02] font-medium tracking-[-0.03em]"
            style={{ fontSize: "clamp(36px,4.6vw,64px)", fontVariationSettings: '"wdth" 92' }}
          >
            Czym dokładnie jest <em className="text-moss font-normal italic">Lithos?</em>
          </h2>
          <p
            className="text-ink-soft mx-auto mt-[18px] max-w-[58ch] leading-relaxed"
            style={{ fontSize: "clamp(17px,1.4vw,20px)" }}
          >
            To nie jest kolejny zwykły ciężarek. To przemyślane narzędzie dla wędkarzy Method Feeder, łączące naturalny
            kamuflaż z&nbsp;nowoczesną inżynierią.
          </p>
        </div>

        <div className="grid grid-cols-[1fr_1.15fr_1fr] items-center gap-11 max-[980px]:grid-cols-1 max-[980px]:gap-9">
          <div className="flex flex-col gap-10 max-[980px]:hidden">
            <div className="text-right">
              <h3 className="font-display text-ink text-[19px] leading-tight font-medium tracking-[-0.02em]">
                Zbrojony Ekobeton
              </h3>
              <p className="text-ink-muted mt-2 text-[15px] leading-relaxed">
                Główny rdzeń obciążeniowy wykonany z&nbsp;nienasiąkliwego, tonącego materiału. Zero toksyn
                w&nbsp;wodzie, idealne dopasowanie do dna.
              </p>
            </div>
            <div className="text-right">
              <h3 className="font-display text-ink text-[19px] leading-tight font-medium tracking-[-0.02em]">
                Brak Odbić Światła
              </h3>
              <p className="text-ink-muted mt-2 text-[15px] leading-relaxed">
                Matowa, porowata struktura nie płoszy ryb — w&nbsp;przeciwieństwie do gładkiego, błyszczącego plastiku
                czy ołowiu.
              </p>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-[3rem] opacity-[0.92] transition-opacity duration-500 hover:opacity-100"
            style={{
              aspectRatio: "4/5",
              boxShadow: "inset 0 0 60px rgba(44,48,51,0.12),0 40px 80px -30px rgba(44,48,51,0.22)"
            }}
          >
            <div className="anatomy-visual-bg absolute inset-0">
              <div className="anatomy-holes">
                {Array.from({ length: 20 }).map((_, i) => (
                  <span key={i} />
                ))}
              </div>
            </div>
            <div
              className="absolute right-0 bottom-0 left-0 px-8 pt-10 pb-8 text-center"
              style={{ background: "linear-gradient(to top,rgba(0,0,0,0.52),transparent)" }}
            >
              <p className="font-display text-[22px] leading-tight font-medium tracking-[-0.02em] text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.4)]">
                Anatomia Koszyczka
              </p>
              <p className="mt-2 text-[11px] tracking-[0.14em] text-white/70 uppercase">Mikrowłókna &amp; Druk FDM</p>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <h3 className="font-display text-ink text-[19px] leading-tight font-medium tracking-[-0.02em]">
                Skrzydła i Wypustki 3D
              </h3>
              <p className="text-ink-muted mt-2 text-[15px] leading-relaxed">
                Precyzyjnie wydrukowana obudowa idealnie trzyma zanętę podczas silnego rzutu i&nbsp;uderzenia
                o&nbsp;wodę.
              </p>
            </div>
            <div>
              <h3 className="font-display text-ink text-[19px] leading-tight font-medium tracking-[-0.02em]">
                Aerodynamiczny Kształt
              </h3>
              <p className="text-ink-muted mt-2 text-[15px] leading-relaxed">
                Zaprojektowany w oprogramowaniu CAD dla maksymalnie dalekich i celnych rzutów, niezależnie od wiatru.
              </p>
            </div>
            <div className="hidden max-[980px]:block">
              <h3 className="font-display text-ink text-[19px] leading-tight font-medium tracking-[-0.02em]">
                Zbrojony Ekobeton
              </h3>
              <p className="text-ink-muted mt-2 text-[15px] leading-relaxed">
                Główny rdzeń obciążeniowy wykonany z&nbsp;nienasiąkliwego, tonącego materiału. Zero toksyn
                w&nbsp;wodzie, idealne dopasowanie do dna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
