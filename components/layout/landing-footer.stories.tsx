import * as React from "react";

import { NextIntlClientProvider } from "next-intl";
import { expect } from "storybook/test";

import preview from "~/.storybook/preview";

import { LandingFooter } from "./landing-footer";

const MESSAGES = {
  footer: {
    tagline: "Fishing in harmony with nature. Designed and produced in Poland.",
    rights: "All rights reserved.",
    footerAriaLabel: "Page footer"
  }
};

const meta = preview.meta({
  title: "Layout/Landing Footer",
  component: LandingFooter,
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale="en" messages={MESSAGES}>
        <Story />
      </NextIntlClientProvider>
    )
  ],
  parameters: {
    darkMode: { current: "light" }
  }
});

export const LandingFooterStory = meta.story({ name: "Landing Footer" });

LandingFooterStory.test("Renders all expected content", async ({ canvas, step }) => {
  await step("Logo link is visible", async () => {
    await expect(canvas.getByRole("link", { name: /lithos/i })).toBeVisible();
  });

  await step("Tagline is visible", async () => {
    await expect(canvas.getByText("Fishing in harmony with nature. Designed and produced in Poland.")).toBeVisible();
  });

  await step("Copyright contains current year and rights text", async () => {
    const year = String(new Date().getFullYear());
    await expect(canvas.getByText(new RegExp(`© ${year}`))).toBeVisible();
    await expect(canvas.getByText(/all rights reserved/i)).toBeVisible();
  });
});
