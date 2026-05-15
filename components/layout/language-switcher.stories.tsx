import * as React from "react";

import { NextIntlClientProvider } from "next-intl";
import { expect } from "storybook/test";

import preview from "~/.storybook/preview";

import { LanguageSwitcher } from "./language-switcher";

const meta = preview.meta({
  title: "Layout/Language Switcher",
  component: LanguageSwitcher,
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale="en" messages={{}}>
        <Story />
      </NextIntlClientProvider>
    )
  ],
  parameters: {
    darkMode: { current: "light" }
  }
});

export const PolishActive = meta.story({
  args: { locale: "pl" }
});

PolishActive.test("Renders both language links", async ({ canvas }) => {
  await expect(canvas.getByRole("link", { name: "PL" })).toBeVisible();
  await expect(canvas.getByRole("link", { name: "EN" })).toBeVisible();
});

PolishActive.test("PL link is styled as active, EN link is styled as muted", async ({ canvas }) => {
  const plLink = canvas.getByRole("link", { name: "PL" });
  const enLink = canvas.getByRole("link", { name: "EN" });
  await expect(plLink).toHaveClass("text-ink");
  await expect(enLink).toHaveClass("text-ink-muted");
});

export const EnglishActive = meta.story({
  args: { locale: "en" }
});

EnglishActive.test("Renders both language links", async ({ canvas }) => {
  await expect(canvas.getByRole("link", { name: "PL" })).toBeVisible();
  await expect(canvas.getByRole("link", { name: "EN" })).toBeVisible();
});

EnglishActive.test("EN link is styled as active, PL link is styled as muted", async ({ canvas }) => {
  const plLink = canvas.getByRole("link", { name: "PL" });
  const enLink = canvas.getByRole("link", { name: "EN" });
  await expect(enLink).toHaveClass("text-ink");
  await expect(plLink).toHaveClass("text-ink-muted");
});
