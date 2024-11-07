import { test, expect } from "@playwright/test";

test("First test", async ({ page }) => {
  await page.goto("https://example.com/");
  const pageTitle = await page.locator("h1");
  const titleText = await page.locator("h1").textContent();
  console.log(titleText);
  await expect(pageTitle).toContainText("Example Domain");
});

test("Second test", async ({ page }) => {
  await page.goto("https://www.fortnite.com/item-shop?lang=en-US");
  //await page.waitForTimeout(3000);
  const pageTitle = await page.locator(
    "#item-shop>#main>div>div>div:nth-child(2)>div>div>div>h1"
  );
  const titleText = await page
    .locator("#item-shop>#main>div>div>div:nth-child(2)>div>div>div>h1")
    .textContent();
  console.log(titleText);
  await expect(pageTitle).toContainText("Item Shop");
});
