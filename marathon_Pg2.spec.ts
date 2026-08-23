import { expect, test } from '@playwright/test';
// locate the elements correctly while testing some changes had made by vidya 
test('launch browser', async ({ page }) => {
  const homepage=await page.goto('https://www.decathlon.in')
  //await expect(page.locator('homepage')).toBeVisible();
 // await expect(page).toHaveTitle(/Decathlon/i)
  await page.locator('[data-test-id="search-input-desktop:container"]').click();
  await page.locator('[data-test-id="search-input-desktop:container"]').fill('shoes');
  await page.getByRole('button', { name: 'Shoes', exact: true }).click();
const searchBox = page.getByPlaceholder(/search/i).first();
  await searchBox.click();
  await searchBox.fill('Shoes');
 await searchBox.press('Enter');
// 6. Verify product listing page
  await page.waitForLoadState('domcontentloaded');
  //await page.locator('[data-test-id="product-card:product-card:brand"]').nth(0).click();
  
  await page.locator('[data-test-id="title:Sport"]').click()

await page.locator('[data-test-id="filter-checkbox-sport_pratice_en-Hiking & Trekking"]').click()
await page.locator('[data-test-id="title:Size"]').click();
await page.locator('[data-test-id="filter-checkbox-indian_size-1"]').click()
await page.locator('[data-test-id="title:Discount"]').click()
await page.locator('[data-test-id="filter-checkbox-discountRoundOff-10% and below"]').click()
//await page.locator('[data-test-id="product-card:product-card:title"]').click()
await page.getByRole('link', { name: 'Quechua Kids’ warm, waterproof snow boots, sizes UK JR 7-5, SH100 rip-tab Black' }).click();

await page.getByLabel("Select size 13C").click()
await page.locator('[data-test-id="pdp:add-to-cart-button"]').click();
await page.locator('[data-test-id="button"]').click()
await page.waitForTimeout(7000)
});