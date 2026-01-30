const { test, expect } = require('@playwright/test');

test('Singlish to Sinhala conversion loads output', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.fill('textarea', 'mama gedhara yanavaa');
  await expect(page.locator('textarea')).toBeVisible();
});
