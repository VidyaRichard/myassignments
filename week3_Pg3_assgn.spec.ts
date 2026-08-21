import { test } from '@playwright/test';
//Dropdown sample program 
test('launch browser', async ({ page }) => {
  await page.goto("http://leaftaps.com/opentaps/control/main")
  await page.locator('input[name="USERNAME"]').fill("democsr2");
  await page.locator('input[name="PASSWORD"]').fill("crmsfa");
  await page.locator('input[type=submit]').click();
  await page.locator('a[href*="crmsfa"]').nth(0).click();
  await page.locator('a[href*="lead"]').nth(0).click();
  await page.locator('a[href*="create"]').nth(0).click();
  await page.locator('input[name="companyName"]').fill("VR")
  await page.locator('input[name*="firstName"]').nth(2).fill('vidya');
  await page.locator('input[name="lastName"]').nth(2).fill("richard")
  await page.locator('input[name="personalTitle"]').fill("sa")
  await page.locator('input[name="generalProfTitle"]').fill("software")
  await page.locator('input[name="annualRevenue"]').fill("20000")
  await page.locator('input[name="departmentName"]').fill("IT")
  await page.locator('select[name="dataSourceId"]').selectOption({ label: 'Cold Call' });
  const dropdown=await page.locator('select[name="dataSourceId]"]')
  const options =dropdown.locator('option')
  const count =options.count();
  for(let i=0;i<await count;i++)
  {
    const option=options.nth(i)
    console.log(option);
    
  }


});