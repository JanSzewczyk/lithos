import * as React from "react";

import { NextIntlClientProvider } from "next-intl";
import { expect, waitFor } from "storybook/test";

import preview from "~/.storybook/preview";

import { LandingSignup } from "./landing-signup";

const MESSAGES = {
  signup: {
    eyebrow: "Join the tests",
    title: "We are creating\nthe first",
    titleAccent: "series.",
    body: "The Lithos project is in the active prototype testing phase. Leave us your email and we'll let you know when we launch. You can also take part in beta testing.",
    emailLabel: "Your email address",
    emailPlaceholder: "e.g. john@fishing.com",
    roleLabel: "What is your relationship with fishing?",
    rolePlaceholder: "Choose one option…",
    roleOption0: "Hobbyist",
    roleOption1: "Competitor",
    roleOption2: "I run a fishing shop",
    submitButton: "I want to receive launch info",
    successTitle: "Thank you for your interest!",
    successBody: "Your address is on our list. We will be in touch as soon as the water tests begin.",
    successReset: "Register another person",
    microcopy: "Your data will only be used to inform you about the Lithos project. No spam."
  }
};

const meta = preview.meta({
  title: "Landing/Landing Signup",
  component: LandingSignup,
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

export const SignupForm = meta.story({});

SignupForm.test("Renders all expected content", async ({ canvas, step }) => {
  await step("Eyebrow and heading are visible", async () => {
    await expect(canvas.getByText("Join the tests")).toBeVisible();
    await expect(canvas.getByRole("heading", { level: 2 })).toBeVisible();
  });

  await step("Form fields are visible", async () => {
    await expect(canvas.getByLabelText(/your email address/i)).toBeVisible();
    await expect(canvas.getByLabelText(/relationship with fishing/i)).toBeVisible();
  });

  await step("Submit button and microcopy are visible", async () => {
    await expect(canvas.getByRole("button", { name: /i want to receive launch info/i })).toBeVisible();
    await expect(canvas.getByText(/no spam/i)).toBeVisible();
  });
});

SignupForm.test("Email input and role select start empty", async ({ canvas }) => {
  await expect(canvas.getByLabelText(/your email address/i)).toHaveValue("");
  await expect(canvas.getByLabelText(/relationship with fishing/i)).toHaveValue("");
});

SignupForm.test("Filling the form and submitting shows the success state", async ({ canvas, userEvent, step }) => {
  await step("Fill in email and select a role", async () => {
    await userEvent.type(canvas.getByLabelText(/your email address/i), "jan@fishing.com");
    await userEvent.selectOptions(canvas.getByLabelText(/relationship with fishing/i), "hobbysta");
  });

  await step("Submit the form", async () => {
    await userEvent.click(canvas.getByRole("button", { name: /i want to receive launch info/i }));
  });

  await step("Success panel is visible", async () => {
    await waitFor(async () => {
      await expect(canvas.getByRole("heading", { name: /thank you for your interest/i })).toBeVisible();
    });
    await expect(canvas.getByText(/your address is on our list/i)).toBeVisible();
  });
});

SignupForm.test("Clicking reset after success returns to the form", async ({ canvas, userEvent }) => {
  await userEvent.type(canvas.getByLabelText(/your email address/i), "jan@fishing.com");
  await userEvent.selectOptions(canvas.getByLabelText(/relationship with fishing/i), "hobbysta");
  await userEvent.click(canvas.getByRole("button", { name: /i want to receive launch info/i }));

  await waitFor(async () => {
    await expect(canvas.getByRole("button", { name: /register another person/i })).toBeVisible();
  });

  await userEvent.click(canvas.getByRole("button", { name: /register another person/i }));

  await expect(canvas.getByLabelText(/your email address/i)).toBeVisible();
  await expect(canvas.getByLabelText(/your email address/i)).toHaveValue("");
});

export const SuccessState = meta.story({
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(canvas.getByLabelText(/your email address/i), "jan@fishing.com");
    await userEvent.selectOptions(canvas.getByLabelText(/relationship with fishing/i), "hobbysta");
    await userEvent.click(canvas.getByRole("button", { name: /i want to receive launch info/i }));
  }
});
