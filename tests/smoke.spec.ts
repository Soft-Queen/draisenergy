import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("primary journeys", () => {
  test("homepage renders hero and primary CTA", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /Engineering the infrastructure that drives progress/i,
      }),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Request a quote" }).first()).toBeVisible();
  });

  test("desktop and mobile navigation reach industries", async ({ page }, testInfo) => {
    await page.goto("/");

    if (testInfo.project.name.includes("mobile")) {
      await page.getByRole("button", { name: "Open menu" }).click();
      await page.getByRole("navigation", { name: "Mobile primary" }).getByRole("link", {
        name: "Oil & Gas",
      }).click();
    } else {
      await page.getByRole("navigation", { name: "Primary" }).getByRole("button", {
        name: "Industries",
      }).click();
      await page.getByRole("link", { name: "Oil & Gas" }).click();
    }

    await expect(page).toHaveURL(/\/industries\/oil-and-gas/);
    await expect(page.getByRole("heading", { level: 1, name: "Oil & Gas" })).toBeVisible();
  });

  test("industry to capability to RFQ journey", async ({ page }) => {
    await page.goto("/industries/power-and-renewables");
    await page.getByRole("link", { name: "Procurement & Supply" }).first().click();
    await expect(page).toHaveURL(/\/capabilities\/procurement-and-supply/);
    await page.getByRole("link", { name: "Request a quote" }).first().click();
    await expect(page).toHaveURL(/\/request-a-quote/);
    await expect(page.locator("#industryOrService")).toHaveValue(/Procurement|Power/i);
  });

  test("product catalogue filter and RFQ prefill", async ({ page }) => {
    await page.goto("/products");
    await page.getByRole("link", { name: "Power systems" }).click();
    await expect(page).toHaveURL(/category=power-systems/);
    await page.getByRole("link", { name: "UPS & backup power" }).click();
    await page.getByRole("link", { name: "Request a quote" }).click();
    await expect(page.locator("#industryOrService")).toHaveValue("UPS & backup power");
  });

  test("contact validation errors", async ({ page }) => {
    await page.goto("/contact");
    await page.getByRole("button", { name: "Send message" }).click();
    await expect(page.getByRole("alert").first()).toBeVisible();
  });

  test("RFQ success in mock mode", async ({ page }) => {
    await page.goto("/request-a-quote");
    await page.locator("#name").fill("Ada Okoro");
    await page.locator("#email").fill("ada@example.com");
    await page.locator("#organisation").fill("Example Engineering Ltd");
    await page.locator("#industryOrService").fill("Cable glands");
    await page.locator("#requirements").fill("Need industrial cable glands for a plant package.");
    await page.getByRole("button", { name: "Submit quotation request" }).click();
    await expect(page.getByText(/Quotation request accepted/i)).toBeVisible();
  });

  test("axe scan on homepage and contact", async ({ page }) => {
    for (const path of ["/", "/contact"]) {
      await page.goto(path);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa"])
        .analyze();
      expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
    }
  });
});
