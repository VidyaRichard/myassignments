import { test } from '@playwright/test';
// locate the elements correctly while testing some changes had made by vidya 
test('launch browser', async ({ page }) => {
  await page.goto('https://www.pvrcinemas.com')
  //await page.locator('//h6[@class="cities-name pointer"]').click();
  await page.locator('//h6[@class="cities-name pointer" and text()="Bengaluru"]').click();
  
  await page.waitForLoadState('domcontentloaded');
  await page.getByText('Cinema', { exact: true }).click();
   // await page.getByRole('button', { name: 'Select Cinema' }).click();
  await page.locator('span').filter({ hasText: 'Select Cinema' }).click();
  await page.getByText('INOX Lido Mall, Ulsoor').click();
await page.locator('span').filter({ hasText: 'Select Date' }).click();


  await page.locator('span').filter({ hasText: 'Select Date' }).click();
  await page.getByText('Today, 21 Aug').click();
  await page.locator('span').filter({ hasText: 'Select Movie' }).click();
  await page.locator('span').filter({ hasText: 'Select Movie' }).click();
  await page.getByText('PAW PATROL : THE DINO MOVIE').click();
  await page.getByRole('button', { name: 'Select Timing' }).click();
  await page.locator('span').filter({ hasText: 'Select Timing' }).click();
  await page.getByText(':30 PM English').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByText('13').first().click();
  await page.getByRole('button', { name: 'Proceed' }).click();


  

 
 
    
  
});