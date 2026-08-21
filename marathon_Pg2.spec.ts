import { expect, test } from '@playwright/test';
// locate the elements correctly while testing some changes had made by vidya 
test('launch browser', async ({ page }) => {
  const homepage=await page.goto('https://www.decathlon.in')
  await expect(page.locator('homepage')).toBeVisible();
  
});