"use client";

import * as React from "react";

import { ArrowRightIcon, CheckIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export function LandingSignup() {
  const t = useTranslations("signup");
  const [email, setEmail] = React.useState("");
  const [role, setRole] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !role) return;
    setSubmitted(true);
  }

  function handleReset() {
    setSubmitted(false);
    setEmail("");
    setRole("");
  }

  return (
    <section className="scroll-mt-20 py-24 pt-8 max-md:py-16" id="zapisy">
      <div className="mx-auto max-w-310 px-7 max-md:px-5">
        <div className="border-concrete grid grid-cols-2 items-center gap-14 rounded-[48px] border bg-white p-16 max-[900px]:grid-cols-1 max-[900px]:gap-9 max-md:rounded-[36px] max-md:p-7">
          <div>
            <div className="text-ink-muted text-[13px] font-medium tracking-widest uppercase">{t("eyebrow")}</div>
            <h2
              className="font-display mt-3.5 leading-[1.02] font-medium tracking-[-0.03em]"
              style={{ fontSize: "clamp(36px,4.6vw,64px)", fontVariationSettings: '"wdth" 92' }}
            >
              {t("title")}
              <br />
              <em className="text-moss font-normal italic">{t("titleAccent")}</em>
            </h2>
            <p
              className="text-ink-soft mt-5 max-w-[56ch] leading-relaxed"
              style={{ fontSize: "clamp(17px,1.4vw,20px)" }}
            >
              {t("body")}
            </p>
          </div>

          {submitted ? (
            <div className="bg-accent-soft flex flex-col items-start gap-3.5 rounded-3xl border border-[#C8D8C9] p-6">
              <div className="bg-accent grid h-11 w-11 place-items-center rounded-full text-white">
                <CheckIcon width={20} height={20} />
              </div>
              <h3 className="font-display text-moss text-[22px] leading-tight font-medium tracking-tight">
                {t("successTitle")}
              </h3>
              <p className="text-ink-soft text-base leading-relaxed">{t("successBody")}</p>
              <button className="btn-secondary-tw mt-1 px-[18px] py-2.5 text-sm" onClick={handleReset}>
                {t("successReset")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-[18px] flex flex-col gap-2">
                <label htmlFor="email" className="text-ink-muted text-[13px] font-medium">
                  {t("emailLabel")}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder={t("emailPlaceholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-concrete-dark bg-cement text-ink focus:border-accent focus:ring-accent/20 w-full rounded-[18px] border px-5 py-4 text-base transition-all focus:bg-white focus:ring-4 focus:outline-none"
                />
              </div>
              <div className="mb-4.5 flex flex-col gap-2">
                <label htmlFor="role" className="text-ink-muted text-[13px] font-medium">
                  {t("roleLabel")}
                </label>
                <select
                  id="role"
                  required
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="form-select-tw"
                >
                  <option value="" disabled>
                    {t("rolePlaceholder")}
                  </option>
                  <option value="hobbysta">{t("roleOption0")}</option>
                  <option value="zawodnik">{t("roleOption1")}</option>
                  <option value="sklep">{t("roleOption2")}</option>
                </select>
              </div>
              <button type="submit" className="btn-primary-tw mt-2 w-full justify-center">
                {t("submitButton")} <ArrowRightIcon width={16} height={16} />
              </button>
              <p className="text-ink-muted mt-3.5 text-[12.5px] leading-relaxed">{t("microcopy")}</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
