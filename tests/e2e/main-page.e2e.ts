import { expect, test } from "@playwright/test";

test.describe("Main page (Polish locale)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("renders page structure", async ({ page }) => {
    await expect(page).toHaveTitle(/Lithos/);

    const nav = page.getByRole("navigation");
    await expect(nav.getByText("Lithos")).toBeVisible();
    await expect(nav.getByRole("link", { name: /Dołącz do testów/i })).toBeVisible();

    const footer = page.getByRole("contentinfo");
    await expect(footer.getByText("Lithos")).toBeVisible();
    await expect(footer.getByText(/Wędkarstwo w zgodzie z naturą/i)).toBeVisible();
  });

  test("renders landing sections", async ({ page }) => {
    const h1 = page.getByRole("heading", { level: 1 });
    await expect(h1).toContainText("Naturalnie na dnie");

    await expect(page.getByRole("link", { name: /Chcę to przetestować/i }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /Poznaj proces produkcji/i })).toBeVisible();

    const mission = page.locator("#misja");
    await expect(mission.getByRole("heading", { level: 2 })).toContainText("ołowiu");
    await expect(mission.getByText("Czysta woda")).toBeVisible();
    await expect(mission.getByText("Nowa technologia")).toBeVisible();
    await expect(mission.getByText("Lokalnie")).toBeVisible();

    const process = page.locator("#proces");
    await expect(process.getByRole("heading", { level: 2 })).toContainText("Lithos");
    await expect(process.getByText("01")).toBeVisible();
    await expect(process.getByText("02")).toBeVisible();
    await expect(process.getByText("03")).toBeVisible();
    await expect(process.getByText("04")).toBeVisible();

    const features = page.locator("#cechy");
    await expect(features.getByRole("heading", { level: 2 })).toContainText("znikać");
  });

  test("signup form completes successfully", async ({ page }) => {
    const section = page.locator("#zapisy");

    await expect(section.getByRole("heading", { level: 2 })).toContainText("serię");
    await expect(section.getByLabel(/adres e-mail/i)).toBeVisible();
    await expect(section.getByLabel(/związek z wędkarstwem/i)).toBeVisible();
    await expect(section.getByRole("button", { name: /informację o starcie/i })).toBeVisible();

    await section.getByLabel(/adres e-mail/i).fill("test@lithos.pl");
    await section.getByLabel(/związek z wędkarstwem/i).selectOption("hobbysta");
    await section.getByRole("button", { name: /informację o starcie/i }).click();

    await expect(section.getByText(/Dziękujemy za zainteresowanie/i)).toBeVisible();
  });
});
