import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Lithos/);
});

test("has nav", async ({ page }) => {
  await page.goto("/");

  const nav = page.getByRole("navigation");
  await expect(nav.getByText("Lithos")).toBeVisible();
  await expect(nav.getByRole("link", { name: /Dołącz do testów/i })).toBeVisible();
});

test("has hero section", async ({ page }) => {
  await page.goto("/");

  const h1 = page.getByRole("heading", { level: 1 });
  await expect(h1).toBeVisible();
  await expect(h1).toContainText("Naturalnie na dnie");

  await expect(page.getByRole("link", { name: /Chcę przetestować/i }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: /Poznaj proces produkcji/i })).toBeVisible();
});

test("has mission section", async ({ page }) => {
  await page.goto("/");

  const section = page.locator("#misja");
  await expect(section.getByRole("heading", { level: 2 })).toContainText("ołowiu");
  await expect(section.getByText("Czysta woda")).toBeVisible();
  await expect(section.getByText("Nowa technologia")).toBeVisible();
  await expect(section.getByText("Lokalnie")).toBeVisible();
});

test("has process section", async ({ page }) => {
  await page.goto("/");

  const section = page.locator("#proces");
  await expect(section.getByRole("heading", { level: 2 })).toContainText("Lithos");
  await expect(section.getByText("01")).toBeVisible();
  await expect(section.getByText("02")).toBeVisible();
  await expect(section.getByText("03")).toBeVisible();
  await expect(section.getByText("04")).toBeVisible();
});

test("has features section", async ({ page }) => {
  await page.goto("/");

  const section = page.locator("#cechy");
  await expect(section.getByRole("heading", { level: 2 })).toContainText("znikać");
});

test("has signup form", async ({ page }) => {
  await page.goto("/");

  const section = page.locator("#zapisy");
  await expect(section.getByRole("heading", { level: 2 })).toContainText("serię");
  await expect(section.getByLabel(/adres e-mail/i)).toBeVisible();
  await expect(section.getByLabel(/kontakt z wędkarstwem/i)).toBeVisible();
  await expect(section.getByRole("button", { name: /informację o starcie/i })).toBeVisible();
});

test("signup form shows success message", async ({ page }) => {
  await page.goto("/");

  const section = page.locator("#zapisy");
  await section.getByLabel(/adres e-mail/i).fill("test@lithos.pl");
  await section.getByLabel(/kontakt z wędkarstwem/i).selectOption("hobbysta");
  await section.getByRole("button", { name: /informację o starcie/i }).click();

  await expect(section.getByText(/Dziękujemy za zainteresowanie/i)).toBeVisible();
});

test("has footer", async ({ page }) => {
  await page.goto("/");

  const footer = page.getByRole("contentinfo");
  await expect(footer.getByText("Lithos")).toBeVisible();
  await expect(footer.getByText(/Wędkarstwo w zgodzie z naturą/i)).toBeVisible();
});
