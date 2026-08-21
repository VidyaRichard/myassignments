import { test } from '@playwright/test';
// locate the elements correctly while testing some changes had made by vidya 
test('launch browser', async ({ page }) => {
  await page.goto('https://login.salesforce.com');
await page.locator(('[name="username"]')).fill('aaa@gmail.com');
await page.locator('input[id="Login"]').click()
await page.locator('#password').fill('1235');
await page.locator('input[id="Login"]').click()
await page.waitForTimeout(2000);