import { test, expect } from "@playwright/test";

test.only("Login-Logout", async ({ page }) => {
  await page.goto("https://fortnite.com/item-shop");
  await page.click("text=Sign in");
  await page.waitForTimeout(2000);
});
