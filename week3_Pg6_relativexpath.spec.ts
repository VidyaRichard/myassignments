import { test } from '@playwright/test';

test('launch browser', async ({ page }) => {
  await page.goto("http://leaftaps.com/opentaps/control/main")
  //using relative path
  await page.locator('//input[@class="inputLogin"]').nth(0).fill("democsr2");
  await page.locator('//input[@class="inputLogin"]').nth(1).fill("crmsfa");
  await page.locator('//input[@class="decorativeSubmit"]').click();
  await page.locator('//a[contains(text(),"CRM/SFA")]').click();

});