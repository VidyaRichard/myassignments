import { test } from '@playwright/test';
// locate the elements correctly while testing some changes had made by vidya 
//this is creating lead 
test('launch browser', async ({ page }) => {
  await page.goto('https://login.salesforce.com');
await page.locator(('[name="username"]')).fill('dilipkumar.rajendran@testleaf.com');
await page.locator('input[id="Login"]').click()
await page.locator('#password').fill('TestLeaf@2025');
await page.locator('input[id="Login"]').click()
await page.waitForLoadState('domcontentloaded')

await page.locator('//div[@class="slds-icon-waffle"]').click()
await page.locator('[aria-label="View All Applications"]').click();
await page.waitForLoadState('domcontentloaded')
//await page.getByText('Sales', { exact: true }).click();
await page.locator('[data-name="Sales"]').nth(0).click()
await page.waitForTimeout(1000)
const link1=page.locator('a[href="/lightning/o/Lead/home"]')
link1.click()
await page.locator('//a[@class="forceActionLink"]').nth(0).click();
//await  page.locator('[aria-label="Salutation"]').click()


await page.getByPlaceholder('First Name').fill("vidya");
await page.locator('//input[@class="slds-input"]').nth(4).fill("abc company")
await page.locator('[name="SaveEdit"]').click()
await page.waitForTimeout(1000)
});
